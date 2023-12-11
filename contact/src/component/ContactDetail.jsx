import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactDetail = props => {

    /**상위컴포넌트에서 props로 받아온 값 뽑아내기 */
    const contact = props.contact;
    const contactList = props.contactList;
    const setContactList = props.setContactList;
  
    function deleteContact(e){
           axios.delete('/contact/' + e.target.id)
                .then(result => {
                   if(result.data == 'success'){
                       props.isFlag(!props.flag);
                   }
                })
    }

    const navigate = useNavigate();

    const detailPage = () => {
       navigate('/detailPage', {state : contact});
    }

    return (
        <>
            <div>
                <img src={contact.image} alt="" onClick={detailPage}/>
            </div>
            <div>
                <p>{contact.name}</p>
            </div>
            <div>
                <p>{contact.group}</p>
            </div>
            <div>
                <p>{contact.phone}</p>
            </div>
            <div>
                <p>{contact.lastDate}</p>
            </div>
            <div>
                <button onClick={deleteContact} id={contact.name}>삭제</button>
            </div>
        </>
    )


}

export default ContactDetail;