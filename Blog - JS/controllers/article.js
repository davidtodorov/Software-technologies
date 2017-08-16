/**
 * Created by David on 07-Aug-17.
 */
const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create')
    },

    createPost: (req, res) => {
        let articleArgs = req.body;
        let errMsg = '';
        if(!req.isAuthenticated()) {
             errMsg = 'Please log in';
        } else if(!articleArgs.title){
            errMsg = 'Please write title';
        } else if (!articleArgs.content ){
            errMsg = 'Please write content'
        }

        if(errMsg){
            res.render('article/create', {error:errMsg});
            return;
        }

        articleArgs.author = req.user.id;

        Article.create(articleArgs).then(article => {
            req.user.articles.push(article);
            req.user.save (error => {
                if(error) {
                    res.redirect('/', {error: error.message});
                }
                else {
                    res.redirect('/');
                }
            });

        });
    }
};