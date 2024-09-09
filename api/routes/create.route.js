import express from 'express'
import {create, create1} from '../controllers/create.controll.js'
import {update} from '../controllers/create.controll.js'
import {delete1} from '../controllers/create.controll.js'

const router = express.Router()

router.post('/create', create)
router.get('/create', create1)
router.put("/update/:id", update)
router.delete("/delete/:id", delete1)

export default router;