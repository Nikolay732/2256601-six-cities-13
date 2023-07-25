import { OffersList } from '../../types/offers-list';
import { useState } from 'react';
import { getHeightImageCard, getRatingStarsStyle, getWidthImageCard } from '../../utils';
import { PageClass } from '../../const';
import { getClassCard } from '../../utils';
import { getClassImageWrapper } from '../../utils';

type CardProps = {
  offer: OffersList;
  page: PageClass;
}

export function Card({offer, page}: CardProps) {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;
  const [isHovered, setItsHovered] = useState(false);
  return (
    <article
      onMouseEnter={()=> setItsHovered(!isHovered)}
      onMouseLeave={() => setItsHovered(!isHovered)}
      key={id}
      className={getClassCard(page)}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={getClassImageWrapper(page)}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={getWidthImageCard(page)}
            height={getHeightImageCard(page)}
            alt={type}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
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
          <a href ="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

