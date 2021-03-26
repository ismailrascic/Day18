function*myGenerator()
{ 
    yield*insideGenerator1();
    yield*insideGenerator2();
    yield*insideGenerator3();
}
function*insideGenerator1()
{ for(let x=0;x<=5; x++)
{
    yield x;
}

}
function*insideGenerator2()
{for(let x=10;x<=15; x++)
    {
        yield x;
    }

}
function*insideGenerator3()
{for ( let x=6;x<=9; x++)
    {
        yield x;
    }


}


const iterator = myGenerator();

fifteenArray = [];

 
for (fifteenArray of myGenerator()) {
    console.log(iterator.next());
}



module.exports ={fifteenArray, myGenerator }

