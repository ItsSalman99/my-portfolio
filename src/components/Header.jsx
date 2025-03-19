
import { useState } from 'react'
import '../css/header.css'

function Header() {
    return (
        <>
            <div className='navbarDiv'>
                <a href="#" class="logo">
                    {/* <img src="https://assets.codepen.io/1462889/fcy.png" alt="External Image" /> */}
                    Salman A.
                </a>

                <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label for="menu-icon"></label>
                <nav class="nav">
                    <ul class="pt-5">
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Studio</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;
