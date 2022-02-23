import React from 'react';
import {FaGitHub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        Navbar
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'GitHub Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar