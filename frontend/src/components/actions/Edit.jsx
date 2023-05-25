import React, { Fragment, useContext, useState, useReducer, useEffect, Suspense } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Spinner } from "@material-tailwind/react";
import { ButtonContext } from '../ActionsButtons';
import { UserDataAndIsLoadingContext } from '../UserInfo';
import { toast } from "react-toastify";
import axios from "axios";

export default function Edit() {
    const { VITE_APP_API_URL } = import.meta.env;

    const { openEdit, handleOpenEdit, useId } = useContext(ButtonContext);
    const { isLoading, setIsLoading } = useContext(UserDataAndIsLoadingContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
    });


    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        handleOpenEdit();
        if (user.password !== user.confirmPassword) {
            toast.error('Password and Confirmation Password must be same');
            return;
        }
        delete user.confirmPassword;

        axios.put(`${VITE_APP_API_URL}/update/${useId}`, user)
            .then((response) => {
                toast.success('User Updated Successfully');
                setTimeout(() => {
                    setIsLoading(!isLoading);
                }, 1000);

            })
            .catch((error) => {
                console.log(error);
            });
    };


    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(`${VITE_APP_API_URL}/fetch/${useId}`);
            const data = await response.json();
            setUser({
                name: data.data.name,
                email: data.data.email,
                phone: data.data.phone,
                address: data.data.address,
                password: '',
                confirmPassword: ''
            });
        }
        getUser();
    }, [openEdit]);





    return (
        <>
            <Fragment>
                <Dialog open={openEdit} handler={handleOpenEdit}>
                    <DialogHeader>
                        <h4 className="text-xl font-medium text-gray-600">
                            Update User
                        </h4>
                    </DialogHeader>
                    <DialogBody divider className="text-center">
                        <form className="w-100 max-w-screen-lg sm:w-100 m-auto">
                            <div className="mb-4 flex flex-col gap-6" >
                                <Suspense fallback={<><Spinner /></>}>
                                    <Input size="md" label="Name" name="name" onChange={handleOnChange} value={user.name} />
                                    <Input size="md" label="Email" name="email" onChange={handleOnChange} value={user.email} />
                                    <Input size="md" label="Phone" name="phone" onChange={handleOnChange} value={user.phone} />
                                    <Input size="md" label="Address" name="address" onChange={handleOnChange} value={user.address} />
                                    <Input type="password" size="md" label="Password" name="password" onChange={handleOnChange} value={user.password} />
                                    <Input type="password" size="md" label="Confirmation Password" name="confirmPassword" onChange={handleOnChange} value={user.confirmPassword} />
                                </Suspense>
                            </div>
                        </form>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpenEdit}
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
