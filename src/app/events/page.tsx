"use client"
import React from "react";
import { Card, CardFooter, Button, Image, CardBody } from "@nextui-org/react";
import { DateIcon, LocationPinIcon } from "@/components/icons";
import NextLink from "next/link";

export default function EventsPage() {
  return (
    <>
      <Card
        radius="lg"
        className="border-none"
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
            <p className="text-tiny text-white/80">Already Held!</p>
            <NextLink href="/events/event/1">
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                View More
              </Button>
            </NextLink>
          </CardFooter>
        </Card>
        <CardBody className="px-3 py-1 mb-2">
          <h4 className="font-bold text-large text-center">Git & GitHub</h4>
          <div className="justify-center sm:flex py-1">
            <>
              <DateIcon />
              <span className="font-light pl-1" style={{ fontSize: '75%' }}>03/03/2023</span>
            </>
            <>
              <LocationPinIcon />
              <span className="font-light pl-1" style={{ fontSize: '75%' }}>NIBM</span>
            </>
          </div>
          <div className="text-tiny px-2 text-center">
            <p>Introduction to Git & GitHub conducted by GitHub Campus Expert Suvin Nimnaka</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
