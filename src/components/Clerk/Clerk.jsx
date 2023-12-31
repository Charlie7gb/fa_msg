"use client"

import { UserButton } from "@clerk/nextjs";

export default function Clerk() {
    return (
        <div className="h-screen">
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
