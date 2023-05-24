import { Card, Chip, Button, Switch } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect } from 'react';
import AddNewUser from './AddNewUser';
import Table from "./TableOrCard/Table";
import DataCard from "./TableOrCard/DataCard";


export const FetchDataContext = React.createContext();
export const UserDataAndIsLoadingContext = React.createContext();

export default function UserInfo() {

    const [userData, setUserData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [tableCard, setTableCard] = React.useState(true);
    const { VITE_APP_API_URL } = import.meta.env;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);



    const handleSwitch = () => {
        setTableCard(!tableCard);
    };


    const fetchData = async () => {
        const URL = `${VITE_APP_API_URL}/fetch-all`
        const response = await axios.get(URL);
        const { status, data, message } = response.data;

        if (status == true) {
            if (data.length == 0) {
                setIsLoading("No data found");
                return;
            }
            setUserData(data);
            setIsLoading(false);
        }

    };



    useEffect(() => {
        fetchData();
        setTableCard(!tableCard);
        setTableCard(!tableCard);
    }, [isLoading]);

    return (
        <div className='container m-auto align-middle mt-20'>
            <Card className="overflow-scroll h-full w-full">
                <div className="flex justify-between mb-3">
                    <Button size="sm" onClick={handleOpen} variant="gradient" color="green" className="mr-6">Add New</Button>
                    <div className="flex gap-2">
                        <Chip color="purple" value="Card" />
                        <Switch id="info" color="info" defaultChecked onChange={handleSwitch} />
                        <Chip color="teal" value="Table" />
                    </div>
                </div>
                <FetchDataContext.Provider value={{ setIsLoading, open, setOpen, handleOpen, }}>
                    <AddNewUser />
                </FetchDataContext.Provider>
                <UserDataAndIsLoadingContext.Provider value={{ userData, isLoading }}>
                    {
                        tableCard ? <>
                            <Table />
                        </> : <>
                            <DataCard />
                        </>
                    }
                </UserDataAndIsLoadingContext.Provider>
            </Card>
        </div>
    )
}
