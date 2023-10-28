import EventDescription from "./eventDescription"
import Sponsors from "./sponsors"

interface PageProps {
    params: {
        id: string
    }
}

export default function Body({ params }: PageProps) {
    return (
        <>
            <Sponsors />
            <EventDescription />
        </>
    )
}