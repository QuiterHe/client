import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './router/Router';
import About from './components/About';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
// import ReturnButton from 'components/common/ReturnButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { Provider } from 'react-redux';
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './styles/loading.css';
import store from './redux/store';
import {receiveAutoComplete} from './redux/action';
import Loading from './components/common/Loading';
import { PropTypes } from 'prop-types';

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(receiveAutoComplete('he'));

class App extends Component {

    /*material-ui 需要配置主题才可以使用*/
    getChildContext() {
        return { muiTheme: getMuiTheme(lightBaseTheme) };
    }

  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      //   <About></About>
      // <ReturnButton />
    // <MuiThemeProvider>
    //     <IconButton style={{padding:'0',background:'orign'}} >
    //       <FontIcon   className="iconfont icon-fanhui" bgcolor="red">123</FontIcon>>
    //     </IconButton>
    //
    // </MuiThemeProvider>
    //     <div className="App">
    //         <MuiThemeProvider>
    //             <Routes />
    //         </MuiThemeProvider>
    //     </div>
        <Provider store={store}>
            <div className="App">
                <Loading />
                <Routes />
            </div>
        </Provider>
    );
  }
}

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

export default App;
