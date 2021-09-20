import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SimpleStorage from "react-simple-storage";

import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

class App extends Component {
	state = {
		livros: []
	};

	// Adicionar Livro.
	inserirLivro = livro => {
		livro.id = this.state.livros.length + 1;

		this.setState({
			livros: [...this.state.livros, livro]
		});
	};

	// Editar Livro.
	editarLivro = livro => {
		const index = this.state.livros.findIndex(
			p => p.id === livro.id
		);

		const livros = this.state.livros
			.slice(0, index)
			.concat(this.state.livros.slice(index + 1));

		const novosLivros = [...livros, livro].sort((a, b) => a.id - b.id);

		this.setState({
			livros: novosLivros
		});
	}

	// Remover Livro.
	removerLivro = livro => {
		if (window.confirm("Você realmente quer remover esse livro?")) {
			const livros = this.state.livros.filter(
				pesquisar => pesquisar.isbn !== livro.isbn
			);

			this.setState({ livros });
		}
	}

	render() {
		return (
			<Router>
				<SimpleStorage parent={this} />
				<Menu />
				<Switch>
					<Route
						exact
						path="/editar/:isbnLivro"
						render={props => {
							const livro = this.state.livros.find(
								livro => livro.isbn === props.match.params.isbnLivro
							);

							if (livro) {
								return (
									<CadastrarLivros
										editarLivro={this.editarLivro}
										livro={livro}
									/>
								)
							} else {
								return <Redirect to="/" />
							}
						}}
					/>

					<Route
						exact
						path="/"
						render={() => <TabelaLivros
							livros={this.state.livros}
							removerLivro={this.removerLivro}
						/>}
					/>

					<Route
						exact
						path="/cadastrar"
						render={() => (
							<CadastrarLivros
								inserirLivro={this.inserirLivro}
								livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
							/>
						)}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

export default App;
