export default function VoitonNaytto(pokerikasi, tila, panos, tuplausvalinta, voittosumma) {
    if (tila === true) {
        let palautus = "ei voittoa";
        if (pokerikasi === "kaksi paria") {
            let summa = panos * 2;
            let summax = summa.toFixed(1);
            palautus = "kaksi paria, voitto " + parseFloat(summax).toFixed(2) + "$";
        }
        if (pokerikasi === "kolmoset") {
            let summa = panos * 3;
            let summax = summa.toFixed(1);
            palautus = "kolmoset, voitto " + parseFloat(summax).toFixed(2) + "$";
        }
        if (pokerikasi === "suora") {
            let summa = panos * 4;
            let summax = summa.toFixed(1);
            palautus = "suora, voitto " + parseFloat(summax).toFixed(2) + "$";
        } 
        if (pokerikasi === "väri") {
            let summa = panos * 6;
            let summax = summa.toFixed(1);
            palautus = "väri, voitto " + parseFloat(summax).toFixed(2) + "$";
        }
        if (pokerikasi === "täyskäsi") {
            let summa = panos * 9;
            let summax = summa.toFixed(1);
            palautus = "täyskäsi, voitto " + parseFloat(summax).toFixed(2) + "$";
        }
        if (pokerikasi === "neloset") {
            let summa = panos * 25;
            let summax = summa.toFixed(1);
            palautus = "neloset, voitto " + parseFloat(summax).toFixed(2) + "$";
        }
        if (pokerikasi === "värisuora") {
            let summa = panos * 50;
            let summax = summa.toFixed(1);
            palautus = "värisuora, voitto " + parseFloat(summax).toFixed(2) + "$";
        }
        if (pokerikasi === "kuningasvärisuora") {
            let summa = panos * 250;
            let summax = summa.toFixed(1);
            palautus = "kuningasvärisuora, voitto " + parseFloat(summax).toFixed(2) + "$";
        }

        if (tuplausvalinta !== "") {
            if (voittosumma < 0.1) {
                return (
                    <p className="tuplausvoittonaytto">Väärin!</p>
                )
            } else {
                let voittosummax = voittosumma.toFixed(1);
                let hamy = "$";
                return (
                    <p className="tuplausvoittonaytto">Oikein! voitit: {parseFloat(voittosummax).toFixed(2)}{hamy}</p>
                )
            }
            
        } else {
            return (
                <h3 className="voitonnaytto">{palautus}</h3>
            )
        }
        
    }
}