import React from 'react';
import { Link } from 'gatsby';

type Props = {
    to: string;
    children: React.ReactNode
}

const GatsbyLink: React.FC<Props> = ({to, children }) => {
    return (
        <Link to={to}  style={{ textDecoration: 'none' }}>
            {children}
        </Link>
    )
}

export default GatsbyLink