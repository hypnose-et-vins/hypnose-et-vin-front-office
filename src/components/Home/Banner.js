import React from 'react';
import './Banner.scss';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <h1>{t('Accueil.titre')}</h1>
      <p>________________________</p>
      <p>
        Laissez-vous transporter par vos sens afin de découvrir l’intimité des
        vins et alcools proposés.
        <br /> L'hypnose vous ouvre une nouvelle perspective sensorielle sur la
        dégustation et vous permet d’apprendre à regarder le vin sous un autre
        angle et à accepter son invitation au voyage.
        <br /> Dans un premier temps, une immersion dans le domaine de
        l’œnologie, avec les bases de la dégustation, est nécessaire afin
        d’harmoniser les connaissances de chacun. <br />
        Ensuite, vous serez guidé dans l’expérimentation et l’apprentissage de
        l’autohypnose afin de vous permettre d’être dans un état de détente et
        de conscience propice à cette dégustation exceptionnelle.
        <br /> Après une introduction du plan de vigne jusqu’à la vinification,
        vous voyagerez dans les particularités/voluptés/douceurs du vin.
      </p>
    </div>
  );
};

export default Banner;
