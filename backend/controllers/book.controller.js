const ctrl = require('./actions/book.actions');

exports.get_books = (req, res) => {
    ctrl.select_all()
    .then(data => {
        res.status(200);
        res.json(data);
    })
    .catch(error => {
        res.status(500);
        res.json({action: 'failed', message: error.message});
    });
};

exports.search_by = (req, res) => {
    let params = {
        title: req.query.title || null,
        category: req.query.category || null,
        editorial: req.query.editorial || null,
        lang: req.query.lang || null
    };
};


exports.get_by_isbn = (req, res) => {
    if(req.params.isbn){
        ctrl.select_one(req.params.isbn)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct1'});
    }
};

exports.get_by_title = (req, res) => {
    if(req.query.title){
        ctrl.select_by_title(req.query.title)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct2'});
    }
};

exports.get_by_category = (req, res) => {
    if(req.query.category){
        ctrl.select_by_category(req.query.category)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct3'});
    }
};

exports.get_by_editorial = (req, res) => {
    console.log(req.query.editorial);

    if(req.query.editorial){
        ctrl.select_by_editorial(req.query.editorial)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct4'});
    }
};

exports.get_by_lang = (req, res) => {
    if(req.query.lang){
        ctrl.select_by_lang(req.query.lang)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct5'});
    }
};