import { useEffect, useState } from "react";
import ListaProdutos from "./ListaProdutos";

export default function Home() {
    const [lista, setLista] = useState ([]);
 
useEffect(() => {
    const receberListaProdutos = async () => {
        try {
            const resposta = await fetch('https://fakestoreapi.com/products');
            const dados = await resposta.json();
            setLista(dados);
        }catch (erro) {
            alert('Ocorreu um erro na comunicação com o servidor!');
        }
    }
    receberListaProdutos();
},[]);

const ordenarAz = () =>{
    const listaAux = {...lista}.sort((a,b) => a.title.localleCompare(b.title));
    setLista(listaAux);
}

 return(
    <>
    <h1>Loja GuStore</h1>
   <ListaProdutos produtos={lista} ordenarAz={ordenarAz}/>
    </>
 );
}