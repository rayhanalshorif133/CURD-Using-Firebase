import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect } from 'react';
import AddNewUser from './AddNewUser';


export default function UserInfo() {

    const [userData, setUserData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { VITE_APP_API_URL } = import.meta.env;

    const TABLE_HEAD = ["Name", "Email", "Address", "Phone", "Actions"];

    const fetchData = async () => {
        const URL = `${VITE_APP_API_URL}/fetch-all`
        const response = await axios.get(URL);
        const { status, data, message } = response.data;

        if (status == true) {
            if(data.length == 0){
                setIsLoading("No data found");
                return;
            }
            setUserData(data);
            setIsLoading(false);
        }

    };


    useEffect(() => {
        fetchData();
    }, [isLoading]);

    return (
        <div className='container m-auto align-middle mt-20'>
            <Card className="overflow-scroll h-full w-full">
                <AddNewUser />
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
                                <tr className={isLoading == true? 'animate-pulse' : ""}>
                                    {/* middle */}
                                    <td colspan="5" className="p-4 border-b border-blue-gray-50 text-center">
                                        <Typography variant="small" color="blue-gray" className="font-normal place-content-center">
                                            {isLoading}
                                        </Typography>
                                    </td>
                                </tr>
                            </> : <>
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
                                                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                                                    Edit
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        }
                    </tbody>
                </table>
            </Card>
        </div>
    )
}
