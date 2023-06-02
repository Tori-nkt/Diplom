import styles from "../components/navbar/navbar.module.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const GlobalLayout = () => {
  
  return (
    <>
      <Navbar bg="dark" sticky='top'variant="dark">
        <Container>
          <Link className={styles.menuName} as ={Navbar.Brand} to="/">ЯСТРУБ</Link>
          <Nav >
            <Link className={styles.menuName} index as ={NavLink} to="/">ПРО НАС</Link>
            <Link className={styles.menuName} as={NavLink} to="InfoGraphics">ГРАФІК</Link>
            <Link className={styles.menuName} as={NavLink} to="OrcsList">СПИСОК</Link>
            <Link className={styles.menuName} as={NavLink} to="Analysis">АНАЛІЗ</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default GlobalLayout;
