
function vai(){
	function gerar(m,n,x)
	{
		let campo=[]
		campo.length=m
		for(let i=0;i<m;i++)
		{
			campo[i]=[]
			campo[i].length=n
			
			for(let j=0;j<n;j++)
			{
				campo[i][j]=false
			}
		}
		
		let temp=0
		while(temp!=x)
		{
			let posi=Math.floor(Math.random()*m)
			let posj=Math.floor(Math.random()*n)
			
			if(campo[posi][posj]==false)
			{
				campo[posi][posj]=true
				temp++
			}
			
			
		}
		
		return campo
	}

	function verdade(predio,casa) {
		let retorno=[]
		
		for(let i=0;i<predio.length;i++)
		{
			if(!predio[i][casa.i][casa.j])
			{
				retorno.push(predio[i])
			}
		}	
		return retorno
	}

	let tamx=(document.getElementById("tamanhoX1")).value
	let tamy=(document.getElementById("tamanhoY1")).value
	var bombas=(document.getElementById("bombas")).value
	let quantTabuleiros=(document.getElementById("quantTabuleiros")).value
	let posi=(document.getElementById("posi1")).value
	let posj=(document.getElementById("posj1")).value
	
	
	let interpretacao=[]
	interpretacao.length=quantTabuleiros

	for(let i=0;i<interpretacao.length;i++)
	{
		interpretacao[i]=gerar(tamx,tamy,bombas)
	}
	let stringRes=""
	for(let i=0;i<interpretacao.length;i++)
	{
		stringRes=stringRes.concat("{")
		for(let j=0;j<tamx;j++)
		{
			for(let k=0;k<tamy;k++)
			{
				if(interpretacao[i][j][k])
				{
					stringRes=stringRes.concat("[" + j + "," + k + "] ")
				}	
			}
		}
		stringRes=stringRes.slice(0,(stringRes.length-1))
		stringRes=stringRes.concat("} \n")
	}
	console.log("Resposta da 1:")
	console.log(stringRes)
	console.log(interpretacao)	
	
	let subconjunto=verdade(interpretacao,{i:posi,j:posj})
	
	stringRes=""
	for(let i=0;i<subconjunto.length;i++)
	{
		stringRes=stringRes.concat("{")
		for(let j=0;j<tamx;j++)
		{
			for(let k=0;k<tamy;k++)
			{
				if(subconjunto[i][j][k])
				{
					stringRes=stringRes.concat("[" + j + "," + k + "] ")
				}	
			}
		}
		stringRes=stringRes.slice(0,(stringRes.length-1))
		stringRes=stringRes.concat("} \n")
	}
	console.log("Resposta da 2:")
	console.log(stringRes)
	console.log(subconjunto)
	
}

function vai3()
{

	function testar(m,n,i,j,k){

		let rec = (valor)=>{

			for(let i=valor;i<vizinhos;i++)
			{
				if(resultado.length==k-1)
				{
					resultado.push(i)
					//console.log(resultado)
					let temp="("
					for(let i=0;i<vizinhos;i++)
					{
						let teste=false
						for(let j=0;j<resultado.length;j++)
						{
							if(resultado[j]==i)
							{
								teste=true
								temp=temp.concat("X" + i)
								break;
							}
						}
						if(!teste)
						{
							temp=temp.concat("!X" + i)
						}
						if(i==vizinhos-1)
						{
							temp=temp.concat(") v<br/>")
						}
						else
						{
							temp=temp.concat(" ^ ")
						}
					}
					resultadoFinal=resultadoFinal.concat(temp) // caso va colocar em uma linha so
					//console.log(temp) // caso va usar linha por linha
					resultado.pop()
					continue
				}
				else
				{
					resultado.push(i)
					rec(i+1)
					resultado.pop()
				}
			}
			return
		}

		if(i==0 || i==m-1)
		{
			if(j==0 || j==n-1)
			{
				vizinhos=3
			}
			else 
			{
				vizinhos =5
			}
		}
		else
		{
			if(j==0 || j==n-1)
			{
				vizinhos =5
			}
			else 
			{
				vizinhos =8 
			}
		}
		
		

		rec(0)

		resultadoFinal=resultadoFinal.slice(0,(resultadoFinal.length-7))
		if(resultadoFinal=="")
		{
			resultadoFinal=resultadoFinal.concat("(")
			for(let i=0;i<vizinhos;i++)
			{
				resultadoFinal=resultadoFinal.concat(" !X" + i + " ^")
			}
			resultadoFinal=resultadoFinal.slice(0,(resultadoFinal.length-1))
			resultadoFinal=resultadoFinal.concat(")")
		}
		//console.log(resultadoFinal) // apagar se for colocar em uma linha só
		document.getElementById("paragrafoDeSaida").innerHTML = resultadoFinal
	}

	let tamx=(document.getElementById("tamanhoX2")).value
	let tamy=(document.getElementById("tamanhoY2")).value
	let posi=(document.getElementById("posi2")).value
	let posj=(document.getElementById("posj2")).value
	let numeroK=(document.getElementById("numeroK")).value
	
	let vizinhos
	let resultadoFinal=""
	let resultado=[]

	testar(tamx, tamy, posi, posj, numeroK)
}



