import ButtonAddPokemon from "../../components/button-add-pokemon/buttonAddPokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import './favorites.css'

const Favorites =() =>{
    return(
        <main className="favorites">
            <ContainerGlobal>
                <h1>
                    Favorites
                </h1>
            </ContainerGlobal>
            <span className='add-Pokemon'>
               <ButtonAddPokemon svgIcon={
                  <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 12H4"></path>
                     <path d="M12 20V4"></path>
                  </svg>
               }/>
           </span>
        </main>
    )
}

export default Favorites;