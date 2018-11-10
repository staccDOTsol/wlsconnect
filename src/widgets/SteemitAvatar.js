import React, { PropTypes } from 'react';
import './SteemitAvatar.less';

const WhaleSharesitAvatar = ({
  username,
  size = '36',
  className = '',
}) =>
  <span
    style={{
      height: `${size}px`,
      width: `${size}px`,
    }}
  >
    <div
      className={`WhaleSharesitAvatar ${className}`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundImage: `url(https://steemitimages.com/u/${username}/avatar)`,
      }}
    />
  </span>
;

WhaleSharesitAvatar.propTypes = {
  username: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default WhaleSharesitAvatar;
