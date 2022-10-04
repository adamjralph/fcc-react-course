function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          href="#"
          className="navbar-brand"
        >
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                aria-current="page"
              >
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <div className="container-fluid">
      <h3 className="display-1">I'm learning React</h3>
      <small className="text-muted">And it's very interesing</small>
      <p className="lead">
        I'm finding that, although complex, I really think I'll make use of it
        in parts of my development work
      </p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
);

// Create and append an h1 to the div#root (without using innterHTML)

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to progream";
// h1.className = "header";
// const root = document.querySelector("#root").append(h1);
