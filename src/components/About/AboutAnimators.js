import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './AboutAnimators.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useTranslation } from 'react-i18next';
import TwitterIcon from '@material-ui/icons/Twitter';
import { BrowserRouter as Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import ReactHtmlParser from 'react-html-parser';
import { getCollection } from '../../services/API';

const AboutAnimators = () => {
  const { t } = useTranslation();
  const [animators, setAnimators] = useState();

  useEffect(() => {
    const request = getCollection('users/animators').then((data) =>
      setAnimators(data)
    );
    return () => {
      request.cancel();
    };
  }, []);

  return (
    <div className="container-all-cards-animators">
      <Helmet>
        <title>{t('Animator.title')}</title>
      </Helmet>
      <div className="header-page-animators">
        <h1>{t('Animator.title')}</h1>
        <p className="line">________________________</p>
        <p>{t('Animator.text')}</p>
      </div>
      <div className="page-container">
        {animators &&
          animators.map((animator) => {
            return (
              <div key={animator.id} className="cards-container">
                <div className="image-animator">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/${animator.photo_url}`}
                    alt={animator.firstname}
                  />
                </div>
                <div className="name-bio-logo">
                  <h3>
                    {animator.firstname} {animator.lastname}
                  </h3>
                  {ReactHtmlParser(animator.bio)}
                  <div className="logo-animateurs">
                    <Link to={animator.facebook_url}>
                      <FacebookIcon className="reseaux-sociaux" />
                    </Link>
                    <MailIcon className="reseaux-sociaux" />
                    <InstagramIcon className="reseaux-sociaux" />
                    <TwitterIcon className="reseaux-sociaux" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutAnimators;
