// import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../Helpers/CustomToast'
export default function Toastify() {
    const handlesuccess = () => Toast('success', 'successfully saved!')
    const handlefailure = () => Toast('error', 'failed!')
    const handlewarning = () => Toast('warning', 'warning message!')
    const handleinfo = () => Toast('info', 'info message!')
    return (
        <>
            <button onClick={handlesuccess} className='mt-2'>sucess</button><br />
            <button onClick={handlefailure} className='mt-2'>failure</button><br />
            <button onClick={handlewarning} className='mt-2'>warning</button><br />
            <button onClick={handleinfo} className='mt-2'>info</button><br />

            <ToastContainer
                position='top-center'
                hideProgressBar={true}
            />
        </>
    )
}

