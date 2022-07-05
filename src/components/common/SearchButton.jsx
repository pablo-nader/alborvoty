import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchButton() {
  return (
    <InputGroup className="mb-3 mt-2 searchButton">
      <InputGroup.Text id="basic-addon1">
        <FontAwesomeIcon icon={faSearch} />
      </InputGroup.Text>
      <Form.Control
        placeholder="Buscar..."
        aria-label="search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}
