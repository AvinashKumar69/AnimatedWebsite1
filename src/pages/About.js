import React from "react";
import web from "../Images/about1.jpg";
import Common from "../helpers/Common";

const About = () => {

    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default About;
