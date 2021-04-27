import React  from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

import Supply from "./Supply";
import Borrow from "./borrow";


function App() {
  
  return (
    <div class="container h-100 d-flex justify-content-center">
      <div class="jumbotron my-auto">
      
  
        <center>

          <br></br>
          <br></br>
          <br></br>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1"><h1>CREDIT</h1></div>
              <br></br><br></br><br></br>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Supply");
                }}
              >
                Supply Concept    
              </button>
              <br></br>
              <br />
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Borrow");
                }}
              >
                Borrow Concept    
              </button>





            </Route>
            
            <Route path="/Supply">
              <Supply />
            </Route>
            <Route path="/Borrow">
              <Borrow />
            </Route>
          </Switch>
        </Router>
        </center>
      </div>
      
    </div>
  );
}

export default App;
