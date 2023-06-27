import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Album from '../components/album'
import Hero from '../components/hero'
import ProjectDetail from '../components/project-detail';

export default function Music() {
  return (
    <Layout>
      <Hero 
        heading="Music"
        subheading="This is the description"
      />
      <Album mappedSongUrl="/music/christilton_from_01_from-main-theme.mp3" mappedSongTitle="From Main Theme (from the TV series 'From')" id="AlbumFrom" />
    </Layout>
  )
}
