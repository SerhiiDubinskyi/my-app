import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth } from '../../Auth';
import axios, { Axios } from 'axios';
import { useState, useEffect } from 'react';
import MainMenu  from "../../components/UI/MainMenu/MainMenu"
import { IMenuItems, IMenuItem } from "../../components/UI/MainMenu/MenuItem"




function App() {
  const homePage: IMenuItem = {
    to: "/",
    text: "Home",
    icon: "🏠"
  }
  const AccountCreator: IMenuItem = {
    to: "/accountcreator",
    text: "Account_Creator",
    icon: "⚙️"
  }
  const aboutPage: IMenuItem = {
    to: "/about",
    text: "About",
    icon: "📖"
  }

  const menuItems: IMenuItems = {
    components: [homePage, AccountCreator, aboutPage]
  }

  return (
    <div className='App'>
    <MainMenu menuItems={menuItems}/>
    </div>
  );
}




export default App;
