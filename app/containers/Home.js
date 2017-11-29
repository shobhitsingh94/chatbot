import React from 'react';
import { connect } from 'react-redux';
import { addNewUser} from '../actions';
import HomeComponent from '../components/Home';
import { getBooks } from '../utility/selectors';

const mapStateToProps = (state,props) => {
    console.log("pppppppppppp", state);
    return {
       user: state.user
    }
};

const mapDispatchToProps = dispatch => ({
    addNewUser: (user) => dispatch(addNewUser(user))
});

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;
