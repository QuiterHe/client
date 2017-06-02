/**
 * Created by hezhang on 17/6/1.
 */
const app=()=>(
    <h2>主页</h2>
);
const Hot=()=>
    (<div><h2>热门</h2></div>);

const Content=()=>
    (
    <h2>文章</h2>
);

const Zhuanlan=()=>
    (<div>
    <h2>专栏</h2>
</div>);

const RouterTest=()=>(
    <Router>
    <div>
        <ul>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/hot">热门</Link></li>
            <li><Link to="/zhuanlan">专栏</Link></li>
        </ul>
        <hr/>
        <Route  exact path="/" component={app}></Route>
        <Route path="/hot" component={Hot} ></Route>
        <Route path="/zhuanlan" component={Zhuanlan}></Route>
    </div>
</Router>);

export default RouterTest;