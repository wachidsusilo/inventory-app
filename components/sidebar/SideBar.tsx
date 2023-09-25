import {HomeIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/20/solid";
import {UserCircleIcon} from "@heroicons/react/20/solid";
import Accordion from "@/components/Accordion/Accordion";
import {IAccordionItem} from "@/components/Accordion/IAccordion";
import {useState} from "react";
import {ISideBar} from "@/components/sidebar/ISideBar";

const homeItems : Array<IAccordionItem> = [
    {id: 'home-index', name: 'Index'},
    {id: 'home-dashboard', name: 'Dashboard'}
]

const items2 : Array<IAccordionItem> = [
    {id: 'item-21', name: 'Item 1'},
    {id: 'item-22', name: 'Item 2'},
    {id: 'item-23', name: 'Item 3'},
    {id: 'item-24', name: 'Item 4'},
]

const items3 : Array<IAccordionItem> = [
    {id: 'item-31', name: 'Item 1'},
    {id: 'item-32', name: 'Item 2'},
    {id: 'item-33', name: 'Item 3'},
    {id: 'item-34', name: 'Item 4'},
]

const items4 : Array<IAccordionItem> = [
    {id: 'item-41', name: 'Item 1'},
    {id: 'item-42', name: 'Item 2'},
    {id: 'item-43', name: 'Item 3'},
    {id: 'item-44', name: 'Item 4'},
]

export default function SideBar({shown, onItemSelected }: ISideBar) {
    const [selectedItem, setSelectedItem] = useState<IAccordionItem>(homeItems[1])

    const onAccordionItemSelected = (value: IAccordionItem) => {
        onItemSelected?.(value)
        setSelectedItem(value)
    }

    return (
        <div className={`w-[250px] h-full absolute top-0 left-0 ${ shown ? "translate-x-0" : "translate-x-[-250px]" } transition-transform bg-[#343a40]`}>
            <div className="w-full h-[50px] px-2 py-3 flex gap-4 justify-center text-white/80 cursor-default border-b-[1px] border-[#4f5962]">
                <ShoppingCartIcon className="w-5" />
                <p className="my-auto text-sm select-none">APP - PINJAM BARANG</p>
            </div>
            <div className="w-full h-[calc(100%-50px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-md">
                <div className="w-full px-2 flex flex-col gap-2 last:mb-4 overflow-hidden">
                    <div className="w-full px-2 py-3 flex gap-2 items-center text-white/80 border-b-[1px] border-[#4f5962]">
                        <UserCircleIcon className="w-10" />
                        <p className="my-auto text-sm cursor-pointer hover:text-white/95 select-none">username@gmail.com</p>
                    </div>
                    <Accordion Icon={HomeIcon} title={"Home"} items={homeItems} selectedItem={selectedItem} onItemSelected={onAccordionItemSelected} />
                    <Accordion Icon={UserIcon} title={"Admin 2"} items={items2} selectedItem={selectedItem} onItemSelected={onAccordionItemSelected} />
                    <Accordion Icon={UserIcon} title={"Admin 3"} items={items3} selectedItem={selectedItem} onItemSelected={onAccordionItemSelected} />
                    <Accordion Icon={UserIcon} title={"Admin 4"} items={items4} selectedItem={selectedItem} onItemSelected={onAccordionItemSelected} />
                </div>
            </div>
        </div>
    )
}