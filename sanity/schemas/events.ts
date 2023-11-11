import { defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Main image for the event',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'conductedBy',
      title: 'Conducted By',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Speaker',
          fields: [
            { type: 'string', name: 'speaker' },
            { type: 'string', name: 'role' },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'eventImages',
      title: 'Event Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Images for the event',
      options: { hotspot: true },
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'sponsors' } }],
    },
  ],
});
