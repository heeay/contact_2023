
const HistoryDetail = props => {
    /**방법1 */
    //const history = props.history;
    //console.log(history);

    /**방법2 */
    const { history } = props;
    console.log(history);
    const { contactContent, contactDate } = history;

    return (
        <>
            {/*
            <div>
                <p>{history.contactDate}</p>
            </div>
            <div>
                <p>{history.contactContent}</p>
            </div>          
            */}
            <div>
                <p>{contactContent}</p>
            </div>
            <div>
                <p>{contactDate}</p>
            </div>
        </>
        )
}

export default HistoryDetail;

