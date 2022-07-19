import {NavLink,Link} from 'react-router-dom';
function Navbar()
{
    return<>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <div class="container-fluid ">
                <div class="collapse navbar-collapse d-flex" id="navbarNav">
                    <ul class="navbar-nav">
            
                    <li class="nav-item">
                        <NavLink to="/" style={{textDecoration:"none"}}  className="nav-link">Bookmark App</NavLink>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
    </>
}
export default Navbar