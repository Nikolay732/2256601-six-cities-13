import dayjs from 'dayjs';
import { DATE_FORMAT} from './const';
import { OfferListItem } from './types/offer-list-item';
import { Sorting } from './types/sorting';

export function humanizeDate(date: string) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export function getRatingStarsStyle(rating: number): string {
  return `${Math.round(rating) / 5 * 100}%`;
}

export function getWidthImageCard (pageClass:string): number {
  if (pageClass !== 'favorites__card') {
    return 260;
  }
  return 150;
}

export function getHeightImageCard (pageClass:string): number {
  if (pageClass !== 'favorites__card') {
    return 200;
  }
  return 110;
}

export function getOffersByCity (cityName: string | undefined, offers: OfferListItem[]) {
  return offers.filter((offer) => offer.city.name === cityName);
}

export function getOffersByFavorites(offers: OfferListItem[]) {
  return offers.filter((offer) => offer.isFavorite);
}

export function sortLowToHigh (a: OfferListItem, b: OfferListItem) {
  return a.price - b.price;
}

export function sortHighToLow (a: OfferListItem, b: OfferListItem) {
  return b.price - a.price;
}

export function sortByRating (a: OfferListItem, b: OfferListItem) {
  return b.rating - a.rating;
}

export const sorting: Record<Sorting, (offers: OfferListItem[]) => OfferListItem[]> =
{
  Popular: (offers: OfferListItem[]) => offers.slice(),
  HighToLow: (offers: OfferListItem[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: OfferListItem[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: OfferListItem[]) => offers.slice().sort(sortByRating)
};
