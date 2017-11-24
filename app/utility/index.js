import React from 'react';
import Book from '../components/shared/Book';


export const renderBooksList = (booksArray) => {
    return booksArray.map((eachBook, i) => (<Book book={eachBook} key={i} index={i}/>));
}

export const emailValidator = (email) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
        return false;
    }
    return true;
}
    
