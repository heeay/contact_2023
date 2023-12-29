import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import HistoryDetail from "./HistoryDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {

    const {state} = useLocation();
    //console.log(state.contact.contactName);
    //console.log({state});
    const [historyList, setHistoryList] = useState([]);
    //const {historyList} = useLocation();

    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    const [contactContent, setContactContent] = useState('');
    const inputContactContent = e => {
        setContactContent(e.target.value);
    }
    const [flag, isFlag] = useState(false);

     /** 연락기록 추가하는 함수 */
     const addHistory = e => {

        if(inputContactContent){

            // {}는 JSX에서 쓸 때 사용
            const history = {
                contactName : state.contact.contactName,
                contactContent : contactContent
            }
           // console.log(history);

            axios.post('/contact/history/' + e.target.id, history)
                .then(result => {
                if(result.data === 'success'){
                    isFlag(!flag);
                }
            });

        setContactContent('');

        }else {
            alert('모든 항목을 입력해주세요!');
        }
    }

    useEffect( () => {
        axios.get('/contact/history/' + state.contact.contactName)
             .then(result => {
                console.log(result);
                if(result.data == null){
                    console.log('연락기록 없음');
                } else{
                    console.log(result.data)
                    let historyCopyArr = [...result.data];
                    setHistoryList(historyCopyArr);  
                    // *** []값이 나옴 : console.log(historyList); => 원래 그럼!
                }
             })
    }, [flag]);

    

    return (
        <>
            <h1>{state.contact.contactName}</h1>
            <br/>
            <Container>
                <Row>
                    <Col xs={6}><img src={state.contact.contactImage} width="100%" height="500"/></Col>
                </Row>
                <Row>
                    <Col xs={6}><p>{state.contact.contactGroup}</p></Col>
                </Row>
                <Row>
                    <Col xs={6}><p>{state.contact.contactPhone}</p></Col>
                </Row>
                <Row>
                    <Col xs={6}><p>{state.contact.contactHistory}</p></Col>
                </Row>

                <div id="history-enroll-form">
                    <div>
                        <h3>연락내용</h3>
                        <input onChange={inputContactContent} value={contactContent} />
                    </div>
                    <br/>
                    <button onClick={addHistory} id={state.contact.contactName}>연락내용 추가</button>
                </div>

            </Container>

            {
                historyList.map( (history, index) => 
                        <HistoryDetail
                        history={history}
                        key={index}
                        />    
                )
            }
            <br/>
            <Button variant="dark" size="lg" onClick={back}>Back</Button>
        </>
    )
}

export default DetailPage;