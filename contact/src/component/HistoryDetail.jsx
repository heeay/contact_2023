
const HistoryDetail = props => {
    const history = props.history;

    return (
        <>
            <div>
                <h1>{history.contactName}</h1>
            </div>
            <div>
                <p>{history.contactContent}</p>
            </div>         
        </>
        )
}

export default HistoryDetail;