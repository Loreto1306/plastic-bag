import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './equipe.css'
import './projeto.css' 
import EquipeCard from "./EquipeCard";
import CardEquipeCompleto from "./CardEquipeCompleto";

export default function Equipe() {
    return (
        <>
            <Header />
                <section className="team">
                    <div className="">
                        <h1 className="team_title tw-pt-2 tw-font-semibold">
                            Nossa Equipe 
                        </h1>
                    </div>
                </section>
            <CardEquipeCompleto/>
        <Footer/>
        </>
    );
}
