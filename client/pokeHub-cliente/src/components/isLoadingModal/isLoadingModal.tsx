import ReactLoading from "react-loading";
import './isLoadingModal.css'


const IsLoadingModal: React.FC = () =>{
    return(
        <span className="isLoadingModal-container">
            <ReactLoading
                type="spin"
                color="#DD655E"
                height={50}
                width={50}
            />
        </span>
    )
}   

export default IsLoadingModal;