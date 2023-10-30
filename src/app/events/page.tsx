"use client"
import React from "react";
import EventsCard from "./components/eventCard";

const events = [
  {
    title: 'Event 1',
    date: '2023-10-31',
    location: 'Venue 1',
  },
  {
    title: 'Event 2',
    date: '2023-11-05',
    location: 'Venue 2',
  },
  {
    title: 'Event 3',
    date: '2023-11-12',
    location: 'Venue 3',
  },
  {
    title: 'Event 4',
    date: '2023-11-18',
    location: 'Venue 4',
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mx-4">
        {events.map((event, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 xl:w-1/3 2xl:w-1/3 px-3">
            <EventsCard />
          </div>
        ))}
      </div>
    </div>
  );
}
