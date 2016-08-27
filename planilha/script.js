//var cooperAdd = 'http://cmsys.com.br/cooperpeople/validaCooperado.asp'; 

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var millisecsInDay = 86400000;
    return Math.ceil((((this - onejan) /millisecsInDay) + onejan.getDay()+1)/7);
};

var qs = document.querySelectorAll;

function linkPlanilha(semana,ano,login){
	return "http://cmsys.com.br/cooperpeople/extratoCooperadoLanc.asp?Semana="+semana+"&Ano="+ano+"&matricula="+login+"&prefixohist=&processada=1&tipoUsuario=1";
}

function enviaLogin(){
	var login = document.querySelector('#login').value;
	//var senha = document.querySelector('#senha').value;
	
	var data = new Date();

	var ano = data.getUTCFullYear();

	var semana = new Date().getWeek();


	/*
	var loginForm = {
		txt_Matricula: login,
		txt_Senha: senha,
		txt_Empresa: 1
	}

	var formOpts = {
		method: 'POST',
		mode: 'no-cors',
		body: loginForm
	}
	*/
	$('#response').clean();

	for (var i = semana - 1; i >= semana - 10; i--) {
		$('#response').append(`
			<ul>
			    <li>
			    	<a href=`+ linkPlanilha(i,ano,login) +`>Semana: `+ i+`</a>
			    </li>
			</ul>
			`)	
	}
	

	//window.location = planilha;

	/*
	fetch(cooperAdd,formOpts).
	then(function(response){
		window.location = planilha;
	})
	*/
}

