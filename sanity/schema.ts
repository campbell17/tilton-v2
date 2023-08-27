import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import project from './schemas/project'
import songsdata from './schemas/songsdata'
import songs from './schemas/songs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, project, songs],
}