const Item = require("../src/Item");
const Shop = require("../src/Item/Shop");

describe("Data de Vencimento", function () {
  it("deveria diminuir a qualidade em 2 quando a data de venda ja passou", function () {
    const name = "Item Exemplo";
    const sellInInitial = 0; // A data de validade é hoje
    const qualityInitial = 10;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].sellIn).toBe(sellInInitial - 1); // Venceu - A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(qualityInitial - 2); // A qualidade deve diminuir em 2
  });
});
