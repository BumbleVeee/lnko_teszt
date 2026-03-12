import { lnko3 } from "../fuggvenyek.js";

export function lnkoTeszt3(){
    const tesztEsetLista3=[
        {
            szam:0,
            vart:true,
            szoveg:"nullaval",
        },
        {
            szam:1,
            vart:true,
            szoveg:"egyel",
        },
        {
            szam:5,
            vart:true,
            szoveg:"öttel",
        },
        {
            szam:25,
            vart:false,
            szoveg:"huszonöttel",
        },
        {
            szam:3,
            vart:true,
            szoveg:"hárommal",
        },
        {
            szam:4,
            vart:false,
            szoveg:"néggyel",
        },
        {
            szam:13,
            vart:true,
            szoveg:"tizenhárommal",
        },
        {
            szam:15,
            vart:false,
            szoveg:"tizenötel",
        },
        {
            szam:17,
            vart:true,
            szoveg:"tizenhéttel",
        }
    ]
    for (let index = 0; index < tesztEsetLista3.length; index++) {
        let eredmeny3 = lnko3(tesztEsetLista3[index].szam);
            console.assert(
                eredmeny3 === tesztEsetLista3[index].vart,
                `szam= ${tesztEsetLista3[index].szam}, elvárt: ${tesztEsetLista3[index].vart}, kapott ${eredmeny3}`,
                tesztEsetLista3[index].szoveg,
            ); 
        }
    console.log("Minden teszt lefutott!")
}

lnkoTeszt3();