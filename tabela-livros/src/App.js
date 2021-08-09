import React from "react";

// Tabelas
import TabelaHead from "./components/tabelas/TabelaHead";
import TabelaBody from "./components/tabelas/TabelaBody";
import TabelaFoot from "./components/tabelas/TabelaFoot";

function App() {
	return (
		<table className="tabela">
			<TabelaHead />
			<TabelaBody />
			<TabelaFoot />
		</table>
	);
}

export default App;
