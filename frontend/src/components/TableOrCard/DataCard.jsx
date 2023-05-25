import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Spinner
} from "@material-tailwind/react";
import React, { useContext } from 'react'
import ActionsButtons from "../ActionsButtons";
import { UserDataAndIsLoadingContext } from "../UserInfo";

export default function DataCard() {


    const { userData, isLoading } = useContext(UserDataAndIsLoadingContext);

    const grid = 'grid grid-cols-3 gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1 w-full';

    return (
        <div className="p-5">
            {
                isLoading ? <>
                    <div className="text-center">
                        <Spinner color="blue" size="xl" className="text-center m-auto" />
                    </div>
                </> : <>
                    <div className={grid}>
                        {
                            userData.map(({ _id, name, email, phone, address }, index) => {
                                return (
                                    <Card className="mt-6 w-96 md:w-80 sm:w-auto" key={index}>
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
                                            <ActionsButtons isView={false} useId={_id} />
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
