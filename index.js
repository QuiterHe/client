import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// JSX
function getGreeting(user)
{
    if(user) {
        return (<h1> Hello, {user} </h1>);
    }else
    {
        return (<h1> Hello, nobody </h1>);
    }
}

const greeting = (
    getGreeting('')
);


// 组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Sara"></Welcome>
            <Welcome name="Cahal"></Welcome>
            <Welcome name="Tom"></Welcome>
        </div>
    );
}

const element = <Welcome name="Sara"></Welcome>

// 有状态的组件
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: props.name,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }


    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

//  事件处理
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }

    handleClick = (prevState) => {
        // console.log('this is:', prevState);
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "On" : "Off"}
            </button>
        );
    }
}


// 列表
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map( (number) =>
        <li key={number.toString()}>{number}</li>
     );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers =[1, 2, 3, 4, 5];
    ReactDOM.render(
        <NumberList numbers={numbers}></NumberList>,
        document.getElementById('root')
    );

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
//
//
// setInterval(tick, 1000);
