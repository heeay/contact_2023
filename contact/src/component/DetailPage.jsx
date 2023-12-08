import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";

const DetailPage = () => {

    const {state} = useLocation();
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>{state.name}</h1>
            <br/>
            <Container>
                <Row>
                    <Col xs={6}><img src={state.image} width="100%" height="500"/></Col>
                </Row>
            </Container>
            <br/>
            <Button variant="dark" size="lg" onClick={back}>Back</Button>
        </>
    )
}

export default DetailPage;