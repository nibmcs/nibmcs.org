import React from "react";
import { Card, CardFooter, Button, Image, CardBody } from "@nextui-org/react";
import { DateIcon, LocationPinIcon } from "@/components/icons";
import NextLink from "next/link";
import ClientSideRoute from '@/components/ClientSideRoute';

type Props = {
    event: any
}

export default function EventsCard({ event }: Props) {
    return (
        <ClientSideRoute route={`/events/${event.slug.current}`} >
            <Card
                radius="lg"
                className="border-none mb-6 mx-1"
                style={{ width: 350 }}
            >
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        isZoomed
                        alt="Git & Github Event"
                        className="object-cover"
                        src="/events/01/thumbnail.jpg"
                        height={280}
                        width={350}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <div className="text-tiny text-white/80">Already Held!</div>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            View More
                        </Button>
                    </CardFooter>
                </Card>
                <CardBody className="p-5 mb-2 flex flex-col gap-2">
                    <h4 className="font-bold text-xl text-center">{event.title}</h4>
                    <div className="justify-center flex py-1 gap-2">
                        <div className='flex'>
                            <DateIcon />
                            <span className="font-light pl-1" style={{ fontSize: '75%' }}>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className='flex'>
                            <LocationPinIcon />
                            <span className="font-light pl-1" style={{ fontSize: '75%' }}>{event.location}</span>
                        </div>
                    </div>
                    <div className="text-xs px-2 text-center">
                        <div>{event.title} conducted by</div>
                        {event.conductedBy.map((speaker: any, index: any) => (
                            <div>{speaker.role} {speaker.speaker}</div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </ClientSideRoute>
    );
}
