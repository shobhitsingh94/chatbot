import React from 'react';
import { connect } from 'react-redux';
import {getBooksAsync, getFilteredBooks, addNewUser} from '../actions';
import HomeComponent from '../components/Home';
import { getBooks } from '../utility/selectors';

const mapStateToProps = ({state},props) => {
    return {
       // books: getBooks(state, props)
    }
};

const mapDispatchToProps = dispatch => ({
    //getBooksAsync: () =>dispatch(getBooksAsync()),
    //getFilteredBooks: (key) => dispatch(getFilteredBooks(key)),
    addNewUser: (user) => dispatch(addNewUser(user))
});

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;
