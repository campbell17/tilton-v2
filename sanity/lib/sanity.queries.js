import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == 'project']{
  _id,
  hero,
  company,
  type,
  year,
  songsdata[]->{title, url}
}
`
