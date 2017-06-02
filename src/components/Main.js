/**
 * Created by hezhang on 17/6/1.
 */
/* src/components/Main.js */
import React, { Component } from 'react';
// import CSSTransitionGroup from 'react-transition-group';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import '../styles/main.css';
import '../styles/animate.css';
import lunboimg from '../source/l1.jpg';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRightMenuShow: false
        }
    }

    render() {
        return (
            <div className="content">
                {/*TODO 转场动画*/}
                <AppBar
                    title="小说Terminator"
                    titleStyle={{textAlign:'center',fontSize:'1.5rem'}}
                    iconStyleLeft={{display:'none'}}
                    iconElementRight={<VertMenu history={this.props.history} />}
                />

                <div className="mainContent">
                    <div className="lunbo" style={{background:`url(${lunboimg})`}}></div>
                    <div className="nav"></div>
                    <div className="mainRecommend"></div>
                    <div className="recommendListContent"></div>
                    <div className="mainRecommend"></div>
                    <div className="myLike"></div>


                </div>

                <div className="footer">

                </div>
            </div>
        );
    }
}

/* header右侧菜单组件 */
const VertMenu = ({history}) => (
    <div>
        <IconMenu
            iconButtonElement={
                <IconButton> <MoreVertIcon /> </IconButton>
            }
        >
            <MenuItem primaryText="Sign Up"/>
            <MenuItem primaryText="About" onTouchTap={()=> history.push('/about')} />
        </IconMenu>
    </div>
)
VertMenu.muiName = 'IconMenu';

export default Main;