import { useEffect, useState } from 'react';
import './favorites.css';
import { Link } from 'react-router-dom';

function Favorites() {

    const [filmes,setFilmes] = useState([]);


    useEffect(()=> {
        const listFilm = localStorage.getItem('@primeflix')
        setFilmes(JSON.parse(listFilm) || [])
    })

    function deleteFilm(id){
     let filterFilm = filmes.filter((item)=>{
        return(item.id !== id)
     })
     setFilmes(filterFilm);
     localStorage.setItem('@primeflix', JSON.stringify(filterFilm))
    }

    
    return(
        <div className='My_Films'>
            <h1>
                Meus Filmes 
            </h1>
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => deleteFilm(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favorites;