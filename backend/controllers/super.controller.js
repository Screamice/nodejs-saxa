const ctrl = require('./actions/super.actions');

exports.new_student = (req, res) => {
    let student = {
        dni: req.body.dni,
        fname: req.body.name,
        lname: req.body.lastname,
        email: req.body.email,
        pwd: req.body.pwd,
        imageurl: null
    };

    if(student.dni && student.fname && student.lname && student.email && student.pwd){
        ctrl.insert(student)
        .then(() => {
            res.status(200);
            res.json({action: 'success', message: 'student has been registered'});
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct'});
    }
};

exports.new_category = (req, res) => {
    if(req.body.cat_name){
        ctrl.insert_cat(req.body.cat_name)
        .then(() => {
            res.status(200);
            res.json({action: 'success', message: 'category has been registered'});
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct'});
    }
};

exports.new_editorial = (req, res) => {
    let editorial = {
        name: req.body.name,
        website: req.body.website,
        logo: null
    }

    if(editorial.name && editorial.website){
        ctrl.insert_edit(editorial)
        .then(() => {
            res.status(200);
            res.json({action: 'success', message: 'editorial has been registered'});
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct'});
    }
};

exports.new_author = (req, res) => {
    let author = {
        fname: req.body.fname,
        lname: req.body.lname,
        bio: req.body.bio,
        from: req.body.from,
        image: null
    };

    if(author.fname && author.lname && author.bio && author.from){
        ctrl.insert_auth(author)
        .then(() => {
            res.status(200);
            res.json({action: 'success', message: 'author has been registered'});
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct'});
    }
};

exports.new_book = (req, res) => {
    let book = {
        isbn: req.body.isbn,
        title: req.body.title,
        synopsis: req.body.synopsis,
        category: req.body.category,
        editorial: req.body.editorial,
        lang: req.body.lang,
        image: null,
        pages: req.body.pages,
        published: req.body.published,
        author: req.body.author
    };

    console.log(book);

    if(book.isbn && book.title && book.synopsis && book.category && book.editorial && book.lang &&  book.pages && book.published){
        ctrl.insert_book(book)
        .then(() => {
            res.status(200);
            res.json({action: 'success', message: 'book has been registered'});
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct'});
    }
};