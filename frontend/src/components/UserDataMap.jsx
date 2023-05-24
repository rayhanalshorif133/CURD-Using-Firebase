import React from 'react'
import {
    Typography, Button,
    IconButton
} from "@material-tailwind/react";



export default function UserDataMap({ userData }) {

    const viewBtn = 'rounded-none hover:bg-white hover:text-purple-500 transition duration-200 ease-in-out transform hover:scale-105';
    const editBtn = 'rounded-none hover:bg-white hover:text-cyan-500 transition duration-200 ease-in-out transform hover:scale-105';
    const deleteBtn = 'rounded-none hover:bg-white hover:text-red-500 transition duration-200 ease-in-out transform hover:scale-105';

    return (
        <>
            {userData.map(({ name, email, phone, address }, index) => {
                const isLast = index === userData.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={name}>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {name}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {email}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {address}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {phone}
                            </Typography>
                        </td>

                        <td className={classes}>
                            <div className="mb-3 flex gap-0">
                                <IconButton size='sm' color='purple' className={viewBtn}>
                                    <i className="fas fa-eye" />
                                </IconButton>
                                <IconButton size='sm' color='cyan' className={editBtn}>
                                    <i className="fas fa-edit" />
                                </IconButton>
                                <IconButton size='sm' color='red' className={deleteBtn}>
                                    <i className="fas fa-trash" />
                                </IconButton>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    )
}
