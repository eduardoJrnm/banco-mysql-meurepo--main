const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authenticateToken = require('../middlewares/authmiddlewares');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome_social
 *         - CPF
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         nome_social:
 *           type: string
 *           description: The nome_social of the user
 *         CPF:
 *           type: integer
 *           description: This is your CPF
 *         email:
 *           type: string
 *           description: The login nome_social of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         active:
 *           type: boolean
 *           description: Indicates if the user is active
 *       example:
 *         nome_social: John Cezar
 *         CPF: 12345678910
 *         email: cezar.john
 *         password: secret@123
 *         active: true
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List all users (nome_social, CPF, email, and active status)
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome_social:
 *                     type: string
 *                   CPF:
 *                     type: integer
 *                   email:
 *                     type: string
 *                   celular:
 *                     type: integer
 *                   active:
 *                     type: boolean
 */
router.get('/users',authenticateToken, userController.listUsers);

/**
 * @swagger
 * /users/{id}/activate:
 *   put:
 *     summary: Activate a user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the user to activate
 *     responses:
 *       200:
 *         description: User activated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Some server error
 */
router.put('/users/:id/activate', authenticateToken, userController.activeUser);

/**
 * @swagger
 * /users/{id}/deactivate:
 *   put:
 *     summary: Deactivate a user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the user to activate
 *     responses:
 *       200:
 *         description: User (NOME_SOCIAL) deactivated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Some server error
 */
router.put('/users/:id/deactivate', authenticateToken, userController.deactivateUser);

module.exports = router;