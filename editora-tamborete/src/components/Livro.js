import React from "react";

const Livro = ({ livro }) => {
	<main className="principal">
		<div className="pagina-livro">
			<h2>{livro.titulo}</h2>

			<div className="livro">
				<img
					src={"/imagens/capas/" + livro.id + ".jpg"}
					alt="Thmbnail da capa do livro."
				/>
				<ul>
					<li>ISBN: {livro.isbn}</li>
					<li>Ano: {livro.ano}</li>
					<li>Páginas: {livro.pagina}</li>
					<li>Preço: {livro.preco},00</li>
				</ul>
				<hr />

				<h3>Descrição do livro</h3>
				<p>{livro.descricao}</p>
			</div>
		</div>
	</main>
};

export default Livro;
