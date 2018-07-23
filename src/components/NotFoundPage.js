import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => (
    <div>
    Error 404! - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;