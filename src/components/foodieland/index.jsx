import React from "react"
import "./style.css"

export default function Foodieland() {
    
    const Navbar = () => {
        return (
            <nav className="navbar">
                <h1 className="logo">FoodieLand.</h1>
                <div className="nav-items">
                    <a href="" className="nav-item">Home</a>
                    <a className="nav-item">Recipes</a>
                    <a className="nav-item">Blog</a>
                    <a className="nav-item">Contact</a>
                    <a className="nav-item">About us</a>
                </div>
                <div className="nav-logos">
                    <img src="https://res.cloudinary.com/dsm3i4h3f/image/upload/v1758876436/Black-Facebook-Logo-PNG-Pic_ceeals.png" className="nav-icon"/>
                    <img src="https://res.cloudinary.com/dsm3i4h3f/image/upload/v1758876436/Black-Facebook-Logo-PNG-Pic_ceeals.png" className="nav-icon"/>
                    <img src="https://res.cloudinary.com/dsm3i4h3f/image/upload/v1758876436/Black-Facebook-Logo-PNG-Pic_ceeals.png" className="nav-icon"/>
                </div>
            </nav>
        )
    }
    
    return (
        <>
            <Navbar/>
            
        </>
    )
}