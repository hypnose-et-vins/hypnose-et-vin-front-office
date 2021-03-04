import React from 'react';
import './Banner.scss';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <h1>{t('Accueil.titre')}</h1>
      <p>________________________</p>
      <p>{t('Accueil.banner1')}</p>
      <p>{t('Accueil.banner2')}</p>
      <p>{t('Accueil.banner3')}</p>
      <p>{t('Accueil.banner4')}</p>
      <p>{t('Accueil.banner5')}</p>
    </div>
  );
};

export default Banner;
