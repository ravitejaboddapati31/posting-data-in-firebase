
import './App.css';
import Lead from './hello content/lead';
import Home,{Hellomsg}from './functional';
import Oneplus from './hook';
import Kick from './kick';
import Layout from './layout';
import Parent from './parent';
import PostData from './postdata/postdata';
import PropName from './proptypes/proptypes';
import Ravi,{Teja} from './ravi';
import Foo from './routingpart/footer';
import Routing from './routingpart/header';
import Hero from './routingpart/home';
import Mainfile from './routingpart/main';
import Score from './ScoreContext/score';
import Hold from './usingusestate/usestate';
import WithoutApi from './withoutcontextapi/withoutapi';
import Lifecycle from './lifecyclehooks/lifecycle';
import UsingApi from './useeffect/api';


function App() {
  return (
    <div>
      <header>
      {/* <div className='container'>
      <div class ="col-lg-12">
        <Ravi/>
        <Teja/>
        {/* <Home/> */}
        {/* <h1 className="text-warning">hey see here!</h1>
        <Home name="raviteja" />
        <Hellomsg text="india">Welcome to India</Hellomsg>
        <Hellomsg text="ap">Welcome to ap</Hellomsg> */}
        {/* </div>
      <div class="row">
      <div className='col-lg-4'>
      <Kick/>
      </div>
      <div className='col-lg-8'>
      <Oneplus/>
  </div>
    <br/>
    <Parent/>
    <Layout/>
   <WithoutApi/>
    */}

    
        {/* </div>
        </div>  */}
        {/* <Score/> */}
        {/* <PropName name={"Ravi"} age={22} college={"lpu"} branch={"mechanical"} fee={30000}/> */}
         {/* <Hold/> */}
        <PostData/> 
       
  {/* <Mainfile/> */}
      {/* <Lead/> */}
      {/* <Lifecycle/> */}
      {/* <UsingApi/> */}

 
       <h2></h2>
      </header>
    </div>
  );
}

export default App;
