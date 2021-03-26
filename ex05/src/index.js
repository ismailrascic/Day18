let shopingList = new Map()

shopingList.set('Banana', 3);
shopingList.set( 'Pineapple', 5);
shopingList.set('Pear', 2);
shopingList.set('Carrot', 10);
shopingList.set('Apple', 2.5);




let arrKey = [...shopingList.keys()]; 
let arrValue = [...shopingList.values()]; 



    console.log(`[${arrKey}:${arrValue}]`);
module.exports={shopingList,arrKey,arrValue}