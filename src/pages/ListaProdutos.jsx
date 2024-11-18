import styles from './styles/listaProdutos.module.css'
import Loading from './Loading.jsx'

export default function ListaProdutos({produtos, ordenarAz}) {
  if (lista.length === 0){
    return(<Loading/>)
  }

    return(
        <>
      <h1 className={styles.espaco}>Produtos em destaque</h1>
      <button onClick={()=> ordenarAz()}>
        Az
      </button>
        <ul className={styles.bloco}>
                    {produtos.map(produto => (
                    <li key={produto.id}>
                    <p>{produto.tittle}</p>
                    <p>{produto.description}</p>
                    <p className={styles.preco}>Preço: R${produto.price}</p>
                    <img src={produto.image} alt={produto.tittle} width={100} />
                    </li>
    
                    ))}
             </ul>
        </>
    );
  }

    
