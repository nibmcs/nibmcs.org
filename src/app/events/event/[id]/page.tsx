import Body from '../../components/body';
import Header from '../../components/header';
interface PageProps {
    params: {
        id: string
    }
}

export default function EventPage({ params }: PageProps) {
    return (
        <>
            <Header params={{ id: '1' }} />
            <Body params={{ id: '1' }} />
        </>
    )
}