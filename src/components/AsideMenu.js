import React, { useRef } from 'react'

export default function AsideMenu() {

    const asideMenuRef = useRef();

    const handleToggleAsideMenu = () => {
        asideMenuRef.current.classList.toggle('open')
    }

    return (
        <aside ref={asideMenuRef}>
            <div id="burger" onClick={handleToggleAsideMenu}>
                <div className="bar top"></div>
                <div className="bar center"></div>
                <div className="bar bottom"></div>
            </div>
        </aside>
    )
}