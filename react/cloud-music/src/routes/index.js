//向外输出routes 配置  前端路由 
import React from 'react';
import { Route } from 'react-router';
import Home from '../application/Home';
import Rank from '../application/Rank';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';

export default [ // App.js routes 
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            },
            {
                path: '/rank',
                component: Rank
            }
        ]
    }
]
