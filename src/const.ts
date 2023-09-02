const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;
const MAX_REVIEWS_QUANTITY = 10;
const MAX_OFFER_IMAGES = 6;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

const OFFER_TYPES = {
  apartment: 'Apartment',
  room: 'Private room',
  house: 'House',
  hotel: 'Hotel'} as const;

const enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Main = '/',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const SortingTypes = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  Rating: 'Top rated first',
} as const;

const enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite',
}

const enum MapTypes {
  Cities = 'cities',
  Offer = 'offer',
}

const enum NameSpace {
  Offer = 'offer',
  Offers = 'offers',
  User = 'user',
  Favorites = 'favorites',
  Reviews = 'reviews',
}

const enum FavoriteStatus {
  Add = 1,
  Delete = 0,
}

export {
  CITIES,
  OFFER_TYPES,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  MAX_REVIEWS_QUANTITY,
  MAX_OFFER_IMAGES,
  SortingTypes,
  AppRoute,
  AuthorizationStatus,
  APIRoute,
  MapTypes,
  NameSpace,
  FavoriteStatus,
};
