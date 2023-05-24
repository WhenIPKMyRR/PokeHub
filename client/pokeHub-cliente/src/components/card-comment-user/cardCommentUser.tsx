import './cardCommentUser.css'

const CardCommentUser: React.FC = () =>{
    return(
        <div className="cardCommentUser-container">
            <div className="cardCommentUser-container_user">
                <img src="https://media.licdn.com/dms/image/C4D03AQEhmcMX2gFB_A/profile-displayphoto-shrink_200_200/0/1652203988772?e=1690416000&v=beta&t=97jIZevQNUIYehg7836cQQtCoN0D9GgM-bfKGCPE_XM" alt=""/>
                <strong>
                    Vitor Aguiar
                </strong>
            </div>
            <p className="cardCommentUser-containe_text">
                To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.
            </p>
        </div>

    )
}

export default CardCommentUser;