import React, { Component } from "react";

// Tabelas
import TabelaHead from "./components/tabelas/TabelaHead";
import TabelaBody from "./components/tabelas/TabelaBody";
import TabelaFoot from "./components/tabelas/TabelaFoot";

class App extends Component {
	state = {
		livros: []
	};

	componentDidMount() {
		fetch("/api/livros.json")
		 .then(response => response.json())
		 .then(livros => this.setState({ livros }))
		 .catch(function(error) {
			 console.log("Erro na requisição.");
		 })
		 .finally(function() {
			 console.log("Sempre retorna.");
		 });
	};

	// remover linha da tabela.
	handleRemoverlinha = (id) => {
		const livros = this.state.livros.filter(listaLivros => listaLivros.id !== id);
		this.setState({livros});
	}

	render() {
		return (
			<table className="tabela">
				<TabelaHead />
				<TabelaBody
					livros={this.state.livros}
					removerLinha={this.handleRemoverlinha}
				/>
				<TabelaFoot quantidadeLivros={this.state.livros.length} />
			</table>
		);
	}
}
export default App;
