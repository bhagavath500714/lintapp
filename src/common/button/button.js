import React from 'react';

import './button.css';

// eslint-disable-next-line react/prop-types
function Button({ label }) {
  return <div data-testid="button" className="button-style">{label}</div>;
}

export default Button;
