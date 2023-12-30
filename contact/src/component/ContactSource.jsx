
import ContactDetail from './ContactDetail';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ContactSource = () => {

    const [contactList, setContactList] = useState([]);

    const [contactName, setContactName] = useState('');
    const [contactImage, setContactImage] = useState('');
    const [contactGroup, setContactGroup] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactPeriod, setContactPeriod] = useState('');
  
    /** setting함수로 입력값 받기 */
    const inputContactName = e => {
        setContactName(e.target.value);
    }
    const inputContactImage = e => {
        setContactImage(e.target.value);
    }
    const inputContactGroup = e => {
        setContactGroup(e.target.value);
    }
    const inputContactPhone = e => {
        setContactPhone(e.target.value);
    }
    const inputContactPeriod = e => {
        setContactPeriod(e.target.value);
    }


    /**변경여부를 확인하는 용도의 state */
    const [flag, isFlag] = useState(false);

    /**연락처 추가하는 함수 */
    const addContact = () => {

        // input을 다 채웠다면
        if(contactName && contactImage && contactGroup && contactPhone && contactPeriod){

            // 연락처 생성하고
            const contact = {
                contactName : contactName, 
                contactImage : contactImage,
                contactGroup : contactGroup,
                contactPhone : contactPhone, 
                contactPeriod : contactPeriod
            }

            // DB로 비동기요청
            axios.post('/contact', contact)
                 .then(result => {
                    if(result.data === 'success'){
                        isFlag(!flag);
                    }
                 });
                
            // 입력후 초기화
            setContactName('');
            setContactImage('');
            setContactGroup('');
            setContactPhone('');
            setContactPeriod('');

        } else {
            alert('모든 항목을 입력해주세요!');
        }
    }

    /**페이지 마운트될 때 가장 먼저 실행되는 코드 */
    useEffect( () => {
        axios.get('/contact')
             .then(result => {
                console.log(result);
               //console.log(result.data);
                let sourceCopyArr = [...result.data];
                setContactList(sourceCopyArr);
                console.log(sourceCopyArr);
             })
    }, [flag]);

    return(
        <>
        {
            contactList.map((contact, index) => {
                return(
                    <ContactDetail 
                    contact={contact} 
                    key={index} 
                    flag={flag}
                    isFlag={isFlag}
                    />
                )
            })
        }

        <div id="contact-enroll-form">
            <div>
                <h3>이름</h3>
                <input onChange={inputContactName} value={contactName} />
            </div>
            <div>
                <h3>프로필사진</h3>
                <input onChange={inputContactImage} value={contactImage} />
            </div>
            <div>
                <h3>그룹</h3>
                <input onChange={inputContactGroup} value={contactGroup} />
            </div>
            <div>
                <h3>전화번호</h3>
                <input onChange={inputContactPhone} value={contactPhone} />
            </div>
            <div>
                <h3>연락주기</h3>
                <input onChange={inputContactPeriod} value={contactPeriod} />
            </div>
            <br/>
            <button onClick={addContact}>연락처 추가</button>
        </div>

  
        </>
    )
}

export default ContactSource;