'use client'

import {Card} from "react-bootstrap";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/solid";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline";

export default function Login() {
    return (
        <div className="w-full min-h-screen flex justify-center">
            <div className="w-[360px] flex flex-col my-auto bg-white rounded-[0.25rem] border-t-[3px] border-blue-600">
                <div className="w-full flex justify-center px-5 py-3 text-2xl"><b>APP</b> &nbsp;Pinjam</div>
                <div className="w-full flex flex-col border-t-[1px] border-[#dfdfdf] p-5">
                    <p className="font text-center px-5 pb-5">Sign in to start your session</p>
                    <div className="w-full flex rounded-[4px] bg-red-600 text-white px-3 py-1.5 mb-5">
                        <p className="w-full text-sm">An unknown error has occurred</p>
                        <ExclamationCircleIcon className="w-5 text-white flex-shrink-0" />
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full grid grid-cols-[1fr,42px]">
                            <input className="py-1.5 px-3 rounded-br-none rounded-tr-none"
                                   type="email"
                                   inputMode="email"
                                   placeholder="Enter Email Address..."/>
                            <div
                                className="w-10 bg-[#e9ecef] border-[1px] border-l-[0px] rounded-tr-[3px] rounded-br-non[3px] border-[#dfdfdf] flex justify-center">
                                <EnvelopeIcon className="w-5 text-[#495057]"/>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-[1fr,42px]">
                            <input className="py-1.5 px-3 rounded-br-none rounded-tr-none" type="password"
                                   placeholder="Password"/>
                            <div
                                className="w-10 bg-[#e9ecef] border-[1px] border-l-[0px] rounded-tr-[3px] rounded-br-non[3px] border-[#dfdfdf] flex justify-center">
                                <LockClosedIcon className="w-5 text-[#495057]"/>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-full flex flex-row gap-2">
                                <input className="w-4" type="checkbox" />
                                <p className="h-auto my-auto font-bold cursor-default">Remember me</p>
                            </div>
                            <button className="px-5 py-1.5 bg-blue-600 text-white rounded-[3px] flex-shrink-0">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}