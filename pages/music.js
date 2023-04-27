import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Album from '../components/album'
import ProjectDetail from '../components/project-detail';

export default function Music() {
  return (
    <Layout>
      <ProjectDetail />
      <Album />
    </Layout>
  )
}
