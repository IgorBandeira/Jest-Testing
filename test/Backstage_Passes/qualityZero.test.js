const Item = require("../../src/Item");
const Shop = require("../../src/Item/Shop");

describe("Qualidade vai para 0", function () {
  it("Quando data tiver passada", function () {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const sellInInitial = 0;
    const qualityInitial = 15;

    const gildedRose = new Shop([
      new Item(name, sellInInitial, qualityInitial),
    ]);

    const itens = gildedRose.updateQuality();

    expect(itens[0].name).toBe(name);
    expect(itens[0].sellIn).toBe(sellInInitial - 1); // A data de venda deve diminuir em 1
    expect(itens[0].quality).toBe(0); // A qualidade deve ir para 0 pois a data passou (-1)
  });
});
