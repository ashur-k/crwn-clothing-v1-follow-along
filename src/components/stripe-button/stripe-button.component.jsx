import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HNEO8K0aexytnqPxW65qgoIwUMKU5hZQ45M3LPdVTQMrzep3Mgtnr2cbZ5w4A3JIUOCXxaR40kzwCaqgUw89WcQ00OKaCOAkz'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;