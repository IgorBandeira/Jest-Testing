const Item = require("../src/Item");
const Shop = require("../src/Item/Shop");

describe("Qualidade nao negativa", function () {
  it("nao deve permitir que a qualidade seja negativa", function () {
    const name = "Item Exemplo";
    const sellInitial = 5;
    const qualityInitial = 0;

    const gildedRose = new Shop([new Item(name, sellInitial, qualityInitial)]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].sellIn).toBe(sellInitial - 1);
    // A data de venda do item diminui em 1
    expect(itens[0].quality).toBe(0);
    // A qualidade deve ser mantida em 0
  });
});
