import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

function Home(props) {
    const { route } = props;
    console.log(route)
    return (
        <div>Home
            <NavLink to="/recommend">Recommend</NavLink>
            <NavLink to="/singers">Singers</NavLink>
            <NavLink to="/Rank">Rank</NavLink>
            {renderRoutes(route.routes)}
        </div>                    
    )
} 

export default Home;
