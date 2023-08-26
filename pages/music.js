import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Gallery from '../components/gallery/gallery';
import sanity from '../sanity/lib/sanity'
import { projectsQuery } from '../sanity/lib/sanity.queries'

export default function Music({projects}) {
  const projectArray = projects;

  return (
    <Layout>
      <Gallery projectItems={projectArray} gallery />
    </Layout>
  )
}
export const getStaticProps = async () => {
  const projects = await sanity.fetch(projectsQuery);
  return {
    props: { projects } // will be passed to the page component as props
  };
};