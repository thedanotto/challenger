export default class YelpQueryStringer {
  constructor(searchData) {
    this.encodedLocation = encodeURI(searchData.location);
    this.encodedPrice = encodeURI(searchData.price.join(','));
    this.encodedRadius = encodeURI(searchData.radius);
    this.encodedOpenNow = encodeURI(searchData.openNow);
    this.encodedTerm = encodeURI(searchData.term);
  }

  requestUrl() {
    const baseUrl = 'https://api.yelp.com/v3/businesses/search?';
    const location = `location=${this.encodedLocation}`;
    const radius = `radius=${this.encodedRadius}`;
    const price = `price=${this.encodedPrice}`;
    const openNow = `open_now=${this.encodedOpenNow}`;
    const term = `term=${this.encodedTerm}`;

    return `${baseUrl}${[term, location, radius, price, openNow].join('&')}`;
  }
}
