import express from 'express';
import { deleteTarea, getAllTareas, getTareaForId, postTarea, putTarea } from '../controllers/tareaControllers';


const router = express.Router();


router.get('/', getAllTareas);
router.get('/:id', getTareaForId);
router.post('/', postTarea);
router.put('/:id', putTarea);
router.delete('/:id', deleteTarea);




export default router;
