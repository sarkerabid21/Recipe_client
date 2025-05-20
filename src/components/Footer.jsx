import React from 'react';
import { FaFacebook} from 'react-icons/fa';
import { FaGooglePlusG, FaSquareThreads } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-primary text-neutral-content p-10">
  <aside>
    <img className='w-[20%]' src={"https://i.ibb.co/WWkdB1Rx/Screenshot-2025-05-20-012215.png"} alt=""/>
   
<h1 className='font-bold text-xl '>Yummies – Your Daily Dose of Deliciousness</h1>
    <p>
    Discover mouth-watering recipes from around the world, crafted with love and simplicity. Whether you're a beginner or a kitchen pro, Yummies makes cooking easy, fun, and flavorful. Taste the joy, one recipe at a time.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4 ">
        
        <a href="https://www.google.com"><FaGooglePlusG/></a>
        <a href="https://www.facebook.com/"><FaFacebook/></a>
        <a href="https://www.threads.com/"><FaSquareThreads/></a>
    
    
    
    
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;