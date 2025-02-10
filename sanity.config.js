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
      .title('Browse and collect data')
        .items(
        [
          S.listItem()
            .title('Speciale lijstjes')
            .child(
              S.list()
                .title('Speciale lijstjes')
                .items([
                  S.listItem().title('Concerten die komen').child(
                     S.documentTypeList('concert')
                      .title('Concerten')
                      .filter('date > now()')
                      .child(),
                  ),
                  S.listItem().title('Boeken die nog niet uit zijn').child(
                     S.documentTypeList('book')
                      .title('Books')
                      .filter('dateFinished > now()')
                      .child(),
                  ),
                ])
            ),
          S.divider(),
          ...S.documentTypeListItems().filter(
            item => !['artist', 'concertVenue', 'festival', 'grower', 'coffeeStore'].includes(item.getId())
          ),
        ]
      ),               
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
};

export default defineConfig(config);
