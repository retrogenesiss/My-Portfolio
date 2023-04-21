import s from './Nav.module.css'

function Nav() {
    return (
        <ul className={s.nav}>
            <li className={s.navItem}>Home</li>
            <li className={s.navItem}>Skills</li>
            <li className={s.navItem}>Projects</li>
            <li className={s.navItem}>Contacts</li>
        </ul>
    )
}

export default Nav;