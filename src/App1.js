
import ar1 from './ar1.jpg';
import ar2 from './ar2.jpg';
import ar3 from './ar3.jpg';
import ar4 from './ar4.jpg';

import img from './img.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

import img04 from './img04.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';
import img9 from './img9.png';

import img10 from './img10.png';

import img11 from './img11.png';
import img12 from './img12.png';


import './App.css';


function App1() {
    return (
      <>
 
 <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators  ">
  <button type="button " data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
</div>

<div class="carousel-inner">
  <div class="carousel-item active">
   <img src={ar1} className="d-block w-100 size" alt="..."></img>
     <div class="carousel-caption">
     </div>
</div>
 <div class="carousel-item">
   <img src={ar2} className="d-block w-100 size" alt="..."></img>
   <div class="carousel-caption">
   </div> 
 </div>
<div class="carousel-item">
   <img src={ar3} className="d-block w-100 size" alt="..."></img>
   <div class="carousel-caption">
   </div>  
 </div>
  <div class="carousel-item">
   <img src={ar4} className="d-block w-100 size" alt="..."></img>
    <div class="carousel-caption">
    </div>  
  </div>
</div>

<button class="carousel-control-prev  " type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon bgo rounded-circle "></span>
</button>
<button class="carousel-control-next " type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon bgo rounded-circle"></span>
</button>
</div>

<div className="container-fluid mt-5 ">
  <h3 className=" text-center text-primary "><b>Our Products</b></h3>
</div>

<div className=" container-fluid  text-center">
<h1 >Get the most out of our products</h1>
<h6>Here's your chance to enjoy lifestyle benefits, attractive cashbacks, generous YES Rewardz and much more </h6>
</div>

<div className=" px-5">
 <div className="row mt-5">
  <div className="  col-sm-3 p-3 ">
    <div className="full card img-fluid  color" >
      <img className="height card-img-top w-100" src={img} alt="Card image" ></img>
      <div className="card-img-overlay">
      <h4 className="card-title">Credit  Card</h4>
      <p className="card-text">Experience a rewarding journey with YES BANK Credit card. Apply online and get a FREE Amazon voucher *</p>
     </div>
   </div>
</div>
<div className="col-sm-3 p-3 ">
  <div className="full card img-fluid colors" >
    <img className="height card-img-top w-100 " src={img1} alt="Card image" ></img>
     <div className="card-img-overlay">
      <h4 className="card-title">Floating Rate Fixed Deposit </h4>
      <p className="card-text">Book your Floating Rate Fixed Deposit today and enjoy dynamic returns (Interest rates benchmarked  to REPO rate)</p>
    </div>
  </div>
</div>
<div className="col-sm-3 p-3 ">
  <div className="full card img-fluid colorss" >
    <img className="height card-img-top w-100" src={img2} alt="Card image" ></img>
      <div className="card-img-overlay">
      <h4 className="card-title">Personal Loan</h4>
      <p className="card-text">Avail a loan amount upto ₹40 Lakhs at attractive interest rates starting at 10.99% p. a.*</p>
     </div>
  </div>
</div>
<div className="col-sm-3 p-3 ">
  <div className=" full card img-fluid colorsss" >
    <img className="height card-img-top w-100" src={img3} alt="Card image" ></img>
      <div className="card-img-overlay">
      <h4 className="card-title">INR Banking</h4>
      <p className="card-text">Enjoy the carefree moments back home. Earn up to 7.00% p.a.* on YES BANK NRE/NRO Savings Account</p>
   </div>
  </div>
</div>
</div>
</div>
<div className="container  mt-5">
  <div className="row">
    <div className="col p-3 text-bg-primary">
      Discover which products suit your everyday needs
    </div>
   <div className="col p-3 text-bg-primary text-center ">
    <div className="dropdown ">
      <button type="button" className="  btn btn-light dropdown-toggle rounded-circle-0 " data-bs-toggle="dropdown">
       I Am Looking For Loan
      </button>
   <ul className="dropdown-menu">
     <li><a className="dropdown-item text-bg-danger" href="#">Loans</a></li>
     <li><a className="dropdown-item text-bg-danger" href="#">Text Savings</a></li>
     <li><a className="dropdown-item text-bg-danger" href="#">Wealth Creation</a></li>
    </ul>
   </div>
</div>
    <div className="col p-3 text-bg-primary text-center">
     <button type="button" className="btn btn-danger rounded-circle-0">View Products</button>
    </div>
  </div>
</div>

<div className=" container-fluid  text-center mt-5">
<h1 >Tools to help you plan</h1>
<h1>better, decide better </h1>
</div>



<div className=" px-5 ">
  
  <div className="row mt-5">
<div className="  col-sm-3 p-3 ">
<div class="card cards" >
   <img className="card-img-top mx-auto heights" src={img04} alt="Card image" ></img>
    <div className="card-body mx-auto">
    <h4 className="card-title"><b> Personal Loan </b></h4>
      <h4 className="card-title"><b>EMI Calculator</b></h4>
      <a className="dropdown-item text-danger" href="#">Calculate Now</a>
    </div>
  </div>
</div>

<div className="col-sm-3 p-3 ">
<div class="card cards" >
   <img className="card-img-top mx-auto   heights" src={img5} alt="Card image" ></img>
    <div className="card-body mx-auto">
    <h4 className="card-title"><b>Credit Card EMI</b></h4>
      <h4 className="card-title"><b>Calculator</b></h4>
      <a className="dropdown-item text-danger" href="#">Calculate Now</a>
    </div>
  </div>
</div>

<div className="col-sm-3 p-3 ">
<div class="card cards" >
   <img className="card-img-top mx-auto  heights " src={img6} alt="Card image" ></img>
    <div className="card-body mx-auto">
    <h4 className="card-title"><b>Home Loan EMI</b></h4>
      <h4 className="card-title"><b>Calculator</b></h4>
      <a className="dropdown-item text-danger " href="#">Calculate Now</a>
    </div>
  </div>
</div>

<div className="col-sm-3 p-3 ">
<div class="card cards" >
   <img className=" card-img-top mx-auto   heights " src={img7} alt="Card image" ></img>
    <div className="card-body mx-auto">
    <h4 className="card-title"><b>Car Loan EMI</b></h4>
      <h4 className="card-title"><b>Calculator</b></h4>   
      <a className="dropdown-item text-danger" href="#">Calculate Now</a>
    </div>
  </div>
</div>
</div>
</div>


<div className="container-fluid mt-5">
 <div className="row ">
   <div className="col p-3 text-bg-primary ">
      
      <p>IRS by YES BANK</p>
      <h1> New-Age app</h1>
      <h1> for holistic and</h1>
      <h1> sameless</h1>
      <h1> banking</h1>
      <ul>
        <li>Earn existing reward</li>
        <li>Avail loan in second</li>
        <li>Quick and secure fund transfer</li>
        <li>Instant bill payments</li>
        <li>100+ features and services</li>
        </ul>
       
       <div className="row">
        <div className="col-6">
        <h6>Scan the QR code</h6>
        <h6>Download IRIS BY YES</h6>
        <h6>BANK</h6>
        </div>
        <div className="col-6">
        <img src={img9} className="d-block  sizes " alt="..."></img>
        </div>
        </div>
        <button type="button" className="btn btn-outline-light rounded-circle-0">Know More</button>
     </div>
 
  <div className="col p-3 text-bg-primary text-center ">
    <img src={img8} className="d-block w-100 size" alt="..."></img>
  </div>

    <div className="col p-2 text-bg-primary text-center ">
     <h4 className="marg"> <button type="button" className="btn btn-outline-light text-light rounded-circle">1</button> Iris by YES BANK</h4>
     <h4 className="marg"> <button type="button" className="btn btn-outline-light text-light rounded-circle">2</button> YES Online</h4>
     <h4 className="marg"> <button type="button" className="btn btn-outline-light text-light rounded-circle">3</button> WhatApp Banking</h4>
     <h6>Add +8428418900 to your contacts and</h6>
     <h6>type Hii</h6>
     <button type="button" className="btn btn-danger rounded-circle-1 mt-3">Say Hii</button>
    </div>
  </div>
</div>


<div className=" container  text-center mt-5">
<h1 >Privileges that make banking a pleasure</h1>

<div className="mt-5">
<div className="row ">

<div className="  col-sm-6 ">
<div class="card cardss" >
   
    <div className="card-body ">
     <h4 className="card-title"><b> YES Rewards</b></h4>
     <h4 className="card-title"><b>EMI Calculator</b></h4>
     <img className="card-img-top mx-auto heightss" src={img11} alt="Card image" ></img>
    </div>
  </div>
</div>

<div className="col-sm-6 ">
<div class="card cardss" >
 
    <div className="card-body ">
    <h4 className="card-title"><b>YES Office</b></h4>
      <h4 className="card-title"><b>Calculator</b></h4>
      <img className="card-img-top mx-auto   heightss" src={img12} alt="Card image" ></img>
    
    </div>
  </div>
</div>

</div>
</div>
</div>


<div class="container mt-5">
  
  <div class="row">
    <div class="col-sm-3 p-3 bg-primary text-white"><span className="display-4">1200+</span>
    <h5>Branches</h5>
    </div>
    <div class="col-sm-3 p-3 bg-primary text-white"><span className="display-4">750+</span>
    <h5>Cities</h5>
    </div>
    <div class="col-sm-3 p-3 bg-primary text-white"><span className="display-4">8.2Million+</span>
   <h5>Happy Customers</h5> 
    </div>
    <div class="col-sm-3 p-3 bg-primary text-white"><span className="display-4">1200+</span>
    <h5>ATMs</h5>
    </div>
  </div>
</div>

<div class="container mt-5">
  
  <div class="row">
    <div class="col-sm-6 p-3  text-white gray">
    <img className=" hii w-100" src={img10} alt="Card image" ></img>
    
    </div>
    <div class="col-sm-6 p-3  text-white gray">
      <div className="mt-5">
      <h3 className="text-primary">Overdraft , Cash Credit and Term Loans</h3>
      <h1>Looking for Working</h1>
      <h1>Capital requirements?</h1>
      <p><b>Partnering businesses to accelerate growth with easy,</b></p>
      <p><b>hassle-free MSME Loans</b></p>
      <button type="button" className="btn btn-danger rounded-circle-1 mt-3">Apply Now</button>
      <button type="button" className="btn btn-outline-danger rounded-circle-1 mx-3 mt-3">Know More</button>
      </div>
    </div>
  </div>
</div>

</>


   
  );
}

export default App1;
