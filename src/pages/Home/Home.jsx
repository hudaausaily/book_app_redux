import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
