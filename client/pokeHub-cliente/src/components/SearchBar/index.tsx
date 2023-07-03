import './searchBar.css'


interface ISearchBar{
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<ISearchBar> = (props) =>{

    return(
        <>
            <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </>
    )

}

export default SearchBar;