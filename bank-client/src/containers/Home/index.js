import React from 'react';
import Layout from '../../components/Layout';
import Contact from '../../components/Contact';
import './style.css';
import bank from '../../images/money-transfer1.png'
import Atm from '../../images/atm.png'
import Money from '../../images/money.png'
import Support from '../../images/support.png'


export default function Home() {
  return (
    <Layout >
      <div>
        <div className="row">
          <div className="col-lg-6 box">
            <div className="content">
              <h1>We Provide World Class Service</h1>
              <br />
              <h5 className="disabled-1">Welcome to our family of more than 10 million satisfied customers, we are here to provide you the best ever banking services. 
                    Customer satisfaction is our utmost priority.</h5>
              <div className="disabled-1 row"><a href="selectuser" className="col-md-6"><button type="button " className="btn disabled-1">
                Transfer Now
                  </button></a>
                <a href="history" className="col-md-6"><button type="button " className="btn disabled-1">
                  History
                 </button></a>
              </div>
            </div>

          </div>
          <div className="col-lg-6" >
            <img src={bank} className="front-image" alt="Money transfer"></img>
          </div>
        </div>
      </div>
      <div className="second">
      <div className="wrapper">
            <h1>Our Services</h1>
        <div className='services'>
            <div className="card">
                <img src={Money} alt="image1" />
            <h2>Bank to bank money transfer</h2>
                    <p>With our super fast servers we are here 24x7 to provide you limitless money transfer services.
                        Transfer from anywhere anytime.
                    </p>
            </div>
            <div className="card">
            <img src={Atm} alt="image2" />
                    <h2>ATM services</h2>
                    <p>We provide best class ATM service with over 2 million+ ATMs across the country, always up and running.
                        Withdrawl without any limits from your nearby ATM conveniently.
                    </p>
            </div>
            <div className="card">
            <img src={Support} alt="image3" />
                    <h2>24x7 Customer Support</h2>
                    <p>With our thousands of employees working day and night to support you anytime, we are delighted to say we have no.1 customer support service and improving day by day.
                    </p>
            </div>
        </div>
        </div>
        <Contact />
      </div>
    </Layout>

  )
}