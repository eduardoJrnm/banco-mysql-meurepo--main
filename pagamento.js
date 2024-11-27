
const express = require('express');
const paypal = require('paypal-rest-sdk');
require('dotenv').config();

const app = express();

paypal.configure({
    mode: process.env.PAYPAL_MODE,
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_SECRET
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Rota para criar o pagamento
app.post('/create-payment', (req, res) => {
    console.log('Corpo da requisição:', req.body);
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: 'Valor inválido' });
    }

    const create_payment = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        transactions: [
            {
                amount: {
                    currency: 'BRL',
                    total: amount.toString(),
                },
                description: 'Pagamento do produto',
            },
        ],
        redirect_urls: {
            return_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        },
    };

    paypal.payment.create(create_payment, (error, payment) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar pagamento', details: error });
        }

        const approvalUrl = payment.links.find((link) => link.rel === 'approval_url');
        if (!approvalUrl) {
            return res.status(500).json({ error: 'URL de aprovação não encontrada.' });
        }
        res.json({ approval_url: approvalUrl.href });
    });
});

// Rota para sucesso do pagamento
app.get('/success', (req, res) => {
    const { paymentId, PayerID } = req.query; 

    if (!paymentId || !PayerID) {
        return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const execute_payment = {
        payer_id: PayerID,
    };

    paypal.payment.execute(paymentId, execute_payment, (error, payment) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao processar pagamento', details: error });
        }
        res.json({ message: 'Pagamento concluído com sucesso!', payment });
    });
});

// Rota para cancelamento
app.get('/cancel', (req, res) => {
    res.send('Pagamento cancelado.');
});
