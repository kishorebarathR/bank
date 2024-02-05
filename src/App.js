import logo from './logo.png';
import './App.css';
import { Outlet, Link } from "react-router-dom";

import img13 from './img13.png';
import img14 from './img14.png';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-sm  sticky-top px-3">
  <div className="container-fluid px-3">
    <a className="navbar-brand" >
      <img src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="collapsibleNavbar ">
      <ul className="navbar-nav  mx-auto ">
        <li className="nav-item px-3">
          <Link className="nav-link text-white"to="/">Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link text-white" to="/Transaction">Transaction</Link>
        </li>
        <li className="nav-item px-3">
        <Link className="nav-link text-white"to="/Services">Services</Link>
        </li> 
        <li className="nav-item px-3 ">
        <Link className="nav-link text-white"to="/Contact">Contact</Link>
        </li> 
          
      </ul>
    </div>
  </div>
</nav>


<Outlet/>

<div className="continer-fluid text-bg-primary  p-5">
  <h5 className=" mx-5 my-3">Disclaimer</h5>
<p className="mx-5 m-3">YES BANK will NEVER ask you to reveal your User ID or Password. Therefore, never disclose your credentials (User ID, Password, OTP, PIN etc.) to anyone either through mail or over phone. If you receive any mail asking you to update or authenticate your
  User ID or Password, please DO NOT fall into the trap of putting in your Password or OTP or PIN. </p>
  <div class="row mx-5">
    <div class="col-sm-3 p-3 bg-primary text-white">
      <h5>Product of you</h5>
      <p>Digital Savings Account</p>
      <p>Savings Accounts</p>
      <p>Current Accounts</p>
      <p>Fixed Deposits</p>
      <p>Credit Cards</p>
      <p>Home Loan</p>
      <p>Personal Loan</p>
      <p>Auto Loan</p>
    
   </div>
    <div class="col-sm-3 p-3 bg-primary text-white">
    <h5>Services</h5>
    <p>Online Loan Payments</p>
    <p>Credit Card Bill Payment</p>   
    <p>Insurance Claim Intimation</p>
    <p>Services for Senior Citizens & Customers with Disabilities</p>
    <p>RE-KYC Channels</p>
    </div>
    <div class="col-sm-3 p-3 bg-primary text-white">
    <h5>Support</h5>
    <p>Locate Us</p>
    <p>Contact Us</p>
    <p>Nodal Officer</p>
    <p>Complaints</p>
    <p>Loss of Card</p>
    <p>Do Not Call Registry</p>
    </div>
    <div class="col-sm-3 p-3 bg-primary text-white">
    <h5> Customer Care</h5>
    <p>Toll Free: 1800 1200</p>
    <img className="hii " src={img14} ></img>
    <h5> Credit Card Qeries</h5>
    <p>1800-103-1212</p>
    <p>1800-103-6000</p>
    
     <img className= "hii" src={img13}></img>
   
   
    </div>
</div>
  </div>









    </>
  );
}

export default App;
