function censor(text, toChange, newWord){
	var toReturn = text;
  //AZ includes megvizsgálja hogy a változtatandó szeveg egyáltalán benne van e a textben. Ha igen módosítja, majd újra ellenőrzi újra és újra.//
	while(toReturn.includes(toChange)){
  //A replace kicseréli az adott szót a textben. A toReturn változót azért hoztuk létre, hogy a már egyszer módosított textet is megvizsgálja a while.//
  	toReturn = toReturn.replace(toChange, newWord)
    //egyenlővé tettük a szövegünket az módosított szöveggel
    
  }
  return toReturn;
}


/*var text = prompt('Szöveg');
var toChange = prompt('mit');
var newWord = prompt('mire');

var result = censor(text, toChange, newWord);
document.getElementById("eredmeny").innerHTML = result*/

//Eredmény kiírása html oldalra kész.

function megjelenites(){
var text = document.getElementById("szoveg").value;
var toChange = document.getElementById("mit").value;
var newWord = document.getElementById("mire").value;

var result = censor(text, toChange, newWord);
document.getElementById("eredmeny").innerHTML = result
return false;
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var ora = today.getHours();
var perc = today.getMinutes();
var masodperc = today.getSeconds()
var dateTime = ora + ":" + perc  + ":" +  masodperc;

if(ora >=6 && ora <= 10){
  document.getElementById("ido").innerHTML = "Jó reggelt! A pontos idő: " + date + " " + dateTime
}else if(ora >= 10 && ora<= 18){
  document.getElementById("ido").innerHTML = "Szép napot! A pontos idő: " + date + " " + dateTime
}else{
  document.getElementById("ido").innerHTML = "Szép estét! A pontos idő: " + date + " " + dateTime
}


//Budapest füstös nappalim, ahova talpig fáradtan érek haza aznap is, ha éppen otthon maradtam. Budapest a dús szád. A Duna a mosolyod, ha fürdéskor a duschbad épp az ajkadon csorog. Budapest az önmarcang, a hídvám és a sarc. Egy elmemélyi néma hang. Egy arc nélküli arc. Ha szélesebb lenne, lehetne gyúrópad. Rajta tricepszezne egész Európa. Budapest az éjszaka: egy lehordott zsúrnadrág. Épp hogy egy kissé szakadt. Épp hogy túl nagy rád. Tömény szoknyaköltemény. Klasszikus, de kortárs. A konformizmus kosztümén Pest a mélydekoltázs. Budapest izzadt, sós ing csak úgy belehányva Európa shopping papírzacskójába.