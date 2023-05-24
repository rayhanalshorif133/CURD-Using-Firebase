import React from 'react';
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import { useEffect } from 'react';
import axios from 'axios';
import UserInfo from './../components/UserInfo';


export default function Home() {

  const { VITE_APP_API_URL } = import.meta.env;

  useEffect(() => {
    const fetchData = async () => {
      var URL = `${VITE_APP_API_URL}/fetch-all`;
       URL = 'http://localhost:5000/test';
      const response = await axios.get(URL);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <UserInfo />
    </>
  )
}
