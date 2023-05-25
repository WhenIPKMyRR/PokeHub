import { useState, useEffect } from 'react'  
import axios from 'axios';
import './cardCommentUser.css'
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading';
import { IObservationData } from '../../interfaces/ICommentData';


const CardCommentUser:React.FC<IObservationData> = ({ userName, description }) =>{
    
    return(
        <>
            <div className="cardCommentUser-container">
                <div className="cardCommentUser-container_user">
                    <img src="https://media.licdn.com/dms/image/C4D03AQEhmcMX2gFB_A/profile-displayphoto-shrink_200_200/0/1652203988772?e=1690416000&v=beta&t=97jIZevQNUIYehg7836cQQtCoN0D9GgM-bfKGCPE_XM" alt=""/>
                    <strong>
                        {userName}
                    </strong>
                </div>
                <p className="cardCommentUser-containe_text">
                    {description}
                </p>
            </div>
        </>

    )
}

export default CardCommentUser;