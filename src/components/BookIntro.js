/**
 * Created by hezhang on 17/6/1.
 */

/* src/components/BookIntro.js */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'

class BookIntro extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="书籍详情"
                    style={{textAlign:'center'}}
                 //   iconElementLeft={{}}
                />
            </div>
        );
    }
}

export default BookIntro;
