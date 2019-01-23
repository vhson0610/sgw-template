import React from 'react';
import WOW from 'wow.js';
import MainSearch from './main-search';
import ServiceMainPage from './services';
import WebTemplates from './web-templates/web-templates';
import ClientsMainPage from './clients';
import Header from '../header';
import Footer from '../footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faCog,
  faMobile,
  faChartLine,
  faLayerGroup,
  faSmile,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faCog, faMobile, faChartLine, faLayerGroup, faSmile, faLock);

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/swiper.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';

export default class HomePage extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <MainSearch />
        <ServiceMainPage />
        <WebTemplates />
        <ClientsMainPage />
        <Footer />
      </React.Fragment>
    );
  }
}
