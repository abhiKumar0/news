import React, { useState } from 'react';
import { Close, DarkModeSharp, LanguageSharp, LightModeSharp, Menu, SearchSharp } from '@mui/icons-material'
import { Link, useLocation, useParams } from 'react-router-dom';

import "./Navbar.scss";

const navLinks = [
  { name: "News", link: "general"},
  { name: "Sports", link: "sports"},
  { name: "Business", link: "business"},
  { name: "Tech", link: "tech"},
  { name: "Science", link: "science"},
  { name: "Entertainment", link: "entertainment"},
  { name: "Health", link: "health"},
]

const Navbar = ({ setDark, dark, setIsOpen, setPage, catAry }) => {
  const [toggle, setToggle] = useState(false);
  
  let location = useLocation().pathname;

  return (
    <>
      <nav className="news__navbar">
          <h1 className="news__navbar-logo">
            <Link to="/">News</Link></h1>
          <div className="news__navbar-content">
              <ul className="news__navbar-content-list">
                  <li>
                    <Link className={`${location === '/' ? "active" : "deactive"}`} to="/">Home</Link>
                  </li>
                  {navLinks.map((item) => (
                    <li onClick={() => setPage(1)} key={item.name}>
                      <Link className={`${location === `/category-${item.link}` ? "active" : "deactive"}`} to={`/category-${item.link}`} >{item.name}</Link>
                      </li>
                  ))}
              </ul>
              <div className="news__navbar-content-icons">
                  <Link onClick={() => catAry.push(`${catAry[catAry.length - 1].length !== 0 ? "general" : catAry[catAry.length - 1]}`)} to="/search">
                    <SearchSharp fontSize="large" />
                  </Link>

                  <LanguageSharp fontSize="large" onClick={() => setIsOpen(true)} />
                  
                  {!dark ? <DarkModeSharp fontSize="large"  onClick={() => setDark(dark ? false : true)} /> :
                  <LightModeSharp fontSize="large" onClick={() => setDark(dark ? false : true)}/>

                  }

                  
                  {!toggle ? <Menu onClick={() => setToggle(true)} fontSize="large" /> : <Close onClick={() => setToggle(false)} fontSize="large" />}
              </div>
          </div>
      </nav>
      <ul className={`${!toggle ? "news__navbar-hide" : "news__navbar-menu-list "}`} onClick={() => setToggle(false)}>
            <li>
              <Link className={`${location === '/' ? "active" : "deactive"}`} to="/">Home</Link>
            </li>
                {navLinks.map((item) => (
            <li onClick={() => setPage(1)} key={item.name}>
              <Link className={`${location === `/category-${item.link}` ? "active" : "deactive"}`} to={`/category-${item.link}`}>{item.name}</Link>
            </li>
                ))}
      </ul>
    </>
  )
}

export default Navbar;