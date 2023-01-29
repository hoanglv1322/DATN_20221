const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
const verifyToken = require('../util/verifyToken')

/* 
@Router POST api/user/update
@des update user
@access Public
*/
router.post('/update', verifyToken, userController.updateUser)

/* 
@Router GET api/user/
@des get user
@access user
*/
router.get('/', verifyToken, userController.getUser)

/* 
@Router GET api/user/getall
@des get all user
@access admin
*/
router.get('/getall', verifyToken, userController.getAllUsers)

/* 
@Router DELETE api/user/delete
@des delete users
@access admin
*/
router.delete('/delete/:id', verifyToken, userController.deleteUser)

/* 
@Router POST api/user/updateTableFavorite
@des update table fovorite users
@access user
*/
router.post(
	'/updateTableFavorite/:tableId/:isFavourite',
	verifyToken,
	userController.updatedTableFavorite
)

/* 
@Router POST api/user/updateTableRecently
@des update table fovorite users
@access user
*/
router.post(
	'/updateTableRecently/:tableId/:isRecently',
	verifyToken,
	userController.updateTableRecently
)

/* 
@Router POST api/user/updateTableInvited
@des update table fovorite users
@access user
*/
router.post(
	'/updateTableInvited/:tableId/:isInvited',
	verifyToken,
	userController.updateInvitedTable
)

module.exports = router
