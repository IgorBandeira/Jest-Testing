const Item = require("../src/Item");
const Shop = require("../src/Item/Shop");

describe("Queijo Brie envelhecido", function () {
  it("deve aumentar a qualidade em 1 unidade na medida que envelhece", function () {
    const name = "Aged Brie";
    const sellInInitial = 30;
    const qualityInitial = 0;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].name).toBe(name);
    expect(itens[0].sellIn).toBe(sellInInitial - 1); // A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(qualityInitial + 1); // A qualidade deve aumentar em 1
  });
});
