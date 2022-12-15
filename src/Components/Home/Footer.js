import React from 'react'
import { Link } from 'react-router-dom'
import mr from '../../images/mr.png'
import insider from '../../images/insider.png'
import footeru from '../../images/footeru.png'
import { AiFillFacebook } from 'react-icons/ai'
import { SiTwitter } from 'react-icons/si'
import { AiOutlineInstagram } from 'react-icons/ai'
import { IoLogoTumblr } from 'react-icons/io'
import { ImYoutube } from 'react-icons/im'
import { FaSnapchatGhost } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-primary'>
      <footer className='footer pt-20 p-10 bg-primary text-neutral-content'>
        <div>
          <img className='pl-20' src={mr} alt='' />
        </div>
        <div className='text-white ml-10'>
          <Link className='link link-hover font-bold'>ABOUT MARVEL</Link>
          <Link className='link link-hover font-bold'>HELP/FAQS</Link>
          <Link className='link link-hover font-bold'>CAREERS</Link>
          <Link className='link link-hover font-bold'>INTERNSHIPS</Link>
        </div>
        <div className='text-white ml-10'>
          <Link className='link link-hover '>ADVERTISING</Link>
          <Link className='link link-hover '>DISNEY+</Link>
          <Link className='link link-hover '>MARVELHQ.COM</Link>
          <Link className='link link-hover '>
            REDEEM DIGITAL <br /> COMICS
          </Link>
        </div>
        <div className='flex ml-10'>
          <div>
            <img className='h-7 ' src={insider} alt='' />
          </div>
          <div>
            <Link className='ml-5 font-bold text-white'>MARVEL INSIDER</Link>
            <p className='ml-5'>Get Rewarded for Being a Marvel Fan</p>
            <div className='flex mt-10 ml-[-60px]'>
              <div>
                <img className='h-7' src={footeru} alt='' />
              </div>
              <div>
                <Link className='ml-5 text-white font-bold'>
                  MARVEL UNLIMITED
                </Link>
                <p className='ml-5'>Access Over 30,000+ Digital Comics</p>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-7'>
          <h1 className='text-white font-bold mb-5'>FOLLOW MARVEL</h1>
          <div className='flex ml-[-10px]'>
            <span className='mr-10 '>
              <AiFillFacebook className='w-10 h-5' />
            </span>
            <span className='mr-10 '>
              <SiTwitter className='w-10 h-5' />
            </span>
            <span className='mr-10 '>
              <AiOutlineInstagram className='w-10 h-5' />
            </span>
            <span className='mr-10 '>
              <IoLogoTumblr className='w-10 h-5' />
            </span>
            <br />
          </div>
          <div className='flex mt-5 ml-[-10px]'>
            <span className='mr-10'>
              <ImYoutube className='w-10 h-5' />
            </span>
            <span className='mr-10'>
              <FaSnapchatGhost className='w-10 h-5' />
            </span>
            <span className='mr-10'>
              <BsPinterest className='w-10 h-5' />
            </span>
          </div>
        </div>
      </footer>
      <div className='pb-20'>
        <div className=' text-white text-xs ml-44 pt-10 '>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            Terms of Use{' '}
          </span>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            Privacy Policy{' '}
          </span>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            Your California Privacy Rights
          </span>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            Do Not sell My Personal Information{' '}
          </span>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            Children's Online Privacy Policy
          </span>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            License Agreement{' '}
          </span>
          <span className='mr-8 text-gray-500 hover:text-white hover:cursor-pointer'>
            Interest-Based Ads{' '}
          </span>
        </div>
        <div className='text-gray-500 text-xs mt-5 text-center '>
          <span className='mr-7 hover:text-white hover:cursor-pointer inline'>
            Marvel Insider Terms
          </span>

          <span>
            <AiOutlineCopyright className='text-gray-500 mr-1 mt-[-2px] inline' />
            2022 MARVEL
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
