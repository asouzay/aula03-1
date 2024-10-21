import { useEffect, useState } from "react";

export default function ListaProdutos({produtos}) {
    return(
        <>
        <h1>Lista Produtos</h1>
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
    
