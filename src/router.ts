import { Router } from 'express';
import * as bookController from './controller/book';
import { Book } from './controller/book';

const router: Router = Router();

router
	.get('/book', (_, res) => {
		const response = bookController.list();
		res.send(response);
	})
	.get('/book/:id', (req, res) => {
		const id = parseInt(req.params['id']);
		const response = bookController.get(id);
		res.send(response);
	})
	.post('/book', (req, res) => {
		const book = <Book>{
			Title: req.params['title'],
			Author: req.params['author'],
			Genre: req.params['genre'],
		};

		const response = bookController.create(book);
		res.send(response);
	})
	.patch('/book/:id', (req, res) => {
		const id = parseInt(req.params['id']);
		const book = <Book>{
			Title: req.params['title'],
			Author: req.params['author'],
			Genre: req.params['genre'],
		};

		const response = bookController.update(id, book);
		res.send(response);
	})
	.delete('/book/:id', (req, res) => {
		const id = parseInt(req.params['id']);

		const response = bookController.remove(id);
		res.send(response);
	});

export default router;
