import react from "react";
import {Link} from "react-router-dom";
// import styled from "styled-components";


export const Navbar = () => {
  return (
    
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link className="nav-home" to={ "/"}>Home</Link>
      <Link className="nav-home" to= {"/about"}>About</Link>
      <Link className="nav-home" to= {"/products"}>Products</Link>
      <Link className="nav-home" to= {"/products/men"}>Men</Link>
      <Link className="nav-home" to= {"/products/women"}>Women</Link>
      <Link className="nav-home" to= {"/products/kids"}>Kids</Link>
      <Link className="nav-home" to={ "/products/homedecor"}>Home Decor</Link>
    </nav>
    
  );
};