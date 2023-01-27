
import ActiveLink from './ActiveLink';
import styles from "./NavBar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const NavBar = () => {
  return (
    <nav className={ styles['menu-container'] } >
      {
        menuItems.map( e => (
              <ActiveLink key={ e.href } text={ e.text } href = { e.href } />
         ) )
      }
    </nav>
  )
}

export default NavBar