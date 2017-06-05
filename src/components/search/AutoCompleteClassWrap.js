/**
 * Created by HE on 2017/6/4.
 */
/* src/components/search/AutoCompleteClassWrap.js */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import { getBookList,receiveAutoComplete, isShowLoading } from '../../redux/action';
import IconButton from 'material-ui/IconButton';
import { IconCancel, IconSearch } from '../FontIcons/index';
import '../../styles/search.css';


class AutoCompleteClass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchText: '',
        };
        this.inputTimer = 0;
    }

    // 输入数据
    handleUpdateInput = (value) => {
        this.setState({
            searchText: value
        });
        clearTimeout(this.inputTimer);
        this.handleAutoSearchDelay(350);  // 延时请求后端数据
    };

    /* 输入框延时 */
    handleAutoSearchDelay = time => {
        const { dispatch } = this.props;
        this.inputTimer = setTimeout(()=>{
            dispatch( receiveAutoComplete( this.state.searchText ) )
        }, time);
    };

    // 获得焦点
    handleFcous = () => {
        this.props.isShowLoading && this.props.dispatch(isShowLoading(true));
    }

    // 失去焦点
    handleBlur = () => {
        setTimeout(()=>this.props.dispatch(isShowLoading(false)),300);
    }

    // 清空输入框
    handleClearInput = () => {
        const { dispatch } = this.props;
        this.setState({
            searchText: ''
        })
        dispatch(receiveAutoComplete(''));
        // dispatch(getBookList(''));
    }

    handleSearchAutoComplete = () => {
        const { dispatch } = this.props;
        dispatch(getBookList(this.props.searchText || this.state.searchText));
    }

    render () {
        const { dataSource } = this.props;
        return (
            <div className="autoComplete">
                <div className="autoCompleteSearchInput">
                    <AutoComplete
                        hintText='作者或者书名'
                        dataSource={dataSource}
                        searchText={this.state.searchText || this.props.searchText}
                        onUpdateInput={this.handleUpdateInput}
                        style={{width:'80%'}}
                        textFieldStyle={{width:'114%'}}
                        openOnFocus
                        menuCloseDelay={500}
                        onFocus={this.handleFcous}
                        onBlur={this.handleBlur}
                    />
                    <IconButton
                        onTouchTap={this.handleClearInput}
                    >
                        <IconCancel />
                    </IconButton>
                </div>
                <IconButton onTouchTap={this.handleSearchAutoComplete}>
                    <IconSearch />
                </IconButton>
            </div>
        )
    }
}

const autoCompleteMapStateToProps = (state) => ({
    dataSource: state.autoBookList.lists || [],
    searchText: state.autoBookList.name || '',
    isShowLoading: state.bookList.books.length > 0,
    // isShowLoading: false,
});

const AutoCompleteClassWrap = connect(autoCompleteMapStateToProps)(AutoCompleteClass);
export default AutoCompleteClassWrap;