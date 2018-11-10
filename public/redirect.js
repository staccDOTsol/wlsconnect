import React, { PropTypes } from 'react';
console.log(window.location.protocol);
if (window.location.protocol !== 'https:') {
 
  window.location = 'https:' + window.location.href.substring(window.location.protocol.length)
  
}
