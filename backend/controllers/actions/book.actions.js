const { Book } = require('../../models/book.model');

let reformat = [
    ['book_isbn', 'isbn'],
    ['book_title', 'title'],
    ['book_synopsis', 'synopsis'],
    ['cat_id', 'category'],
    ['edit_name', 'editorial'],
    ['lang_code', 'languaje'],
    ['book_imageurl', 'image'],
    ['book_pages', 'pages'],
    ['book_published', 'published']
];

exports.select_all = () => {
    return new Promise( async (resolve, reject) => {
        let query = await Book.findAll({attributes: reformat});

        (query)? resolve(query) : reject(new Error('cannot find any data in table'));
    })
};

exports.select_one = (isbn) => {
    return new Promise( async (resolve, reject) => {
        let query = await Book.findOne({
            attributes: reformat,
            where: {book_isbn: isbn}});

        (query)? resolve(query) : reject(new Error('cannot find any data in table'));
    });
};

exports.select_by_title = (title) => {
    return new Promise( async (resolve, reject) => {
        let query = await Book.findOne({
            attributes: reformat,
            where: {book_title: title}});

        (query)? resolve(query) : reject(new Error('cannot find any data in table'));
    });
};

exports.select_by_category = (cat) => {
    return new Promise( async (resolve, reject) => {
        let query = await Book.findAll({
            attributes: reformat,
            where: {cat_id: cat}});

        (query)? resolve(query) : reject(new Error('cannot find any data in table'));
    });
};

exports.select_by_editorial = (editorial) => {
    return new Promise( async (resolve, reject) => {
        let query = await Book.findAll({
            attributes: reformat,
            where: {edit_name: editorial}});

        (query)? resolve(query) : reject(new Error('cannot find any data in table'));
    });
};

exports.select_by_lang = (lang) => {
    return new Promise( async (resolve, reject) => {
        let query = await Book.findAll({
            attributes: reformat,
            where: {lang_code: lang}});

        (query)? resolve(query) : reject(new Error('cannot find any data in table'));
    });
};