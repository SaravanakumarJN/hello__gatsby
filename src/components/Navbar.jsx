import React from "react"
import * as styles from "./Navbar.module.css"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/company/history">History</Link>
        </li>
        <li>
          <Link to="/static_image">Static Image</Link>
        </li>
        <li>
          <Link to="/dynamic_image">Dynamic Image</Link>
        </li>
        <li>
          <Link to="/static_query">Static query</Link>
        </li>
        <li>
          <Link to="/page_query">Page query</Link>
        </li>
        <li>
          <Link to="/cms_data_gql">CMS data gql</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
