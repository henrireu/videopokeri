export default function KorttiMaalla(luku, tila) {
    let maa = "";

    if (luku < 13) {
        maa = "♠";
    } else if (luku > 12 && luku < 26) {
        maa = "♣";
    } else if (luku > 25 && luku < 39) {
        maa = "♥";
    } else {
        maa = "♦";
    }

    let kortinnumero;

    if (luku === 0 ||luku === 13 ||luku === 26 ||luku === 39) {
        kortinnumero = "A";
    } else if (luku === 1 || luku === 14 || luku === 27 || luku === 40) {
        kortinnumero = "2";
    } else if (luku === 2 || luku === 15 || luku === 28 || luku === 41) {
        kortinnumero = "3";
    } else if (luku === 3 || luku === 16 || luku === 29 || luku === 42) {
        kortinnumero = "4";
    } else if (luku === 4 || luku === 17 || luku === 30 || luku === 43) {
        kortinnumero = "5";
    } else if (luku === 5 || luku === 18 || luku === 31 || luku === 44) {
        kortinnumero = "6";
    } else if (luku === 6 || luku === 19 || luku === 32 || luku === 45) {
        kortinnumero = "7";
    } else if (luku === 7 || luku === 20 || luku === 33 || luku === 46) {
        kortinnumero = "8";
    } else if (luku === 8 || luku === 21 || luku === 34 || luku === 47) {
        kortinnumero = "9";
    } else if (luku === 9 || luku === 22 || luku === 35 || luku === 48) {
        kortinnumero = "10";
    } else if (luku === 10 || luku === 23 || luku === 36 || luku === 49) {
        kortinnumero = "J";
    } else if (luku === 11 || luku === 24 || luku === 37 || luku === 50) {
        kortinnumero = "Q";
    } else {
        kortinnumero = "K";
    }

    function mustavaipunanen() {
        if (maa === "♠" || maa === "♣") {
            return (
                <p className="symbolimusta">{maa}</p>
            )
        } else {
            return (
                <p className="symbolipuna">{maa}</p>
            )
        }
    }

    return (
        <div className="kokokortti">
            <p className="korttiyla">{kortinnumero}</p>
            {mustavaipunanen()}
            <p className="korttiala">{kortinnumero}</p>
        </div>
    )
}