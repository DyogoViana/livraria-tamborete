import React from "react"

const Home = () => {
	return (
		<>
			<h2>Últimos Lançamentos</h2>
			<div className="card">
				<div className="thumb">
					<img
						src="imagens\capas\Livro-Padrões-para-Kubernetes.jpg"
						alt="Livro Padrões para Kubernetes."
					/>
				</div>
				<div className="detalhes">
					<h3>Padrões para Kubernetes</h3>
					<p>O modo como os...</p>
					<a href="#">Leia mais &gt;</a>
				</div>
			</div>

			<div className="card">
				<div className="thumb">
					<img
						src="imagens\capas\Livro-Introdução-ao-Pentest.jpg"
						alt="Livro Introdução ao Pentest."
					/>
				</div>
				<div className="detalhes">
					<h3>Introdução ao Pentest - 2ª Edição</h3>
					<p>Introdução ao Pentest...</p>
					<a href="#">Leia mais &gt;</a>
				</div>
			</div>
		</>
	);
};

export default Home;
