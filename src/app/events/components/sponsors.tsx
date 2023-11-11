'use client'
import { Logo } from "@/components/icons"
import { Card } from "@nextui-org/react"
import Image from 'next/image'

type Props = {
    event: any
}

export default function Sponsors({ event }: Props) {
    return (
        <>
            <Card
                radius="lg"
                className="border-none w-full mt-4 bg-background/60 dark:bg-default-100/50">
                <div className="flex justify-center w-full">
                    <div className="w-full my-4">
                        <p className="font-mono uppercase text-center font-medium text-lg text-gray-600">Partners</p>
                        <div className="flex items-center justify-center mx-auto flex-wrap gap-4 mt-2">
                            {event.sponsors && event.sponsors.map((sponsor: any, index: any) => (
                                <div key={index} >
                                    <Image alt={sponsor.title} src={sponsor.logo.image} width={150} height={80} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}