import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Something nice to discuss why someone would want to talk to me. Like a reverse cover letter.
      </p>
      {/* <ul className="actions">
        <li>
          <Link to="index" className="button">
            Learn More
          </Link>
        </li>
      </ul> */}
    </section>
    <section>
      {/* <h2>Contact</h2> */}
      <dl className="alt">
        {/* <dt>Address</dt> */}
        {/* <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd> */}
        {/* <dt>Phone</dt> */}
        {/* <dd>(000) 000-0000 x 0000</dd> */}
        <dt>Email</dt>
        <dd>
          <a href="mailto:info@scottjoe.com">info@scottjoe.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/scottjoewilliams/"
            className="icon fa-linkedin alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/scott-joe"
            className="icon fa-github alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/last_known_word"
            className="icon fa-twitter alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/scott_joe_pro/"
            className="icon fa-instagram alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        {/* <li>
          <a
            href="https://codebushi.com"
            className="icon fa-dribbble alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
    {/* <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p> */}
  </footer>
)

export default Footer
