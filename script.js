var nomeUtilizador = prompt("Como é que te chamas?")
var comidaUtilizador = prompt("Qual é o teu prato favorito?")
var bebidaUtilizador = prompt("Com que bebida gostas de saborear esse prato?")

function Questao(nome, comidaFav, bebidaFav){
	this.nome = nome;
	this.comida = comidaFav;
	this.bebida = bebidaFav;
	this.mensagem = function(){
		confirm("Olá " + this.nome + ", gostas de " + this.comida + " acompanhado de " + this.bebida + "?")
		document.write("<h1> Eu prefiro Lasanha com CocaCola! </h1>");
	}
}

var utilizador = new Questao(nomeUtilizador, comidaUtilizador, bebidaUtilizador);
utilizador.mensagem();