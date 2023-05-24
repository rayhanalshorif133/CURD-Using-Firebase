import { IconButton } from '@material-tailwind/react';
import React from 'react'

export default function ActionsButtons({ isView }) {
    const viewBtn = 'rounded-none hover:bg-white hover:text-purple-500 transition duration-200 ease-in-out transform hover:scale-105';
    const editBtn = 'rounded-none hover:bg-white hover:text-cyan-500 transition duration-200 ease-in-out transform hover:scale-105';
    const deleteBtn = 'rounded-none hover:bg-white hover:text-red-500 transition duration-200 ease-in-out transform hover:scale-105';

    return (
        <>
            <div className="mb-3 flex gap-0">
                {
                    isView ? <>
                        <IconButton size='sm' color='purple' className={viewBtn}>
                            <i className="fas fa-eye" />
                        </IconButton>
                    </> : <></>
                }

                <IconButton size='sm' color='cyan' className={editBtn}>
                    <i className="fas fa-edit" />
                </IconButton>
                <IconButton size='sm' color='red' className={deleteBtn}>
                    <i className="fas fa-trash" />
                </IconButton>
            </div>
        </>
    )
}
