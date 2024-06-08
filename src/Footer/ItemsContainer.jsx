import Item from "./Item"
import {HOME,SOBRE,EQUIPE,CONTATO} from './Menu'


export default function itemsContainer(){
    return(
        <li className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6 sm:tw-px-8 tw-px-5 tw-py-16">
            <Item Links={HOME} title="HOME"/>
            <Item Links={SOBRE} title="SOBRE"/>
            <Item Links={CONTATO} title="CONTATO"/>
            <Item Links={EQUIPE} title="EQUIPE"/>
        </li>
    )
}