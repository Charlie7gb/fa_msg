'use client'

import Link from 'next/link';
import Clerk from '../Clerk/Clerk';
import 'bootstrap/dist/css/bootstrap.css';
 

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">FA-MSG</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link href='/' class="nav-link active" >Render-message</Link>
              </li>
              <li class="nav-item">
                <Link href='/NewMessage' class="nav-link active" >New-message</Link>
              </li>
            </ul>
            <div class="d-flex">
              <Clerk />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
