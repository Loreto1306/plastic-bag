import ItemsContainer from "./ItemsContainer"
import SocialIcon from "./SocialIcon"

export default function Footer(){
    return(
        <>
            <footer className="tw-bg-gray-900 tw-text-white">
                <div className="md:tw-flex md:tw-justify-between md:tw-items-center sm:tw-px-12 tw-bg-footer-bg tw-py-7 tw-px-6"> 
                    <h1 className="lg:tw-text4xl tw-text-3xl md:tw-mb-0 tw-mb-6 lg:tw-leading-normal tw-font-semibold md:tw-w-2/">
                        
                    <span className="tw-text-cyan-100">É de graça!<br/></span>
                    conheça mais da nossa equipe...     
                    </h1>
                    <div>
                        
                    </div>
                </div>
                <ItemsContainer/>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols2 lg:tw-grid-cols-3 tw-gap-10 tw-text-center tw-pt-2 tw-text-gray-400 tw-text-sm tw-pn-8">
                    <span className="tw-self-center">© 2024 Todos os direitos reservados.</span>
                    <span className="tw-self-center">Termos de Politica e Privacidade</span>
                    <SocialIcon/>
                </div>
            </footer>
        </>
    )
}