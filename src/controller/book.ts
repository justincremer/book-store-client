import axios, { AxiosRequestConfig } from 'axios';

interface Book {
	Title: string;
	Author: string;
	Genre: string;
}

const list = async () => {
	const config: AxiosRequestConfig = {
		method: 'get',
		url: 'http://localhost:8080/book',
		responseType: 'json',
	};

	const response = await axios(config);
	return response.data;
};

const get = async (id: number) => {
	const config: AxiosRequestConfig = {
		method: 'get',
		url: `http://localhost:8080/book/id=${id}`,
		responseType: 'json',
	};

	const response = await axios(config);
	return response.data;
};

const create = async (book: Book) => {
	const data = {
		'title': book.Title,
		'author': book.Author,
		'genre': book.Genre,
	};
	const config: AxiosRequestConfig = {
		method: 'post',
		url: 'http://localhost:8080/book',
		headers: { 'Content-Type': 'application/json' },
		responseType: 'json',
		data: data,
	};

	const response = await axios(config);
	return response.data;
};

const update = async (id: number, book: Book) => {
	const data = {
		title: book.Title,
		author: book.Author,
		genre: book.Genre,
	};
	const config: AxiosRequestConfig = {
		method: 'patch',
		url: `http://localhost:8080/book/id=${id}`,
		headers: { 'Content-Type': 'application/json' },
		responseType: 'json',
		data: data,
	};

	const response = await axios(config);
	return response.data;
};

const remove = async (id: number) => {
	const config: AxiosRequestConfig = {
		method: 'delete',
		url: `http://localhost:8080/book/id=${id}`,
		responseType: 'json',
	};

	const response = await axios(config);
	return response.data;
};

export { Book, list, get, create, update, remove };
