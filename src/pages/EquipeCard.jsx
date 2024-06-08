export default function EquipeCard({ props }) {
  return (
    <>
      {props.map((link) => (
        <>
        <section key={link.key} className={link.section+" tw-z-0 tw-relative"}>
            <div className="card tw-w-1/5  tw-bg-[#375a82] tw-items-center" >
                <img
                    src={link.img}
                    className="card-img-top tw-max-w-xs "
                    alt="..."
                />
                <div className="card-body tw-relative tw-max-w-xs">
                    <h5 className="card-title tw-px-2 tw-text-[#f8f9fa] tw-font-bold tw-text-xl">
                        {link.nome}
                    </h5>
                    <p id="texto" className=" lg:tw-max-w-xs card-text tw-px-2 tw-text-[#f8f9fa]">
                        {link.texto}
                    </p>
                </div>
                <div className="card-body ">
                    <a href="#" className="card-link tw-no-underline tw-text-[#f8f9fa]">
                        {" "}
                        <span className=" tw-text-xl tw-font-semibold hover:tw-text-blue-300">Linked</span>
                    </a>
                    <a href="#" className="card-link tw-no-underline tw-text-[#f8f9fa]">
                        <span className=" tw-text-xl tw-font-semibold hover:tw-text-gray-400">GitHub</span>
                    </a>
                </div>
            </div>
        
            <div className="card tw-w-9/12 tw-mx-7 my-4 tw-h-1/3 "  /* style="width: 75%; margin: 30px 0 0 30px; height: 30%;" */>
                <div className="card-body">
                    <h5 className="card-title">Conhecimento nas linguagens de Programaçāo</h5>
                        
                    <h6 className="card-subtitle tw-mb-2 tw-mt-2 text-body-secondary">{link.linguagem0}</h6>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar tw-w-4/5 tw-bg-gradient-to-r tw-text-black tw-from-orange-300 tw-to-blue-600 " /* style="width: 80%; background-image: linear-gradient(to right, orange, blue); color: black;" */>{link.valueLng0}</div>
                    </div>
            
            
                    <h6 className="card-subtitle tw-mb-2 tw-mt-2 text-body-secondary" /* style="margin-top: 10px; color: black;" */>{link.linguagem1}</h6>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar tw-w-1/2 tw-bg-gradient-to-r tw-from-blue-300 tw-to-yellow-200 tw-text-black" /* style="width: 50%; background-image: linear-gradient(to right, blue, yellow); color: black;" */>{link.valueLng1}</div>
                    </div>
        
        
                    <h6 className="card-subtitle tw-mb-2 tw-mt-2 text-body-secondary " /* style="margin-top: 10px;" */>{link.linguagem2}</h6>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar tw-w-3/4 tw-bg-[#5b4b87] tw-text-black" /* style="width: 75%; background-color: rgb(91, 75, 135); color: black;" */>{link.valueLng2}</div>
                    </div>
        
        
                    <h6 className="card-subtitle mb-2 text-body-secondary tw-w-4/5 tw-mt-2" /* style="width: 80%; margin-top: 10px;" */>{link.linguagem3}</h6>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar tw-w-2/5 tw-bg-yellow-200 tw-text-black" /* style="width: 40%; background-color: yellow; color: black;" */>{link.valueLng3}</div>
                    </div>
                </div>
            </div>
        </section>
        <br />
        </>
      ))}
    </>
  );
}
