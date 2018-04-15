

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
		}
		
		temp++
	}
	
	return campo
}

function verdade(predio,casa)
{
	let retorno=[]
	
	for(let i=0;i<predio.length;i++)
	{
		if(predio[i][casa.i][casa.j])
		{
			retorno.push(predio[i])
		}
	}	
	return retorno
}

function vai(){
	console.log("oi")
	let tamx=(document.getElementById("tamanhoX")).value
	let tamy=(document.getElementById("tamanhoY")).value
	let bombas=(document.getElementById("bombas")).value
	let quantTabuleiros=(document.getElementById("quantTabuleiros")).value
	
	let interpretacao=[]
	interpretacao.length=quantTabuleiros

	for(let i=0;i<interpretacao.length;i++)
	{
		interpretacao[i]=gerar(tamx,tamy,bombas)
	}

	console.log(interpretacao)

	let subconjunto=verdade(interpretacao,{i:3,j:2})

	console.log(subconjunto)
}