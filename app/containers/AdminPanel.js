//import {getBookByIdAsync, editBookByIdAsync, isSuccess} from '../actions';
import { connect } from 'react-redux';
import Admin from '../components/Admin';

const mapStateToProps = ({state}) => {
    return {
        //book: state.library.book,
        //books: state.library.books,
        //isSuccess: state.library.isSuccess
    }
};

const mapDispatchToProps = dispatch => ({
    //getBookById: (id) =>dispatch(getBookByIdAsync(id)),
    //editBookById: (id, formData) => dispatch(editBookByIdAsync(id, formData)),
    //isSuccessAction: () => dispatch(isSuccess(false))
});

const AdminPanel = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default AdminPanel;

