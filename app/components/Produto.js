function Produto( attr ) {
    return ( 
        <div className="border-solid border w-1/6 bg-zinc-50 p-5 ">
            <div className="text-center">
            <img src="https://placehold.co/200"/>
            </div>
            <h2 className="text-lime-800"> {attr.nome} </h2>
            <p> {attr.estrela} </p>
            <p> R$ {attr.preco} </p>
            <button className="meu-botao"> {attr.botao}</button>
        </div>
     );
}

export default Produto;