export default function ArvoKortit(lista, luku) {
    let kopiolista = [...lista];
    let uusilista = [...kopiolista];
    for (let x = 0; x < luku; x++) {
        if (uusilista[x] === 100) {
            while (true) {
                let numero = Math.floor(Math.random() * 52);
                if (!kopiolista.includes(numero)) {
                    kopiolista.push(numero);
                    uusilista.splice(x, 1, numero);
                    break;
                }
            }
        }
        
    }
    return uusilista;
} 