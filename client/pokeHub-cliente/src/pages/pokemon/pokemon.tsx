import CardCommentUser from "../../components/card-comment-user/cardCommentUser";
import TagTypePokemon from "../../components/tag-type-pokemon/tagTypePokemon";
import ReactLoading from 'react-loading';
import { ContainerGlobal } from "../../styles/globalStyle";
import { useObservationData } from '../../utils/useObservationPokemonData';
import { PokemonToGetData } from "../../services/getPokemonData";
import "./pokemon.css";



interface ITabObservationPokemonProps{
    type: string;
    value: string;
}

const TabObservationPokemons: React.FC<ITabObservationPokemonProps> = ({ type, value }) => {

    return(
        <div className="tabObservationPokemon-container">
            <svg width={35} height={35} fill="#a3a3a3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0ZM13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            <strong>
                {type}
            </strong>
            <p>
                {value}
            </p>
        </div>
    )
}

const Pokemon = () =>{

    const { dataPokemon, isLoadingPokemon } = PokemonToGetData();
    const { observationsPokemon } = useObservationData();

    return(
        <>
            {
                isLoadingPokemon &&
                <span>
                    <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                </span>
            }
            {dataPokemon &&(
                <>
                    <main>
                        <ContainerGlobal>
                            <div className="pokemonPage-image">
                                <img src={dataPokemon.image} alt=""/>
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
                                        <TabObservationPokemons type="Altura" value={dataPokemon.height}/>
                                        <TabObservationPokemons type="Peso" value={dataPokemon.weight}/>
                                        {/* <TabObservationPokemon type="Cor" value={dataPokemon.}/> */}
                                </div>
                                </div>
                                <div className="pokemonPage-info_comments">
                                    <h2>
                                        Comentários
                                    </h2>
                                    <textarea/>
                                    <div className="pokemonPage-info_comments container-comments">
                                        {observationsPokemon?.map(observation =>{
                                            return <CardCommentUser description={observation.description} userName={observation.userName}/>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </ContainerGlobal>
                    </main>
            
                </>
            )}
        </>
    )
}

export default Pokemon;