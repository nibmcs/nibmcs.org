'use client'
import { Card } from "@nextui-org/react";

export default function EventDescription() {
    return (
        <>
            <div className="mx-auto w-full mt-4">
                <div className="grid grid-cols-1 gap-16">
                    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
                        <Card
                            radius="lg"
                            className="border-none"
                        >
                            <section className="pb-6">
                                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                                    <div className="container mx-auto px-6 p-6">
                                        <div className="mb-4 text-center">
                                            <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Details</h4>
                                        </div>
                                        <div className="w-full mb-3">
                                            <div className="flex items-center">
                                                <div className="text-base">Venue</div>
                                            </div>
                                            <p className="leading-loose text-gray-500">
                                                NIBM - Harrison Hall
                                            </p>
                                        </div>
                                        <div className="w-full mb-3">
                                            <div className="flex items-center">
                                                <div className="text-base">Time/Date</div>
                                            </div>
                                            <p className="leading-loose text-gray-500">
                                                03/03/2023
                                            </p>
                                        </div>
                                        <div className="w-full mb-2">
                                            <div className="flex items-center">
                                                <div className="text-base">Conducted By</div>
                                            </div>
                                            <p className="leading-loose text-gray-500">
                                                Suvin Nimnaka
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Card>
                        <div className="grid grid-cols-1 gap-3 md:col-span-2">
                            <Card
                                radius="lg"
                                className="border-none">
                                <section className="pb-6">
                                    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                                        <div className="container mx-auto px-6 p-6">
                                            <div className="text-center mb-4">
                                                <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Description</h4>
                                            </div>
                                            <div className="w-full">
                                                <p className="leading-loose text-gray-500">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et eos! Enim, reprehenderit! Eius, asperiores provident repudiandae impedit dolorem ea officia molestiae quisquam tenetur reiciendis voluptatem officiis debitis fugit rerum?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}