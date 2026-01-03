import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Header() {
    return (
        <div>
            <nav className="flex items-center  px-10  justify-between ">
                <div>
                    {/* <img className="w-20" src="/images/logo.png" alt="logo" /> */}
                    <Image width={40} height={40} src="/images/logo.png" alt="logo"></Image>
                </div>
                <div className="space-x-3">
                    <Link className="btn" href='/foods'>Foods</Link>
                    <Link className="btn" href='/review'>Review</Link>
                </div>
            </nav>
        </div>
    )
}
