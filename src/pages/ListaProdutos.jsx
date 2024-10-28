import styles from './styles/listaProdutos.module.css'

export default function ListaProdutos({produtos}) {
    return(
        <>
      <h1 className={styles.espaco}>Produtos em destaque</h1>
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
    
