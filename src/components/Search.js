/**
 * Created by hezhang on 17/6/1.
 */
/* src/components/Search.js */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReturnButton from './common/ReturnButton';
import AutoCompleteClassWrap from './search/AutoCompleteClassWrap';
import '../styles/search.css';

class Search extends Component {
    render() {
        return (
            <div>
                <AppBar
                    titleStyle={{display:'none'}}
                    children={<AutoCompleteClassWrap/>}
                    iconElementLeft={<ReturnButton history={this.props.history} color="var(--default-color)" />}
                />
            </div>
        );
    }
}

export default Search;