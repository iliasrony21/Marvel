import React from 'react'
import caro1 from '../images/carousal.jpg'
import caro2 from '../images/carousal2.jpg'
import caro3 from '../images/caro3.jpg'
import caro4 from '../images/caro4.jpg'
import caro5 from '../images/caro5.jpg'
import './Banner.css'
import auth from '../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'

const Banner = () => {
  const [user] = useAuthState(auth)
  return (
    <div className=''>
      {user ? (
        <div className='carousel w-full caroheight '>
          <div
            id='slide1'
            className='carousel-item relative w-full caroheights'
          >
            <img src={caro1} className='w-full imagess' alt='' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a
                href='#slide4'
                className=' text-6xl border-none text-white h-40'
              >
                ❮
              </a>
              <div className='ml-[-60px]'>
                <h1
                  className='text-white font-bold mt-[-70px] ml-[-460px]
            mb-7'
                >
                  THIS FEBRUARY
                </h1>
                <p className='text-4xl font-bold text-white ml-[-460px]'>
                  MCU VARAIANT COVERS CELEBRATE <br /> THE EPIC FILMS OF THE
                  INFINITY <br /> SAGA
                </p>
                <button className='btn rounded-none bg-none w-40 h-5 buttons ml-[-460px] mt-5 text-white hover:bg-[#E62429]'>
                  FIRST LOOK!
                </button>
              </div>
              <a href='#slide2' className=' bg-none text-white text-6xl h-40'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide2' className='carousel-item relative w-full h-4/5'>
            <img src={caro2} className='w-full imagess' alt='' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide1' className='bg-none text-white text-6xl h-40'>
                ❮
              </a>
              <div className='ml-[-60px]'>
                <h1
                  className='text-white font-bold mt-[-70px] ml-[-460px]
            mb-7'
                >
                  THIS FEBRUARY
                </h1>
                <p className='text-4xl font-bold text-white ml-[-460px]'>
                  MCU VARAIANT COVERS CELEBRATE <br /> THE EPIC FILMS OF THE
                  INFINITY <br /> SAGA
                </p>
                <button className='btn rounded-none bg-none w-40 h-5 buttons ml-[-460px] mt-5 text-white'>
                  FIRST LOOK!
                </button>
              </div>
              <a href='#slide3' className='bg-none text-white text-6xl h-40'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide3' className='carousel-item relative w-full h-4/5'>
            <img src={caro3} className='w-full imagess' alt='' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide2' className='bg-none text-white text-6xl h-40'>
                ❮
              </a>
              <div className='ml-[-60px]'>
                <h1
                  className='text-white font-bold mt-[-70px] ml-[-460px]
            mb-7'
                >
                  THIS FEBRUARY
                </h1>
                <p className='text-4xl font-bold text-white ml-[-460px]'>
                  MCU VARAIANT COVERS CELEBRATE <br /> THE EPIC FILMS OF THE
                  INFINITY <br /> SAGA
                </p>
                <button className='btn rounded-none bg-none w-40 h-5 buttons ml-[-460px] mt-5 text-white'>
                  FIRST LOOK!
                </button>
              </div>
              <a href='#slide4' className='bg-none text-white text-6xl h-40'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide4' className='carousel-item relative w-full h-4/5'>
            <img src={caro4} className='w-full imagess  imagess' alt='' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a
                href='#slide3'
                className='bg-none text-white text-6xl  shadow-lg'
              >
                ❮
              </a>
              <div className='ml-[-60px]'>
                <h1
                  className='text-white font-bold mt-[-70px] ml-[-460px]
            mb-7'
                >
                  THIS FEBRUARY
                </h1>
                <p className='text-4xl font-bold text-white ml-[-460px]'>
                  MCU VARAIANT COVERS CELEBRATE <br /> THE EPIC FILMS OF THE
                  INFINITY <br /> SAGA
                </p>
                <button className='btn rounded-none bg-none w-40 h-5 buttons ml-[-460px] mt-5 text-white'>
                  FIRST LOOK!
                </button>
              </div>
              <a href='#slide5' className='bg-none text-white text-6xl h-40'>
                ❯
              </a>
            </div>
          </div>

          <div id='slide5' className='carousel-item relative w-full h-4/5'>
            <img src={caro5} className='w-full imagess' alt='' />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide4' className='bg-none text-white text-6xl h-40'>
                ❮
              </a>
              <div className='ml-[-60px]'>
                <h1
                  className='text-white font-bold mt-[-70px] ml-[-460px]
            mb-7'
                >
                  THIS FEBRUARY
                </h1>
                <p className='text-4xl font-bold text-white ml-[-460px]'>
                  MCU VARAIANT COVERS CELEBRATE <br /> THE EPIC FILMS OF THE
                  INFINITY <br /> SAGA
                </p>
                <button className='btn rounded-none bg-none w-40 h-5 buttons ml-[-460px] mt-5 text-white'>
                  FIRST LOOK!
                </button>
              </div>
              <a href='#slide1' className='bg-none text-white text-6xl h-40'>
                ❯
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Banner
