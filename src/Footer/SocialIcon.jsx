import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function SocialIcon(){
    return(
        <span className="tw-text-teal-200 tw-mb-6">
            <FaFacebook className="tw-pb-2 tw-inline-flex tw-items-center tw-p-2 tw-cursor-pointer tw-rounded-full tw-bg-gray-700 tw-mx-1.5 tw-text-4xl hover:tw-text-gray-100 hover:tw-bg-cyan-400 tw-duration-300"/>
            <FaInstagram className="tw-inline-flex tw-items-center tw-p-2 tw-cursor-pointer tw-rounded-full tw-bg-gray-700 tw-mx-1.5 tw-text-4xl hover:tw-text-gray-100 hover:tw-bg-cyan-400 tw-duration-300"/>
            <FaXTwitter className="tw-inline-flex tw-items-center tw-p-2 tw-cursor-pointer tw-rounded-full tw-bg-gray-700 tw-mx-1.5 tw-text-4xl hover:tw-text-gray-100 hover:tw-bg-cyan-400 tw-duration-300"/>
            <FaGithub className="tw-inline-flex tw-items-center tw-p-2 tw-cursor-pointer tw-rounded-full tw-bg-gray-700 tw-mx-1.5 tw-text-4xl hover:tw-text-gray-100 hover:tw-bg-cyan-400 tw-duration-300"/>
            <FaLinkedin className="tw-inline-flex tw-items-center tw-p-2 tw-cursor-pointer tw-rounded-full tw-bg-gray-700 tw-mx-1.5 tw-text-4xl hover:tw-text-gray-100 hover:tw-bg-cyan-400 tw-duration-300"/>
        </span>
    )
}