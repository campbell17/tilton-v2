import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == 'project']{
  _id,
  homepage == true => {homepage},
  cta,
  ctalink,
  ctabrand,
  ctaicon,
  buttontype,
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
