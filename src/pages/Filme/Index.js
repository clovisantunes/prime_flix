
import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";

import './filmeInfo.css';
import api from '../../services/api';
function Filme () {
    const {id} = useParams();
    const[filme,setFilme] = useState({});
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"a37b48df5a015c0db67c6000097432aa",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não Encontrado")
                navigate('/', {replace: true});
                return;
            })
        }
        loadFilme();

        return() => {
            console.log("componente desmontado")
        }
    },[])

    function saveFilm() {
        const list = localStorage.getItem('@primeflix');

        let filmSaves = JSON.parse(list) || [];

        const hasFilm = filmSaves.some((filmSave)=> filmSave.id === filme.id )

        if(hasFilm){
            alert("Filme ja esta na lisa");
            return;
        }

        filmSaves.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmSaves));
        alert("Filme salvo")
    }

    if (loading){
        return(
            <div className="filme-info">
                <h1>Carregando Detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} /10</strong>
        <div className="area_button">
            <button onClick={saveFilm}>Salvar</button>
            <button>
                <a href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} target="blank">
                    Trailer
                </a>
    
            </button>
        </div>

        </div>
    )
}

export default Filme;