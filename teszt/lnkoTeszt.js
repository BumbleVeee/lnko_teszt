import { lnko } from "../fuggvenyek.js";

function lnkoTeszt() {
    /* a többszöröse b nek */
    let a = 18
    let b = 3
    let eredmeny = lnko(a,b);
    console.assert(eredmeny===3,`a= ${a},b= ${b}, elvárt: 3, kapott ${eredmeny}`);
    
    /* a nem többszöröse b nek, de az lnko>1 24,18 */
    a = 24
    b = 18
    eredmeny = lnko(a,b);
    console.assert(eredmeny===6,`a= ${a},b= ${b}, elvárt: 6, kapott ${eredmeny}`);

    /*lnko=1, de egyik szám sem prím, relatív prímek */
    a = 15
    b = 14
    eredmeny = lnko(a,b);
    console.assert(eredmeny===1,`a= ${a},b= ${b}, elvárt: 1, kapott ${eredmeny}`);

    /* két prím */
    a = 7
    b = 11
    eredmeny = lnko(a,b);
    console.assert(eredmeny===1,`a= ${a},b= ${b}, elvárt: 1, kapott ${eredmeny}`);

    /* két azonos szám */
    a = 6
    b = 6
    eredmeny = lnko(a,b);
    console.assert(eredmeny===6,`a= ${a},b= ${b}, elvárt: 6, kapott ${eredmeny}`);

    /* két negatív szám */
    a = -10
    b = -5
    eredmeny = lnko(a,b);
    console.assert(eredmeny===5,`a= ${a},b= ${b}, elvárt: 5, kapott ${eredmeny}`);

    /* egyik pozitív, másik negatív */
    a = -10
    b = 5
    eredmeny = lnko(a,b);
    console.assert(eredmeny===5,`a= ${a},b= ${b}, elvárt: 5, kapott ${eredmeny}`);
}

function lnkoTeszt2() {
    const tesztEsetLista=[{
        a:18,
        b:3,
        vart:3,
        szoveg: "Az a nem többszöröse b-nek",
    },
    {
        a:24,
        b:18,
        vart:6,
        szoveg: "Az a nem többszöröse b-nek. de az lnko>1",
    }
    ];

    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = lnko(tesztEsetLista[index].a, tesztEsetLista[index].b);
        console.assert(
            eredmeny === tesztEsetLista[index].vart,
            `a= ${tesztEsetLista[index].a}, b= ${tesztEsetLista[index].b}, elvárt: ${tesztEsetLista[index].vart}, kapott ${eredmeny}`,
            tesztEsetLista[index].szoveg,
        ); 
    }
    console.log("Minden teszt lefutott!")
}

lnkoTeszt2();