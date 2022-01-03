import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav >
                <div >
                    <div >
                        <a href="index.html">
                            <img src="./images/logo.png" alt="Reddit Clone" width="30" />
                            Reddit Clone
                        </a>
                    </div>
                    <div >
                        <form >
                            <input type="search" placeholder="Search" aria-label="Search" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div >
                        <ul >
                            <li >
                                <a aria-current="page" href="profile.html">Account</a>
                            </li>
                            <li>
                                <a href="category.html">Trending</a>
                            </li>
                            <li>
                                <a href="post.html"><i ></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
