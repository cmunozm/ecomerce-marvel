import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetCharacterData } from "../../store/character-actions";

const PaypalButton = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <PayPalButton
      amount={props.total}
      options={{
        clientId: "AQo9HakLFvPns2R38hWNkqhuskxAcgiFDH_uZSB2NcahFhc9LKt87X9JNlT-3GM0xBDFahdCgu5nwNbN",
        currency: "USD"
      }}

      onSuccess={(details, data) => {
        //alert("Transaction completed by " + details.payer.name.given_name);

        dispatch(resetCharacterData());
        history.push('/');
      }}
    />
  );
};

export default PaypalButton;
