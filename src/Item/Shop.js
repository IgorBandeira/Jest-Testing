const Item = require(".");
const AgedBrieItem = require("./AgedBrieItem");
const BackstagePassItem = require("./BackstagePassItem");
const SulfurasItem = require("./SulfurasItem");
const ConjuredItem = require("./ConjuredItem");

class Shop {
  constructor(items = []) {
    this.items = items.map((item) => {
      switch (item.name) {
        case "Aged Brie":
          return new AgedBrieItem(item.name, item.sellIn, item.quality);
        case "Backstage passes to a TAFKAL80ETC concert":
          return new BackstagePassItem(item.name, item.sellIn, item.quality);
        case "Sulfuras, Hand of Ragnaros":
          return new SulfurasItem(item.name, item.sellIn, item.quality);
        case "Conjured":
          return new ConjuredItem(item.name, item.sellIn, item.quality);
        default:
          return new Item(item.name, item.sellIn, item.quality);
      }
    });
  }

  updateQuality() {
    for (let item of this.items) {
      item.updateItemQuality();
    }

    return this.items;
  }
}

module.exports = Shop;
