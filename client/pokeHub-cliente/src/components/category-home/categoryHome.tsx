import './categoryHome.css'
import ghost from '../../assets/images/pokeboll_ghost.png'


export default function CategoryHome() {
    return(
        <div className="category-home">
            <img src={ghost} alt=""/>
            <p>
                Ghost
            </p>
        </div>
    );
}