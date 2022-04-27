console.log(beers)

// első lépés: meg kell terveznünk 1 db sör komponenseit
//ha ez nem függvény lenne, hanem sima string, akkor nem lehetne  beletenni változó értékeket paramméterként (name, company, type)
// a függvény paramétereinek (name, company, type) bármilyen nevet használhatunk, csak azt következetesen kell használni
// ${} - template literal
const beerCardComponent = function (name, company, type){
    return `
        <div class="card">
            <div class="beerName">${name}</div>
            <div class="beerCompany">${company}</div>
            <div class="beerType">${type}</div>
        </div>
    `
}
// ezek a változó nevek (name, company,type) csak a függvény belsejében érvényesek - azon kívül nem tudunk rájuk hivatkozni

const beerTitleComponent = `<h1>Beers</h1>`;
// most a beerTitleComponent néven létrehoztunk egy változót, amit fentebb "határoztunk meg"
// ehelyett az is egy jó megoldás lett volna, ha nem változót hozunk létre argumentumként, hanem a backtick (``) között lévő részt illesztjük be a változó nevének helyére (a rootElement.insertAdjacentHtml beforeend után)

const loadEvent = function() {
    const rootElement = document.getElementById("root");
    console.log(rootElement)>
    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent)

    console.log(beers.cards); //a beers-en belül található tömbre (=array), azon belül cardsrahivatkozás
    console.log(beers.logo); //a beers-en belül található

    for (const beer of beers.cards) { 
        //sima for loop
        //iterator (első érték): tetszőleges érték, itt: beer - még "nem létezik"
        //object (of után): beers.cards (elérési útvonal)
        console.log(beer);
        /*console.log(beers.cards[0].title) //mivel a cards egy tömb, az elérési útvonalba kell a [] - a 0 viszont csak az első indexen lévőt írja ki: Mango Bay*/
        //ennek a helyére kreáltuk a "beer" iterátort
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text)) 
    }
}

// Ezzel a ciklussal végiglépkedünk a tömb elemein. Ennek a tömbnek az elérési útvonala a beers nevű változó cards kulcsán lévő tömb. Ezt a folyamatot valahogy el kell nevezni egy "iterátorral", ami bármi lehet. Itt: "beer", amire később hivatkozunk (beer.title, beer.sub, beer.text)


// instertAdjacentHTML: ez egy metódus, 2 dolgot kér: az első egy position string, és egy olyan stringet (argumentumot), amit html kóddá tud konvertálni
// a `` (backtick) utána azért kell, mert többsoros kódot szeretnénk berakni

// for ciklusok (loop):
// van adat és nem kell számolni: "for...of" loop
// nincs adat és el kell számolni X-ig (pl.: a naptárnál a hónapok, napok száma) sima "for" loop -> i++


window.addEventListener("load", loadEvent)
console.log(window)
// oldal betöltődése JS szempontjából: a) a JS létrehoz egy "window" objektumot
// minden JS scriptben benne kell lennie a window.addEventListener("load", loadEvent)-nek
//eseményfigyelő (eventlistener) - 


// Feladat: for és for of ciklusok átnézése
// Extra feladat: ugyanilyen adatstruktúrájú "dolog"
// Új repository-ba ugyanezt próbáljuk megcsinálni - a feladatban mozi filmcímek lesznek