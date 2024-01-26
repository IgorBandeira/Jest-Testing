class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateItemQuality() {
    this.decreaseQuality();
    this.updateSellIn();
    this.updateExpiredItem();
  }

  updateExpiredItem() {
    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
  }

  updateSellIn() {
    this.sellIn -= 1;
  }

  increaseQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }

  decreaseQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
  }
}

module.exports = Item;
