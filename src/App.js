import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login/Login.jsx";
import Admin from "./components/admin/Admin.jsx";

import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import { useEffect  , useState} from "react";

import jsondata from './DummyData.json'


import history from './createHistory'


const App = ()=> {

let [email , setemail] = useState('');
let [profileName , setprofileName] = useState('');
let [imageUrl , setimageUrl] = useState('');
let [route , setroute] = useState(false);

const responseGoogle = (response) => {
  console.log(response);
  //Redirect.call(hi thangam)
  
  setemail(response.profileObj.email);
  setprofileName(response.profileObj.name);
  setimageUrl(response.profileObj.imageUrl);
  setroute(true);
  console.log(email)
  // history.push('/admin/data')
  
}


  return (
    <div className="App">
      <Router history={history} >
        <Switch>
          
          <Route exact path="/" component={() =>{
           return route ?  <Admin email={email} profileName={profileName} imageurl={imageUrl} /> : <Login response={responseGoogle}  />
          } }></Route>
          {/* <Route path="/admin/data" component={() => }></Route> */}

        </Switch>

      </Router>

      {/*  <Admin />*/}
    </div>
  );
}

export default App;
