
import React from "react";
import EventsCard from "./components/eventCard";
import { getEvents } from '../../../sanity/lib/queries';


export default async function EventsPage() {
  const events = await getEvents();
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mx-4">
        {events.map((event: any, index: any) => (
          <div key={index} className="w-full sm:w-0 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 px-3">
            <EventsCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
