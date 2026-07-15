import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Add from './pages/Add'
import Delete from './pages/Delete'
import Home from './pages/Home'
import Stats from './pages/Statictics'


function App() {
  return (
   <nav className='navigation_bar'>
    <a className='navigation_bar--element' href='/'>Home</a>
    <a className='navigation_bar--element' href='/add'>Add</a>
    <a className='navigation_bar--element' href='/delete'>Delete</a>
    <a className='navigation_bar--element' href='/stats'>Statistics</a>
    <a className='navigation_bar--element' href='/download'>Download data</a>
   </nav> 
  );
}

export default App;