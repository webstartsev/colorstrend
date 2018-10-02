import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Color.css';

import Like from '../Like/Like';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: props.like || false,
      rating: props.rating || 0
    };

    this.likeChange = this.likeChange.bind(this);
    this.copyColor = this.copyColor.bind(this);
  }

  likeChange(like, rating) {
    like ? rating++ : rating--;
    this.setState({ like, rating });
  }
  copyColor(color) {
    navigator.clipboard.writeText(color).catch(err => {
      console.log('copyColor went wrong', err);
    });
  }

  render() {
    const { title, color } = this.props;
    const { like, rating } = this.state;
    return (
      <div className="Color" style={{ background: color }} onClick={() => this.copyColor(color)}>
        <span className="Color__rating">{rating}</span>
        <a className="Color__copy" href="javascript:;">
          COPY
        </a>
        <span className="Color__title">{title}</span>
        <div className="Color__actions">
          <Like selected={like} onClick={() => this.likeChange(!like, rating)} />
        </div>
      </div>
    );
  }
}

Color.propTypes = {
  like: PropTypes.bool,
  rating: PropTypes.number
};

Color.defaultProps = {
  like: false,
  rating: 0
};

export default Color;
