let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones") ;
rockStar.set("song", "Angie") ;
rockStar.set("album", "Goats Head Soup") ;
rockStar.set("singer", "Mick Jagger") ;

let newRock = (rockStar.keys())

for(newRock of rockStar.entries()){
if(rockStar.keys[0] > 'a')
{
console.log(`{
'artist' => 'The Rolling Stones'
'song' => 'Angie'
'album' => 'Goats Head Soup'
'singer' => 'Mick Jagger'
}`)}

}
module.exports = {rockStar, newRock}