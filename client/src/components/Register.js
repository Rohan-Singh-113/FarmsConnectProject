import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import { registerUser } from '../helper/helper'


import styles from '../styles/Username.module.css';

export default function Register() {

  const navigate = useNavigate()
  const [file, setFile] = useState()
 

  const formik = useFormik({
    initialValues : {
      email: 'doyol56239@cnogs.com',
      username: 'example123',
      password : 'admin@123'
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values);
      let registerPromise = registerUser(values)
      console.log(registerPromise)
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success : <b>Register Successfully...!</b>,
        error : <b>Could not Register.</b>
      });

      registerPromise.then(function(){ navigate('/Home')});
      // registerPromise.then(function(){ navigate('/Home')});
      // console.log(values)
    }
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto bg-back1 min-h-screen max-h-screen bg-cover bg-center bg-no-repeat max-w-screen-xl mx-auto w-full h-full pt-6 p-4 flex flex-col justify-around items-center">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-60%'>
        <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-3xl font-bold'>Register</h4>
            <span className='py-4 text-lg w-2/3 text-center text-gray-500'>
                Happy to join you!
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <label  htmlFor="profile">
                  <input onChange={onUpload} className="hidden" type="file" id='profile' name='profile'  />
                  <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                    
                  </label>
                  
                  {/* <input onChange={onUpload} type="file" id='profile' name='profile' /> */}
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*' />
                  <div className="flex flex-col md:flex-row justify-center items-center">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password*' />
                  </div>
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Already Register? <Link className='text-indigo-500' to="/">Login Now</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}

