'use client'

import axios from "axios";
import { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [errors, setErrors] = useState<{ title?: string; body?: string; }>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { title?: string; body?: string; } = {};

        if (!title) {
            newErrors.title = 'Title cannot be empty';
        }

        if (!body) {
            newErrors.body = 'Body cannot be empty';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        await axios.post("https://jsonplaceholder.typicode.com/posts",
            {
                body: {
                    title: title,
                    body: body,
                    userId: 1
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );

        alert(`Success add new post \nTitle: ${title} \nBody: ${body}`);

        setTitle('');
        setBody('');
        setErrors({});
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <form onSubmit={handleSubmit} className='w-[50%] flex flex-col gap-8 p-8 bg-white text-black rounded-xl'>
                <h1 className="font-bold">Add New Post</h1>

                <div>
                    <label className='flex flex-col gap-2'>
                        <span>Title</span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Type title'
                            className='w-full bg-[#F4F4F5] text-black p-2 rounded-md border'
                        />
                    </label>
                    {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                </div>

                <div>
                    <label className='flex flex-col gap-2'>
                        <span>Body</span>
                        <input
                            type="text"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder='Type body'
                            className='w-full bg-[#F4F4F5] text-black p-2 rounded-md border'
                        />
                    </label>
                    {errors.body && <p style={{ color: 'red' }}>{errors.body}</p>}
                </div>

                <button type="submit" className='bg-black p-2 rounded-md text-white'>Post</button>
            </form>
        </div>
    );
};

export default AddPost;