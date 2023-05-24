import { Fragment, useState, useContext, useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner,
    Typography
} from "@material-tailwind/react";


import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
    WifiIcon,
    HomeIcon,
    TvIcon,
    FireIcon,
} from "@heroicons/react/24/solid";

import { ButtonContext } from "../ActionsButtons";

export default function View() {

    const { openView, handleOpenView, useId } = useContext(ButtonContext);
    const { VITE_APP_API_URL } = import.meta.env;
    const [userData, setUserData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        status: false
    });

    useEffect(() => {
        if (useId !== null) {
            fetch(`${VITE_APP_API_URL}/fetch/${useId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status == true) {
                        const { name, address, phone, email } = data.data;
                        setUserData({
                            name: name,
                            address: address,
                            phone: phone,
                            email: email,
                            status: true
                        });
                    }
                });
        }
    }, [useId]);


    return (
        <>
            <Fragment>
                <Dialog open={openView} handler={handleOpenView}>
                    <DialogHeader>
                        <h4 className="text-xl font-medium text-gray-600">User Details</h4>
                    </DialogHeader>
                    <DialogBody divider className="text-center">
                        {
                            userData.status === false ? <Spinner className="m-auto text-center" /> : <>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    {userData.name !== '' ? userData.name : <Spinner />}
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    <i className="fa fa-envelope" aria-hidden="true"></i> {userData.email !== '' ? userData.email : <Spinner />}
                                </Typography>
                                <Typography color="deep-orange" className="font-medium" textGradient>
                                    <i className="fa fa-home" aria-hidden="true"></i> {userData.address !== '' ? userData.address : <Spinner />}
                                </Typography>
                                <Typography color="green" className="font-medium" textGradient>
                                    <i className="fa fa-phone" aria-hidden="true"></i> {userData.phone !== '' ? userData.phone : <Spinner />}
                                </Typography>
                            </>
                        }

                    </DialogBody>
                    <DialogFooter>
                        <Button variant="gradient" color="green" onClick={handleOpenView}>
                            <span>Ok</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Fragment>
        </>
    )
}
