import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import HistoryDetail from "./HistoryDetail";

const DetailPage = () => {

    const {state} = useLocation();
    const {historyList} = useLocation();
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>{state.contactName}</h1>
            <br/>
            <Container>
                <Row>
                    <Col xs={6}><img src={state.contactImage} width="100%" height="500"/></Col>
                </Row>
                <Row>
                    <Col xs={6}><p>{state.contactGroup}</p></Col>
                </Row>
                <Row>
                    <Col xs={6}><p>{state.contactPhone}</p></Col>
                </Row>
                <Row>
                    <Col xs={6}><p>{state.contactHistory}</p></Col>
                </Row>
                {
                historyList.map((history, index) => {
                    return(
                        <HistoryDetail key={index} history={history} />
                    )
                })
                }
            </Container>
            <br/>
            <Button variant="dark" size="lg" onClick={back}>Back</Button>
        </>
    )
}

export default DetailPage;