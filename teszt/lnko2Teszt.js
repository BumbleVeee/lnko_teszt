import { lnko2 } from "../fuggvenyek.js";

export function lnkoTeszt2() {
    const tesztEsetLista2=[{
            n:0,
            vart:0,
            szoveg:"nullaval",
        },
        {
            n:1,
            vart:1,
            szoveg:"egyel",
        },
        {
            n:5,
            vart:5,
            szoveg:"egy jegyű számmal"
        },
        {
            n:5436,
            vart:18,
            szoveg:"nagy pozitív számmal"
        },
        {
            n:-12,
            vart:0,
            szoveg:"negatív szám"
        }
    ];

    for (let index = 0; index < tesztEsetLista2.length; index++) {
        let eredmeny2 = lnko2(tesztEsetLista2[index].n);
        console.assert(
            eredmeny2 === tesztEsetLista2[index].vart,
            `n= ${tesztEsetLista2[index].n}, elvárt: ${tesztEsetLista2[index].vart}, kapott ${eredmeny2}`,
            tesztEsetLista2[index].szoveg,
        ); 
        }
    console.log("Minden teszt lefutott!")
}

lnkoTeszt2();