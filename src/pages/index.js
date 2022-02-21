import React, {useState} from 'react'
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InforSection/Data';
import Navbar from '../components/Navbar'
import Process from '../components/Process';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Solutions from '../components/Solutions';


const Home = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {

            setIsOpen(!isOpen);
        };
            








    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            
            <InforSection  {...homeObjOne} />
            <Services />
            {/* <InforSection  {...homeObjTwo} /> */}
            <Process />
            <Blog />
            <Solutions />
            
            <Footer />
        </>
    );
};

export default Home
