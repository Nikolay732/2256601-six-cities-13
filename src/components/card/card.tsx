import { OfferListItem } from '../../types/offer-list-item';
import { useState } from 'react';
import { getHeightImageCard, getRatingStarsStyle, getWidthImageCard } from '../../utils';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardProps = {
  offer: OfferListItem;
  pageClass: string;
  offerEnterHandler: (id: string | undefined) => void;
  offerLeaveHandler: (id: string | undefined) => void;
}

export function Card({offer, pageClass, offerEnterHandler, offerLeaveHandler}: CardProps) {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;
  const [isFavoriteOffer, setFavoriteOffer] = useState(isFavorite);

  const clickFavoriteHandler = () => setFavoriteOffer(!isFavoriteOffer);
  return (
    <article
      onMouseEnter={offerEnterHandler}
      onMouseLeave={offerLeaveHandler}
      id={id}
      className={`${pageClass} place-card`}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${pageClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={getWidthImageCard(pageClass)}
            height={getHeightImageCard(pageClass)}
            alt={type}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            onClick={clickFavoriteHandler}
            className={classNames('place-card__bookmark-button', {'place-card__bookmark-button--active': isFavoriteOffer}, 'button')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingStarsStyle(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to ={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

