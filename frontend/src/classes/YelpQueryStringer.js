export default class YelpQueryStringer {
  constructor(searchData) {
    this.encodedLocation = encodeURI(searchData.location);
    this.encodedPrice = encodeURI(searchData.price.join(','));
    this.encodedRadius = encodeURI(searchData.radius);
  }

  requestUrl() {
    const baseUrl = 'https://api.yelp.com/v3/businesses/search?';
    const location = `location=${this.encodedLocation}`;
    const radius = `radius=${this.encodedRadius}`;
    const price = `price=${this.encodedPrice}`;

    return `${baseUrl}${[location, radius, price].join('&')}`;
  }
}
