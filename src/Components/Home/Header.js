import React, { useState } from 'react'
import './Header.css'
import inlogo from '../../images/in.png'
import marvel from '../../images/marvel.png'
import u from '../../images/u.png'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from './Loading'
import caro1 from '../../images/carousal.jpg'
import caro2 from '../../images/carousal2.jpg'
import caro3 from '../../images/caro3.jpg'
import caro4 from '../../images/caro4.jpg'

import comics1 from '../../images/comics/comics1.jpg'
import comics2 from '../../images/comics/comics2.jpg'
import comics3 from '../../images/comics/comics3.jpg'
import comics4 from '../../images/comics/comics4.jpg'
import comics5 from '../../images/comics/comics5.jpg'
import comics6 from '../../images/comics/comics6.jpg'

import ch1 from '../../images/character/ch1.jpg'
import ch2 from '../../images/character/ch2.jpg'
import ch3 from '../../images/character/ch3.jpg'
import ch4 from '../../images/character/ch4.jpg'
import ch5 from '../../images/character/ch5.jpg'
import ch6 from '../../images/character/ch6.png'

import mo1 from '../../images/Movies/mo1.jpg'
import mo2 from '../../images/Movies/mo2.jpg'
import mo3 from '../../images/Movies/mo3.jpg'
import mo4 from '../../images/Movies/mo4.jpg'
import mo5 from '../../images/Movies/mo5.jpg'
import mo6 from '../../images/Movies/mo6.jpg'

import t1 from '../../images/tv show/t1.jpg'
import t2 from '../../images/tv show/t2.jpg'
import t3 from '../../images/tv show/t3.jpg'
import t4 from '../../images/tv show/t4.jpg'
import t5 from '../../images/tv show/t5.jpg'
import t6 from '../../images/tv show/t6.jpg'

import g1 from '../../images/Games/g1.jpg'
import g2 from '../../images/Games/g2.png'
import g3 from '../../images/Games/g3.jpg'
import g4 from '../../images/Games/g4.jpg'
import g5 from '../../images/Games/g5.jpg'
import g6 from '../../images/Games/g6.jpg'

const Header = () => {
  const cardAll = [
    {
      id: '1',
      image: caro1,
      name: 'COMICS',
      desc: 'New MCU Variant Covers Celebrate the Epic Phase Three Films of the Infinity Sage'
    },
    {
      id: '2',
      image: caro2,
      name: 'COMICS',
      desc: "December 7's New Marvel Comics: The Full List"
    },
    {
      id: '3',
      image: caro3,
      name: 'PODCASTS',
      desc: "Marvel and SiriusXM's First-Ever Podcast Crossover Event, 'Marvel's Wastelanders' Premieres Today!"
    },
    {
      id: '4',
      image: caro4,
      name: 'COMICS',
      desc: "'Wasp' #1 First Look Pits Janet & Nadia Against a Classic Super Villain"
    }
  ]
  //comics
  const comics = [
    {
      id: '1',
      image: comics1,
      name: 'Invincible Iron Man (2022) #1',
      desc: '2022'
    },
    {
      id: '2',
      image: comics2,
      name: 'Dark Web: X-Men (2022) #1',
      desc: '2022'
    },
    {
      id: '3',
      image: comics3,
      name: 'Monica Rambeau: Photon (2022) #1',
      desc: '2022'
    },
    {
      id: '4',
      image: comics4,
      name: 'Planet Hulk: Worldbreaker (2022) #2',
      desc: '2022'
    },
    {
      id: '5',
      image: comics5,
      name: 'Deadpool (2022) #2',
      desc: '2022'
    },
    {
      id: '6',
      image: comics6,
      name: 'The Amazing Spider-Man(2022) #15',
      desc: '2022'
    }
  ]
  const characters = [
    {
      id: '1',
      image: ch1,
      name: 'SHURI'
    },
    {
      id: '2',
      image: ch2,
      name: 'SPIDER-MAN'
    },
    {
      id: '3',
      image: ch3,
      name: 'NAMOR'
    },
    {
      id: '4',
      image: ch4,
      name: 'SILK'
    },
    {
      id: '5',
      image: ch5,
      name: 'RIRI WILLIA MS'
    },
    {
      id: '6',
      image: ch6,
      name: 'MIDNIGHT ANGLES'
    }
  ]
  const movies = [
    {
      id: '1',
      image: mo1,
      name: 'Guardians of the Galaxy Volume 3',
      desc: 'MAY 5, 2023'
    },
    {
      id: '2',
      image: mo2,
      name: 'Ant-Man and the wasp: Quantumania',
      desc: 'FEB 17, 2023'
    },
    {
      id: '3',
      image: mo3,
      name: 'Black Panther: Wakanda Forever',
      desc: '2022'
    },
    {
      id: '4',
      image: mo4,
      name: 'Thor: Love and Thunder',
      desc: '2022'
    },
    {
      id: '5',
      image: mo5,
      name: 'Doctor Strange in the Multiverse of Madness ',
      desc: '2022'
    },
    {
      id: '6',
      image: mo6,
      name: 'Spider-Man: No Way Home',
      desc: ' 2021'
    }
  ]
  const tv = [
    {
      id: '1',
      image: t1,
      name: 'The Guardians of the Galaxy Holiday Special',
      desc: 'NOV 25, 2022'
    },
    {
      id: '2',
      image: t2,
      name: 'Werewolf By Night',
      desc: '2022'
    },
    {
      id: '3',
      image: t3,
      name: 'She-Hulk: Attorney at-Law',
      desc: '2022'
    },
    {
      id: '4',
      image: t4,
      name: 'I Am Groot',
      desc: '2022'
    },
    {
      id: '5',
      image: t5,
      name: 'Ms.Marvel',
      desc: '2022'
    },
    {
      id: '6',
      image: t6,
      name: 'Moon Knight',
      desc: '2022'
    }
  ]
  const games = [
    {
      id: '1',
      image: g1,
      name: 'Marvel Midnight Suns',
      desc: 'DEC 2, 2022'
    },
    {
      id: '2',
      image: g2,
      name: 'Marvel Snap',
      desc: '2022'
    },
    {
      id: '3',
      image: g3,
      name: 'Marvel Guardians of the Galaxy',
      desc: '2021'
    },
    {
      id: '4',
      image: g4,
      name: 'Marvel Future Revolution',
      desc: '2022'
    },
    {
      id: '5',
      image: g5,
      name: 'Marvel Spider-Man: MIles Morales',
      desc: '2020'
    },
    {
      id: '6',
      image: g6,
      name: 'Marvel Contest of Champions',
      desc: '2022'
    }
  ]

  const [newsShown, setNewsShown] = useState(false)
  const [comicShown, setComicShown] = useState(false)
  const [characterShown, setCharacterShown] = useState(false)
  const [movieShown, setMovieShown] = useState(false)
  const [tvShown, setTvShown] = useState(false)
  const [gameShown, setGameShown] = useState(false)
  const [videoShown, setVideoShown] = useState(false)
  const [moreShown, setMoreShown] = useState(false)

  const [user] = useAuthState(auth)
  const [signOut, loading, error] = useSignOut(auth)
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error)
  }
  return (
    <div className='bg-primary z-40'>
      <div className='first-header flex h-14 w-full bg-primary'>
        <div>
          <hr className='vertical ml-40' />
        </div>
        <div className='flex pt-3 pl-4 pr-4'>
          <div>
            <Link to={'/'}>
              <img src={inlogo} alt='' />
            </Link>
          </div>
          <div>
            <span className=''>
              {user ? (
                <span
                  onClick={() => signOut()}
                  className='font-bold text-white text-xs pl-1 pr-2 pt-5 cursor-pointer '
                >
                  SIGN OUT
                </span>
              ) : (
                <Link to={'/login'}>
                  <span className='font-bold text-white text-xs pl-1 pr-2 pt-5'>
                    SIGN IN
                  </span>
                </Link>
              )}
            </span>
            <span className='text-white text-sm'>|</span>
            <span className='font-bold text-white text-xs pl-2'>
              <Link to='signup'>JOIN</Link>
            </span>
          </div>
        </div>
        <div>
          <hr className='vertical' />
        </div>
        <div>
          <Link to={'/'}>
            {' '}
            <img className='pl-80 pr-72 h-14' src={marvel} alt='' />
          </Link>
        </div>
        <div>
          <hr className='vertical ' />
        </div>
        <div className=''>
          <div className='flex'>
            <span>
              <img className='h-8 w-6 mt-3 ml-4 mr-3 ' src={u} alt='' />
            </span>
            <div className='leading-3 pt-2 pr-5'>
              <span className='text-white text-sm font-bold pt-5'>
                MARVEL UNLIMITED <br />
              </span>

              <span className='text-white text-xs font-bold pl-8 '>
                SUBSCRIBE
              </span>
            </div>
          </div>
        </div>
        <div>
          <hr className='vertical' />
        </div>

        <div className=''>
          <IoIosSearch className='text-white mt-5 font-bold ml-3 mr-3 ' />
        </div>
        <div>
          <hr className='vertical' />
        </div>
      </div>
      <div className='bg-primary pb-2 '>
        <hr className=' w-full vertical2 ' />
      </div>
      <ul className=' text-white ml-96 pl-10 pb-3 flex z-40'>
        <li
          onMouseEnter={() => setNewsShown(true)}
          onMouseLeave={() => setNewsShown(false)}
          className='text-xs mr-7 font-bold cursor-pointer hover:underline z-40'
        >
          NEWS
        </li>

        <li
          onMouseEnter={() => setComicShown(true)}
          onMouseLeave={() => setComicShown(false)}
          className='z-40 text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          COMICS
        </li>
        <li
          onMouseEnter={() => setCharacterShown(true)}
          onMouseLeave={() => setCharacterShown(false)}
          className='z-40 text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          CHARACTERS
        </li>
        <li
          onMouseEnter={() => setMovieShown(true)}
          onMouseLeave={() => setMovieShown(false)}
          className='z-40 text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          MOVIES
        </li>
        <li
          onMouseEnter={() => setTvShown(true)}
          onMouseLeave={() => setTvShown(false)}
          className='z-40 text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          TV SHOWS
        </li>
        <li
          onMouseEnter={() => setGameShown(true)}
          onMouseLeave={() => setGameShown(false)}
          className='z-40 text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          GAMES
        </li>
        <li
          onMouseEnter={() => setVideoShown(true)}
          onMouseLeave={() => setVideoShown(false)}
          className='text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          VIDEOS
        </li>
        <li
          onMouseEnter={() => setMoreShown(true)}
          onMouseLeave={() => setMoreShown(false)}
          className='text-xs mr-7 font-bold cursor-pointer hover:underline'
        >
          MORE
        </li>
      </ul>
      <div className='z-auto'>
        {newsShown && (
          <div className='h-full w-full text-center bg-white pb-10 pl-10  pr-20 pt-5 z-auto'>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              LATEST NEWS
            </span>{' '}
            <span className='mt-10 text-sm font-bold'>ALL NEWS</span>
            <h1 className='text-4xl text-center mt-10 mb-8 font-bold'>
              TRENDING NEWS
            </h1>
            <div className='grid grid-cols-4 ml-32 mr-32 '>
              {cardAll.map(cardss => (
                <div>
                  <div className='cards flex'>
                    <div className='card w-60 h-96 rounded-none bg-white '>
                      <figure>
                        <img className='' src={cardss.image} alt='' />
                      </figure>
                      <div className='card-body ml-[-30px] '>
                        <h2 className='card-title text-gray-500 opacity-75 mt-[-20px] text-justify'>
                          {cardss.name}
                        </h2>
                        <p className='text-justify font-bold'>{cardss.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm font-bold '>
              <span className='mr-10 text-xs text-[#C8AB76]'>SEARCH BY</span>
              <span className='mr-10 text-xs'>MOVIES</span>
              <span className='mr-10 text-xs'>COMICS</span>
              <span className='mr-10 text-xs'>TV SHOWS</span>
              <span className='mr-10 text-xs'>GAMES</span>
              <span className='mr-10 text-xs'>DIGITAL SERIES</span>
              <span className='mr-10 text-xs'>CULTURE & LIFESTYLE</span>
              <span>PODCASTS</span>
            </div>
          </div>
        )}
      </div>

      <div className=''>
        {comicShown && (
          <div className='h-full w-full text-center bg-white pb-10 pl-10  pr-20 pt-5 z-40'>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              RELEASE CALENDAR
            </span>{' '}
            <span className='mt-10 text-sm font-bold mr-5'>
              MARVEL UNLIMITED
            </span>
            <span className='mt-10 text-sm font-bold mr-5'>STORMBREAKERS</span>
            <span className='mt-10 text-sm font-bold mr-5'>READING LISTS</span>
            <span className='mt-10 text-sm font-bold mr-5'>
              PRINT SUBSCRIPTIONS
            </span>
            <span className='mt-10 text-sm font-bold mr-5'>ALL COMICS</span>
            <h1 className='text-4xl text-center mt-10 mb-8 font-bold'>
              LATEST COMICS
            </h1>
            <div className='grid grid-cols-6 ml-20 mr-10 '>
              {comics.map(comic => (
                <div>
                  <div className='cards flex'>
                    <div className='card w-52 h-80 rounded-none bg-white mr-5 '>
                      <figure>
                        <img className='' src={comic.image} alt='' />
                      </figure>
                      <div className='card-body ml-[-30px] '>
                        <h2 className='card-title text-gray-500 opacity-75 mt-[-20px] text-justify'>
                          {comic.name}
                        </h2>
                        <p className='text-justify font-bold'>{comic.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm font-bold '>
              <span className='mr-10 text-xs text-[#C8AB76]'>SEARCH BY</span>
              <span className='mr-10 text-xs'>MOVIES</span>
              <span className='mr-10 text-xs'>COMICS</span>
              <span className='mr-10 text-xs'>TV SHOWS</span>
              <span className='mr-10 text-xs'>GAMES</span>
              <span className='mr-10 text-xs'>DIGITAL SERIES</span>
              <span className='mr-10 text-xs'>CULTURE & LIFESTYLE</span>
              <span>PODCASTS</span>
            </div>
          </div>
        )}
      </div>
      <div className=''>
        {characterShown && (
          <div className='h-full w-full text-center bg-white pb-10 pl-10  pr-20 pt-5 z-40'>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              ALL CHARACTERS
            </span>{' '}
            <span className='mt-10 text-sm font-bold mr-5'>TEAMS & GROUPS</span>
            <span className='mt-10 text-sm font-bold mr-5'>EXPLORE ALL</span>
            <h1 className='text-4xl text-center mt-10 mb-8 font-bold'>
              TRENDING IN THE UNIVERSE
            </h1>
            <div className='grid grid-cols-6 ml-20 mr-10 '>
              {characters.map(character => (
                <div>
                  <div className='cards flex'>
                    <div className='card w-52 h-80 rounded-none bg-white mr-5'>
                      <figure>
                        <img className='' src={character.image} alt='' />
                      </figure>
                      <div className='card-body ml-[-30px] '>
                        <h2 className='card-title text-gray-500 opacity-75 mt-[-20px] text-justify'>
                          {character.name}
                        </h2>
                        <p className='text-justify font-bold'>
                          {character.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm font-bold '>
              <span className='mr-10 text-xs text-[#C8AB76]'>SEARCH BY</span>
              <span className='mr-10 text-xs'>MOVIES</span>
              <span className='mr-10 text-xs'>COMICS</span>
              <span className='mr-10 text-xs'>TV SHOWS</span>
              <span className='mr-10 text-xs'>GAMES</span>
              <span className='mr-10 text-xs'>DIGITAL SERIES</span>
              <span className='mr-10 text-xs'>CULTURE & LIFESTYLE</span>
              <span>PODCASTS</span>
            </div>
          </div>
        )}
      </div>

      <div className=''>
        {movieShown && (
          <div className='h-full w-full text-center bg-white pb-10 pl-10  pr-20 pt-5 z-40'>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              THE GUARDIANS OF THE GALAXY HOLIDAY SPECIAL
            </span>{' '}
            <span className='mt-10 text-sm font-bold'>WEREWOLF BY NIGHT</span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              SHE HULK: ATTORNEY-AT-LAW
            </span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              SEE ALL TV SHOWS
            </span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              DISNEY+
            </span>
            <h1 className='text-4xl text-center mt-10 mb-8 font-bold'>
              MOVIES
            </h1>
            <div className='grid grid-cols-6 ml-20 mr-10 '>
              {movies.map(movie => (
                <div>
                  <div className='cards flex mr-5'>
                    <div className='card w-52 h-80 rounded-none bg-white '>
                      <figure>
                        <img className='' src={movie.image} alt='' />
                      </figure>
                      <div className='card-body ml-[-30px] '>
                        <h2 className='card-title text-gray-500 opacity-75 mt-[-20px] text-justify'>
                          {movie.name}
                        </h2>
                        <p className='text-justify font-bold'>{movie.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm font-bold '>
              <span className='mr-10 text-xs text-[#C8AB76]'>SEARCH BY</span>
              <span className='mr-10 text-xs'>MOVIES</span>
              <span className='mr-10 text-xs'>COMICS</span>
              <span className='mr-10 text-xs'>TV SHOWS</span>
              <span className='mr-10 text-xs'>GAMES</span>
              <span className='mr-10 text-xs'>DIGITAL SERIES</span>
              <span className='mr-10 text-xs'>CULTURE & LIFESTYLE</span>
              <span>PODCASTS</span>
            </div>
          </div>
        )}
      </div>
      <div className=''>
        {tvShown && (
          <div className='h-full w-full text-center bg-white pb-10 pl-10  pr-20 pt-5 z-40'>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              THE GUARDIANS OF THE GALAXY HOLIDAY SPECIAL
            </span>{' '}
            <span className='mt-10 text-sm font-bold'>WEREWOLF BY NIGHT</span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              SHE HULK: ATTORNEY-AT-LAW
            </span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              SEE ALL TV SHOWS
            </span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              DISNEY+
            </span>
            <h1 className='text-4xl text-center mt-10 mb-8 font-bold'>
              TV SHOWS
            </h1>
            <div className='grid grid-cols-6 ml-20 mr-10 '>
              {tv.map(t => (
                <div>
                  <div className='cards flex'>
                    <div className='card w-52 h-80 rounded-none bg-white mr-5'>
                      <figure>
                        <img className='' src={t.image} alt='' />
                      </figure>
                      <div className='card-body ml-[-30px] '>
                        <h2 className='card-title text-gray-500 opacity-75 mt-[-20px] text-justify'>
                          {t.name}
                        </h2>
                        <p className='text-justify font-bold'>{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm font-bold '>
              <span className='mr-10 text-xs text-[#C8AB76]'>SEARCH BY</span>
              <span className='mr-10 text-xs'>MOVIES</span>
              <span className='mr-10 text-xs'>COMICS</span>
              <span className='mr-10 text-xs'>TV SHOWS</span>
              <span className='mr-10 text-xs'>GAMES</span>
              <span className='mr-10 text-xs'>DIGITAL SERIES</span>
              <span className='mr-10 text-xs'>CULTURE & LIFESTYLE</span>
              <span>PODCASTS</span>
            </div>
          </div>
        )}
      </div>
      <div className=''>
        {gameShown && (
          <div className='h-full w-full text-center bg-white pb-10 pl-10  pr-20 pt-5 z-40'>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              MARVEL'S MIDNIGHT SUNS
            </span>{' '}
            <span className='mt-10 text-sm font-bold'>MARVEL SNAP</span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              MARVEL'S GUARDIANS OF THE GALAXY
            </span>
            <span className='pt-20 mr-5 text-sm  font-bold text-center'>
              SEE ALL GAMES
            </span>
            <h1 className='text-4xl text-center mt-10 mb-8 font-bold'>GAMES</h1>
            <div className='grid grid-cols-6 ml-20 mr-10'>
              {games.map(game => (
                <div>
                  <div className='cards flex mr-5'>
                    <div className='card w-52 h-80 rounded-none bg-white '>
                      <figure>
                        <img className='' src={game.image} alt='' />
                      </figure>
                      <div className='card-body ml-[-30px] '>
                        <h2 className='card-title text-gray-500 opacity-75 mt-[-20px] text-justify'>
                          {game.name}
                        </h2>
                        <p className='text-justify font-bold'>{game.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-sm font-bold '>
              <span className='mr-10 text-xs text-[#C8AB76]'>SEARCH BY</span>
              <span className='mr-10 text-xs'>MOVIES</span>
              <span className='mr-10 text-xs'>COMICS</span>
              <span className='mr-10 text-xs'>TV SHOWS</span>
              <span className='mr-10 text-xs'>GAMES</span>
              <span className='mr-10 text-xs'>DIGITAL SERIES</span>
              <span className='mr-10 text-xs'>CULTURE & LIFESTYLE</span>
              <span>PODCASTS</span>
            </div>
          </div>
        )}
      </div>

      <div></div>
    </div>
  )
}

export default Header
