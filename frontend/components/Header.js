import React, { useEffect, useState } from 'react'

function Header({isUserLoggedIn}) {
    const [scrollY, setScrollY] = useState(0);
    const [navbarAppear, setNavbarAppear] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);
    const menuToggle = () => {
        if (navbarAppear === true) {
            setNavbarAppear(false);

        } else {

            setNavbarAppear(true);
        }
    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_name");
		window.location.reload();
    }
    return (
        <div className="header-area header-transparent">
            <div className="main-header ">
                <div className={`header-bottom  header-sticky ${scrollY > 400 ? "sticky-bar" : ""}`} style={{ transition: "all 0.5s ease-in" }}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="/"><img src="/whitelogo.png" style={{ padding: "30px 0" }} width={100} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    <div className={`main-menu d-none d-lg-block ${navbarAppear === true ? "active" : ""}`}>
                                        <nav>
                                            <ul id="navigation">
                                                <li className="active" ><a href="/">Home</a></li>
                                                <li><a href="/internships">Internships</a></li>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/contact">Contact</a></li>
                                                {isUserLoggedIn === true ? (
                                                <li><button onClick={() => logout()} style={{ backgroundColor: "black", padding: "5px 15px", borderRadius: "50px", cursor: "pointer" }}>Logout</button></li>
                                                ) : null}
                                            </ul>
                                        </nav>
                                        
                                    </div>

                                </div>
                            </div>
                            <div className={`menuToggle ${navbarAppear === true ? "active" : ""}`} onClick={() => menuToggle()}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header