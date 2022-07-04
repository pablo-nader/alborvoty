import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import BigButton from './BigButton'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/imgs/alborLogo.png'

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <Image fluid={true} src={logo} alt="Logo Albor Campo" className="logoImg"/>
            </Link>          
          </Col>
          <Col className="headerButtonsArea">
            <BigButton buttonIcon={faArrowLeft}>Carga tu idea</BigButton>
            <BigButton buttonIcon={faBolt}>Registro de cambios</BigButton>
            <BigButton buttonIcon={faLock} isLogin={true}>Iniciar Sesión</BigButton>
          </Col>
        </Row>        
      </Container>
    </header>
  )
}
