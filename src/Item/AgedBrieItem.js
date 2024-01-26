const Item = require(".");

class AgedBrieItem extends Item {
  updateItemQuality() {
    this.increaseQuality();
    this.updateSellIn();
    this.updateExpiredItem();
  }

  updateExpiredItem() {
    if (this.sellIn < 0) {
      this.increaseQuality();
    }
  }
}

module.exports = AgedBrieItem;
