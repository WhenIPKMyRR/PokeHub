import CardNewPokemon from '../../components/card-new-pokemon/cardNewPokemon';
import { ContainerGlobal } from '../../styles/globalStyle';
import './home.css';

// isDarkMode
export default function Home({  }) {
    return (
       <main>
           <ContainerGlobal>
             <section className='new_Pokemon'>
                <h1>Novidades</h1>
                <CardNewPokemon/>
             </section>
             <section className='category_Pokemon'>

             </section>
             <section className='last-add_Pokemon'>
                <h1>Ultimos adicionados</h1>

             </section>
             <section className='favorites_Pokemon'>
                <h1>Seus favoritos</h1>

             </section>
           </ContainerGlobal>
       </main>
    )
}