import ProjectGallery from "./projectGallery";

function Navbar() {
  return (
    <nav>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="/" class="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/projectGallery" class="nav-link">
            Project Gallery
          </a>
        </li>
        <li class="nav-item">
          <a href="/contact" class="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
