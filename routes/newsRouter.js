import express from 'express';

const router = express.Router();
import {
  createNew,
  deleteNew,
  updateNew,
  getAllNews,
  showStats,
} from '../controllers/newsController.js';

router.route('/').post(createNew).get(getAllNews);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteNew).patch(updateNew);

export default router;
