import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Consulting-Solutions.jpg";
import Common from "./Common";


const Home=()=>{
    return(<>
        <Common
         name="Glow your business with" 
       imgsrc={web}
       visit="/Service"
       btname="Get Started"
        />
     </>
     );
};

export default Home;