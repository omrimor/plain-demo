import React from 'react';
import DetailItem from 'components/DetailItem';
import SectionTitle from 'components/SectionTitle';
import './Card.css';

const Card = ({ resource, actions }) => {
  return (
      <div className="card__wrapper">
        <div className="card__header">
          <span>Chosen item</span>
          <p>This is the chosen item</p>
        </div>
        <div className="card__content">
          <div className="card__content__details">
            <SectionTitle title='General details' />
            <DetailItem
              label={'description'}
              value={resource.description}
            />
            <DetailItem
              label={'resourceType'}
              value={resource.resourceType}
            />
            <DetailItem
              label={'path'}
              value={resource.path}
            />
          </div>
          <div className="card__content__actions">
            <SectionTitle title='Permitted items' />
            <ul className="card__content__list">
              {
                actions.map((item, inx) => <li className="card__content__value" key={inx}>{item}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Card;
