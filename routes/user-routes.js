const ctrl = require('../controllers/user-ctrl');

exports.createUser = (req, res) => {
    let data = {
        name: req.body.name,
        lastname: req.body.lastname,
        user: req.body.user,
        email: req.body.user,
        pwd: req.body.pwd
    };

    // Validate the recieved data.
    if(!data.name || !data.lastname || !data.user || !data.email || !data.pwd){
        return(
            res.status(400)
               .send({message: 'data-request is not valid'})
        );
    }

    ctrl.insertUser(data)
    .then(() => {
        res.status(200)
           .send({message: 'user has been registered'});
    })
    .catch(error => {
        res.status(500)
           .send({message: 'something went wrong in database'});

        console.error(error);
    });
};