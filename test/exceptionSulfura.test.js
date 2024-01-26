const Item = require("../src/Item");
const Shop = require("../src/Item/Shop");

describe("Sulfuras", function () {
  it("nao deve ter sua qualidade diminuida ou seu numero de dias diminuido", function () {
    const name = "Sulfuras, Hand of Ragnaros";
    const sellInInitial = 10;
    const qualityInitial = 70;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].name).toBe(name);
    expect(itens[0].sellIn).toBe(sellInInitial); // A data de venda nao deve mudar
    expect(itens[0].quality).toBe(qualityInitial); // A qualidade nao deve mudar
  });
});
