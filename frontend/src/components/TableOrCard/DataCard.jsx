import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import React from 'react'
import ActionsButtons from "../ActionsButtons";

export default function DataCard(props) {


    const { userData, isLoading } = props;

    return (
        <div className="p-5">
            {
                isLoading ? <>
                    isLoading
                </> : <>
                    <div class="grid grid-cols-3 gap-4">
                        {
                            userData.map(({ name, email, phone, address }, index) => {
                                return (
                                    <Card className="mt-6 w-96">
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className="mb-2 capitalize">
                                                {name}
                                                <hr />
                                            </Typography>
                                            <Typography>
                                                {email}
                                            </Typography>
                                            <Typography>
                                                {address}
                                            </Typography>
                                            <Typography>
                                                {phone}
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <ActionsButtons isView={false} />
                                        </CardFooter>
                                    </Card>
                                );
                            })
                        }
                    </div>

                </>
            }

        </div>
    )
}
