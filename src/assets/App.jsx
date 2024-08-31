import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomeScreen/>}></Route>
    <Route></Route>
    <Route></Route>
    </Routes>
    </>
  )
}
