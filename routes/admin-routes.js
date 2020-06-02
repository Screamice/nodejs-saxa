const controller = require('../controllers/admin-crl');

exports.newAuthor = (req, res) => {
    let data = {
        name: req.body.name,
        lastname: req.body.lastname,
        biography: req.body.biography,
        birth: req.body.birth,
        nationality: req.body.nationality
    };
    

    if(!data.name || !data.lastname || !data.biography || !data.birth || !data.nationality){
        return(
            res.status(400)
               .send({message: 'la informacion no es correcta'})
        );
    }

    controller.insertAuthor(data)
    .then(() => {
        res.status(200);
        res.send({message: 'se a registrado el nuevo autor'});
    })
    .catch(error => {
        console.error(error);
        res.status(400);
        res.send({message: 'hasta afuera no se pudo'});
    });
};

exports.showAllAuthors = (req, res) => {
    controller.getAllAuthors()
    .then(authors => {
        res.status(200);
        res.send(authors);
    })
    .catch(error => {
        res.status(400);
        res.send({message: 'error en la busqueda'});
        console.error(error);
    })
};

exports.detailAuthor = (req, res) => {
    let idAuthor = req.params.id;

    controller.describeAuthor(idAuthor)
    .then(author => {
        res.status(200);
        res.send(author);
    })
    .catch(error => {
        res.status(400);
        res.send({message: 'error en la busqueda'});
        console.error(error);
    });
};

exports.updateAuthor = (req, res) => {
    let idAuthor = req.params.id;

    let data = {
        name: req.body.name,
        lastname: req.body.lastname,
        biography: req.body.biography,
        birth: req.body.birth,
        nationality: req.body.nationality
    };

    controller.updateAuthor(idAuthor, data)
    .then(() => {
        res.status(200);
        res.send({message: 'se han modificado los datos del autor'});
    })
    .catch(error => {
        res.status(400);
        res.send({message: 'error en la busqueda'});
        console.error(error);
    });
};