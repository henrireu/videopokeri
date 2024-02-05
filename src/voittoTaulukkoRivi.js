export default function ylarivi(panos) {
    // kikkailua että saa hienon näköiseksi voittotaulukon
    //pyöristetään yhteen desimaaliin ja näytetään kaksi desimaalia
    let kuningasvarisuora = panos * 250;
    let kuningasvarisuorax = kuningasvarisuora.toFixed(1);
    let varisuora = panos * 50;
    let varisuorax = varisuora.toFixed(1)
    let neloset = panos * 25;
    let nelosetx = neloset.toFixed(1);
    let tayskasi = panos * 9;
    let tayskasix = tayskasi.toFixed(1);
    let vari = panos * 6;
    let varix = vari.toFixed(1);
    let suora = panos * 4;
    let suorax = suora.toFixed(1);
    let kolmoset = panos * 3;
    let kolmosetx = kolmoset.toFixed(1);
    let kaksiparia = panos * 2;
    let kaksipariax = kaksiparia.toFixed(1);

    return (
        <div className="ylarivi">
                <h1 className="otsikko">Videopokeri</h1>
                <div className="voittotaulukko">
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Kuningasvärisuora</p>
                        <p className="voittosuuruus">{parseFloat(kuningasvarisuorax).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Värisuora</p>
                        <p className="voittosuuruus">{parseFloat(varisuorax).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Neloset</p>
                        <p className="voittosuuruus">{parseFloat(nelosetx).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Täyskäsi</p>
                        <p className="voittosuuruus">{parseFloat(tayskasix).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Väri</p>
                        <p className="voittosuuruus">{parseFloat(varix).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Suora</p>
                        <p className="voittosuuruus">{parseFloat(suorax).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Kolmoset</p>
                        <p className="voittosuuruus">{parseFloat(kolmosetx).toFixed(2)}$</p>
                    </div>
                    <div className="voittotaulukkorivi">
                        <p className="voittonimi">Kaksi paria</p>
                        <p className="voittosuuruus">{parseFloat(kaksipariax).toFixed(2)}$</p>
                    </div>
                </div>
            </div>
    )
}