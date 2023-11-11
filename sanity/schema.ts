import { type SchemaTypeDefinition } from 'sanity';
import events from './schemas/events';
import sponsors from './schemas/sponsors';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [events, sponsors],
};
