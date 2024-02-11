import React, {useState, useEffect} from 'react';
import ylarivi from './voittoTaulukkoRivi';
import ArvoKortit from './arvoKortit';
import KorttiMaalla from './numeroKortiksi';
import VoitonNaytto from './voitonNayttorivi';
import MikaKasi from './kadenArvo';
import Voittoluku from './pokerivoittoluku';
import './cssTyylit/ylarivi.css';
import './cssTyylit/voitonNayttorivi.css';
import './cssTyylit/korttirivi.css';

// sitten kopioi tämä koodi sinne ja muuta vain kortin maat kuvat symboleiksi
// siksi että jos joku testaa niin toimii ilman kuvia
export default function Videopokeri() {
    const [panos, setPanos] = useState(0.20);
    //ei ehkä paras ratkasu tehdä näitä monta
    const [lukittu1, setLukittu1] = useState(false);
    const [lukittu2, setLukittu2] = useState(false);
    const [lukittu3, setLukittu3] = useState(false);
    const [lukittu4, setLukittu4] = useState(false);
    const [lukittu5, setLukittu5] = useState(false);

    const [jakotila, setJakotila] = useState();
    const [mikakasi, setMikakasi] = useState();

    const [kortit, setKortit] = useState([]);
    const [saldo, setSaldo] = useState(10.00);
    // tuplaukseen vaaditaan kaksi tilaa
    const [tuplaustila, setTuplaustila] = useState(false);
    const [tuplataanko, setTuplataanko] = useState(false);
    //tila onko musta punainen vai tyhjä
    const [tuplausvalinta, setTuplausvalinta] = useState("");
    const [voittosumma, setVoittosumma] = useState(0);
    const [tuplausluku, setTuplausluku] = useState();

    const[tila, setTila] = useState(false);
    //tämä on tehty vain sitä varten kun saldo loppuu
    useEffect(() => {
        let saldox = saldo.toFixed(1);
        if (saldox > 0.1) {
            setTila(false);
        } else if (saldox < 0.1 && jakotila === false) {
            setTila(false);
        } else {
            setTila(true);
        }
    }, [jakotila]);

    function panosvaihto() {
        let uusipanos = panos;
        // tämä sen takia että ei voi vaihtaa panosta kesken vaihdon
        if (jakotila === true || jakotila === undefined) {
            if (uusipanos === 1) {
                setPanos(0.20);
            } else {
                setPanos(uusipanos + 0.20);
            }
        }
    }

    function palautapanos() {
        let panox = panos.toFixed(1);
        return (
            <p className="panosLuku">{parseFloat(panox).toFixed(2)}$</p>
        )
    }

    function lukitse1() {
        if (lukittu1 === false) {
            setLukittu1(true);
        } else {
            setLukittu1(false);
        }
    }

    function lukitse2() {
        if (lukittu2 === false) {
            setLukittu2(true);
        } else {
            setLukittu2(false);
        }
    }

    function lukitse3() {
        if (lukittu3 === false) {
            setLukittu3(true);
        } else {
            setLukittu3(false);
        }
    }

    function lukitse4() {
        if (lukittu4 === false) {
            setLukittu4(true);
        } else {
            setLukittu4(false);
        }
    }

    function lukitse5() {
        if (lukittu5 === false) {
            setLukittu5(true);
        } else {
            setLukittu5(false);
        }
    }

    function kortti1() {
        const taustavari = lukittu1 ? 'lightgrey' : 'white';
        if (jakotila === false) {
            return (
                <div className="kortti" onClick={() => lukitse1()} style={{backgroundColor: taustavari }}>
                    {KorttiMaalla(kortit[0], lukittu1)}
                </div>
            )
        } else if (jakotila === null || jakotila === undefined) {
            return (
                <div className="feikkiDiv"></div>
            )
        } else {
            return (
                <div className="kortti">
                    {KorttiMaalla(kortit[0], lukittu1)}
                </div>
            )
        }
        
    }

    function kortti2() {
        const taustavari = lukittu2 ? 'lightgrey' : 'white';
        if (jakotila === false) {
            return (
                <div className="kortti" onClick={() => lukitse2()} style={{backgroundColor: taustavari }}>
                    {KorttiMaalla(kortit[1], lukittu2)}
                </div>
            )
        } else if (jakotila === null || jakotila === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="kortti">
                    {KorttiMaalla(kortit[1], lukittu2)}
                </div>
            )
        }
    }

    function kortti3() {
        const taustavari = lukittu3 ? 'lightgrey' : 'white';
        if (jakotila === false) {
            return (
                <div className="kortti" onClick={() => lukitse3()} style={{backgroundColor: taustavari }}>
                    {KorttiMaalla(kortit[2], lukittu3)}
                </div>
            )
        } else if (jakotila === null || jakotila === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="kortti">
                    {KorttiMaalla(kortit[2], lukittu3)}
                </div>
            )
        }
    }

    function kortti4() {
        const taustavari = lukittu4 ? 'lightgrey' : 'white';
        if (jakotila === false) {
            return (
                <div className="kortti" onClick={() => lukitse4()} style={{backgroundColor: taustavari }}>
                    {KorttiMaalla(kortit[3], lukittu4)}
                </div>
            )
        } else if (jakotila === null || jakotila === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="kortti">
                    {KorttiMaalla(kortit[3], lukittu4)}
                </div>
            )
        }
    }

    function kortti5() {
        const taustavari = lukittu5 ? 'lightgrey' : 'white';
        if (jakotila === false) {
            return (
                <div className="kortti" onClick={() => lukitse5()} style={{backgroundColor: taustavari }}>
                    {KorttiMaalla(kortit[4], lukittu5)}
                </div>
            )
        } else if (jakotila === null || jakotila === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="kortti">
                    {KorttiMaalla(kortit[4], lukittu5)}
                </div>
            )
        } 
    }

    function jako() {
        setTuplausvalinta("");
        setTuplataanko(false);
        setVoittosumma(0);
        // jostain syystä tulee ihme murtolukuja mitkä lähellä oikeeta lukua niin pakko pyöristää
        let saldox = saldo.toFixed(1);
        let panox = panos.toFixed(1);
        if (panox <= saldox) {
            let listakortit = [100, 100, 100, 100, 100];

            if (lukittu1 === true) {
                listakortit.splice(0, 1, kortit[0]);
            }

            if (lukittu2 === true) {
                listakortit.splice(1, 1, kortit[1]);
            }

            if (lukittu3 === true) {
                listakortit.splice(2, 1, kortit[2]);
            }

            if (lukittu4 === true) {
                listakortit.splice(3, 1, kortit[3]);
            }

            if (lukittu5 === true) {
                listakortit.splice(4, 1, kortit[4]);
            }
            let lista = ArvoKortit(listakortit, 5);
        
            setKortit(lista);
        
            if (jakotila === false) {
                setLukittu1(false);
                setLukittu2(false);
                setLukittu3(false);
                setLukittu4(false);
                setLukittu5(false);

                let kasi = MikaKasi(lista);
                setMikakasi(kasi);
                let numero = Voittoluku(kasi, panos);
                setVoittosumma(numero);
                //tähän kohtaan joku if numero > 0 niin tulee tuplaus ja voitonmaksu painike ja valinnat
                if (numero > 0) {
                    setTuplaustila(true);
                } else {
                    setTuplaustila(false);
                }
 
                setJakotila(true);
            } else {
                let tulevasaldo = saldo - panos;
                setSaldo(tulevasaldo);
                setJakotila(false);
                setTuplaustila(false);
            }
        } else if (panox > saldox && jakotila === false) {
            let listakortit = [100, 100, 100, 100, 100];

            if (lukittu1 === true) {
                listakortit.splice(0, 1, kortit[0]);
            }

            if (lukittu2 === true) {
                listakortit.splice(1, 1, kortit[1]);
            }

            if (lukittu3 === true) {
                listakortit.splice(2, 1, kortit[2]);
            }

            if (lukittu4 === true) {
                listakortit.splice(3, 1, kortit[3]);
            }

            if (lukittu5 === true) {
                listakortit.splice(4, 1, kortit[4]);
            }
            let lista = ArvoKortit(listakortit, 5);
        
            setKortit(lista);
        
            setLukittu1(false);
            setLukittu2(false);
            setLukittu3(false);
            setLukittu4(false);
            setLukittu5(false);

            let kasi = MikaKasi(lista);
            setMikakasi(kasi);
            let numero = Voittoluku(kasi, panos);
            let tulevasaldo = saldo + numero;
            setSaldo(tulevasaldo);

            if (numero > 0) {
                setTuplaustila(true);
            } else {
                setTuplaustila(false);
            }
 
            setJakotila(true);
        
        } 
    }

    function uusipeli() {
        setPanos(0.20);
        setSaldo(10.00);
        setJakotila(undefined);
        setLukittu1(false);
        setLukittu2(false);
        setLukittu3(false);
        setLukittu4(false);
        setLukittu5(false);
    }

    function voitonmaksu() {
        let lista = kortit;
        let kasi = MikaKasi(lista);
        let numero = Voittoluku(kasi, panos);

        let tulevasaldo = saldo + numero;
        setSaldo(tulevasaldo);
        setTuplaustila(false);
    }

    function tuplaus() {
        setTuplataanko(true);
    }

    // tee vain yhden tuplauksen mahdollisuus
    function tuplausrivi() {
        return (
            <div className="korttirivi">
                <button className="musta" onClick={() => tuplausmusta()}>musta</button>
                {tuplausvalinta === "" ? (
                    <div className="tuplauskortti">
                    </div>
                ) : (
                    <div className="kortti">
                        {KorttiMaalla(tuplausluku, false)}
                    </div>
                )}
                
                <button className ="punainen" onClick={() => tuplauspunainen()}>punainen</button>
            </div>
        )
    }

    function tuplausmusta() {
        // tämä sen takia että ei voi enää klikkailla ja vaihtaa korttia ekan tuplauksen jälkeen
        if (tuplaustila === true) {
            let numero = Math.floor(Math.random() * 52);
            let tuplausvari = "";
            if (numero < 26) {
                tuplausvari = "musta";
            } else {
                tuplausvari = "punainen";
            }
            setTuplausluku(numero);

            if(tuplausvari === "musta") {
                let voittosum = voittosumma * 2;
                let tulevasaldo = saldo + voittosum;
                setSaldo(tulevasaldo);
                setVoittosumma(voittosum);
            } else {
                setVoittosumma(0);
            }
            setTuplausvalinta("musta");
            setTuplaustila(false);
        }
    }

    function tuplauspunainen() {
        // tämä sen takia että ei voi enää klikkailla ja vaihtaa korttia ekan tuplauksen jälkeen
        if (tuplaustila === true) {
            let numero = Math.floor(Math.random() * 52);
            let tuplausvari = "";
            if (numero < 26) {
                tuplausvari = "musta";
            } else {
                tuplausvari = "punainen";
            }
            setTuplausluku(numero);

            if(tuplausvari === "punainen") {
                let voittosum = voittosumma * 2;
                let tulevasaldo = saldo + voittosum;
                setSaldo(tulevasaldo);
                setVoittosumma(voittosum);
            } else {
                setVoittosumma(0);
            }
            setTuplausvalinta("punainen");
            setTuplaustila(false);
        }
    }

    // saldon kikkailua että näyttää paremmalta
    let saldox = saldo.toFixed(1);

    return (
        <div className="jokeripokeri">

            {ylarivi(panos)}

            <div className="voitonnayttorivi">
                {tila === false ? (
                    VoitonNaytto(mikakasi, jakotila, panos, tuplausvalinta, voittosumma)
                ) : (
                    <div className="loppudiv">
                        <p className="loppu">Saldo loppui! Jos haluat jatkaa pelaamista, niin paina Uusipeli</p>
                        <button className="uusipeli" onClick={() => uusipeli()}>Uusipeli</button>
                    </div>
                )}
            </div>

            {tuplataanko === false ? (
                <div className="korttirivi">
                    {kortti1()}
                    {kortti2()}
                    {kortti3()}
                    {kortti4()}
                    {kortti5()}
                </div>
            ) : (
                <div className="tuplausrivi">
                    {tuplausrivi()}
                </div>
            )}
            

            {tuplaustila === false ? (
                <div className="alarivi">
                    <div className="saldo">
                        <p className="saldoteksti">Saldo</p>
                        <p className="saldoluku">{parseFloat(saldox).toFixed(2)}$</p>
                    </div>
                    <div className="panos" onClick={() => panosvaihto()}>
                        <p className="panosTeksti">PANOS</p>
                        {palautapanos()}
                    </div>
                    <button className="jako" onClick={() => jako()}>JAKO</button>
                </div>
            ) : (
                <div className="alarivi2">
                    <div className="saldo2">
                        <p className="saldoteksti2">Saldo</p>
                        <p className="saldoluku2">{parseFloat(saldox).toFixed(2)}$</p>
                    </div>

                    <button className="voitonmaksu" onClick={() => voitonmaksu()}>Voitonmaksu</button>

                    <button className="tuplaus" onClick={() => tuplaus()}>Tuplaus</button>

                    <div className="panos2" onClick={() => panosvaihto()}>
                        <p className="panosTeksti2">PANOS</p>
                        {palautapanos()}
                    </div>

                    <button className="jako2" onClick={() => jako()}>JAKO</button>
                </div>
            )}
        </div>
    )
} 