let myArr=[];

function*multiplication(x)
{
  for(i=0; i>=0;i++)
  {
    x*=2  
    yield x;
      
  }

  return x;

}
var num =multiplication(3);

for (let i= 0; i<3; i++ )
{
    console.log(num.next().value);
}

module.exorts = multiplication;

