import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import './AboutMorgane.scss';

export default function AboutMorgane() {
  const { t } = useTranslation();
  return (
    <div className="presentationContainer">
      <Helmet>
        <title>{t('About.helmet')}</title>
      </Helmet>
      <h1 className="titleAbout"> {t('About.h1')}</h1>
      <p className="line">________________________</p>
      <div className="squareAboutGrey">
        <div className="imageText">
          <img
            className="imageMorgane"
            alt=""
            src="https://lirp-cdn.multiscreensite.com/82a74c83/dms3rep/multi/opt/morgane_pardo-400w.jpg"
            width="290"
            height="290"
          />
          <div className="paragraphs">
            <div className="first-part">
              <p className="first-paragraph">{t('About.content1')}</p>
              <p className="first-paragraph">{t('About.content2')}</p>
            </div>
          </div>
        </div>
        <div>
          <h2>{t('About.h3')}</h2>
        </div>
        <div className="socialMedia">
          <ul className="icon-bar">
            <div>
              <li className="list">
                <a
                  href="https://www.morgane-pardo-hypnose.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CgProfile size={40} color="#8c0226" />
                </a>
              </li>
            </div>
            <div>
              <li className="list">
                <a href="/contact">
                  <AiOutlineMail size={40} color="#8c0226" />
                </a>
              </li>
            </div>
            <div>
              <li className="list">
                <a
                  href="https://fr-fr.facebook.com/hypnose.villeurbanne/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFacebook size={40} color="#8c0226" />
                </a>
              </li>
            </div>
            <div>
              <li className="list">
                <a
                  href="https://www.instagram.com/hypnose.et.vin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram size={40} color="#8c0226" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
