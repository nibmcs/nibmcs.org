import EventDescription from "./eventDescription"
import Sponsors from "./sponsors"

interface Props {
    event: any
}

export default function Body({ event }: Props) {
    return (
        <>
            {event.sponsors && <Sponsors event={event} />}
            <EventDescription event={event} />
        </>
    )
}