const Empresa = require('../interface/interface');

module.exports = class Servientrega extends Empresa {
	
	constructor(empresa){
		this.empresa = empresa,
		this.tiempo = "10 dias"
	}

	enviar(){

		return data = {
			empresa: this.empresa,
			tiempo: this.tiempo
		}
	}
}