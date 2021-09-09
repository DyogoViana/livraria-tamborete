import React from "react";
import { Link } from "react-router-dom";

const FrontEnd = ({ livros }) => (
	<main className="principal">
		<h2>Categoria Front End</h2>
		{
			livros
				.filter(lista => lista.categoria === "frontend")
				.map(livro => (
					<div className="card" key={livro.id}>
						<div className="thumb">
							<img
								src={"/imagens/capas/" + livro.id + ".jpg"}
								alt="Thumbnails da capa do livro"
							/>
						</div>
						{
							livros
								.filter(c => c.slug === livro.slug)
								.map(livro => (
									<span key={livro.slug}>
										<Link to={`/livro/${livro.slug}`}>
											{
												<div className="detalhes">
													<h3>{livro.titulo}</h3>
													<p>{livro.descricao.slice(0, 130) + "..."}</p>
													<p>Leia mais &gt;</p>
												</div>
											}
										</Link>
									</span>
								))
						}
					</div>
				))
		}
	</main>
);

export default FrontEnd;
