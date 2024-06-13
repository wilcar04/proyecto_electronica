import { FaRegCheckSquare } from "react-icons/fa";

export default function Attendance(params) {

    const { name, id, email, date } = params

    return (
        <div className="bg-neutral-700 rounded-lg flex">
            <div className="w-28 bg-green-700 flex items-center justify-center rounded-l-lg" >
                <FaRegCheckSquare className="size-14 text-neutral-200"/>
            </div>
            <div className=" px-5 py-4 text-neutral-200">
                <h5 className="text-xl font-semibold mb-3">{date}</h5>
                <div className="pl-8">
                    <p className="text-sm font-light mb-1">{name}</p>
                    <p className="text-sm font-light mb-1">{id}</p>
                    <p className="text-sm font-light">{email}</p>
                </div>
            </div>
        </div>
    )
}
