import React from 'react';
import { NavLink,Link, useNavigate} from "react-router-dom";

function NavbarDash() {

  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <NavLink className="navbar-brand" to="/dashboard"><h2>Blogging<span className="text-danger">App</span></h2></NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-l text-uppercase">

              <h6><a class="nav-link active" aria-current="page" ><Link to="/dashboard" class="nav-link">Dashboard</Link></a></h6>     
              <h6><a class="nav-link" ><Link to="/fetchall" class="nav-link">Blogs</Link></a></h6>
              {localStorage.getItem("_token")? 
              <>
              <h6><a class="nav-link" ><Link to="/fetch" class="nav-link">Personal Blog</Link></a></h6>
              <h6><a class="nav-link" ><Link to="/create" class="nav-link">Create Blog</Link></a></h6>
              <h6><a class="nav-link" ><Link to="/userprofile" class="nav-link">User Profile</Link></a></h6>
              <h6><a class="nav-link  btn btn-outline-danger" style={{ marginTop: "8px" }} onClick={logout}><h5>Logout</h5></a></h6>
              </>
             : 
             <h6><a class="nav-link" ><Link to="/" class="nav-link">Login</Link></a></h6>
              } 
            </div>
          </div>
        </div>
      </nav>

    </div>

   
  )
}
export default NavbarDash;





