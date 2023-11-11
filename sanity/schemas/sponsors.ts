import { defineType } from 'sanity';

export default defineType({
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sponsor Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      description: 'Sponsor logo',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Sponsor Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
  ],
});
