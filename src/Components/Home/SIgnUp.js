import React, { useRef } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import signup from '../../images/signup.svg'
import Loading from './Loading'

const SIgnUp = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const nameRef = useRef('')
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  if (error) {
    console.log(error)
  }
  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    console.log(user)
  }
  const handleSubmitRef = event => {
    event.preventDefault()
    const displayName = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password, displayName)
    createUserWithEmailAndPassword(email, password, displayName)
    navigate('/')
  }
  return (
    <div>
      <div>
        <div className='flex ml-[-10px] '>
          <div className='signup1 mt-7 '>
            <img src={signup} alt='' />
          </div>
          <div className='signup2 w-96 mt-[-80px]'>
            <form onSubmit={handleSubmitRef} action=''>
              <div className='hero h-screen w-full '>
                <div className='hero-content  ml-40 mt-20 '>
                  <div className='card bg-primary text-white'>
                    <div className='card-body text-white w-96 '>
                      <div className='form-control '>
                        <h1 className='py-5 text-center text-white font-semibold text-5xl '>
                          Sign Up
                        </h1>
                        <label className='label'>
                          <span className='label-text text-white'>Name</span>
                        </label>
                        <input
                          ref={nameRef}
                          type='text'
                          placeholder='Your Name'
                          className='input input-bordered text-black'
                        />
                        <label className='label'>
                          <span className='label-text text-white'>Email</span>
                        </label>
                        <input
                          ref={emailRef}
                          type='text'
                          placeholder='email'
                          className='input input-bordered text-black'
                        />
                      </div>
                      <div className='form-control'>
                        <label className='label'>
                          <span className='label-text text-white'>
                            Password
                          </span>
                        </label>
                        <input
                          ref={passwordRef}
                          type='password'
                          placeholder='password'
                          className='input input-bordered text-black'
                        />
                        <label className='label '>
                          <a
                            href='#'
                            className='label-text-alt link link-hover text-white'
                          >
                            Forgot password?
                          </a>
                        </label>{' '}
                        <h1>
                          Already have an Account?
                          <Link
                            to={'/login'}
                            className='underline text-white ml-2'
                          >
                            {' '}
                            Please Login
                          </Link>{' '}
                        </h1>
                      </div>
                      <div className='form-control mt-6'>
                        <button className='btn  hover:bg-primary hover:text-white hover:border-white font-bold bg-white text-black'>
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SIgnUp
