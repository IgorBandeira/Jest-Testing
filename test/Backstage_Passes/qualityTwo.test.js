const Item = require("../../src/Item");
const Shop = require("../../src/Item/Shop");

describe("Qualidade aumenta em 2", function () {
  it("Quando data venda <= 10", function () {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const sellInInitial = 10;
    const qualityInitial = 12;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].name).toBe(name);
    expect(itens[0].sellIn).toBe(sellInInitial - 1); // A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(qualityInitial + 2); // A qualidade deve aumentar em 2
  });
});
