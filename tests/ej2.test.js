const Lampara = require("../code/Lampara");
const Letrero = require("../code/Letrero");

var letrero;
beforeEach(()=>{
    letrero = new Letrero();
});

test("Chequear intensidad",()=>{
    let lampara=new Lampara();
    expect(lampara.intensidad).toBe(0);
})

test("Prender y chequear intensidad",()=>{
    let lampara=new Lampara();
    lampara.prender();
    expect(lampara.intensidad).toBe(1);
})

test("Subir intensidad dos veces",()=>{
    let lampara=new Lampara();
    lampara.prender();
    lampara.prender();
    expect(lampara.intensidad).toBe(2);
})