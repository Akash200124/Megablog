import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config"
import { Container } from "../components";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

// import { Loader, Placeholder } from 'rsuite'

function Home() {
    const [posts, setPosts] = useState([]);
    const [loadering, setLoadering] = useState(true);

    const userData = useSelector(state => state.auth.userData);

    
    useEffect(() => {

        try {
            
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    const data = posts?.documents
                    setPosts(data)
                    setLoadering(false)
                }
    
            })
        } catch (error) {
            console.log(error)
            setLoadering(false)
        }
        
    }, [])

    console.log(loadering, "loadering");
    
    console.log(posts, "posts");


    if (loadering ) {
        return (

            <Loader />
        )
    }
    else if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover: text-gray-500">
                                No post found !
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }



    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => (
                            // console.log(post, "posts 1"),

                            <div className="p-2 w-1/4 md:w-1/3" key={post.$id}>
                                <PostCard post={post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home 