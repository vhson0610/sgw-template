import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import MainSearch from '../components/homepage/main-search';
import ServiceMainPage from '../components/homepage/services';
import Project from '../components/homepage/projects';
import ClientsMainPage from '../components/homepage/clients';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <MainSearch />
        <ServiceMainPage />
        <Project />
        <ClientsMainPage />
        <p>Hello Next.js</p>
        <Link as="/bang-gia" href="/price">
          <button>Price</button>
        </Link>
      </Layout>
    );
  }
}
