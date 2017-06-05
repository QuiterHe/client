/**
 * Created by hezhang on 17/6/5.
 */
/* src/redux/action.js */

import 'whatwg-fetch';
import {urlChange} from '../tools/index';

export const IS_LOADING    = 'IS_LOADING';     // 是否显示加载框
export const GET_BOOK_LIST = 'GET_BOOK_LIST';  // 获取书籍列表
export const AUTO_COMPLETE = 'AUTO_COMPLETE';  // 自动补全

const receiveBookList = (data, name) => ({
    type: GET_BOOK_LIST,
    books: data,
    name
});

export const isShowLoading = (isloading) => ({
   type: IS_LOADING,
    isloading
});

export const autoComplete = (name='', completeList=[]) => ({
    type: AUTO_COMPLETE,
    name,
    completeList,
});

// 自动补全列表
export const receiveAutoComplete = (name) => dispatch => {
    if('' === name) {
        return dispatch(autoComplete());
    }

    return fetch(`book/auto-complete?query=${name}`)
        .then(res=>res.json)
        .then(data=>dispatch(autoComplete(name, data.keywords)))
        .catch(error => new Error(error));
};

// 获取书籍列表
export const getBookList = name => dispatch => {
    if( '' === name ) {
        return dispatch(receiveBookList([], ''));
    }

    dispatch(isShowLoading(true));
    return fetch(`/api/book/fuzzy-search?query=${name}&start=0`)
        .then(res => res.json)
        .then(data => data.books.map((book)=>{
            return Object.assign({}, book, {cover: urlChange(book.cover)});
        }))
        .then(data => {
            let action = dispatch(receiveBookList(data, name));
            dispatch(isShowLoading(false));
            return action;
        })
        .catch(
            error => new Error(error)
        );
};



