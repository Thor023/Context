import React from 'react'
import Footer from '../components/Footer.js';
import Galeria from "../components/Galeria.jsx";
import Navbar from '../components/Navbar.jsx';


const Home =()=> {
    return (
        <div id="Home">
            <div className='container-header-home'>
            <Navbar />

            <h1>Natural Pic</h1>

            </div>
            
            <Galeria />
            <Footer />
        </div>
    )
 }

export default Home