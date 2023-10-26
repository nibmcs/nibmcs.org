
interface PageProps {
    params: {
        id: string
    }
}

export default function EventPage({ params }: PageProps) {
    return (
        <div>
            <h4>hiii... {params.id}</h4>
        </div>
    )
}