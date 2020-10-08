import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/infrastrucure.png";
import Common from "./Common";


const About=()=>{
    return(<>
       <Common 
       name="Welcome to About page" 
       imgsrc={web}
       visit="/Contact"
       btname="Contact Now"
        />
    </>
    );
};

export default About;