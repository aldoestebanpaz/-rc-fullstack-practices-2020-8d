import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const PrivateLink = ({ children, ...rest }) => (
  auth.isAuthenticated()
  ? <Link {...rest}>{children}</Link>
  : ''
)

export default PrivateLink;
