import GenericButton from '../generic-button';
import './isErrorModal.css'

interface IIsErrorModal {
    onClick?: () => void;
    image: string;
    title: string;
    text: string;
    placeholder: string;
}

const IsErrorModal: React.FC<IIsErrorModal> = (props) => {



    return (
        <span className='isErrorModal'>
            <div className='isErrorModal-container'>
                <div className='isErrorModal-container_image'>
                    <img src={props.image} alt={props.title} />
                </div>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <GenericButton onClick={() => props.onClick} text={props.placeholder} height='3em' width='10em' />
            </div>
        </span>
    )
}

export default IsErrorModal;
