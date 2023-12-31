'use client'

import Link from 'next/link';
import Clerk from '../Clerk/Clerk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FA-MSG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href='/' className="nav-link active" >Render-message</Link>
              </li>
              <li className="nav-item">
                <Link href='/NewMessage' className="nav-link active" >New-message</Link>
              </li>
            </ul>
            <div className="d-flex">
              <Clerk />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
