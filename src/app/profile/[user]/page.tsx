
'use client';

import ProfileHeader from '@/components/ProfileHeader';
import ProfileLinks from '@/components/ProfileLinks';
import ProfileStats from '@/components/ProfileStats';
import StatisticsButton from '@/components/StatisticButton';
import React from 'react';

const TikTokerProfile = () => {
    return (

        <div className="container mx-auto max-w-2xl">

            <ProfileHeader />
            <ProfileStats />

            <div className="flex justify-center mt-4">
                <StatisticsButton />
            </div>
        </div>

    );
};

export default TikTokerProfile;
