
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../services/api';
function Filme () {
    const {id} = useParams();
    const[filme,setFilme] = useState({});
    const [loading, setLoading] = useState(true)

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
            })
        }
        loadFilme();

        return() => {
            console.log("componente desmontado")
        }
    },[])

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
        </div>
    )
}

export default Filme;