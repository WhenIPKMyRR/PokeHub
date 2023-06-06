import './cardCommentUser.css'

interface IObservationData {
    firstUserName: string;
    lastUserName: string;
    description: string;
    avatarUser: string;
}


const CardCommentUser: React.FC<IObservationData> = (props) => {

    return (
        <>
            <div className="cardCommentUser-container">
                <div className="cardCommentUser-container_user">
                    <img src={props.avatarUser} alt={props.firstUserName} />
                    <span className='cardCommentUser-userName'>
                        <strong>
                            {props.firstUserName}
                        </strong>
                        <strong>
                            {props.lastUserName}
                        </strong>
                    </span>
                </div>
                <p className="cardCommentUser-containe_text">
                    {props.description}
                </p>
            </div>
        </>

    )
}

export default CardCommentUser;