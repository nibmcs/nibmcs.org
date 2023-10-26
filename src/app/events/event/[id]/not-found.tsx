'use client';
import NextLink from "next/link";

export default function NotFound() {
    return (
        <NextLink className="flex justify-start items-center pt-2" href="/">
            Go BACK HOME
        </NextLink>
    )
}
