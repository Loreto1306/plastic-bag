export default function Header(){
    return(
        <>
            <div className="bg-teal-300 w-screen h-screen overflow-hidden">
                {/* Navbar */}
                <div className="w-screen py-6 px-5 lg:px-64 bg-[#252525] flex justify-between text-neutral-300">
                    <span className="text-lg font-semibold">
                        Logo ?
                    </span>
                    
                    <ul className="hidden md:flex items-center space-x-5">
                        <li>
                            Home
                        </li>
                        <li>
                            Projeto
                        </li>
                        <li>
                            Equipe
                        </li>
                        <li>
                            Cadastrar-se
                        </li>
                    </ul>
                    <button className="space-y-1 group md:hidden">
                        {/* hamburguer */}
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white"></div>
                        
                        {/* menu */}
                        <ul className="bg-[#252525] w-screen pb-10 absolute -top-full right-0 duration-150 flex flex-col space-y-3 justify-end">
                            <li>
                                Home
                            </li>
                            <li>
                                Projeto
                            </li>
                            <li>
                                Equipe
                            </li>
                            <li>
                                Cadastrar-se
                            </li>
                        </ul>
                    </button>
                    
                </div>
            </div>
        </>
    )
}