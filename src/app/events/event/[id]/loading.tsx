'use client';
import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="-mt-28 text-center">
                <div className="mb-4 flex items-center space-x-2 text-xl font-semibold">
                    <CircularProgress size="md" aria-label="Loading..." />
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    )
}
