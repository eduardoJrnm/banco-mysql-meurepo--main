const express = require('express');
const router = express.Router();
const BancoController = require('../controller/BancoController');

/**
 * @swagger
 * /banco:
 *   get:
 *     summary: List all Banco records
 *     tags: [Banco]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of Banco records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Banco'
 */
router.get('/banco', BancoController.ListBanco);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Banco:
 *       type: object
 *       required:
 *         - cod_banco
 *         - desc_banco
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the record
 *         cod_banco:
 *           type: integer
 *           description: Bank identification code
 *         desc_banco:
 *           type: string
 *           description: Bank description
 *       example:
 *         cod_banco: 123
 *         desc_banco: Banco do Brasil
 */

/**
 * @swagger
 * tags:
 *   name: Banco
 *   description: API for managing Banco
 */

/**
 * @swagger
 * /banco:
 *   post:
 *     summary: Create a new Banco record
 *     tags: [Banco]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Banco'
 *     responses:
 *       201:
 *         description: Successfully created a new Banco record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Banco'
 *       500:
 *         description: Server error
 */
router.post('/banco', BancoController.CreateBanco);

/**
 * @swagger
 * /banco/{id}:
 *   put:
 *     summary: Update an existing Banco record
 *     tags: [Banco]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Banco record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Banco'
 *     responses:
 *       200:
 *         description: Successfully updated the AlunoCurso record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Banco'
 *       404:
 *         description: AlunoCurso record not found
 *       500:
 *         description: Server error
 */
router.put('/banco/:id', BancoController.updateBanco);

/**
 * @swagger
 * /banco/{id}:
 *   delete:
 *     summary: Delete a Payment
 *     tags: [Banco]
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
router.delete('/banco/:id', BancoController.DeleteBanco);

module.exports = router;
