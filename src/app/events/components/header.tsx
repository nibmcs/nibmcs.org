import Image from 'next/image'
import { Logo } from "@/components/icons";

interface PageProps {
    params: {
        id: string
    }
}

const images = [
    { id: 1, imgUrl: '/events/01/01.jpg' },
    { id: 2, imgUrl: '/events/01/02.jpg' },
    { id: 3, imgUrl: '/events/01/03.jpg' },
    { id: 4, imgUrl: '/events/01/04.jpg' },
    { id: 5, imgUrl: '/events/01/05.jpg' },
    { id: 6, imgUrl: '/events/01/06.jpg' },
    { id: 7, imgUrl: '/events/01/07.jpg' },
];

export default function Header({ params }: PageProps) {
    return (
        <main className="mx-auto max-w-[1960px]">
            <div className="columns-1 sm:columns-2 xl:columns-3 2xl:columns-4">
                <div className="after:content relative mb-5 flex h-[500px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <span className="flex max-h-full max-w-full items-center justify-center">
                            {/* <Bridge /> */}
                        </span>
                        <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                    </div>
                    <Logo />
                    <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
                        @March 2023 Git & GitHub Event
                    </h1>
                    <p className="max-w-[40ch] dark:text-white/75 light:text-black/75 sm:max-w-[32ch]">
                        The First Look Into Git & GitHub conducted by GitHub Campus Expert Suvin Nimnaka
                    </p>
                </div>
                {images.map(({ id, imgUrl }) => (
                    <div
                        key={id}
                        className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                    >
                        <Image
                            alt="Next.js Conf photo"
                            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                            style={{ transform: 'translate3d(0, 0, 0)' }}
                            src={imgUrl}
                            width={720}
                            height={480}
                            sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
                        />
                    </div>
                ))}
            </div>
        </main>
    )
}