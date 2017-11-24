import * as types from '../api/constant';

export const getAdmins = () => {
    return {
        type: types.GET_ADMINS_ASYNC
    }
};

export const editBookByIdAsync = (id, data) => {
    return {
        type: types.EDIT_BOOK_ASYNC,
        id: id,
        formData : data
    }
};

export const getBookByIdAsync = (id) => {
    return {
        type: types.GET_BOOK_BY_ID_ASYNC,
        id:id
    }
};

export const isSuccess = (check) => {
    return {
        type: types.CHECK_SUCCESS,
        check:check
    }
};

export const addNewUser = (user) => {
    return {
        type: types.ADD_USER_ASYNC,
        user:user
    }
};


