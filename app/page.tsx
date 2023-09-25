'use client'

import {Bars3Icon} from "@heroicons/react/20/solid";
import SideBar from "@/components/sidebar/SideBar";
import {useRef, useState} from "react";

export default function Home() {
    const [showSideBar, setShowSideBar] = useState<boolean>(false)

    return (
        <main className="flex h-screen flex-col">
            <div className="w-full h-[50px] bg-white p-2 border-b-[1px] border-[#dfdfdf]">
                <div className="px-3 py-1.5"
                     onClick={() => setShowSideBar(true)}>
                    <Bars3Icon className="w-5 text-[#5c5c5c] hover:text-[#4c4c4c] cursor-pointer"/>
                </div>
            </div>
            <div className={`absolute left-0 top-0 w-full h-full bg-[#343a40]/20 ${showSideBar ? "flex" : "hidden"}`}
                 onClick={() => setShowSideBar(false)} />
            <SideBar shown={showSideBar} onItemSelected={() => setShowSideBar(false)}/>
        </main>
    )
}
