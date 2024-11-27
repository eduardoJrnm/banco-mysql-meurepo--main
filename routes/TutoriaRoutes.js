const express = require('express');
const router = express.Router();
const TutoriaController = require('../controller/TutoriaController');

/**
 * @swagger
 * /tutoria:
 *   get:
 *     summary: List all Tutorias records
 *     tags: [Tutoria]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of AlunoCurso records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/tutoria'
 */
router.get('/tutoria', TutoriaController.ListTutoria);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Tutoria:
 *       type: object
 *       required:
 *         - cod_tutoria
 *         - dia_agendado
 *         - hora_agendada
 *         - aval_tutor
 *         - cod_curso
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the record
 *         cod_tutoria:
 *           type: integer
 *           description: Tutoria identification code
 *         dia_agendado:
 *           type: integer
 *           description: Date of appoiment
 *         hora_agendada:
 *           type: integer
 *           description: time of appoiment
 *         aval_tutor:
 *           type: integer
 *           description: Tutor review
 *         cod_curso:
 *           type: integer
 *           description: Student identification code
 *       example:
 *         cod_tutoria: 1
 *         dia_agendado: 2024-12-13
 *         hora_agendada: 13:00:00
 *         aval_tutor: 10
 *         cod_curso: 1
 */

/**
 * @swagger
 * tags:
 *   name: Tutoria
 *   description: API for managing Tutoria
 */

/**
 * @swagger
 * /tutoria:
 *   post:
 *     summary: Create a new Tutoria record
 *     tags: [Tutoria]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutoria'
 *     responses:
 *       201:
 *         description: Successfully created a new Tutoria record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutoria'
 *       500:
 *         description: Server error
 */
router.post('/tutoria', TutoriaController.CreateTutoria);

/**
 * @swagger
 * /tutoria/{id}:
 *   put:
 *     summary: Update an existing Tutoria record
 *     tags: [Tutoria]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Tutoria record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutoria'
 *     responses:
 *       200:
 *         description: Successfully updated the AlunoCurso record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutoria'
 *       404:
 *         description: AlunoCurso record not found
 *       500:
 *         description: Server error
 */
router.put('/alunocurso/:id', TutoriaController.updateTutoria);

/**
 * @swagger
 * /tutoria/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Tutoria]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Tutoria to delete
 *     responses:
 *       204:
 *         description: The Tutoria was successfully deleted
 *       404:
 *         description: Tutoria delete not found
 *       500:
 *         description: Some server error
 */
router.delete('/tutoria/:id', TutoriaController.DeleteTutoria);

module.exports = router;
