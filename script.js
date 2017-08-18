var pokemon = ["Aron", "Dragonite", "Tyranitar"]; // verander in deze array de pokemon (wel met hoofdletter)

setInterval(
	function () { 
		document.querySelector("#go").click(); 
		setTimeout(
			function () {
				var zooi = document.querySelector("#results").innerHTML;
				for(var i = 0; i < pokemon.length; i++) {
					if(zooi.search(pokemon[i]) != -1) {
						alert(pokemon[i]);
					}
				}
			}, 100);
	}, 2727.272727); // verander op deze line het getal voor een ander tempo
