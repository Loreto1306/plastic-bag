import { Link } from "react-router-dom"

export default function Item({Links,title}){
    return(
        <ul>
            <h1 className="tw-mb-1 tw-text-teal-100 tw-font-semibold tw-justify-center">{title}</h1>
        {
            Links.map( link =>
                <div key={link.name}>
                    <Link className="tw-no-underline tw-text-gray-400 hover:tw-text-cyan-200 tw-duration-300 tw-text-sm tw-cursor-pointer tw-leading-6" to={link.link}>{link.name}</Link>
                </div>
            )
        }
        </ul>
    )
}