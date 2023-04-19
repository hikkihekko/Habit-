import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import {UserPage} from '../pages/UserPage';
import {HabitList} from '../pages/HabitList';
import { Calendar } from '../pages/Calendar';

import User_profile from '../assets/logo/user_logo.png';
import Hadit_list from '../assets/logo/hadit_list.png';
import Calendar_hadit from '../assets/logo/calendar.png';
import Go_back from '../assets/logo/go_back.png';

const NavBar = () => {
    
    return(
        <>
            <nav>
                <ol className='nav_bar'>
                    <li>
                        <Link to='/User'>
                            <div className={`nav_btn `} >
                                <img src={ User_profile } alt='User_profile'  className='bnt_size'></img>
                            </div>
                        </Link>
                </li>
                    <li>
                        <Link to='HabitList'>
                            <div className={`nav_btn `} >
                                <img src={ Hadit_list } alt='Hadit_list' className='bnt_size' ></img>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='Calendar'>
                            <div className={`nav_btn `} >
                                <img src={ Calendar_hadit } alt='Calendar_hadit' className='bnt_size' ></img>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className={`nav_btn `} >
                            <img src={ Go_back } alt='Go_back' className='bnt_size' ></img>
                        </div>
                    </li>
                </ol>
            </nav>
            <Routes>
                <Route path='/User' element={<UserPage/>}/>
                <Route path='/HabitList' element={<HabitList/>}/>
                <Route path='/Calendar' element={<Calendar/>}/>
            </Routes>
        </>
    );
}

export default NavBar