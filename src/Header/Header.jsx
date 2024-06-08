import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
            <div className=" tw-w-screen tw-max-h-16 -tw-mb-4 tw-h-screen tw-overflow-hidden tw-shadow-2xl tw-shadow-black ">
                {/* Navbar */}
                <div className="tw-w-screen lg:tw-px-64 md:tw-px-10 tw-bg-[#252525] lg:tw-flex tw-justify-between tw-text-neutral-300">
                    <span className="tw-text-lg tw-font-semibold sm:tw-pl-10 -tw-pb-1">
                        <Link to={'/'}><img src="./logo-novatech.png"  className="tw-max-w-16 tw-inline-flex " alt=""/></Link>
                    </span>
                    
                    <ul className="tw-hidden md:tw-pt-5 lg:tw-pt-1 tw-float-right tw-px-3 md:tw-inline-flex tw-items-center tw-space-x-5">
                        <Link to="/" className=" tw-no-underline tw-group tw-text-white tw-transition-all tw-duration-300 tw-ease-in-out">
                            <span className="tw-self-center tw-bg-left-bottom tw-bg-gradient-to-r tw-from-teal-100 tw-to-teal-500 tw-bg-[length:0%_2px] group-hover:tw-pb-1 tw-bg-no-repeat group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">Home</span>
                        </Link>
                        <Link to="/projeto" className=" tw-no-underline tw-group tw-text-white tw-transition-all tw-duration-300 tw-ease-in-out">
                            <span className="tw-self-center tw-bg-left-bottom tw-bg-gradient-to-r tw-from-teal-100 tw-to-teal-500 tw-bg-[length:0%_2px] group-hover:tw-pb-1 tw-bg-no-repeat group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">Projeto</span>
                        </Link>
                        <Link to="/equipe" className="tw-no-underline tw-text-white tw-group tw-transition-all tw-duration-300 tw-ease-in-out">
                            <span className="tw-self-center tw-bg-left-bottom tw-bg-gradient-to-r tw-from-teal-100 tw-to-teal-500 tw-bg-[length:0%_2px] group-hover:tw-pb-1 tw-bg-no-repeat group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">Equipe</span>
                        </Link> 
                        <Link to="/cadastrar" className="tw-no-underline tw-text-white tw-group tw-transition-all tw-duration-300 tw-ease-in-out">
                            <span className="tw-self-center tw-bg-left-bottom tw-bg-gradient-to-r tw-from-teal-100 tw-to-teal-500 tw-bg-[length:0%_2px] group-hover:tw-pb-1 tw-bg-no-repeat group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">Cadastre-se</span>
                        </Link>
                    </ul>
                    <button className=" tw-bg-transparent tw-border-0 tw-space-y-1 tw-pt-4 tw-pr-8 tw-group md:tw-hidden tw-float-right xs:tw-float-right sm:tw-float-right">
                        {/* hamburguer */}
                        <div className="tw-w-6 tw-h-1 tw-bg-white"></div>
                        <div className="tw-w-6 tw-h-1 tw-bg-white"></div>
                        <div className="tw-w-6 tw-h-1 tw-bg-white"></div>
                        
                        {/* menu */}
                        <ul className="tw-bg-[#252525] tw-relative tw-z-10 tw-w-screen tw-pb-10 sm:tw-absolute -tw-top-full group-focus:tw-top-0 tw-right-0 tw-duration-150 tw-flex tw-flex-col tw-space-y-3 tw-justify-end">
                            <button className="tw-px-10 tw-py-8 tw-bg-transparent tw-border-0 tw-relative tw-ml-auto">
                                <div className="tw-w-6 tw-h-1  tw-rotate-45 tw-absolute tw-bg-white"></div>
                                <div className="tw-w-6 tw-h-1 -tw-rotate-45 tw-absolute tw-bg-white"></div>
                            </button>
                            <li>
                            <Link to="/"  className="tw-flex tw-text-gray-300 tw-justify-center tw-w-full tw-py-4 hover:tw-bg-[#202020]">
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link to="/projeto" target="_blank" className="tw-flex tw-text-gray-300 tw-justify-center tw-w-full tw-py-4 hover:tw-bg-[#202020]">
                                Projeto
                            </Link>
                            </li>
                            <Link to="/equipe" className="tw-flex tw-text-gray-300 tw-justify-center tw-w-full tw-py-4 hover:tw-bg-[#202020]">
                                Equipe
                            </Link>
                            <Link to="/cadastrar" className="tw-flex tw-text-gray-300 tw-justify-center tw-w-full tw-py-4 hover:tw-bg-[#202020]">
                                Cadastre-se
                            </Link>
                        </ul>
                    </button>
                    
                </div>
            </div>
        </>
    )
}