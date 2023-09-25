import {IAccordionItem} from "@/components/Accordion/IAccordion";

export interface ISideBar {
    shown: boolean
    onItemSelected?(item: IAccordionItem)
}