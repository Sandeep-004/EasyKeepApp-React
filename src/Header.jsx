import React from 'react';
import logo from './Images/logo1.jpg';
import SearchField from "react-search-field";


const Header = () => {
      return (

        <>
            <div className = 'header'>    
              <img className = 'logo' src={logo} alt='logo_image'/> 
                <h1 className='headingTop'> EasyKeep </h1>
                <SearchField
                    placeholder="Search..."
                    // onChange={onChange}
                    classNames="test-class"
/>
                </div>
        </>

      );
};


export default Header;