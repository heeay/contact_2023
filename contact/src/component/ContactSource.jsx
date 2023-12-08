
import ContactDetail from './ContactDetail';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ContactSource = props => {

    const [contactList, setContactList] = useState([]);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [group, setGroup] = useState('');
    const [phone, setPhone] = useState('');
    const [contactPeriod, setContactPeriod] = useState('');

    /** setting함수로 입력값 받기 */
    const inputName = e => {
        setName(e.target.value);
    }
    const inputImage = e => {
        setImage(e.target.value);
    }
    const inputGroup = e => {
        setGroup(e.target.value);
    }
    const inputPhone = e => {
        setPhone(e.target.value);
    }
    const inputContactPeriod = e => {
        setContactPeriod(e.target.value);
    }

    /**변경여부를 확인하는 용도의 state */
    const [flag, isFlag] = useState(false);

    /**연락처 추가하는 함수 */
    const addContact = () => {

        // input을 다 채웠다면
        if(inputName && inputImage && inputGroup && inputPhone && inputContactPeriod){

            // 연락처 생성하고
            const contact = {
                name : name, 
                image : image,
                group : group,
                phone : phone, 
                contactPeriod : contactPeriod
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
            setName('');
            setImage('');
            setGroup('');
            setPhone('');
            setContactPeriod('');

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
                <input onChange={inputName} value={name} />
            </div>
            <div>
                <h3>프로필사진</h3>
                <input onChange={inputImage} value={image} />
            </div>
            <div>
                <h3>그룹</h3>
                <input onChange={inputGroup} value={group} />
            </div>
            <div>
                <h3>전화번호</h3>
                <input onChange={inputPhone} value={phone} />
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