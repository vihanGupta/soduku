var a;
var c;
var d;
var e;
var f;
var g;
var h;
var cl;
var click;
var answer;
var answer1;
var answer2;
var co;
var cod;
var code;



document.addEventListener("keypress",keypressed);

function keypressed(y)
{
    cl = y.code;
    click = cl.slice(5);
    console.log(click);
}


a = Math.floor(Math.random()*5+1)
c = Math.floor(Math.random()*5+1)
var b = Math.floor(Math.random()*5+1)
d = Math.floor(Math.random()*5+1)
e = Math.floor(Math.random()*5+1)
f = Math.floor(Math.random()*5+1)
g = Math.floor(Math.random()*5+1)
h = Math.floor(Math.random()*5+1)


document.getElementById("one").innerHTML = a;

while(a == b || c == b || d == b)
{
    b = Math.floor(Math.random()*5+1)
}

document.getElementById("two").innerHTML = b;

while(b == c || a == c || d == c)
{
    c = Math.floor(Math.random()*5+1)
}

document.getElementById("three").innerHTML = c;

while(c == d || a == d || b == d)
{
    d = Math.floor(Math.random()*5+1)
}

document.getElementById("thirteen").innerHTML = d;


while(c == e || a == e || b == e || d == e)
{
    e = Math.floor(Math.random()*5+1)
}

document.getElementById("fiveteen").innerHTML = e;

while(g == f || h == f || b == f)
{
    f = Math.floor(Math.random()*5+1)
}
document.getElementById("fourteen").innerHTML = f;

while(f == g || h == g || b == g)
{
    g = Math.floor(Math.random()*5+1)
}
document.getElementById("seven").innerHTML = g;

while(f == h || g == h || b == h)
{
    h = Math.floor(Math.random()*5+1)
}
document.getElementById("nine").innerHTML = h;


var take1 = document.getElementById("seven").innerHTML;
var take2 = document.getElementById("nine").innerHTML;
var take3 = document.getElementById("fourteen").innerHTML;

if(take1 !== document.getElementById("one").innerHTML && take2 !== document.getElementById("one").innerHTML && take3 !== document.getElementById("one").innerHTML)
{
    answer = document.getElementById("one").innerHTML;
    console.log(answer);
}else if(take1 !== document.getElementById("three").innerHTML && take2 !== document.getElementById("three").innerHTML && take3 !== document.getElementById("three").innerHTML)
{
    answer = document.getElementById("three").innerHTML;
    console.log(answer);
}else if(take1 !== document.getElementById("thirteen").innerHTML && take2 !== document.getElementById("thirteen").innerHTML && take3 !== document.getElementById("thirteen").innerHTML)
{
    answer = document.getElementById("thirteen").innerHTML;
    console.log(answer);
}else if(take1 !== document.getElementById("fiveteen").innerHTML && take2 !== document.getElementById("fiveteen").innerHTML && take3 !== document.getElementById("fiveteen").innerHTML)
{
    answer = document.getElementById("fiveteen").innerHTML;
    console.log(answer);
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

aa = Math.floor(Math.random()*5+1)
cc = Math.floor(Math.random()*5+1)
var bb = Math.floor(Math.random()*5+1)
dd = Math.floor(Math.random()*5+1)
ee = Math.floor(Math.random()*5+1)
ff = Math.floor(Math.random()*5+1)
gg = Math.floor(Math.random()*5+1)
hh = Math.floor(Math.random()*5+1)


document.getElementById("four").innerHTML = aa;

while(aa == bb || cc == bb || dd == bb)
{
    bb = Math.floor(Math.random()*5+1)
}

document.getElementById("five").innerHTML = bb;

while(bb == cc || aa == cc || dd == cc)
{
    cc = Math.floor(Math.random()*5+1)
}

document.getElementById("six").innerHTML = cc;

while(cc == dd || aa == dd || bb == dd)
{
    dd = Math.floor(Math.random()*5+1)
}

document.getElementById("sixteen").innerHTML = dd;


while(cc == ee || aa == ee || bb == ee || dd == ee)
{
    ee = Math.floor(Math.random()*5+1)
}

document.getElementById("eighteen").innerHTML = ee;

while(gg == ff || hh == ff || bb == ff)
{
    ff = Math.floor(Math.random()*5+1)
}
document.getElementById("seventeen").innerHTML = ff;

while(ff == gg || hh == gg || bb == gg)
{
    gg = Math.floor(Math.random()*5+1)
}
document.getElementById("ten").innerHTML = gg;

while(ff == hh || gg == hh || bb == hh)
{
    hh = Math.floor(Math.random()*5+1)
}
document.getElementById("tweleve").innerHTML = hh;
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////

var take4 = document.getElementById("ten").innerHTML;
var take5 = document.getElementById("tweleve").innerHTML;
var take6 = document.getElementById("seventeen").innerHTML;

if(take4 !== document.getElementById("four").innerHTML && take5 !== document.getElementById("four").innerHTML && take6 !== document.getElementById("four").innerHTML)
{
    answer1 = document.getElementById("four").innerHTML;
    console.log(answer1);
}else if(take4 !== document.getElementById("six").innerHTML && take5 !== document.getElementById("six").innerHTML && take6 !== document.getElementById("six").innerHTML)
{
    answer1 = document.getElementById("six").innerHTML;
    console.log(answer1);
}else if(take4 !== document.getElementById("sixteen").innerHTML && take5 !== document.getElementById("sixteen").innerHTML && take6 !== document.getElementById("sixteen").innerHTML)
{
    answer1 = document.getElementById("sixteen").innerHTML;
    console.log(answer1);
}else if(take4 !== document.getElementById("eighteen").innerHTML && take5 !== document.getElementById("eighteen").innerHTML && take6 !== document.getElementById("eighteen").innerHTML)
{
    answer1 = document.getElementById("eighteen").innerHTML;
    console.log(answer1);
}

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

aaa = Math.floor(Math.random()*5+1)
ccc = Math.floor(Math.random()*5+1)
var bbb = Math.floor(Math.random()*5+1)
ddd = Math.floor(Math.random()*5+1)
eee = Math.floor(Math.random()*5+1)
fff = Math.floor(Math.random()*5+1)
ggg = Math.floor(Math.random()*5+1)
hhh = Math.floor(Math.random()*5+1)


document.getElementById("nineteen").innerHTML = aaa;

while(aaa == bbb || ccc == bbb || ddd == bbb)
{
    bbb = Math.floor(Math.random()*5+1)
}

document.getElementById("twenty").innerHTML = bbb;

while(bbb == ccc || aaa == ccc || ddd == ccc)
{
    ccc = Math.floor(Math.random()*5+1)
}

document.getElementById("twentyone").innerHTML = ccc;

while(ccc == ddd || aaa == ddd || bbb == ddd)
{
    ddd = Math.floor(Math.random()*5+1)
}

document.getElementById("thirtyone").innerHTML = ddd;


while(ccc == eee || aaa == eee || bbb == eee || ddd == eee)
{
    eee = Math.floor(Math.random()*5+1)
}

document.getElementById("thirtythree").innerHTML = eee;

while(ggg == fff || hhh == fff || bbb == fff)
{
    fff = Math.floor(Math.random()*5+1)
}
document.getElementById("thirtytwo").innerHTML = fff;

while(fff == ggg || hhh == ggg || bbb == ggg)
{
    ggg = Math.floor(Math.random()*5+1)
}
document.getElementById("twentyfive").innerHTML = ggg;

while(fff == hhh || ggg == hhh || bbb == hhh)
{
    hhh = Math.floor(Math.random()*5+1)
}
document.getElementById("twentyseven").innerHTML = hhh;
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////

var take7 = document.getElementById("twentyfive").innerHTML;
var take8 = document.getElementById("twentyseven").innerHTML;
var take9 = document.getElementById("thirtytwo").innerHTML;

if(take7 !== document.getElementById("nineteen").innerHTML && take8 !== document.getElementById("nineteen").innerHTML && take9 !== document.getElementById("nineteen").innerHTML)
{
    answer2 = document.getElementById("nineteen").innerHTML;
    console.log(answer2);
}else if(take7 !== document.getElementById("twenty").innerHTML && take8 !== document.getElementById("twenty").innerHTML && take9 !== document.getElementById("twenty").innerHTML)
{
    answer2 = document.getElementById("twenty").innerHTML;
    console.log(answer2);
}else if(take7 !== document.getElementById("thirtyone").innerHTML && take8 !== document.getElementById("thirtyone").innerHTML && take9 !== document.getElementById("thirtyone").innerHTML)
{
    answer2 = document.getElementById("thirtyone").innerHTML;
    console.log(answer2);
}else if(take7 !== document.getElementById("thirtytwo").innerHTML && take8 !== document.getElementById("thirtytwo").innerHTML && take9 !== document.getElementById("thirtytwo").innerHTML)
{
    answer2 = document.getElementById("thirtytwo").innerHTML;
    console.log(answer2);
}

function go(x)
{
    if(x == 1)
    {
        setTimeout(() => {
            document.getElementById("eight").innerHTML = click;
        }, 1000);
    }
    if(x == 2)
    {
        setTimeout(() => {
            document.getElementById("eleven").innerHTML = click;
        }, 1000);
    }
    if(x == 3)
    {
        setTimeout(() => {
            document.getElementById("twentysix").innerHTML = click;
        }, 1000);
    }
    setInterval(() => {
        if(document.getElementById("eight").innerHTML == answer)
        {
            co = "set";
        }
    }, 100);
    setInterval(() => {
        if(document.getElementById("eleven").innerHTML == answer1)
        {
            cod = "set";
        }
    }, 100);
    setInterval(() => {
        if(document.getElementById("twentysix").innerHTML == answer2)
        {
            code = "set"
        }
    }, 100);
    setInterval(() => {
        if(co == "set" && cod == "set" && code == "set")
        {
            document.getElementById("goyouwin").innerHTML = "You_win";
        }
    }, 100);
}
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


