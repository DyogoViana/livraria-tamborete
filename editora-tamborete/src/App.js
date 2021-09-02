import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Topo from "./components/Topo";
import Home from "./components/Home";
import FrontEnd from "./components/FrontEnd";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import Livro from "./components/Livro";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import "./index.css";

class App extends Component {
	state = {
		livros: []
	};

	async componentDidMount() {
		try {
			const { data: livros } = await axios.get("api/todosOsLivros.json");
			this.setState({ livros });
		} catch (error) {
			console.log(error);
			document
				.querySelectorAll(".principal")[0]
				.insertAdjacentHTML(
					"beforeend",
					"<p class='error'>Mensagem de error</p>"
				);
		}
	}

	render() {
		return (
			<Router>
				<Topo />
				<Switch>
					<Route exact path="/"
						render={() => <Home livros={this.state.livros} />}
					/>
					<Route exact path="/frontend"
						render={() => <FrontEnd livros={this.state.livros} />}
					/>
					<Route exact path="/programacao"
						render={() => <Programacao livros={this.state.livros} />}
					/>
					<Route exact path="/design"
						render={() => <Design livros={this.state.livros} />}
					/>
					<Route exact path="/catalogo"
						render={(props) => <Catalogo livros={this.state.livros} />}
					/>
					<Route exact path="/livro/:livroSlug"
						render={props => {
							const livro = this.state.livros.find(
								livro => livro.slug === props.match.params.livroSlug);

							if (livro) return <Livro livro={livro} />;
							else return <NotFound />;
						}}
					/>
					<Route component={NotFound} />
				</Switch>
				<Rodape />
			</Router>
		);
	}
}

export default App;
