
const HistoryDetail = props => {
    const history = props.history;
    console.log(history);
    return (
        <>
            <div>
                <h1>{history.contactDate}</h1>
            </div>
            <div>
                <p>{history.contactContent}</p>
            </div>         
        </>
        )
}

export default HistoryDetail;