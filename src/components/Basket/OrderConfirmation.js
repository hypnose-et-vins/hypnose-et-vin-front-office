import React, { useEffect, useContext } from 'react';
import './OrderConfirmation.scss';
import { useHistory } from 'react-router-dom';
import API from '../../services/API';
import { BasketContext } from '../Contexts/BasketContext';

const OrderConfirmation = () => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const { basket, setBasket } = useContext(BasketContext);

  useEffect(() => {
    API.post('users/', basket);
  });

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 5000);
  });

  return (
    <div className="orderconfirmation-wrapper">
      <div className="h1-hr">
        <h1>Votre commande est confirmée !</h1>
        <p>_______</p>
      </div>
      <p className="p-orderconfirmation">
        Merci de votre confiance, vous recevrez un mail de confirmation.
        <br /> Vous allez être redirigé vers la page d'accueil dans 5 secondes.
        <br />
        Si vous ne souhaitez pas attendre, <a href="/">cliquez ici.</a>
      </p>
    </div>
  );
};

export default OrderConfirmation;
