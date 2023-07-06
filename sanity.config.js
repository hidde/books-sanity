import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export const projectId = 'e86znw0z';
export const dataset = 'production';

const config = {
  name: 'default',
  title: 'log.hidde.blog',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
      S.list()
      .title('Manage contents')
        .items(
        [
          ...S.documentTypeListItems().filter(
            item => !['artist', 'concertVenue', 'festival', 'grower', 'coffeeStore'].includes(item.getId())
          ),
        ]
      )               
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
};

export default defineConfig(config);
