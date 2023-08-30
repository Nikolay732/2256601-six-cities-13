import type { CityName, ServerOffer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { OfferCardMemo } from '../offer-card/offer-card';
import { useAppDispatch } from '../../hooks';
import { offersActions } from '../../store/offers-data/offers-data';
import { AppRoute } from '../../const';
import { getFavoritesOfferByCities } from '../../utils/common';

type FavoritesOffersProps = {
	favoritesOffers: ServerOffer[];
};

export function FavoritesOffers({ favoritesOffers }: FavoritesOffersProps) {
  const dispatch = useAppDispatch();
  const {favoritesOffersByCities, cities} = getFavoritesOfferByCities(favoritesOffers);

  const handleButtonClick = (city: CityName) => {
    dispatch(offersActions.setActiveCity(city));
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((cityName) => (
          <li className="favorites__locations-items" key={cityName}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link
                  className="locations__item-link"
                  to={AppRoute.Main}
                  onClick={() => handleButtonClick(cityName)}
                  data-testid="location-link"
                >
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {favoritesOffersByCities[cityName].map((offer) => (
                <OfferCardMemo block={'favorites'} {...offer} key={offer.id} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
