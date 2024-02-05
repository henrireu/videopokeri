export default function Voittoluku(strPokerivoitto, panos) {
    let luku = 0;
    if (strPokerivoitto === "kaksi paria") {
        luku = panos * 2;
    }
    if (strPokerivoitto === "kolmoset") {
        luku = panos * 3;
    }
    if (strPokerivoitto === "suora") {
        luku = panos * 4;
    }
    if (strPokerivoitto === "väri") {
        luku = panos * 6;
    }
    if (strPokerivoitto === "täyskäsi") {
        luku = panos * 9;
    }
    if (strPokerivoitto === "neloset") {
        luku = panos * 25;
    }
    if (strPokerivoitto === "värisuora") {
        luku = panos * 50;
    }
    if (strPokerivoitto === "kuningasvärisuora") {
        luku = panos * 250;
    }
    return luku;
}