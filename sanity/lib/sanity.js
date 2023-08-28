// import {createClient} from '@sanity/client'

// const client = createClient({
//   projectId: 'u0ig463q',
//   dataset: 'production',
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
// })

// export default async function ReactServerComponent() {
//   return (await client.fetch(projectsQuery)) || {}
// }


import sanityClient from "@sanity/client";

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "u0ig463q",
  dataset: "production",
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});