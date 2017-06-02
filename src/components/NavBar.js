/**
 * Created by hezhang on 17/6/1.
 */

import React, { Component } from 'react';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';

class NavBar extends Component {
    render() {
        let styles = {
            tabs: {
                width: '390px',
                position: 'absolute',
                right: '60px',
                textTransform: 'uppercase',
            },
            tab: {
                height: '64px',
                color: '#fff',
            },
            inkBar: {
                height: '4px',
                marginTop: '-4px',
            },
        };
        return (
            <div className="app-header">
                <Tabs tabItemContainerStyle={{ backgroundColor: 'transparent'}} style={styles.tabs} inkBarStyle={styles.inkBar}>
                    <Tab style={styles.tab} label="Home" />
                    <Tab style={styles.tab} label="Account" />
                    <Tab style={styles.tab} label="About" />
                </Tabs>
            </div>

        );
    }
}

export default NavBar;
