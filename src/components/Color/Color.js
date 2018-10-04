import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Color.css';

import BtnAction from '../BtnAction/BtnAction';

export class Color extends Component {
  // Если новый рейтинг остался таким же, как и в текущих свойствах,
  // то не надо обновлять компонент.
  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  }

  render() {
    const { title, rating, color, type, onRate, onCopy } = this.props;
    return (
      <div className="Color" style={{ background: color[type] }}>
        <span ref="title" className="Color__rating">
          {rating}
        </span>
        <a className="Color__copy" href="javascript:;" onClick={onCopy}>
          COPY
        </a>
        <span className="Color__title">{title}</span>
        <div className="Color__actions">
          <BtnAction type="like" action={onRate} />
        </div>
      </div>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onCopy: PropTypes.func
};

Color.defaultProps = {
  title: 'default',
  color: '#ccc',
  rating: 0,
  onRate: f => f,
  onCopy: f => f
};

export default Color;
