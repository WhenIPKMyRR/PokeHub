import CardCommentUser from "../../components/card-comment-user/cardCommentUser";
import SearchBar from "../../components/search-bar/searchBar";
import TabObservationPokemon from "../../components/tab-observation-pokemons/tabObservationPokemon";
import TagTypePokemon from "../../components/tag-type-pokemon/tagTypePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import "./pokemon.css";


const Pokemon = () =>{
    return(
        <main>
            <ContainerGlobal>
                <div className="pokemonPage-image">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png" alt=""/>
                </div>
                <div className="pokemonPage-info">
                    <div className="pokemonPage-info_header">
                        <span className="pokemonPage-info_header tag-pokemon">
                            <TagTypePokemon/>
                            <TagTypePokemon/>
                            <TagTypePokemon/>
                            <TagTypePokemon/>
                        </span>
                        <p className="pokemonPage-info_header id-pokemon">
                            150
                        </p>
                    </div>
                    <div className="pokemonPage-info_text">
                        <h1>
                            Espeon
                        </h1>
                        <p>
                            To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.
                        </p>
                    </div>
                    <div className="pokemonPage-info_observations">
                       <h2>
                            Curiosidades
                       </h2>
                       <div className="pokemonPage-info_observations container-observations">
                            <TabObservationPokemon type="Altura" value="1.65"/>
                            <TabObservationPokemon type="Peso" value="58kg"/>
                            <TabObservationPokemon type="Cor" value="rosa"/>
                       </div>
                       <SearchBar/>
                    </div>
                    <div className="pokemonPage-info_comments">
                        <h2>
                            Comentários
                        </h2>
                        <textarea/>
                        <div className="pokemonPage-info_comments container-comments">
                            <CardCommentUser/>
                            <CardCommentUser/>
                            <CardCommentUser/>
                            <CardCommentUser/>
                        </div>
                    </div>
                </div>
            </ContainerGlobal>
        </main>
    )
}

export default Pokemon;