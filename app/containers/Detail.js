//import {getBookByIdAsync, editBookByIdAsync, isSuccess} from '../actions';
import { connect } from 'react-redux';
import DetailComponent from '../components/Detail';

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

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
export default Detail;

