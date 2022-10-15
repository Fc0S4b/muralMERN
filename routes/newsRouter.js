import express from 'express';

const router = express.Router();
import {
  createNew,
  deleteNew,
  updateNew,
  getAllNews,
  showStats,
  updateFavorite,
} from '../controllers/newsController.js';

router.route('/').post(createNew).get(getAllNews);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteNew).patch(updateNew);
router.route('/favorite/:id').patch(updateFavorite);

export default router;
