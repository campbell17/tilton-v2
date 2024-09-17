import { type SchemaTypeDefinition } from 'sanity'

import announcement from './schemas/announcement'
import blockContent from './schemas/blockContent'
import project from './schemas/project'
import fringeFriday from './schemas/fringeFriday'
import song from './schemas/song'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, announcement, project, fringeFriday, song],
}
