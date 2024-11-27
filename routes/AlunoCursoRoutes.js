const express = require('express');
const router = express.Router();
const AlunoCursoController = require('../controller/AlunoCursoController');

/**
 * @swagger
 * /alunocurso:
 *   get:
 *     summary: List all AlunoCurso records
 *     tags: [AlunoCurso]
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
 *                 $ref: '#/components/schemas/AlunoCurso'
 */
router.get('/alunocurso', AlunoCursoController.ListAlunoCurso);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     AlunoCurso:
 *       type: object
 *       required:
 *         - cod_aluno
 *         - cod_curso
 *         - progresso
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the record
 *         cod_aluno:
 *           type: integer
 *           description: Student identification code
 *         cod_curso:
 *           type: integer
 *           description: Course identification code
 *         progresso:
 *           type: integer
 *           description: Number of completed modules
 *       example:
 *         cod_aluno: 5
 *         cod_curso: 2
 *         progresso: 3
 */

/**
 * @swagger
 * tags:
 *   name: AlunoCurso
 *   description: API for managing AlunoCurso
 */

/**
 * @swagger
 * /alunocurso:
 *   post:
 *     summary: Create a new AlunoCurso record
 *     tags: [AlunoCurso]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoCurso'
 *     responses:
 *       201:
 *         description: Successfully created a new AlunoCurso record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AlunoCurso'
 *       500:
 *         description: Server error
 */
router.post('/alunocurso', AlunoCursoController.CreateAlunoCurso);

/**
 * @swagger
 * /alunocurso/{id}:
 *   put:
 *     summary: Update an existing AlunoCurso record
 *     tags: [AlunoCurso]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the AlunoCurso record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoCurso'
 *     responses:
 *       200:
 *         description: Successfully updated the AlunoCurso record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AlunoCurso'
 *       404:
 *         description: AlunoCurso record not found
 *       500:
 *         description: Server error
 */
router.put('/alunocurso/:id', AlunoCursoController.updateAlunCurso);

/**
 * @swagger
 * /alunocurso/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [AlunoCurso]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the product to delete
 *     responses:
 *       204:
 *         description: The AlunoCurso was successfully deleted
 *       404:
 *         description: AlunoCurso delete not found
 *       500:
 *         description: Some server error
 */
router.delete('/alunocurso/:id', AlunoCursoController.DeleteAlunCurso);

module.exports = router;
