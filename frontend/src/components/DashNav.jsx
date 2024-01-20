import React from "react";

export default function DashNav(){
    return(
        <>
            <div className="flex justify-between items-center p-3 px-8">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Logo" className="w-10 h-10"/>
                <ul className="flex gap-8 ">
                    <li>
                        Products
                    </li>
                    <li>
                        Orders
                    </li>
                    <li>
                        Users
                    </li>
                </ul>
                <input type="text" placeholder="Search" className="w-[15vw] border border-solid border-gray-200 rounded p-1 px-2"/>
            </div>
        </>
    )
}