const Film = require('../models/Film');

module.exports = {
	index: (req, res) => {
        Film.find().then(films => {
        	res.render('film/index', {'films':films})
		})
	},
	createGet: (req, res) => {
        res.render('film/create');
	},
	createPost: (req, res) => {
        let film = req.body;
		Film.create(film).then(film => {
			res.render('/');
		}).catch(err => {
			res.render('film/create', film);
		})
	},

	editGet: (req, res) => {
        // let id = req.params.id;
        // Film.findById(id).then(film => {
        	// if(taks)
        	//
		// }).catch(err => {
		// 	res.render('/');
		// });
	},
	editPost: (req, res) => {
        //TODO: Implement me ...
	},
	deleteGet: (req, res) => {
        //TODO: Implement me ...
	},
	deletePost: (req, res) => {
        //TODO: Implement me ...
	}
};