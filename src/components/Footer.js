import React from 'react';
// import '../styles/Footer.css';

function Footer({ currentPage, handlePageChange }) {
    return (
      <footer >
        <nav className="footerNav">
          <ul>
            <li><a href = "mailto: ashquinngordon@gmail.com" target="_blank" rel="noreferrer"><i class="far fa-envelope"></i></a></li>
            <li><a href="https://github.com/Ashquinn" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/ashquinn-gordon/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </nav>
        <p>© 2021 Crafted by Ashquinn Gordon</p>
      </footer>
  );
}

export default Footer;