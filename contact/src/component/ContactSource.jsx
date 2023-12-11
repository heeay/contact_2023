
import ContactDetail from './ContactDetail';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ContactSource = props => {

    const [contactList, setContactList] = useState([]);

    const [nameValue, setNameValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [groupValue, setGroupValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [lastDateValue, setLastDateValue] = useState('');
    const [contactPeriodValue, setContactPeriodValue] = useState('');

    /** setting함수로 입력값 받기 */
    const inputName = e => {
        setNameValue(e.target.value);
    }
    const inputImage = e => {
        setImageValue(e.target.value);
    }
    const inputGroup = e => {
        setGroupValue(e.target.value);
    }
    const inputPhone = e => {
        setPhoneValue(e.target.value);
    }
    const inputLastDate = e => {
        setLastDateValue(e.target.value);
    }
    const inputContactPeriod = e => {
        setContactPeriodValue(e.target.value);
    }

    /**변경여부를 확인하는 용도의 state */
    const [flag, isFlag] = useState(false);

    /**연락처 추가하는 함수 */
    const addContact = () => {

        // input을 다 채웠다면
        if(nameValue && imageValue && groupValue && phoneValue && lastDateValue && contactPeriodValue){

            // 연락처 생성하고
            const contact = {
                name : nameValue, 
                image : imageValue,
                group : groupValue,
                phone : phoneValue, 
                lastDate : lastDateValue,
                contactPeriod : contactPeriodValue
            }

            // DB로 비동기요청
            axios.post('/contact', contact)
                 .then(result => {
                    //console.log(result.data);
                    if(result.data == 'success'){
                        isFlag(!flag);//플래그 변경
                    }
                 });
                
            // 입력후 초기화
            setNameValue('');
            setImageValue('');
            setGroupValue('');
            setPhoneValue('');
            setLastDateValue('');
            setContactPeriodValue('');

        } else {
            alert('모든 항목을 입력해주세요!');
        }
    }

    /**페이지 마운트될 때 가장 먼저 실행되는 코드 */
    useEffect( () => {
        axios.get('/contact')
             .then(result => {
                console.log(result.data);
                let copyArr = [...result.data];
                setContactList(copyArr);
             })
    }, [flag]);

    return(
        <>
        {/* <Header /> */}
        {
            contactList.map((contact, index) => {
                return(
                    <ContactDetail contact={contact} key={index} setContactList={setContactList} contactList={contactList} isFlag={isFlag} flag={flag} />
                )
            })
        }

        {/*모달창을 띄울까?*/}
        <div id="contact-enroll-form">
            <div>
                <h3>이름</h3>
                <input onChange={inputName} value={nameValue} />
            </div>
            <div>
                <h3>프로필사진</h3>
                <input onChange={inputImage} value={imageValue} />
            </div>
            <div>
                <h3>그룹</h3>
                <input onChange={inputGroup} value={groupValue} />
            </div>
            <div>
                <h3>전화번호</h3>
                <input onChange={inputPhone} value={phoneValue} />
            </div>
            <div>
                <h3>마지막 연락일</h3>
                <input onChange={inputLastDate} value={lastDateValue} />
            </div>
            <div>
                <h3>연락주기</h3>
                <input onChange={inputContactPeriod} value={contactPeriodValue} />
            </div>
            <br/>
            <button onClick={addContact}>연락처 추가</button>
        </div>
        </>
    )
}

export default ContactSource;