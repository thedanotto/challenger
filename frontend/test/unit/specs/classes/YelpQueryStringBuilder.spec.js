import YelpQueryStringBuilder from '@/classes/YelpQueryStringBuilder';

describe('happy path QueryStringBuilder', () => {
  const searchData = {
    location: '720 East Wisconsin Ave. Milwaukee, WI 53202',
    radius: '804.672',
    price: [1, 2, 3, 4],
    openNow: false,
  };
  const yelpQueryStringBuilder = new YelpQueryStringBuilder(searchData);

  it('has an encodedLocation attribute', () => {
    expect(yelpQueryStringBuilder.encodedLocation).to.equal('720%20East%20Wisconsin%20Ave.%20Milwaukee,%20WI%2053202');
  });

  it('has an encodedPrice attribute', () => {
    expect(yelpQueryStringBuilder.encodedPrice).to.equal('1,2,3,4');
  });

  it('has an encodedRadius attribute', () => {
    expect(yelpQueryStringBuilder.encodedRadius).to.equal('804.672');
  });

  it('generates a requestUrl', () => {
    expect(yelpQueryStringBuilder.requestUrl()).to.equal('https://api.yelp.com/v3/businesses/search?location=720%20East%20Wisconsin%20Ave.%20Milwaukee,%20WI%2053202&radius=804.672&price=1,2,3,4');
  });
});
