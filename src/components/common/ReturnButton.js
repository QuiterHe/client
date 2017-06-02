/**
 * Created by hezhang on 17/6/1.
 */
/* src/components/common/ReturnButton.js */


import React,{ Component } from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
// import { Link } from 'react-router-dom';

/* 返回按钮 */
class ReturnButton extends Component {


    render() {
        return (
            /*{<IconButton style={{padding:'0'}} onTouchTap={this.handleGoBack}>}*/
            <IconButton style={{padding:'0'}} >
                <FontIcon  />
            </IconButton>
        );
    }
}

export default ReturnButton;
