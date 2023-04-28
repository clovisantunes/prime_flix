
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Filme () {
    const {id} = useParams();
    return(
        <div>
            <h1>Acessando Filme {id}</h1>
        </div>
    )
}

export default Filme;