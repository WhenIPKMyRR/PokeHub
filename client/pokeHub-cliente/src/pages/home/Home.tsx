import CardFavoritePokemon from '../../components/card-favorite-pokemon/cardFavoritePokemon';
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


export default function Home() {
    return (
       <main className='home'>
           <ContainerGlobal>
             <section className='new_Pokemon'>
                <h1 className='new_Pokemon title'>
                  Novidades
               </h1>
               <Carousel settingsResponsive={{
                  0: { items: 2.5 },
                  768: { items: 4 },
                  1024: { items: 8}
                }}>
                  <CardNewPokemon/>
                  <CardNewPokemon/>
                  <CardNewPokemon/>
                  <CardNewPokemon/>
                  <CardNewPokemon/>
               </Carousel>
             </section>
             <section className='category_Pokemon'>
                  <Carousel settingsResponsive={{
                     0: { items: 4 },
                     768: { items: 6 },
                     1024: { items: 10}
                  }}>
                  <CategoryHome image={imageCategoryFantasma} name='Fantasma'/>
                  <CategoryHome image={imageCategoryFogo} name='Fogo'/>
                  <CategoryHome image={imageCategoryAgua} name='Água'/>
                  <CategoryHome image={imageCategoryPsiquico} name='Psiquico'/>
                  <CategoryHome image={imageCategoryNormal} name='Normal'/>
                  <CategoryHome image={imageCategoryInseto} name='Inseto'/>
                  <CategoryHome image={imageCategoryEletrico} name='Elétrico'/>
                  <ButtonAddPokemon svgIcon={
                     <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m8 4 8 8-8 8"></path>
                     </svg>
                  }/>               
                </Carousel>
             </section>
             <section className='last-add_Pokemon'>
                <h1 className='last-add_Pokemon title'>
                  Ultimos adicionados
               </h1>
                <CardLastAddPokemon/>
             </section>
             <section className='favorites_Pokemon'>
                <h1 className='favorites_Pokemon title'>
                  Seus favoritos
               </h1>
                <CardFavoritePokemon/>
             </section>
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