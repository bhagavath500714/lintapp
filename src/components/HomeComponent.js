import React from 'react';
import Button from '../common/button/button';
import styles from './HomeComponent.module.css';

export default function HomeComponent() {
  return (
    <>
      <div className={`${styles.card} card`}>
        <span className="card__img" />
        <div className="card__content">
          <ul className="card__list">
            <li className="card__item card__item--active">Adobe XD</li>
            <li className="card__item">Figma</li>
            <li className="card__item">Sketch</li>
          </ul>
          <p className="card__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero atque iste nobis quidem dolore error animi voluptas quia corrupti consectetur.</p>
          <a className="card__link" href="javascript">Visit the link</a>
        </div>
      </div>
      <Button label="click me please" />
    </>
  );
}
