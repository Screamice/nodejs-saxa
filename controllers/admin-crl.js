const user = require('../models/author-model');

/* Insert a new user on database */
exports.insertAuthor = (data) => {
    return new Promise((resolve, reject) => {
        let modelUser = new user({
            name: data.name,
            lastname: data.lastname,
            biography: data.biography,
            birth: data.birth,
            nationality: data.nationality
        });

        modelUser.save((user, error) => {
            if(error){
                resolve(user);
            }
            else{
                reject(new Error('cannot insert user in database'));
            }
        });
    });
};

exports.getAllAuthors = () => {
    return new Promise((resolve, reject) => {
        user.find({}, "name lastname biography birth nationality")
        .then(authors => {
            resolve(authors);
        })
        .catch(error => {
            reject(error);
        });
    });
};

exports.describeAuthor = (id) => {
    return new Promise((resolve, reject) => {
        user.findById({_id: id}, "name lastname biography birth nationality")
        .then(author => {
            resolve(author);
        })
        .catch(error => {
            reject(error);
        });
    });
};

exports.updateAuthor = (id, data) => {
    return new Promise((resolve, reject) => {
        user.findByIdAndUpdate(
            {_id: id},
            {$set: {
                name: data.name,
                lastname: data.lastname,
                biography: data.biography,
                birth: data.birth,
                nationality: data.nationality
        }})
        .then(author => {
            resolve(author);
        })
        .catch(error => {
            reject(error);
        });
    });
    
};