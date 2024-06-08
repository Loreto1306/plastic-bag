import EquipeCard from "./EquipeCard"
import {PARTICIPANTES} from './MenuEquipe'


export default function CardEquipeCompleto(){
    return(
        <>
            <EquipeCard props={PARTICIPANTES}/>
        </>
    )
}
