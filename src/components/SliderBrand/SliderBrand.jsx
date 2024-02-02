/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './SliderBrand.css';
import aps from '../../images/sliderBrandBottom/aps.webp';
import bormioli from '../../images/sliderBrandBottom/bormioli.webp';
import cristal from '../../images/sliderBrandBottom/cristal.webp';
import doppio from '../../images/sliderBrandBottom/doppio.webp';
import eternum from '../../images/sliderBrandBottom/eternum.webp';
import isi from '../../images/sliderBrandBottom/isi.webp';
import kunst from '../../images/sliderBrandBottom/kunst.webp';
import lubiana from '../../images/sliderBrandBottom/lubiana.webp';
import nud from '../../images/sliderBrandBottom/nud.webp';
import odk from '../../images/sliderBrandBottom/odk.webp';
import pasabahce from '../../images/sliderBrandBottom/pasabahce.png';
import peugeot from '../../images/sliderBrandBottom/peugeot.webp';
import pinchdrop from '../../images/sliderBrandBottom/pinchdrop.webp';
import probar from '../../images/sliderBrandBottom/probar.webp';
import revol from '../../images/sliderBrandBottom/revol.webp';
import rinart from '../../images/sliderBrandBottom/rinart.webp';
import rona from '../../images/sliderBrandBottom/rona.webp';
import steelite from '../../images/sliderBrandBottom/steelite.webp';
import sunex from '../../images/sliderBrandBottom/sunex.webp';
import vidivi from '../../images/sliderBrandBottom/vidivi.webp';

export default function SliderBrand() {
  const [width, setWidth] = useState(window.innerWidth);
  const [resp, setResp] = useState({});

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const responsive = {
    0: { items: 8 },
    1000: { items: 8 },
  };

  const res = {
    0: { items: 4 },
    1000: { items: 4 },
  };

  useEffect(() => {
    if (width >= 1200) {
      setResp(responsive);
    } else {
      setResp(res);
    }
  }, [width]);

  const items = [
    <img src={aps} className="sliderBrand__log" alt="logo" />,
    <img src={bormioli} className="sliderBrand__log" alt="logo" />,
    <img src={cristal} className="sliderBrand__log" alt="logo" />,
    <img src={doppio} className="sliderBrand__log" alt="logo" />,
    <img src={isi} className="sliderBrand__log" alt="logo" />,
    <img src={eternum} className="sliderBrand__log" alt="logo" />,
    <img src={kunst} className="sliderBrand__log" alt="logo" />,
    <img src={lubiana} className="sliderBrand__log" alt="logo" />,
    <img src={nud} className="sliderBrand__log" alt="logo" />,
    <img src={odk} className="sliderBrand__log" alt="logo" />,
    <img src={pasabahce} className="sliderBrand__log" alt="logo" />,
    <img src={peugeot} className="sliderBrand__log" alt="logo" />,
    <img src={pinchdrop} className="sliderBrand__log" alt="logo" />,
    <img src={probar} className="sliderBrand__log" alt="logo" />,
    <img src={revol} className="sliderBrand__log" alt="logo" />,
    <img src={rinart} className="sliderBrand__log" alt="logo" />,
    <img src={rona} className="sliderBrand__log" alt="logo" />,
    <img src={steelite} className="sliderBrand__log" alt="logo" />,
    <img src={sunex} className="sliderBrand__log" alt="logo" />,
    <img src={vidivi} className="sliderBrand__log" alt="logo" />,
  ];

  return (
    <div className="sliderBrand">
      <AliceCarousel
        items={items}
        responsive={resp}
        autoPlay={true}
        mouseDragEnabled={true}
        infinite={true}
        keysControlDisabled={true}
        autoPlayInterval={3000}
        playButtonEnabled={true}
        dotsClass="custom-dots-class"
      />
    </div>
  );
}
