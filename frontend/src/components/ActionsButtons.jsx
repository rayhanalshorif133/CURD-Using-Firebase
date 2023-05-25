import { IconButton, Spinner } from '@material-tailwind/react';
import React, { createContext, useState, Suspense, useContext } from 'react'
import View from './actions/View';
import Edit from './actions/Edit';
import { handleDelete } from './actions/Delete';
import { UserDataAndIsLoadingContext } from './UserInfo';



export const ButtonContext = createContext();

export default function ActionsButtons({ isView, useId }) {
    const viewBtn = 'rounded-none hover:bg-white hover:text-purple-500 transition duration-200 ease-in-out transform hover:scale-105';
    const editBtn = 'rounded-none hover:bg-white hover:text-cyan-500 transition duration-200 ease-in-out transform hover:scale-105';
    const deleteBtn = 'rounded-none hover:bg-white hover:text-red-500 transition duration-200 ease-in-out transform hover:scale-105';

    const { isLoading, setIsLoading } = useContext(UserDataAndIsLoadingContext);

    const [openView, setOpenView] = useState(false);
    const handleOpenView = () => {
        setOpenView(!openView)
    };

    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    };

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
                            handleOpenView();
                        }}>
                            <i className="fas fa-eye" />
                        </IconButton>
                    </> : <></>
                }
                <IconButton size='sm' color='cyan' className={editBtn} onClick={() => {
                    handleOpenEdit();
                }}>
                    <i className="fas fa-edit" />
                </IconButton>
                <IconButton size='sm' color='red' className={deleteBtn} onClick={() => {
                    handleDelete(useId, setIsLoading, isLoading);
                }}>
                    <i className="fas fa-trash" />
                </IconButton>
            </div>
            <ButtonContext.Provider value={value}>
                <Suspense fallback={<Spinner />}>
                    <View />
                    <Edit />
                </Suspense>
            </ButtonContext.Provider>
        </>
    )
}
