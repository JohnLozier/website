import express from "express";

const Server = async () => {
	const app = express();

	app.get("/", (req, res) => {
		res.send("Hello World!");
	});

	app.listen(3000);
};

Server();