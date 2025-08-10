import React, { useEffect, useRef, useState } from "react"
import { Effect } from "effect"
import { getJson } from '../effect/effect2';

const Home = () => {

    const [postData, setPostData] = useState({ title: "My title", body: "" });

    useEffect(() => {
        const init = async () => {
            // const posts = await Effect.runPromise(superApi)
            // console.log(posts);
            const post = await Effect.runPromise(getJson(`https://jsonplaceholder.typicode.com/posts/${1}`))
            console.log('Reactjs : using effect2.ts | GET : posts', post);
            setPostData(post)

        }
        init()
    }, []);

    return (
        <div className="h-[100vh] w-[100%] mx-4 mt-2 rounded-3xl sm:flex">
            <h1> Hello World</h1>

            {postData.title && <div>

                <h2> {postData.title} </h2>

            </div>}

        </div>
    );
};

export default Home
