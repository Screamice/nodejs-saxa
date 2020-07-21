const ctrl = require('./actions/book.actions');

exports.search_by = (req, res) => {
    let params = {}
    if(req.query){
        for(let constrain in req.query){
            console.log(constrain);
        }
    }
};