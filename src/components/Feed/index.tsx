'use client'
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {CardPost} from "@/components/CardPost";

interface posts {
    imageUrl: string;
    title: string;
    username: string;
    photoUrl: string;
    profession: string;
}

const postsFeed: posts[] = [
    {
        imageUrl: "/post.png",
        title: "Lorem ipsum dolor sit amet",
        username: "John Doe",
        photoUrl: "/user.png",
        profession: "TikToker",
    },
    {
        imageUrl: "/post.png",
        title: "Lorem ipsum dolor sit amet",
        username: "John Doe",
        photoUrl: "/user.png",
        profession: "TikToker",
    },
    {
        imageUrl: "/post.png",
        title: "Lorem ipsum dolor sit amet",
        username: "John Doe",
        photoUrl: "/user.png",
        profession: "TikToker",
    },
];


const Feed = () => {


    const feedContainerVariants = {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {duration: 0.5}},
    }

    const postVariants = {
        initial: {scale: 0.9, opacity: 0},
        animate: {scale: 1, opacity: 1, transition: {duration: 0.5}},
    }


    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={feedContainerVariants}
            initial="initial"
            animate="animate"
        >
            {postsFeed.map((post, index) => (
                <motion.div key={index} variants={postVariants} initial="initial" animate="animate">
                    <CardPost
                        key={index}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        username={post.username}
                        photoUrl={post.photoUrl}
                        profession={post.profession}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Feed
