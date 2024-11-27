const express = require('express');
const router = express.Router();
const PagamentoController = require('../controller/PagamentoController');

/**
 * @swagger
 * /pagamento:
 *   get:
 *     summary: List all Pagamento records
 *     tags: [Pagamento]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of Pagamento records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pagamento'
 */
router.get('/pagamento', PagamentoController.ListPagamento);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat:
 *   schemas:
 *     Pagamento:
 *       type: object
 *       required:
 *         - cod_pagamento
 *         - data_pagamento
 *         - hora_pagamento
 *         - valor
 *       properties:
 *         cod_pagamento:
 *           type: integer
 *           description: Payment identification code
 *         data_pagamento:
 *           type: integer
 *           description: Date of Payment
 *         hora_pagamento:
 *           type: integer
 *           description: time of Payment
 *         valor:
 *           type: integer
 *           description: Payment Amount
 *       example:
 *         cod_pagamento: 1
 *         data_pagamento: 2024-12-13
 *         hora_pagamento: 13:00:00
 *         valor: 10
 */

/**
 * @swagger
 * tags:
 *   name: Pagamento
 *   description: API for managing Pagamento
 */

/**
 * @swagger
 * /pagamento:
 *   post:
 *     summary: Create a new Pagamento record
 *     tags: [Pagamento]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       201:
 *         description: Successfully created a new Pagamento record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pagamento'
 *       500:
 *         description: Server error
 */
router.post('/pagamento', PagamentoController.CreatePagamento);

/**
 * @swagger
 * /pagamento/{id}:
 *   put:
 *     summary: Update an existing Pagamento record
 *     tags: [Pagamento]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Pagamento record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       200:
 *         description: Successfully updated the AlunoCurso record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pagamento'
 *       404:
 *         description: AlunoCurso record not found
 *       500:
 *         description: Server error
 */
router.put('/pagamento/:id', PagamentoController.updatePagamento);

/**
 * @swagger
 * /pagamento/{id}:
 *   delete:
 *     summary: Delete a Payment
 *     tags: [Pagamento]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Pagamento to deleted
 *     responses:
 *       204:
 *         description: The Pagamento was successfully deleted
 *       404:
 *         description: Pagamento delete not found
 *       500:
 *         description: Some server error
 */
router.delete('/pagamento/:id', PagamentoController.DeletePagamento);

module.exports = router;