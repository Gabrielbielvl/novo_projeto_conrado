import Image from "next/image";
import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (
    <div>

      <Menu/>

      
      <h1>Enviando para Github</h1>
      <p>Atividade finalizada!</p>

      <hr/>

      <h2>Produtinhux</h2>

      <div className="flex justify-around">

      <Produto nome="vilao começo filme" preco="1.000.000,00" estrela="⭐⭐⭐" botao="compra"/>
      <Produto nome="vilao meio" preco="100.000" estrela="⭐⭐" botao="PROMOCAO" />
      <Produto nome="vilao fim" preco="1.000" estrela="⭐" botao="pendente"/>
      <Produto nome="vilao gratis" preco="00,00" estrela="⭐" botao="pendente"/>

      </div>

    </div>
  );
}
