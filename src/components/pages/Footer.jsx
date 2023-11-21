import React from 'react'

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© remonhasan</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3 mr-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
  )
}
