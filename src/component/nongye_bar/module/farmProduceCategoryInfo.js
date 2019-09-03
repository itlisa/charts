module.exports = {
  // _categories: [
  //   {
  //     "id": "AA",
  //     "name": "粮食",
  //     "color": 0x982BB0
  //   },
  //   {
  //     "id": "AB",
  //     "name": "油料",
  //     "color": 0x6735D4
  //   },
  //   {
  //     "id": "AD",
  //     "name": "糖烟茶",
  //     "color": 0x2E64F5
  //   },
  //   {
  //     "id": "AE",
  //     "name": "蔬菜",
  //     "color": 0x35B8F6
  //   },
  //   {
  //     "id": "AF",
  //     "name": "果品",
  //     "color": 0x30C8C1
  //   },
  //   {
  //     "id": "AI",
  //     "name": "药材",
  //     "color": 0x41C976
  //   },
  //   {
  //     "id": "AJ",
  //     "name": "植物油",
  //     "color": 0x8BC847
  //   },
  //   {
  //     "id": "AL",
  //     "name": "畜禽产品",
  //     "color": 0xECF04F
  //   },
  //   {
  //     "id": "AM",
  //     "name": "水产品",
  //     "color": 0xF5C846
  //   },
  //   // {
  //   //   "id": "AR",
  //   //   "color": 0xFF2E48
  //   // },
  //   // {
  //   //   "id": "AG",
  //   //   "color": 0x02F4FF
  //   // },
  //   // {
  //   //   "id": "AW",
  //   //   "color": 0xB5B5B5
  //   // }
  // ],

  set categories(d) {
    this._categories = d;
  },

  get categories() {
    return this._categories;
  },
  getPalette: function (key, useHex) {
    key = key || "id";
    let palette = {};
    let _this = this;
    this.categories.forEach(function (category) {
      let k = category[key];
      palette[k] = useHex ?
        _this.numberToHex(category.color) :
        category.color;
    });
    return palette;
  },
  numberToHex: function (n) {
    if (typeof n !== "number") return "";
    return ("#" + ("000000" + n.toString(16)).slice(-6));
  }
};
