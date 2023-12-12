import { type SchemaTypeDefinition } from 'sanity'

import announcement from './schemas/announcement'
import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import project from './schemas/project'
import songsdata from './schemas/songsdata'
import song from './schemas/song'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, announcement, project, song],
}
