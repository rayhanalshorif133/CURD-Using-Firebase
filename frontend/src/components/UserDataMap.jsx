import React from 'react'
import { Typography } from "@material-tailwind/react";
import ActionsButtons from './ActionsButtons';



export default function UserDataMap({ userData }) {


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
                            <ActionsButtons isView={true} />
                        </td>
                    </tr>
                );
            })}
        </>
    )
}
