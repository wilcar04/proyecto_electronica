import { RiUser6Fill } from "react-icons/ri";
import { RiUser4Fill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";

export default function Card(params) {
    const imageList = [
        <RiUser6Fill className="size-14 text-neutral-700"/>,
        <RiUser4Fill className="size-14 text-neutral-700"/>, 
        <RiUser3Fill className="size-14 text-neutral-700"/>, 
        <LuUser2 className="size-14 text-neutral-700"/>, 
        <FaUserAlt className="size-14 text-neutral-700"/>, 
    ]

    const { name, id, email } = params

    return (
        <div className="bg-white rounded-lg ">
            <div className=" h-28 bg-blue-400 flex items-center justify-center rounded-t-lg">
                {imageList[(Math.floor(Math.random() * imageList.length))]}
            </div>
            <div className="text-black py-5 pl-8">
                <h4 className=" font-semibold text-xl mb-4">{name}</h4>
                <p className=" font-light mb-2 text-sm">{id}</p>
                <p className=" font-light text-sm">{email}</p>
            </div>
        </div>
    )
}