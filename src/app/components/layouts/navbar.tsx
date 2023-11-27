import React from "react";
export default function Navbar(props: any) {
    return (
        <>
            <nav className="text-lg font-sans flex flex-col text-center sm:flex-row sm:text-left
                sm:justify-between py-4 px-6 bg-gray-100 text-dark shadow-lg sm:items-baseline w-full">

                <div className="mb-2 sm:mb-0">MoviesFlix</div>

                <div>
                    <a href="/" className="text-lg no-underline hover:text-amber-300 ml-2">Home</a>
                    <a href="/movies" className="text-lg no-underline hover:text-amber-300 ml-2">Movies</a>
                </div>
            </nav>
        </>
    );
}