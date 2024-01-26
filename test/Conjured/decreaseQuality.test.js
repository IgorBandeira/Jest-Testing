const Item = require("../../src/Item");
const Shop = require("../../src/Item/Shop");

describe("Diminuir Qualidade", function () {
  it("deveria diminuir a qualidade o dobro quando a data de venda diminui", function () {
    const name = "Conjured";
    const sellInInitial = 22;
    const qualityInitial = 13;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].sellIn).toBe(sellInInitial - 1); // Venceu - A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(qualityInitial - 2); // A qualidade deve diminuir em 2
  });
});
