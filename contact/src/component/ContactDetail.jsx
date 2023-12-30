import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactDetail = props => {

    /**상위컴포넌트에서 props로 받아온 값 뽑아내기 */
    //console.log(props);
    //const key = props.key;
    const contact = props.contact;
    //console.log(contact);
    
    function deleteContact(e){
           axios.delete('/contact/' + e.target.id)
                .then(result => {
                   if(result.data === 'success'){
                       props.isFlag(!props.flag);
                   }
                })
    }

    const navigate = useNavigate();

    const detailPage = () => {
       navigate("/detailPage", {state : {contact : contact}});
    }

    return (
        <>
            <div>
                <img src={contact.contactImage} alt="연락처" onClick={detailPage}/>
            </div>
            <div>
                <p>{contact.contactName}</p>
            </div>
            <div>
                <p>{contact.contactGroup}</p>
            </div>
            <div>
                <p>{contact.contactPhone}</p>
            </div>
            <div>
                <button onClick={deleteContact} id={contact.contactName}>삭제</button>
            </div>
        </>
    )


}

export default ContactDetail;