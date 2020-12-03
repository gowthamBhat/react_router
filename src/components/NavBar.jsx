import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="products">Products</Link></li>
                <li><Link to="/carrers">Carrers</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
        </div>
    )
}
//Anchor tag use madidre performance issue barathe, whole bundle reload agbeku.
//so React-router-dom library li <Link to={} /> anno tag ide, that will solve the issue 

export default NavBar
