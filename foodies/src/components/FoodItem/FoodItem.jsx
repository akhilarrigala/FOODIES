import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const FoodItem = ({ name, description, id, imageUrl, price }) => {
  const { increaseQty, decreaseQty, quantities } = useContext(StoreContext);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
      <div className="card border-0 shadow-sm hover-shadow transition d-flex flex-column" style={{ maxWidth: '320px', height: '100%' }}>
        <Link to={`/food/${id}`}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt={name}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </Link>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted flex-grow-1">{description}</p>

          <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
            <span className="h5 mb-0 text-dark">&#8377;{price}</span>
            <div>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <small className="text-muted">(4.5)</small>
            </div>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between bg-light border-top-0">
          <Link to={`/food/${id}`} className="btn btn-outline-primary btn-sm">
            View Details
          </Link>

          {quantities[id] > 0 ? (
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-primary btn-sm" onClick={() => decreaseQty(id)}>
                <i className="bi bi-dash"></i>
              </button>
              <span className="fw-semibold">{quantities[id]}</span>
              <button className="btn btn-primary btn-sm" onClick={() => increaseQty(id)}>
                <i className="bi bi-plus"></i>
              </button>
            </div>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => increaseQty(id)}>
              <i className="bi bi-plus"></i> Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
