import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate'
import { useAuthStore } from '../store/store'
import logo from '../public/logo.png'
// import backimg from '../assets/background2.jpg'

import styles from '../styles/Username.module.css';

export default function Username() {

  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues: {
      username: 'example123'
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      setUsername(values.username);
      navigate('/password')
    }
  })

  return (
    <div className="container mx-auto bg-back1 min-h-screen max-h-screen bg-cover bg-center bg-no-repeat max-w-screen-xl w-full h-full pt-6 p-4 flex flex-col justify-around items-center">
       {/* <div className="w-44 h-44 mx-auto overflow-hidden rounded-full">
          <img className="rounded-full " objectFit="cover" src={backimg} alt="About" />
        </div> */}
      <Toaster position='top-center' reverseOrder={false}></Toaster>

        {/* <img src={logo} alt="logo" /> */}
      <div className='flex justify-center items-center h-60%'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            {/* <img className="w-20 h-16"  src={logo} alt="logo" /> */}
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore FarmConnect by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            {/* <div className='profile flex justify-center py-4'>
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div> */}
            <div className='flex justify-center py-4'>
            <img className="w-40 h-32"  src={logo} alt="logo" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
              <button className={styles.btn} type='submit'>Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Not a Member <Link className='text-indigo-500' to="/register">Register Now</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}
