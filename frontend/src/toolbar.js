import { useEffect, useState } from 'react';

function ToolBar() {
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

export default ToolBar;