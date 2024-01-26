const Item = require(".");

class BackstagePassItem extends Item {
  updateItemQuality() {
    this.increaseQuality();

    if (this.sellIn < 11) {
      this.increaseQuality();
    }

    if (this.sellIn < 6) {
      this.increaseQuality();
    }

    this.updateSellIn();
    this.updateExpiredItem();
  }

  updateExpiredItem() {
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}

module.exports = BackstagePassItem;
