import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

import SearchButton from "../components/common/SearchButton"
import BoardHeader from "../components/boards/BoardHeader"
import BoardColumn from "../components/boards/BoardColumn"

export default function Home() {
  return (
    <Container>
      <Row>
        <Col md={6} lg={9}></Col>
        <Col md={6} lg={3} xs={12} className="pe-5">
          <SearchButton />
        </Col>
        <Container className="introText mt-2 mb-4 p-2 pb-4">
          Si tenés una sugerencia sobre albor Campo que puede mejorar la experiencia de los usuarios ¡compartila con la 
          comunidad de Albor! Cuando compartís tu sugerencia con la comunidad, los usuarios podrán VOTAR las ideas que más 
          les gustan. Y vos también podés dejar tu voto en las sugerencias de otros usuarios. Entre todos #SomosAlbor.
        </Container>
      </Row>
      <BoardHeader />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
    </Container>
  )
}
