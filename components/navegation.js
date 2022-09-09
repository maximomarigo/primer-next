import Head from "next/head";
import Link from 'next/link'

const Navigation = ()=> {

    return(
        <nav className="navbar navbar-expand-lg bg-light">
           <div className="container-fluid">
            
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
                <li className="navbar-brand">
              <Link href="/">
                  Home</Link>
                 
               
              </li>
              <li className="nav-item">
              <li className="navbar-brand">
              <Link href="/about">
                  About</Link>
                  </li>
               
              </li>
              
              <li className="nav-item">
              <li className="navbar-brand">
              <Link href="/service">
                  Service</Link>
                  </li>
               
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navigation;