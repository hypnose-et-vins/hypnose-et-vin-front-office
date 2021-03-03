import React from 'react';
import './Reservation.scss';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  btn: {
    marginTop: '30px',
    margin: 'auto',
    color: 'white',
    backgroundColor: '#8C0226',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#6d071a',
    },
  },
}));

const Reservation = () => {
  const { t } = useTranslation();
  return (
    <div className="reservation">
      <h1> {t('Reservation.title')}</h1>
      <p>________________________</p>
      <p>{t('Reservation.text')}</p>

      <Button type="button" className={useStyles().btn}>
        <Link to="/events" Continuer>
          {t('Reservation.button')}
        </Link>
      </Button>
    </div>
  );
};

export default Reservation;
