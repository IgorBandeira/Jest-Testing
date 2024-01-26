const Item = require(".");

class ConjuredItem extends Item {
  updateItemQuality() {
    this.decreaseQuality();

    if (this.sellIn < 0) {
      this.decreaseQuality();
      this.decreaseQuality();
    }

    this.updateSellIn();
    this.updateExpiredItem();
  }

  decreaseQuality() {
    if (this.quality > 0) {
      this.quality -= 2;
    }
  }
}

module.exports = ConjuredItem;
