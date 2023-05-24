import { Fragment, useState, useContext, useEffect, useReducer } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Spinner, Typography } from "@material-tailwind/react";
import { ButtonContext } from "../ActionsButtons";
import { actionBtnReducer } from "../../libs/Actions";

export default function View() {

    const { VITE_APP_API_URL } = import.meta.env;

    const { openView, handleOpenView, useId } = useContext(ButtonContext);

    const initialState = {
        useId: useId,
        name: '',
        address: '',
        phone: '',
        email: '',
        status: false
    };

    const [userState, dispatch] = useReducer(actionBtnReducer, initialState);

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(`${VITE_APP_API_URL}/fetch/${useId}`);
            const data = await response.json();
            dispatch({ type: 'view', payload: data });
        }
        getUser();
    }, [handleOpenView]);


    return (
        <>
            <Fragment>
                <Dialog open={openView} handler={handleOpenView}>
                    <DialogHeader>
                        <h4 className="text-xl font-medium text-gray-600">User Details</h4>
                    </DialogHeader>
                    <DialogBody divider className="text-center">
                        {
                            userState.status === false ? <Spinner className="m-auto text-center" /> : <>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    {userState.name !== '' ? userState.name : <Spinner />}
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    <i className="fa fa-envelope" aria-hidden="true"></i> {userState.email !== '' ? userState.email : <Spinner />}
                                </Typography>
                                <Typography color="brown" className="font-medium" textGradient>
                                    <i className="fa fa-home" aria-hidden="true"></i> {userState.address !== '' ? userState.address : <Spinner />}
                                </Typography>
                                <Typography color="green" className="font-medium" textGradient>
                                    <i className="fa fa-phone" aria-hidden="true"></i> {userState.phone !== '' ? userState.phone : <Spinner />}
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
