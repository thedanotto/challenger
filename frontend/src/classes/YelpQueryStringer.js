export default class YelpQueryStringer {
  constructor(searchData) {
    this.encodedLocation = encodeURI(searchData.location);
    this.encodedPrice = encodeURI(searchData.price.join(','));
    this.encodedRadius = encodeURI(searchData.radius);
  }
}
