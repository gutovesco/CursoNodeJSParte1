const db = require('../../config/database')
const LivroDao = require('../infra/livro-dao')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.marko(
            require('../views/livros/lista/lista.marko')
        )
    })

    app.get('/livros', (req, res) => {

        const livroDao = new LivroDao(db)
        livroDao.lista()
            .then(livros => res.marko(
                require('../views/livros/lista/lista.marko'),
               {
                   livros: livros
               }
            )) 
            .catch(erro => console.log(erro));

}),

app.get('/livros/form', (req, res) => {
    res.marko(require('../views/livros/form/form.marko'))
   }),

   app.post('/livros', (req, res) => {
    console.log(req.body);
    const livroDao = new LivroDao(db)
    livroDao.adiciona(req.body)
        .then(res.redirect('/livros')) 
        .catch(erro => console.log(erro));

   })
}
