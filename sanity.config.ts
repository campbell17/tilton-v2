/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].tsx` route
 */

import React from 'react'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {colorInput} from '@sanity/color-input'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import {myStructure} from './deskStructure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

const FringeFridayInfo = (props: any) => {
  const {songs, currentTrack, lastUpdated} = props.document.displayed
  const now = new Date()
  const fridayMidnight = new Date(now)
  fridayMidnight.setDate(fridayMidnight.getDate() + (5 + 7 - fridayMidnight.getDay()) % 7)
  fridayMidnight.setHours(0, 0, 0, 0)
  const lastFriday = new Date(fridayMidnight)
  lastFriday.setDate(lastFriday.getDate() - 7)

  return React.createElement('div', {style: {padding: '1rem'}}, [
    React.createElement('h3', null, `Current Track: ${currentTrack ? currentTrack.trackName : 'Random Selection'}`),
    React.createElement('p', null, `Current Track Period: ${lastFriday.toLocaleDateString()} - ${fridayMidnight.toLocaleDateString()}`),
    React.createElement('p', null, `Last Updated: ${lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Never'}`),
    React.createElement('p', null, `Total Tracks: ${songs.length}`)
  ])
}

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
                  .views([
                    S.view.form(),
                    S.view
                      .component(FringeFridayInfo)
                      .title('Current Selection')
                  ])
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
