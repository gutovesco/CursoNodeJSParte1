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

       /* db.all('SELECT * FROM livros', (erro, resultados) => {
        res.marko(
            require('../views/livros/lista/lista.marko'),
           {
               livros: resultados
           }
        )
    } */
})
}
