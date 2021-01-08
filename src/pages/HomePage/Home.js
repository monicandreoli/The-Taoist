import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { homeObjOne, homeObjThree, homeObjTwo } from '../../components/infoSection/Data';
import InfoSection from '../../components/infoSection/InfoSection';
import  Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/services/Services';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <Banner />
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Services />
           <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
};

export default Home
