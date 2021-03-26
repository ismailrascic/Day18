function*myGenerator(){
 
    yield*[1, 2, 3, 4, 5],
    yield*["Arena"],
    yield*[6,7,8]
}
let iterator = myGenerator();
generatorArray=[];

for(generatorArray of myGenerator())
{

   
    console.log (generatorArray);
}


