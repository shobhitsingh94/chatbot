import React from 'react';
import { connect } from 'react-redux';
import { addNewUser, createChatRoom} from '../actions';
import HomeComponent from '../components/Home';
import { getBooks } from '../utility/selectors';

const mapStateToProps = (state,props) => {
    return {
       user: state.user,
       room: state.room
    }
};

const mapDispatchToProps = dispatch => ({
    addNewUser: (user) => dispatch(addNewUser(user)),
    createChatRoom: (room) => dispatch(createChatRoom(room))
});

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;
