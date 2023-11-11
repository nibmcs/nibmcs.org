import { defineField } from 'sanity';

export default defineField({
  name: 'sponsors',
  title: 'Sponsors',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'Sponsor',
      fields: [
        { type: 'string', name: 'name' },
        { type: 'image', name: 'logo' },
        { type: 'url', name: 'link' },
      ],
    },
  ],
});
