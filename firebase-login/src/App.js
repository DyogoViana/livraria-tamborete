import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import TabelaHome from "./components/TabelaHome";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";
import SimpleStorage from "react-simple-storage";

class App extends Component {
	state = {
		livros: [],
		isAuthenticated: false,
	};

	// Inserir Livro.
	inserirLivro = (livro) => {
		livro.id = this.state.livros.length + 1;
		this.setState({
			livros: [...this.state.livros, livro],
		});
	};

	// Editar Livro.
	editarLivro = (livro) => {
		const index = this.state.livros.findIndex((p) => p.id === livro.id);
		const livros = this.state.livros
			.slice(0, index)
			.concat(this.state.livros.slice(index + 1));
		const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
		this.setState({
			livros: newLivros,
		});
	};

	// Remover Livro.
	removerLivro = (livro) => {
		if (window.confirm("Remover esse livro?")) {
			const livros = this.state.livros.filter((p) => p.isbn !== livro.isbn);
			this.setState({ livros });
		}
	};

	// autenticação.
	componentDidMount() {
		this.setState({
			isAuthenticated: true,
		});
	};

	render() {
		return (
			<Router>
				<SimpleStorage parent={this} />
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							this.state.isAuthenticated === false ? (
								<TabelaHome livros={this.state.livros} />
							) : (
								<TabelaLivros
									livros={this.state.livros}
									removerLivro={this.removerLivro}
								/>
							)
						}
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

					<Route exact path="/login" render={() => <Login />} />

					<Route
						exact
						path="/editar/:isbnLivro"
						render={(props) => {
							const livro = this.state.livros.find(
								(livro) => livro.isbn === props.match.params.isbnLivro
							);
							if (livro) {
								return (
									<CadastrarLivros
										editarLivro={this.editarLivro}
										livro={livro}
									/>
								);
							} else {
								return <Redirect to="/" />;
							}
						}}
					/>

					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
