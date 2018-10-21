import YelpQueryStringer from '@/classes/YelpQueryStringer';

describe('happy path QueryStringer', () => {
  const searchData = {
    location: '720 East Wisconsin Ave. Milwaukee, WI 53202',
    radius: '804.672',
    price: [1, 2, 3, 4],
    open_now: false,
  };
  const yelpQueryStringer = new YelpQueryStringer(searchData);

  it('has a location attribute', () => {
    expect(yelpQueryStringer.location).to.equal('720 East Wisconsin Ave. Milwaukee, WI 53202');
  });
});
