/**
 * Created by hezhang on 17/6/1.
 */
/* src/components/Main.js */
import React, { Component } from 'react';
// import CSSTransitionGroup from 'react-transition-group';
import AppBar from 'material-ui/AppBar';
import Bottom from './common/Bottom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import '../styles/main.css';
import '../styles/animate.css';

import lunboimg from '../source/l1.jpg';
import scimg from '../source/s1.jpg';
import sc2img from '../source/s2.jpg';

/* Temp */
import '../styles/reset.css';
import '../styles/fonts.css';
// import BookListItem from "../../../storyViaAntdReact/src/components/main/search/BookListItem";

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
                    <div className="lunbo" style={{background:`url(${lunboimg})`}} />
                    <nav className="nav">
                        <ul>
                            <li><i className="dot" /><span className="type">玄幻</span></li>
                            <li><i className="dot" /><span className="type">校园</span></li>
                            <li><i className="dot" /><span className="type">穿越</span></li>
                            <li><i className="dot" /><span className="type">都市</span></li>
                            <li><i className="dot" /><span className="type">书库</span></li>
                        </ul>
                    </nav>
                    <div className="mainRecommend">
                        <span>编辑推荐</span>
                        <a><span><i className="house iconfont icon-icon2" /> 排行榜</span> <i className="right">&gt;</i></a>
                    </div>
                    <div className="recommendListContent">
                        <ul>
                            <BookListItemMain item={{
                                img: 'http://img.17k.com/images/bookcover/default_cover1.jpg',
                                title: 'Hello world',
                                intro: 'This is a test',
                                author: 'hezhang',
                                words: '17.6万字',
                            }} />
                        </ul>
                    </div>
                    <div className="mainRecommend" style={{borderTop:'.5rem solid var(--gray-lighter)'}}>
                        <span>我的收藏</span>
                        <a><span><i className="house iconfont icon-xiaohua" /> 收藏记录</span> <i className="right">&gt;</i></a>
                    </div>
                    <div className="myLike">
                        <ul>
                            <BookListItemMain item={{
                                img: sc2img,
                                title: '一念永恒',
                                intro: '第822章 小纯出手！',
                                author: '耳根',
                                words: '237.98万字（连载中）',
                            }}/>
                            <BookListItemMain item={{
                                img: scimg,
                                title: '道界天下',
                                intro: '第二章 神秘村落中走出的神惧',
                                author: '酷匠网夜行月',
                                words: '连载中',
                            }}/>
                        </ul>
                    </div>

                </div>

                <div className="footer">
                    <Bottom history={this.props.history} />
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

/* list组件 */
class BookListItemMain extends Component {
    render() {
        const { item } = this.props;
        const { img, title, intro, author, words } = item;
        return (
            <li className="recommendList">
                <div className="liLeft">
                    <img src={img} alt="" />
                </div>
                <div className="liRight">
                    <h3>{title}</h3>
                    <p>{intro}</p>
                    <div className="liBottom">
                        <span>{author}</span>
                        <span>{words}</span>
                    </div>
                </div>
            </li>
        );
    }
}


export default Main;