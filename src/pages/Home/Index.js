import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';
// https://api.themoviedb.org/3/movie/now_playing?api_key=a37b48df5a015c0db67c6000097432aa&language=pt-BR


function Home () {
    const [filmes, setfilmes] = useState([]);
    const [loading , setLoading] = useState(true);


useEffect(() => {
    async function loadFilmes() {
        const response = await api.get("movie/now_playing",{
            params:{
                api_key:"a37b48df5a015c0db67c6000097432aa",
                language: "pt-BR",
                page: 1,
            }
        })
        //console.log(response.data.results.slice(0,10))
        setfilmes(response.data.results.slice(0,10))
        setLoading(false);
    }
    loadFilmes();
},[])
if(loading){
    return(
        <div className="loading">
            <h2>Carregando filmes</h2>
        </div>
    )
}

    return(
        <div className="container">
            <div className="list_films">
                {filmes.map((filme) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>

                        </article>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home;