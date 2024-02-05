export default function MikaKasi(listaNumeroista) {

    // tee numeroista objektit missä on maa ja suuruus
    let listakorttiobjekteista = [];
    for (let x = 0; x < listaNumeroista.length; x++) {
        let luku = listaNumeroista[x];

        let korttiobjekti = {};
        korttiobjekti.maa = 0;
        korttiobjekti.luku = 0;

        //katsotaan maa
        if (luku < 13) {
            korttiobjekti.maa = 1;
        } else if (luku > 12 && luku < 26) {
            korttiobjekti.maa = 2;
        } else if (luku > 25 && luku < 39) {
            korttiobjekti.maa = 4;
        } else {
            korttiobjekti.maa = 8;
        }

        //katsotaan luku
        if (luku === 0 ||luku === 13 ||luku === 26 ||luku === 39) {
            korttiobjekti.luku = 14;
        } else if (luku === 1 || luku === 14 || luku === 27 || luku === 40) {
            korttiobjekti.luku = 2;
        } else if (luku === 2 || luku === 15 || luku === 28 || luku === 41) {
            korttiobjekti.luku = 3;
        } else if (luku === 3 || luku === 16 || luku === 29 || luku === 42) {
            korttiobjekti.luku = 4;
        } else if (luku === 4 || luku === 17 || luku === 30 || luku === 43) {
            korttiobjekti.luku = 5;
        } else if (luku === 5 || luku === 18 || luku === 31 || luku === 44) {
            korttiobjekti.luku = 6;
        } else if (luku === 6 || luku === 19 || luku === 32 || luku === 45) {
            korttiobjekti.luku = 7;
        } else if (luku === 7 || luku === 20 || luku === 33 || luku === 46) {
            korttiobjekti.luku = 8;
        } else if (luku === 8 || luku === 21 || luku === 34 || luku === 47) {
            korttiobjekti.luku = 9;
        } else if (luku === 9 || luku === 22 || luku === 35 || luku === 48) {
            korttiobjekti.luku = 10;
        } else if (luku === 10 || luku === 23 || luku === 36 || luku === 49) {
            korttiobjekti.luku = 11;
        } else if (luku === 11 || luku === 24 || luku === 37 || luku === 50) {
            korttiobjekti.luku = 12;
        } else {
            korttiobjekti.luku = 13;
        }
        listakorttiobjekteista.push(korttiobjekti);
    }

    let korttimaat = [];
    for (let x = 0; x < listakorttiobjekteista.length; x++) {
        korttimaat.push(listakorttiobjekteista[x].maa);
    }

    let korttiluvut = [];
    for (let x = 0; x < listakorttiobjekteista.length; x++) {
        korttiluvut.push(listakorttiobjekteista[x].luku);
    }
    // sitten selvitä käden arvo
    
    //tämä ei ole omaa koodia vaan netistä katottu
    var hands=["neloset", "värisuora", "suora", "väri", "haikäsi",
       "pari", "kaksi paria", "kuningasvärisuora", "kolmoset", "täyskäsi" ];
 
    //Calculates the Rank of a 5 card Poker hand using bit manipulations.
    function rankPokerHand(cs,ss) {
        var v, i, o, s = 1<<cs[0]|1<<cs[1]|1<<cs[2]|1<<cs[3]|1<<cs[4];
            for (i=-1, v=o=0; i<5; i++, o=Math.pow(2,cs[i]*4)) {v += o*((v/o&15)+1);}
            v = v % 15 - ((s/(s&-s) == 31) || (s == 0x403c) ? 3 : 1);
            v -= (ss[0] == (ss[1]|ss[2]|ss[3]|ss[4])) * ((s == 0x7c00) ? -5 : 1);
            //console.log("Hand: " + hands[v] + (s == 0x403c?" (Ace low)":""));
            return hands[v];
    }

    return rankPokerHand(korttiluvut, korttimaat);
    
}