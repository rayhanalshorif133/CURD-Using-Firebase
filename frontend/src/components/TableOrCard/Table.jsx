import React, { useContext } from 'react'
import { Typography } from "@material-tailwind/react";
import UserDataMap from '../UserDataMap';

export default function Table({ isLoading }) {
    const TABLE_HEAD = ["Name", "Email", "Address", "Phone", "Actions"];

    return (
        <>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-90"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? <>
                            <tr className={isLoading == true ? 'animate-pulse' : ""}>
                                {/* middle */}
                                <td colSpan="5" className="p-4 border-b border-blue-gray-50 text-center">
                                    <Typography variant="small" color="blue-gray" className="font-normal place-content-center">
                                        {isLoading}
                                    </Typography>
                                </td>
                            </tr>
                        </> : <>
                            <UserDataMap />
                        </>
                    }
                </tbody>
            </table>
        </>
    )
}
