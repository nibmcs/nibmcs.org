'use client';
import { Button } from '@nextui-org/react';
// Error components must be Client Components
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="-mt-20 flex h-screen flex-col items-center justify-center text-center">
            <h1 className="mb-6 text-2xl font-bold md:text-4xl">
                Something went wrong!
            </h1>
            <p className="mb-8 text-xl text-gray-700">{error.message}</p>
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    );
}
