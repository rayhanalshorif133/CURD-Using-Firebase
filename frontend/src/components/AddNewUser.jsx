import {
    Button,
    Checkbox,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Typography
} from "@material-tailwind/react";
import axios from "axios";

import React, { Fragment, useState } from 'react';
import { toast } from "react-toastify";
import { FetchDataContext } from "./UserInfo";


export default function AddNewUser() {

    const {setIsLoading} = React.useContext(FetchDataContext);

    const [open, setOpen] = useState(false);
    const { VITE_APP_API_URL } = import.meta.env;
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
    });
    const handleOpen = () => setOpen(!open);

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(!open);
        if (user.password !== user.confirmPassword) {
            toast.error('Password and Confirmation Password must be same');
            return;
        }

        delete user.confirmPassword;
        axios.post(`${VITE_APP_API_URL}/create`, user)
            .then((response) => {
                console.log(response);
                setIsLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });


    };

    return (
        <>
            <div className="m-3 justify-center">
                <Button size="sm" onClick={handleOpen} variant="gradient" color="green">Add New</Button>
            </div>
            <Fragment>
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Add New User</DialogHeader>
                    <DialogBody divider>
                        <form className="w-100 max-w-screen-lg sm:w-100 m-auto">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="md" label="Name" name="name" onChange={handleOnChange} />
                                <Input size="md" label="Email" name="email" onChange={handleOnChange} />
                                <Input size="md" label="Phone" name="phone" onChange={handleOnChange} />
                                <Input size="md" label="Address" name="address" onChange={handleOnChange} />
                                <Input type="password" size="md" label="Password" name="password" onChange={handleOnChange} />
                                <Input type="password" size="md" label="Confirmation Password" name="confirmPassword" onChange={handleOnChange} />
                            </div>
                            <Checkbox
                                label={
                                    (
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                        >
                                            I agree the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-blue-500"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    )
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                        </form>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={handleSubmit}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Fragment>
        </>
    )
}
