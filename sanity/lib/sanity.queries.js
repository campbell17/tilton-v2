import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == 'project']{
  _id,
  homepage == true => {homepage},
  cta,
  ctalink,
  ctabrand,
  ctaicon,
  buttontype,
  ctaalt,
  ctalinkalt,
  ctabrandalt,
  ctaiconalt,
  buttontypealt,
  desc,
  cover{alt, ...asset->{url}},
  hero{alt, ...asset->{url}},
  company,
  type,
  year,
  project,
  credits,
  subtitle,
  album{name, "songs": songs[]->{
    ...track{...asset->{url}},
    title,
  }},
}
`
export const announcementQuery = groq`*[_type == 'announcement']{
  url,
  urltext,
  content,
  show,
}
`

export const fringeFridayQuery = groq`*[_type == 'fringeFriday'][0]{
  title,
  "songs": songs[]{
    trackName,
    "trackSource": trackSource.asset->url
  },
  currentTrack,
  lastUpdated
}`
