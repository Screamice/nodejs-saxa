CREATE DATABASE authors_db;
USE authors_db;

CREATE TABLE languaje(
    lang_code VARCHAR(3) NOT NULL PRIMARY KEY,
    lang_name VARCHAR(300) NOT NULL
);

CREATE TABLE country(
    count_code VARCHAR(3) NOT NULL PRIMARY KEY,
    count_name VARCHAR(300) NOT NULL,
    lang_code VARCHAR(3) NOT NULL,
    FOREIGN KEY (lang_code) REFERENCES languaje(lang_code)
);

CREATE TABLE editorial(
    edit_name VARCHAR(100) NOT NULL PRIMARY KEY,
    edit_website VARCHAR(500),
    edit_logourl VARCHAR(500)
);

CREATE TABLE category(
    cat_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cat_name VARCHAR(100) NOT NULL
);

CREATE TABLE author(
    auth_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    auth_fname VARCHAR(300) NOT NULL,
    auth_lname VARCHAR(300) NOT NULL,
    auth_bio VARCHAR(2000) NOT NULL,
    count_code VARCHAR(3) NOT NULL,
    auth_imageurl VARCHAR(300),
    FOREIGN KEY (count_code) REFERENCES country(count_code)
);

CREATE TABLE book(
    book_isbn VARCHAR(100) NOT NULL PRIMARY KEY,
    book_title VARCHAR(300) NOT NULL,
    book_synopsis VARCHAR(2000) NOT NULL,
    cat_id INTEGER NOT NULL,
    edit_name VARCHAR(50) NOT NULL,
    lang_code VARCHAR(3) NOT NULL,
    book_imageurl VARCHAR(300),
    book_pages INTEGER NOT NULL,
    book_published DATE NOT NULL,
    FOREIGN KEY (cat_id) REFERENCES category(cat_id),
    FOREIGN KEY (lang_code) REFERENCES languaje(lang_code),
    FOREIGN KEY (edit_name) REFERENCES editorial(edit_name)
);

CREATE TABLE book_author(
    book_isbn VARCHAR(100) NOT NULL,
    auth_id INTEGER NOT NULL,
    FOREIGN KEY (book_isbn) REFERENCES book(book_isbn),
    FOREIGN KEY (auth_id) REFERENCES author(auth_id)
);

CREATE TABLE student(
    stu_dni VARCHAR(100) NOT NULL PRIMARY KEY,
    stu_fname VARCHAR(300) NOT NULL,
    stu_lname VARCHAR(300) NOT NULL,
    stu_email VARCHAR(300) NOT NULL,
    stu_password VARCHAR(1000) NOT NULL,
    stu_imageurl VARCHAR(300)
);

CREATE TABLE loan(
    loan_id INTEGER NOT NULL PRIMARY KEY,
    stu_dni VARCHAR(100) NOT NULL,
    book_isbn VARCHAR(100) NOT NULL,
    loan_start DATE NOT NULL,
    loan_end DATE NOT NULL,
    FOREIGN KEY (stu_dni) REFERENCES student(stu_dni),
    FOREIGN KEY (book_isbn) REFERENCES book(book_isbn)
);