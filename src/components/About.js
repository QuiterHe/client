/**
 * Created by hezhang on 17/6/1.
 */
/* src/components/About.js */

import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
export default class About extends Component {
    render() {
        return (
            <div>
                <h2>About me</h2>
                <h3>HeZhang</h3>
                <p>email: hezhang1001@foxmail.com</p>
                <p>github: <a href="https://github.com/QuiterHe" target="_blank">https://github.com/QuiterHe</a></p>
                <Link to="/">Main</Link>
            </div>
        )
    }
}