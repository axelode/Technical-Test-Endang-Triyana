import axios from 'axios';
import Link from 'next/link';

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IUser {
    id: number;
    name: string;
}

const getPosts = async (): Promise<IPost[]> => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
};

const getUsers = async (): Promise<IUser[]> => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
};

const Posts = async () => {
    const posts = await getPosts();
    const users = await getUsers();

    return (
        <div className="w-full flex flex-col p-12">
            <div className='w-full flex items-center justify-between mb-4'>
                <h1 className="text-4xl font-bold text-white">Posts</h1>
                <Link href={'/addPost'} className='bg-white p-2 rounded-md text-black font-bold'>+ Add New Post</Link>
            </div>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((data) => (
                    <div key={data.id} className="relative overflow-hidden rounded-lg group bg-white text-black p-6">
                        {users.find(user => user.id === data.userId)?.name}

                        <h3 className="text-lg font-semibold">{data.title}</h3>

                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {data.body}
                        </p>

                        <Link href={`/detail`}>
                            Read More
                        </Link>
                    </div>
                ))
                }
            </section >
        </div >
    );
};

export default Posts;
