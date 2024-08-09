'use client'

import { FaCloudSunRain } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Footer = () => {
  return (
    
    <div>
        <footer className="flex flex-row justify-between items-center footer bg-blue-200 text-base-content border-base-300 border-t px-10 py-4">
            <div className="grid-flow-col items-center">
                <FaCloudSunRain className="text-4xl" />
                    <p>Forecasting weather since 1998</p>
            </div>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-2">
                <a>
                    <AiOutlineGithub className="text-2xl" />
                </a>
                <a>
                    <AiOutlineStar className="text-2xl" />
                </a>
                </div>
            </nav>
        </footer>
    </div>

  )
}

export default Footer