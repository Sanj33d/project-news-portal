import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Marquee from 'react-fast-marquee';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className=' w-11/12 mx-auto my-3 grid grid-cols-12'>
            
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;