import { FC } from 'react';
import { REVIEWS } from '../../../mocks/reviews';
import { ReviewItem } from '../review-item/review-item';

export const ReviewList: FC = () => (
  <ul className="reviews__list">
    {REVIEWS.map((review) => (
      <ReviewItem key={review.user.name} review={review} />
    ))}
  </ul>
);
