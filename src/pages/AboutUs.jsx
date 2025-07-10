import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../css/AboutUs.css"; 
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const teamCategories = [
    "Founders",
    "Investors & Mentors",
    "Product & Tech",
    "Marketing & Design",
    "Customer Success",
    "Finance & Legal",
    "HR"
];

const teamMembers = {
    "Customer Success": [
        {
            name: "Mandeep Singh Soni",
            position: "Head of Sales & CX",
            quote: "We can do anything if we put our minds to it.",
            image: "../images/image.jpg",
            linkedin: "#"
        },
        {
            name: "Apoorv Gaur",
            position: "Team Lead - PRM",
            quote: "Excellence is what I believe in",
            image: "/images/apoorv.jpg",
            linkedin: "#"
        },
        {
            name: "Faisal",
            position: "Post Sales Manager",
            email: "support@kaam.com",
            image: "/images/faisal.jpg",
            linkedin: "#"
        },
        {
            name: "Kritika Gurman",
            position: "Post Sales Relationship Manager",
            quote: "You can call me Kiki",
            image: "/images/kritika.jpg",
            linkedin: "#"
        }
    ]
};

const AboutUs = () => {
    const [activeCategory, setActiveCategory] = useState("Customer Success");

    return (
        <div>
            <Navbar />

            {/* About Section */}
            <section className="about">
                <h2>
                    We are <span className="highlight">Kaam</span>
                </h2>
                <p>A team of go-getters to give you a smooth experience</p>
            </section>

            {/* Image Gallery */}
            <section className="gallery">
                <div className="gallery-container">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="gallery-item">
                            <img src={`/images/img${index + 1}.jpg`} alt="Team Event" />
                        </div>
                    ))}
                </div>
            </section>

            <div className="about-container">
                <h1 className="heading">Meet The <span className="highlight">Team</span></h1>

                {/* Team Category Tabs */}
                <div className="team-categories">
                    {teamCategories.map((category) => (
                        <span
                            key={category}
                            className={`category ${activeCategory === category ? "active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Team Members */}
                <div className="team-members">
                    {teamMembers[activeCategory] && teamMembers[activeCategory].length > 0 ? (
                        teamMembers[activeCategory].map((member, index) => (
                            <div key={index} className="team-card">
                                <img src={member.image} alt={member.name} className="profile-pic" />
                                <h3>{member.name}</h3>
                                <p className="position">{member.position}</p>
                                {member.email ? <p>Email: {member.email}</p> : <p>"{member.quote}"</p>}
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="/images/linkedin-icon.png" alt="LinkedIn" className="linkedin-icon" />
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="no-members">No team members found in this category.</p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
