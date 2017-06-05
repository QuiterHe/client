/**
 * Created by hezhang on 17/6/5.
 */
/* src/redux/reducer.js */

import {AUTO_COMPLETE, GET_BOOK_LIST} from './action';

// 自动补全列表
export const autoBookList = (state = {lists: [],name: ''}, action) => {
    switch (action.type) {
        case AUTO_COMPLETE:
            let { name, completeList } = action;
            return {lists:completeList, name};

        default:
            return state;
    }
}

// 书籍列表
export const bookList = (state = {books: [], name: ''}, action={}) => {
    switch (action.type) {
        case GET_BOOK_LIST:
            let { books, name } = action;
            return {name, books};
        default:
            return state;
    }
}