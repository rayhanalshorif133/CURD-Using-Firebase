import React from 'react'
import {
  Typography,
  Card,
} from "@material-tailwind/react";
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';

export default function Home() {
  return (
    <>
      <Header />
      <UserInfo />
    </>
  )
}
