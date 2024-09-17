/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {colorInput} from '@sanity/color-input'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import {myStructure} from './deskStructure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [    
    deskTool({
      structure: (S) =>
        myStructure(S)
          .items([
            ...S.documentTypeListItems().filter(listItem => !['fringeFriday'].includes(listItem.getId())),
            S.listItem()
              .title('Fringe Friday')
              .child(
                S.document()
                  .schemaType('fringeFriday')
                  .documentId('fringeFriday')
              ),
          ]),
    }),    
    colorInput(),
    vercelDeployTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
