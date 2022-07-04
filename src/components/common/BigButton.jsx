
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BigButton({children, props, buttonIcon, isLogin = false}) {
  return (
    <Button className={"bigButton" + (isLogin ? " loginButton" : "")} {...props}>
        <FontAwesomeIcon icon={buttonIcon} className="me-2" /> 
        {children}
    </Button>
  )
}
