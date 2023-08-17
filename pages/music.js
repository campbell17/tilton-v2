import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Gallery from '../components/gallery/gallery';

export default function Music(props) {

  return (
    <Layout>
      <Gallery gallery />
    </Layout>
  )
}
