import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Gallery from '../components/gallery/gallery';

export default function Music() {

  return (
    <Layout>
      <Hero 
        heading="Music"
        subheading="This is the description"
      />
      <div className="m-8">
        <Gallery />        
      </div>
    </Layout>
  )
}
