import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../Loginpage/LoginScreen'

export const Routerpaths = () => {
    return (
        <div>
            <Routes>
                <Route element={<LoginScreen />} path='/' />
            </Routes>
        </div>
    )
}
