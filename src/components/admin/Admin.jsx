import Nav from "./Nav";
import ContentHolder from "./table/ContentHolder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateItem from "./UpdateItem";
import {React , useState , useEffect} from 'react'
import TableData from "../../DummyData";
import { Table } from "@material-ui/core";

import {connect} from 'react-redux'




const Admin = (props) => {
  /*

  function objectId () {
  return hex(Date.now() / 1000) +
    ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
}

function hex (value) {
  return Math.floor(value).toString(16)
}

export default objectId

  */
  const [tabledata , settabledata] = useState(TableData)

  
  const deleteData = (id) => {
    const newmodified = tabledata.filter(ite => ite.id === id);
    settabledata(newmodified)  
  }

  useEffect((props) => {
    console.log(props)

  } , [])


  return (
    <div>
      <Nav props={props} />

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <div>
                  <ContentHolder data={props.tabledata} />
                </div>
              );
            }}
          />
          <Route  path={"/:id"} component={UpdateItem} />
        </Switch>
      </Router>
    </div>
  );
};



function mapStateToProps(state){
  return {
    tabledata: state.tableData
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUser: (userObject) => {
      dispatch({type: "SET_USER", payload: userObject})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

// export default Admin;
