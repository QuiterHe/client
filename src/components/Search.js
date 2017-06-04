/**
 * Created by hezhang on 17/6/1.
 */
/* src/components/Search.js */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ReturnButton from './common/ReturnButton';

class Search extends Component {
    render() {
        return (
            <div>
                <AppBar
                    titleStyle={{display:'none'}}
                    children={<div>123</div>}
                    iconElementLeft={<ReturnButton history={this.props.history} />}
                />
            </div>
        );
    }
}

export default Search;