import { groq } from 'next-sanity';
import client from '../lib/client';

export async function getEvents() {
  return client.fetch(
    groq`*[_type == 'event'] | order(date desc) {
      _id,
      title,
      slug,
      date,
      description,
      location,
      conductedBy,
      mainImage {"image": asset->url},
      eventImages[] {"image": asset->url},
    }`
  );
}

export async function getEventBySlug(slug: any) {
  const query = groq`*[_type == 'event' && slug.current == $slug][0]{
    ...,
    title,
    mainImage {"image": asset->url},
    eventImages[] {"image": asset->url},
    description,
    location,
    conductedBy,
  }`;
  return client.fetch(query, { slug });
}
