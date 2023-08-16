import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Gallery from '../components/gallery/gallery';

export default function Music(props) {

  return (
    <Layout>
      <Hero 
        darkBG
        // videoSource1="/images/vid-example.webm"
        // videoSourceType1="video/webm"
        // videoSource2="/images/vid-example.mp4"
        // videoSourceType2="video/mp4"
        heroBGStyles="bg-blue-800 py-12 bg-cover bg-right bg-[url('/images/hero-sheet.jpg')]"
        // announcementUrl="https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/" 
        // announcementLinktext="Read more" 
        // announcementContent="MGM+ Renews Sci-Fi Horror Series FROM for Season Three"
        heading="Music" 
        subheading="I write music. Currently: 'From' on MGM+ | Upcoming: Assassin's Creed Nexus VR | Previously: Fringe | Assassin's Creed Unity | SimCity | Zoo"
        // ctaPrimaryUrl="#" ctaPrimaryText="Get started" 
        // ctaSecondaryUrl="#" ctaSecondaryText="Learn more"
      />
      <div className="m-8">      
        <Gallery gallery />
      </div>
    </Layout>
  )
}
