import GenericButton from '../generic-button/genericButton';
import './isErrorModal.css'

const IsErrorModal: React.FC = () =>{


    const handleReload = () => {
       window.location.reload();
    };


    return(
        <span className='isErrorModal-container'>
            <div className='isErrorModal-container_image'>
                <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png' alt='Mimikyu' />
            </div>
            <h1> Algo deu errado </h1>
            <p> Tente novamente </p>
            <GenericButton onClick={()=> handleReload()} text='Ok' height='3em' width='10em'/>
        </span>
    )
}

export default IsErrorModal;