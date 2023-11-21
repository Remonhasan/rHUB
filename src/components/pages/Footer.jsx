import React from 'react'

export default function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div class="col-md-4 d-flex align-items-center">
          <span class="text-muted">© remonhasan</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3 mr-3">
            <a class="text-muted" href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
  )
}
