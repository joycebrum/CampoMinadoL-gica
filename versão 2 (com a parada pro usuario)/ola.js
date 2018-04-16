

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

function verdade(predio,casa) {
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

function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    for(var i = n; i > 0; --i) {
        n *= i;
    }
    return n;
} 
function possiveis(k, viz) {
	return fatorial(viz)/ ( fatorial(viz-k) * fatorial(k) )
}

let temp=0

function BuscaProf(k) {
	var quant = 0;
	var resultado=[] 
	let viznorm = [];
	viznorm.length=8
	for(let i =0;i<viznorm.length;i++)
	{
		viznorm[i]={usado:false}
	}
	Rec(k, 0, temp)
}

function Rec(k, index, temp) {
	quant++
	viznorm[index].usado=true
	resultado[temp].push(index)
	if(quant==k)
	{
		temp++
		quant--
		return
	}
	for(let i=0;i<8;i++)
	{
		if(!viznorm[i].usado)
		{
			Rec(k,i,temp)
		}
	}
}

function formulas(m, n, i, j, k) {
	
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
