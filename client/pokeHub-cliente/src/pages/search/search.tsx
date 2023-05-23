import CardCategorySearch from "../../components/card-category-search/cardCategorySearch";
import SearchBar from "../../components/search-bar/searchBar";
import { ContainerGlobal } from "../../styles/globalStyle";
import './search.css'

const Search = () =>{
    return(
        <main>
            <ContainerGlobal>
                <SearchBar/>
                <section className="categoriesPokemon">
                    <h2>
                        Busca por categorias
                    </h2>
                    <div className="categoriesPokemon-cards">
                        <CardCategorySearch backgroundColor="#A2D9DA" linkTo="/" title="Gelo" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png"/>
                        <CardCategorySearch backgroundColor="#FF5733" linkTo="/" title="Fogo" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"/>
                        <CardCategorySearch backgroundColor="#2E86C1" linkTo="/" title="Água" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"/>
                        <CardCategorySearch backgroundColor="#66BB6A" linkTo="/" title="Grama" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"/>
                        <CardCategorySearch backgroundColor="#FFC300" linkTo="/" title="Elétrico" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"/>
                        <CardCategorySearch backgroundColor="#B8B8B8" linkTo="/" title="Normal" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"/>
                        <CardCategorySearch backgroundColor="#A5694F" linkTo="/" title="Lutador" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"/>
                        <CardCategorySearch backgroundColor="#9b59b6d6" linkTo="/" title="Venenoso" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"/>
                        <CardCategorySearch backgroundColor="#D35400" linkTo="/" title="Terra" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png"/>
                        <CardCategorySearch backgroundColor="#5dade2ba" linkTo="/" title="Voador" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"/>
                        <CardCategorySearch backgroundColor="#f1948acf" linkTo="/" title="Psíquico" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"/>
                        <CardCategorySearch backgroundColor="#bde574b5" linkTo="/" title="Inseto" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"/>
                        <CardCategorySearch backgroundColor="#7F8C8D" linkTo="/" title="Pedra" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"/>
                        <CardCategorySearch backgroundColor="#F5B7B1" linkTo="/" title="Fantasma" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/708.png"/>                            
                        <CardCategorySearch backgroundColor="#7d3c98d4" linkTo="/" title="Dragão" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"/>
                        <CardCategorySearch backgroundColor="#424949c7" linkTo="/" title="Sombrio" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"/>
                        <CardCategorySearch backgroundColor="#D5DBDB" linkTo="/" title="Aço" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png"/>
                        <CardCategorySearch backgroundColor="#F8BBD0" linkTo="/" title="Fada" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
                    </div>
                </section>
            </ContainerGlobal>
        </main>
    )
}

export default Search;