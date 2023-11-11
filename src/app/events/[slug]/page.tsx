import { getEventBySlug } from '../../../../sanity/lib/queries';
import Body from '../components/body';
import Header from '../components/header';

type Props = {
    params: {
        slug: string
    }
}

export default async function EventPage({ params: { slug } }: Props) {

    const event = await getEventBySlug(slug);

    return (
        <>
            <Header event={event} />
            <Body event={event} />
        </>
    )
}