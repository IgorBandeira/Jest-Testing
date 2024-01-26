const Item = require("../../src/Item");
const Shop = require("../../src/Item/Shop");

describe("Data de Vencimento Conjured Item", function () {
  it("deveria diminuir a qualidade em 4 quando a data de venda ja passou", function () {
    const name = "Conjured";
    const sellInInitial = 0; // A data de validade é hoje
    const qualityInitial = 18;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].sellIn).toBe(sellInInitial - 1); // Venceu - A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(qualityInitial - 4); // A qualidade deve diminuir em 4
  });
});
