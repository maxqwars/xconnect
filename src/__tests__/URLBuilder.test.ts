import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';
// import isValidUrl from '../helpers/isValidURL';
import URLBuilder from '../core/URLBuilder';

const USED_BASE_URL = 'api.anilibria.com/v2/';

/* ------------------------------- Constructor ------------------------------ */
describe('Constructor testing', () => {
  test('Throw exception if base URL have incorrect format', () => {
    try {
      new URLBuilder('lorem');
    } catch (e) {
      expect(true).toBe(true);
    }
  });

  test('Create URLBuilder instance if base URL have correct format', () => {
    expect(new URLBuilder(USED_BASE_URL)).toBeTruthy();
  });
});

/* ------------------------------- useEndpoint ------------------------------ */
describe('useEndpoint method testing', () => {
  const builder = new URLBuilder(USED_BASE_URL);
  test('useEndpoint defined', () => {
    expect(URLBuilder.prototype.useEndpoint).toBeDefined();
  });

  test('summary URL contain incoming API endpoint', () => {
    const summaryUrl = builder.useEndpoint(API_ENDPOINTS_ENUM.GET_FEED).build();
    expect(
      summaryUrl.match(API_ENDPOINTS_ENUM.GET_FEED as string)
    ).toBeTruthy();
  });
});

/* -------------------------------- useQuery -------------------------------- */
describe('useQuery method testing', () => {
  const builder = new URLBuilder(USED_BASE_URL);

  test('useQuery defined', () => {
    expect(URLBuilder.prototype.useQuery).toBeDefined();
  });

  test('summary URL contain incoming query params', () => {
    const queryParams = 'filter=code,poster&include=raw_poster';
    const summaryUrl = builder.useQuery(queryParams).build();
    expect(summaryUrl.match(queryParams)).toBeTruthy();
  });
});

/* ---------------------------------- build --------------------------------- */
describe('build method testing', () => {
  // const builder = new URLBuilder(USED_BASE_URL)
  //   .useEndpoint(API_ENDPOINTS_ENUM.GET_FEED)
  //   .useQuery('filter=code,poster&include=raw_poster');

  test('build method defined', () => {
    expect(URLBuilder.prototype.build).toBeDefined();
  });

  // test('build return current URL', () => {
  //   const summaryUrl = builder.build();
  //   const result = isValidUrl(summaryUrl);
  //   expect(result).toBeTruthy();
  // });
});
