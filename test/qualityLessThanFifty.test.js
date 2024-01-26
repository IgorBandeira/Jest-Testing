const Item = require("../src/Item");
const Shop = require("../src/Item/Shop");

describe("Qualidade ate 50", function () {
  it("nao deve permitir que a qualidade exceda 50", function () {
    const name = "Item Exemplo";
    const sellInInitial = 5;
    const qualityInitial = 51; // qualidade superada

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].sellIn).toBe(sellInInitial - 1); // A data de venda do item diminui em 1
    expect(itens[0].quality).toBe(50); // A qualidade nao deve exceder 50
  });
});
