import { useEffect, useState } from "react";

export default function Home() {
    const [lista, setLista] = useState ([]);
 
useEffect(() => {
    const receberListaProdutos = async () => {
        try {
            const resposta = await fetch('https://fakestoreapi.com/products');
            const dados = await resposta.json();
        }catch (erro) {
            alert('Ocorreu um erro na comunicação com o servidor!');
        }
    }
    receberListaProdutos();
},[]);

 return(
    <>
    <h1>Lista De Produtos</h1>
    <ul>
                {produto.map(produto => (
                <li key={produto.id}>
                <p>{produto.tittle}</p>
                <p>{produto.description}</p>
                <p>Preço: R${produto.price}</p>
                <img src={produto.image} alt={produto.tittle} width={100} />
                </li>

                ))}
         </ul>
    </>
 );
}
