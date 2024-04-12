'use client';

import ProfileHeader from '@/components/ProfileHeader';
import ProfileStats from '@/components/ProfileStats';
import StatisticsButton from '@/components/StatisticButton';
import React from 'react';
import {CardPost} from "@/components/CardPost";

interface posts {
    imageUrl: string,
    title: string,
    username: string,
    photoUrl: string,
    profession: string
}

const TikTokerProfile = () => {
    const posts: posts[] = [
        {
            imageUrl: '/post.png',
            title: 'Lorem ipsum dolor sit amet',
            username: 'John Doe',
            photoUrl: '/user.svg',
            profession: 'TikToker'
        },
        {
            imageUrl: '/post.png',
            title: 'Lorem ipsum dolor sit amet',
            username: 'John Doe',
            photoUrl: '/user.svg',
            profession: 'TikToker'
        },
        {
            imageUrl: '/post.png',
            title: 'Lorem ipsum dolor sit amet',
            username: 'John Doe',
            photoUrl: '/user.svg',
            profession: 'TikToker'
        }
    ];
    return (
        <div className="container mx-auto max-w-2xl">

            <ProfileHeader/>
            <ProfileStats/>

            <div className="flex justify-center mt-4">
                <StatisticsButton/>
            </div>
            {
                posts.map((post, index) => (
                    <CardPost key={index} imageUrl={post.imageUrl} title={post.title}
                              username={post.username} photoUrl={post.photoUrl} profession={post.profession}/>
                ))
            }
        </div>

    );
};

export default TikTokerProfile;
