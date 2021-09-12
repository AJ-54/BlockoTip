import React from 'react';
import { Trend } from '../trending/Trend';
import { SettingsIcon } from '../../images/svg/svgs';

export const TrendsList = () => {
    const trends = [
        {
            name: 'Covid_Lockdown',
            topic: 'Trending in India',
            tweets: '3,700k'
        },
        {
            name: 'We_Need_Oxygen',
            topic: 'Trending in India',
            tweets: '37k'
        }, {
            name: 'Medical_Infrastructure',
            topic: 'Trending in India',
            tweets: '3,267'
        },
        {
            name: 'Work_From_Home',
            topic: 'Trending in India',
            tweets: '27k'
        }, {
            name: 'Radhe',
            topic: 'Trending in India',
            tweets: '481k'
        }
    ]
    return (
        <div>
            <div className="trends-for-you flex-space-between">
                <h1 className="m-0">Trends for you</h1>
                <SettingsIcon />
            </div>
            <div className="trends">
                {trends.map(trend => (<Trend trend={trend} />))}
            </div>
        </div>
    )
}
