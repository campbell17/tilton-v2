import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == 'project']{
  _id,
  homepage,
  cta,
  ctalink,
  ctabrand,
  ctaicon,
  desc,
  cover{alt, ...asset->{url}},
  hero{alt, ...asset->{url}},
  company,
  type,
  year,
  project,
  credits,
  subtitle,
  songs[]->{title, ...track{...asset->{url}}}
}
`
