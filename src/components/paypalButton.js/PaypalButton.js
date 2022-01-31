import { PayPalButton } from "react-paypal-button-v2";

const PaypalButton = (props) => {
  return (
    <PayPalButton
      amount={props.total}
      options={{
        clientId: "AQo9HakLFvPns2R38hWNkqhuskxAcgiFDH_uZSB2NcahFhc9LKt87X9JNlT-3GM0xBDFahdCgu5nwNbN",
        currency: "USD"
      }}

      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderID: data.orderID
          })
        });
      }}
    />
  );
};

export default PaypalButton;
