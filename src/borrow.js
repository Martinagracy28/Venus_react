import React, { useState,useEffect } from "react";
import history from "./utils/history";





//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";
import App from "./App";
import supply from "./supplyabi";
import compt from"./comptroller";

function Borrow(){ 

  const [tid,setId] = useState([]);
  useEffect(()=>{bal()},[])
  const bal = async (event) => {
    const accounts = await  web3.eth.getAccounts();
    const a = await compt.methods.getAccountLiquidity(accounts[0]).call();
    setId(a - (1000000000000000000));

    alert(tid)
  }
    
    
  return (    

    <div className="App">


<h1>Borrow Market</h1>



<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/");
                }}>
                Go Home Page 
              </button>


              <br></br>
<br></br>


      
<center>
<br></br>


		<form onSubmit ={bal} id="create-course-form" >
   
    
    </form>


    <div> cBUSD Wallet Balance<br />{tid} </div><br />
    {/* <div>BUSD Wallet Balance <br />{tid3} </div><br />
    <div>Before Mint we want to approve</div> */}
    {/* <button onClick = {}>Approve</button> */}
    <br /><br />
   

    
    <br /><br />
  
    {/* <button  onClick={collateral}>Enable collateral</button> */}
      <br /><br />
     
    <br />
    <br />
    










      
<br></br>
<br></br>


</center>

<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/App">
              <App />
            </Route>
            
            
          </Switch>
        </Router>

        
        <div>
            
        </div>








    



    
	  
      </div>      
  );
}

export default Borrow;