import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import {ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {IAccordion} from "@/components/Accordion/IAccordion";

export default function Accordion({Icon, title, items, selectedItem, onItemSelected}: IAccordion) {
    const [expanded, setExpanded] = useState<boolean>(false)

    return (
        <div className="w-full">
            <div
                className={`w-full px-3 py-1.5 flex text-white/80 hover:text-white/95 cursor-pointer gap-2 rounded-[8px] ${items.find(v => v.id === selectedItem.id) ? "bg-white/20" : "bg-transparent"} hover:bg-white/20 transition-[background-color]`}
                onClick={() => setExpanded(!expanded)}>
                <Icon className="w-5 flex-shrink-0"/>
                <p className="w-full text-sm my-auto select-none">{title}</p>
                <ChevronLeftIcon className="w-4 flex-shrink-0 transition-transform"
                                 style={{transform: expanded ? "rotate(-90deg)" : "rotate(0deg)"}}/>
            </div>
            <div className="w-full pl-6 flex flex-col overflow-hidden transition-[height] gap-1"
                 style={{height: expanded ? `${items.length * 32 + (items.length - 1) * 2 + 14}px` : "0px"}}>
                {
                    items.map(value => (
                        <div
                            key={value.id}
                            className={`w-full h-[32px] px-3 py-1.5 flex text-white/80 first:mt-1 last:mb-1 hover:text-white/95 ${selectedItem.id === value.id ? "bg-blue-600" : "bg-transparent hover:bg-white/20"}  cursor-pointer gap-2 rounded-[8px]`}
                            onClick={() => onItemSelected(value)}>
                            <ArrowRightCircleIcon className="w-5 flex-shrink-0"/>
                            <p className="w-full text-sm my-auto select-none">{value.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}