
const HistoryDetail = props => {
    const history = props.history;
    console.log(history);
    return (
        <>
            <div>
                <p>{history.contactDate}</p>
            </div>
            <div>
                <p>{history.contactContent}</p>
            </div>         
        </>
        )
}

export default HistoryDetail;