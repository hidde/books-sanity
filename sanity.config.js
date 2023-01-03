import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './desk/deskStructure'

export const projectId = 'e86znw0z';
export const dataset = 'production';

const config = {
  name: 'default',
  title: 'Hidde\'s books',

  projectId,
  dataset,

  plugins: [
    deskTool(
      {
        structure
      }
    ), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
};

export default defineConfig(config);
