import {ComponentType} from "react";

interface IIcon {
    className?: string
}

export interface IAccordionItem {
    id: string
    name: string
}

export interface IAccordion {
    Icon: ComponentType<IIcon>
    title: string
    items: Array<IAccordionItem>
    selectedItem: IAccordionItem
    onItemSelected(item: IAccordionItem)
}