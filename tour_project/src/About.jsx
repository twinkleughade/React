// import React from "react";

// const About=()=>{
//     return(
//         <>
//         <h1>about page</h1>
//         </>
//     )
// }
// export default About
const AboutPage = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Your journey begins here, Let’s Explore Together...!</p>
            </header>

            <section className="about-story">
                <h2>Our Story</h2>
               <div className="grid1">
               <img src="about1.jpg" alt="Our story" className="about-image" />
                <p>
                    Founded in <strong>[2025]</strong> by a group of avid globetrotters,<br /> 
                    our mission has always been to make travel planning seamless and enjoyable. <br />
                    Starting as a small blog sharing travel tips, <br /> we’ve grown into a platform catering to all your travel needs.
                </p>
               </div>
            </section>

            <section className="about-offerings">
                <h2>What We Offer</h2>
                <div className="grid1">
                <img src="about2.jpeg" alt="What we offer" className="about-image" />
                <ul>
                    <li><strong>Destination Guides:</strong> Insights into top destinations worldwide, from hidden gems to iconic landmarks.</li>
                    <li><strong>Travel Planning Tools:</strong> Customizable itineraries, packing checklists, and budgeting tools.</li>
                    <li><strong>Booking Services:</strong> Best deals on flights, accommodations, and more.</li>
                    <li><strong>Travel Inspiration:</strong> Curated lists, photo galleries, and personal stories to spark your wanderlust.</li>
                </ul>
                </div>
            </section>

            <section className="about-commitment">
                <h2>Our Commitment</h2>
                <div className="grid1">
                <img src="about3.jpg" alt="Our commitment" className="about-image" />
                <ul>
                    <li><strong>Authenticity:</strong> Honest reviews and real travel experiences.</li>
                    <li><strong>Sustainability:</strong> Promoting eco-friendly travel practices.</li>
                    <li><strong>Community:</strong> Building a global network of like-minded travelers.</li>
                </ul>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
