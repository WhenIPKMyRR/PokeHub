import { useParams } from "react-router"
import { ContainerGlobal } from "../../styles/globalStyle"
import { useQueryClient } from "react-query"
import { Pokemon } from "../../components/card-last-add-pokemon/cardLastAddPokemon"

const Caughts = () =>{

    const params = useParams()
    const currentPokemon = params['*'] as string

    const queryClient = useQueryClient()

    const handleChangePokemonName = async () => {

        const previvousPokemons = queryClient.getQueryData<Pokemon[]>('all')
        
        if(previvousPokemons){
            const nextPokemons = previvousPokemons.map(pokemon => {
                if(pokemon.name === currentPokemon){
                    return{
                        ...pokemon,
                        name: 'Novo nome'
                    }
                }else{
                    return pokemon;
                }
            })
            queryClient.setQueryData('all', nextPokemons)
        }
    }

    return(
        <main>
            <ContainerGlobal>
                <h1>
                    {currentPokemon}
                </h1>
                <button onClick={handleChangePokemonName}>
                    Alterar nome
                </button>
            </ContainerGlobal>
        </main>
    )
}
export default Caughts