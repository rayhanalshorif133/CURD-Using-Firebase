import { IconButton } from '@material-tailwind/react';
import React, { useReducer, createContext, useState } from 'react'
import View from './modals/View';



export const ButtonContext = createContext();

export default function ActionsButtons({ isView, id }) {
    const viewBtn = 'rounded-none hover:bg-white hover:text-purple-500 transition duration-200 ease-in-out transform hover:scale-105';
    const editBtn = 'rounded-none hover:bg-white hover:text-cyan-500 transition duration-200 ease-in-out transform hover:scale-105';
    const deleteBtn = 'rounded-none hover:bg-white hover:text-red-500 transition duration-200 ease-in-out transform hover:scale-105';

    const [openView, setOpenView] = useState(false);
    const [useId, setUseId] = useState(null);
    const handleOpenView = (id) => {
        setOpenView(!openView);
        if (useId === null) {
            setUseId(id);
        }
    };

    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenEdit = () => openEdit(!openEdit);

    const value = {
        openView,
        handleOpenView,
        openEdit,
        handleOpenEdit,
        useId
    }

    return (
        <>
            <div className="mb-3 flex gap-0">
                {
                    isView ? <>
                        <IconButton size='sm' color='purple' className={viewBtn} onClick={() => {
                            handleOpenView(id);
                        }}>
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
            <ButtonContext.Provider value={value}>
                <View />
            </ButtonContext.Provider>
        </>
    )
}
