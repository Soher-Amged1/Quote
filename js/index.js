var Quote=[{quo:"You miss 100% of the shots you don't take.",author:"--Wayne Gretzy"},
{quo:"Resentment is like drinking poison and waiting for your enemies to die.",author:"--Nelson Mandela"},
{quo:"Do not take life too seriously. You will not get out alive.",author:"--Elbert Hubbard"},
{quo:"The best revenge is massive success.",author:"--Frank Sinatra"},
{quo:"It's not what happens to you, but how you react to it that matters.",author:"--Epictetus"},
{quo:"Be yourself; everyone else is already taken.",author:"--Oscar Wilde"},
{quo:"You only live once, but if you do it right, once is enough.",author:"--Mae West"},
{quo:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",author:"--Albert Einstein"},
{quo:"So many books, so little time.",author:"--Frank Zappa"},
{quo:"A room without books is like a body without a soul.",author:"--Marcus Tullius Cicero"}
]
var m;
function QuoteGenerate(){
    var i ;
    i=Math.floor( Math.random()*10)
    if (m==i){
        QuoteGenerate()
    }
    else{
    var x= '"'+ Quote[i].quo+'"'
    document.getElementById("newquote").innerHTML=x
    document.getElementById("newauthor").innerHTML=Quote[i].author
    console.log(i)
    console.log(m)
    m=i
    }
}

