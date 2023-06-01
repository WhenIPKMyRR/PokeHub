import CardFavoritePokemon from '../../components/card-favorite-pokemon-home/cardFavoritePokemonHome';
import CardLastAddPokemon from '../../components/card-last-add-pokemon/cardLastAddPokemon';
import CardNewPokemon from '../../components/card-new-pokemon/cardNewPokemon';
import Carousel from '../../components/carousel/carousel';
import CategoryHome from '../../components/category-pokemon-home/categoryPokemonHome';
import  { ContainerGlobal }  from '../../styles/globalStyle';
import './home.css';

import imageCategoryFantasma from '../../assets/images/fantasma-image-category-pokemon.png'
import imageCategoryFogo from '../../assets/images/fogo-image-category-pokemon.png'
import imageCategoryAgua from '../../assets/images/agua-image-category-pokemon.png'
import imageCategoryPsiquico from '../../assets/images/psiquico-image-category-pokemon.png'
import imageCategoryNormal from '../../assets/images/normal-image-category-pokemon.png'
import imageCategoryInseto from '../../assets/images/inseto-image-category-pokemon.png'
import imageCategoryEletrico from '../../assets/images/eletrico-image-category-pokemon.png'
import ButtonAddPokemon from '../../components/button-add-pokemon/buttonAddPokemon';
import CardFavoritePokemonHome from '../../components/card-favorite-pokemon-home/cardFavoritePokemonHome';
import { Link } from 'react-router-dom';
import { useAllPokemons, usePokemon } from '../../utils/usePokeApiData';
import ReactLoading from 'react-loading';
import { usePokemonData } from '../../utils/usePokemonData';


export default function Home() {

  const { data: pokemons, isLoading, isError } = useAllPokemons();
  const { pokemonsPokeHub, isLoadingPokeHub} = usePokemonData()


    return (
       <main className='home'>
           <ContainerGlobal>
               <section className='new_Pokemon'>
                  <h1 className='new_Pokemon title'>
                     Novidades
                  </h1>
                  {isError && <h1>Erro ao carregar os pokemons</h1>}
                  {isLoading && <ReactLoading type='spin' color='#DD655E'/>}
                  <Carousel settingsResponsive={{
                     0: { items: 2.2 },
                     1024: { items: 8}
                  }}>
                     {pokemons?.reverse().slice(0, 8).map(pokemon => (
                        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                           <CardNewPokemon pokemon={pokemon} />
                        </Link>
                     ))}
                  </Carousel>
               </section>
               <section className='category_Pokemon'>
                  <Carousel settingsResponsive={{
                        0: { items: 4 },
                        1024: { items: 10}
                  }}>
                     <CategoryHome image={imageCategoryFantasma} name='Fantasma'/>
                     <CategoryHome image={imageCategoryFogo} name='Fogo'/>
                     <CategoryHome image={imageCategoryAgua} name='Água'/>
                     <CategoryHome image={imageCategoryPsiquico} name='Psiquico'/>
                     <CategoryHome image={imageCategoryNormal} name='Normal'/>
                     <CategoryHome image={imageCategoryInseto} name='Inseto'/>
                     <CategoryHome image={imageCategoryEletrico} name='Elétrico'/>
                     <span style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        padding:'1.15em 0.30em'
                     }}>
                        <ButtonAddPokemon route={'/search'} svgIcon={
                           <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="m8 4 8 8-8 8"></path>
                           </svg>
                        }/>
                        <p style={{
                           fontSize: '0.90em',
                           fontWeight: '500',
                           marginTop: '0.45em'
                        }}>
                           Ver mais
                        </p>
                     </span>      
                  </Carousel>
               </section>
               <section className='last-add_Pokemon'>
                  <h1 className='last-add_Pokemon title'>
                     Ultimos adicionados
                  </h1>
                  {/* {isErrorPokeHub && <h1>Erro ao carregar os pokemons</h1>} */}
                  {isLoadingPokeHub && <ReactLoading/>}
                  {pokemonsPokeHub?.reverse().slice(0, 4).map(pokemonPokeHub => (
                     <CardLastAddPokemon key={pokemonPokeHub.id} image={pokemonPokeHub.image} name={pokemonPokeHub.name} description={pokemonPokeHub.description} rota={pokemonPokeHub.id}/>
                  ))}
                  <span className='last-add_Pokemon linkTo'>
                     <Link to={'/caughts'}>
                        <p>
                           Ver mais
                        </p>
                     </Link>
                  </span>
               </section>
               <section className='favorites_Pokemon'>
                  <h1 className='favorites_Pokemon title'>
                     Seus favoritos
                  </h1>
                     {/* {isErrorPokeHub && <h1>Erro ao carregar os pokemons</h1>} */}
                     {isLoadingPokeHub && <ReactLoading/>}
                     {pokemonsPokeHub?.reverse().slice(0, 4).map(pokemonPokeHub => (
                        <CardFavoritePokemonHome key={pokemonPokeHub.id} image={pokemonPokeHub.image} name={pokemonPokeHub.name} description={pokemonPokeHub.description} rota={pokemonPokeHub.id}/>
                     ))}
                      <span className='favorites-Pokemon_linkTo' >
                        <Link to={'/favorites'}>
                           <p>
                              Ver mais
                           </p>
                     </Link>
                  </span>
               </section>
           </ContainerGlobal>
           <span className='add-Pokemon'>
               <ButtonAddPokemon route={'/add'} svgIcon={
                  <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 12H4"></path>
                     <path d="M12 20V4"></path>
                  </svg>
               }/>
           </span>
       </main>
    )
}