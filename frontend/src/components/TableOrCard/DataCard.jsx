import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import React from 'react'

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
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                {name}
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
                                            <Button size="sm">Read More</Button>
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
