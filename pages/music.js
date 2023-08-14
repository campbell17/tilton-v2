import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { projectData } from '../components/gallery/gallery-data'
import Gallery from '../components/gallery/gallery';

export default function Music(props) {
  const [sortedData, setSortedData] = useState([...projectData]);


  return (
    <Layout>
      <Hero 
        heading="Music"
      />
      <div className="m-8">      
        <Gallery gallery />
      </div>
    </Layout>
  )
}
