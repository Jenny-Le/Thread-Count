import React, { Component } from 'react';
import './paymentForm.css';
const dropin = require('braintree-web-drop-in');

class PaymentForm extends Component  {

    constructor(props){
        super(props)
        this.state = {
            price: this.props.price,
            id: this.props.id,
            modalClicked: false
        }
    }

    componentDidMount() {
        var button = document.querySelector(`#button-payment`);
        var createSales = this.props.createSales;
        dropin.create({
            authorization: 'sandbox_dv7p9zh4_fhm429bc4kzxqgsq',
            container: `#dropin-container-payment`,
            paypal: {
            amount: '10.00',
            currency: 'USD',
            flow: 'checkout',
            buttonStyle: {
                color: 'blue',
                shape: 'rect',
                size: 'medium'
            }
            }
        }, function (createErr, instance) {
            button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                if(requestPaymentMethodErr){
                    console.log('error');
                    return;
                }
                createSales();
            });
        });
        });
    }
    
    render(){
        return(
            <div>
                <div id={`dropin-container-payment`}></div>
                <div className="right-align">
                    <button className="waves-effect waves-light btn" id={`button-payment`}>Complete Purchase</button>
                </div>
            </div>
        )
    } 
}

export default PaymentForm;