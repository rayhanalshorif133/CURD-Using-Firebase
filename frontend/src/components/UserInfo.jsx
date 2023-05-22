import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import axios from 'axios';

const TABLE_HEAD = ["Name", "Job", "Employed", "Actions"];

const { VITE_APP_API_URL } = import.meta.env;


const URL = `${VITE_APP_API_URL}/fetch-all`;
console.log(URL);

axios.get('http://localhost:5000/api/fetch-all')
    .then((response) => {
        console.log(response);
    });


const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
];



export default function UserInfo() {
    return (
        <div className='container m-auto align-middle mt-20'>
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
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
                                            {job}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {date}
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
                    </tbody>
                </table>
            </Card>
        </div>
    )
}
