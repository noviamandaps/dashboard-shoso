import React from 'react'

const Header = () => {
  return (
    <section>
      <button
        aria-controls="sidebar"
        data-bs-toggle="offcanvas"
        data-bs-target=".sidebar"
        aria-label="Button Hamburger"
        className="sidebarOffcanvas mb-5 btn p-0 border-0 d-flex d-lg-none"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      
      <nav className="nav-content gap-5">
        <div className="d-flex gap-3 align-items-center">
          <img
            src="./assets/images/photo.webp"
            alt="Photo Profile"
            className="photo-profile"
          />
          <div>
            <p className="title-content mb-2">Good Morning, Yeager</p>
            <p className="subtitle-content">
              Finish your profile.
              <a href="#" className="btn-link">Edit now</a>
            </p>
          </div>
        </div>
        
        <div className="search-wrapper">
          <div className="search-bar flex-fill">
            <input
              className="form-control"
              type="text"
              placeholder="Search shoes"
            />
          </div>
          <button
            className="btn-setting rounded-circle"
            aria-label="Button Setting"
          >
            <svg fill="none">
              <mask id="path-1-inside-1_1_44" fill="white">
                <path d="M14.517 3.75833C14.517 2.78723 13.7297 2 12.7586 2H10.2753C9.30421 2 8.51698 2.78723 8.51698 3.75834C8.51698 5.11191 7.0517 5.95789 5.87947 5.2811C5.03847 4.79555 3.96308 5.0837 3.47753 5.9247L2.23586 8.07533C1.75032 8.91632 2.03846 9.9917 2.87946 10.4772C4.05167 11.154 4.05167 12.846 2.87946 13.5228C2.03846 14.0083 1.75032 15.0837 2.23587 15.9247L3.47754 18.0753C3.96309 18.9163 5.03847 19.2045 5.87947 18.7189C7.05169 18.0421 8.51697 18.8881 8.51697 20.2417C8.51697 21.2128 9.3042 22 10.2753 22H12.7586C13.7297 22 14.517 21.2128 14.517 20.2417C14.517 18.8881 15.9822 18.0421 17.1545 18.7189C17.9955 19.2045 19.0709 18.9163 19.5564 18.0753L20.7981 15.9247C21.2836 15.0837 20.9955 14.0083 20.1545 13.5228C18.9823 12.846 18.9823 11.154 20.1545 10.4772C20.9955 9.99169 21.2836 8.9163 20.7981 8.0753L19.5564 5.92468C19.0709 5.08368 17.9955 4.79554 17.1545 5.28109C15.9823 5.95787 14.517 5.1119 14.517 3.75833Z" />
              </mask>
              <path
                d="M20.7981 8.0753L19.4991 8.8253L20.7981 8.0753ZM10.2753 3.5H12.7586V0.5H10.2753V3.5ZM3.5349 8.82533L4.77657 6.6747L2.17849 5.1747L0.936826 7.32533L3.5349 8.82533Z"
                fill="currentColor"
                mask="url(#path-1-inside-1_1_44)"
              />
              <circle
                cx="11.517"
                cy="12"
                r="2.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </section>
  )
}

export default Header