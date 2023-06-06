import { Link } from "react-router-dom";
import CardCategorySearch from "../../components/card-category-search/cardCategorySearch";
import SearchBar from "../../components/search-bar/searchBar";
import { ContainerGlobal } from "../../styles/globalStyle";
import CardSearchPokemon from "../../components/cardSearchPokemon/cardSearchPokemon";
import { usePokemonData } from "../../utils/usePokemonData";
import IsLoadingModal from "../../components/isLoadingModal/isLoadingModal";
import IsErrorModal from "../../components/isErrorModal/isErrorModal";
import { useEffect, useState } from "react";
import './search.css'


const Search = () =>{

    const { pokemonsPokeHub, isLoadingPokeHub, isError} = usePokemonData()

    const [search, setSearch] = useState('');
    const [pokemons, setPokemons] = useState(pokemonsPokeHub);
  
    useEffect(() => {
        setPokemons(
          pokemonsPokeHub?.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, pokemonsPokeHub]
    );

    
      

    return(
        <main>
            <ContainerGlobal>
                <section className="searchPokemon-container">
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar meus pokemons"/>
                    <ul className="searchPokemon-list">
                        {isError && <IsErrorModal/>}
                        {isLoadingPokeHub && <IsLoadingModal/>}
                        {pokemons?.map(pokemon => {
                            if(search == ""){
                                return null
                            }else{
                                return(
                                    <li className="searchPokemon-list_item">
                                        <Link to={`/pokemon/${pokemon.name}`}>
                                            <CardSearchPokemon key={pokemon.name} pokemon={pokemon}/>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </section>
                <section className="categoriesPokemon">
                    <h2>
                        Busca por categorias
                    </h2>
                    <div className="categoriesPokemon-cards">
                        <Link to={'type/ice'}>
                            <CardCategorySearch backgroundColor="#A2D9DA" title="Gelo" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"/>
                        </Link>
                        <Link to={'type/fire'}>
                            <CardCategorySearch backgroundColor="#FF5733"  title="Fogo" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"/>
                        </Link>
                        <Link to={'type/water'}>
                            <CardCategorySearch backgroundColor="#2E86C1"  title="Água" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"/>
                        </Link>
                        <Link to={'type/grass'}>
                            <CardCategorySearch backgroundColor="#66BB6A"  title="Grama" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"/>
                        </Link>
                        <Link to={'type/eletric'}>
                            <CardCategorySearch backgroundColor="#FFC300"  title="Elétrico" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"/>
                        </Link>
                        <Link to={'type/normal'}>
                            <CardCategorySearch backgroundColor="#B8B8B8"  title="Normal" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"/>
                        </Link>
                        <Link to={'type/fighting'}>
                            <CardCategorySearch backgroundColor="#A5694F"  title="Lutador" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"/>
                        </Link>
                        <Link to={'type/poison'}>
                            <CardCategorySearch backgroundColor="#9b59b6d6"  title="Venenoso" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"/>
                        </Link>
                        <Link to={'type/ground'}>
                            <CardCategorySearch backgroundColor="#D35400"  title="Terra" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"/>
                        </Link>
                        <Link to={'type/flying'}>
                            <CardCategorySearch backgroundColor="#5dade2ba"  title="Voador" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"/>
                        </Link>
                        <Link to={'type/psychic'}>
                            <CardCategorySearch backgroundColor="#f1948acf"  title="Psíquico" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"/>
                        </Link>
                        <Link to={'type/bug'}>
                            <CardCategorySearch backgroundColor="#bde574b5"  title="Inseto" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"/>
                        </Link>
                        <Link to={'type/rock'}>
                            <CardCategorySearch backgroundColor="#7F8C8D"  title="Pedra" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"/>
                        </Link>
                        <Link to={`type/ghost`}>
                            <CardCategorySearch backgroundColor="#F5B7B1"  title="Fantasma" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/708.png"/>
                        </Link>
                        <Link to={'type/dragon'}>
                            <CardCategorySearch backgroundColor="#7d3c98d4"  title="Dragão" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"/>
                        </Link>
                        <Link to={'type/dark'}>
                            <CardCategorySearch backgroundColor="#424949c7"  title="Sombrio" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"/>
                        </Link>
                        <Link to={'type/steel'}>
                            <CardCategorySearch backgroundColor="#D5DBDB"  title="Aço" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png"/>
                        </Link>
                        <Link to={'type/fairy'}>
                            <CardCategorySearch backgroundColor="#F8BBD0"  title="Fada" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
                        </Link>
                    </div>
                </section>
            </ContainerGlobal>
        </main>
    )
}

export default Search;