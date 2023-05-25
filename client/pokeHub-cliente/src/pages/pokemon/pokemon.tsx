import CardCommentUser from "../../components/card-comment-user/cardCommentUser";
import SearchBar from "../../components/search-bar/searchBar";
import TabObservationPokemon from "../../components/tab-observation-pokemons/tabObservationPokemon";
import TagTypePokemon from "../../components/tag-type-pokemon/tagTypePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import ReactLoading from 'react-loading';
import { useObservationData } from '../../utils/useCommentData';
import "./pokemon.css";
import { useParams } from "react-router";
import { PokemonToGetData } from "../../services/getPokemonData";



const Pokemon = () =>{
    
    
    const { dataPokemon, isLoadingPokemon } = PokemonToGetData();
    const { observations, isLoadingComments } = useObservationData();

    return(
        <>  
            <main>
                <ContainerGlobal>
                    <div className="pokemonPage-image">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png" alt=""/>
                    </div>
                    <div className="pokemonPage-info">
                        <div className="pokemonPage-info_header">
                            {
                                isLoadingPokemon &&
                                <span>
                                    <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                                </span>
                            }
                            {dataPokemon &&(
                                <>
                                    <span className="pokemonPage-info_header tag-pokemon">
                                        <TagTypePokemon type={dataPokemon.type}/>
                                    </span>
                                    <p className="pokemonPage-info_header id-pokemon">
                                        {dataPokemon.id}
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="pokemonPage-info_text">
                        {
                            isLoadingPokemon &&
                            <span>
                                <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                            </span>
                        }
                        {dataPokemon &&(
                            <div key={dataPokemon.name}>
                                <h1>{dataPokemon.name}</h1>
                                <p>{dataPokemon.type}</p>
                            </div>
                        )}
                        </div>
                        <div className="pokemonPage-info_observations">
                        <h2>
                                Caracteristicas
                        </h2>
                        <div className="pokemonPage-info_observations container-observations">
                                <TabObservationPokemon type="Altura" value="1.65"/>
                                <TabObservationPokemon type="Peso" value="58kg"/>
                                <TabObservationPokemon type="Cor" value="rosa"/>
                        </div>
                        </div>
                        <div className="pokemonPage-info_comments">
                            <h2>
                                Comentários
                            </h2>
                            <textarea/>
                            <div className="pokemonPage-info_comments container-comments">
                                {
                                    isLoadingComments &&
                                    <span>
                                        <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                                    </span>
                                }
                                {observations?.map(observation =>{
                                    return <CardCommentUser description={observation.description} userName={observation.userName}/>
                                })}
                            </div>
                        </div>
                    </div>
                </ContainerGlobal>
            </main>
        </>
    )
}

export default Pokemon;