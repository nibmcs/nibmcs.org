import Image from "next/image";
import { FaPenNib } from 'react-icons/fa';
interface BlogPost {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  cover_image: string;
  description: string;
}

async function getBlogPosts() {
  const baseURL = process.env.DEPLOY_URL || 'http://localhost:3000';
  const response = await fetch(`${baseURL}/api/blog`);

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  const data = await response.json();
  return data;
}

export default async function BlogPage() {
  const blogs: BlogPost[] = await getBlogPosts();
  const heroBlog: BlogPost = blogs[0];
  const moreBlogs: BlogPost[] = blogs.slice(1);
  return (
    <div className="max-w-5xl text-left">
      <h1 className="text-center text-4xl font-bold">Blog</h1>
      <div className="mb-8 md:mb-16">
        <div className="relative h-80 my-10">
          <Image
            src={heroBlog.cover_image}
            alt={heroBlog.title}
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div className="text-left">
            <h3 className="mb-3 text-4xl lg:text-6xl leading-tight">
              <a href={heroBlog.link} className="hover:underline">
                {heroBlog.title}
              </a>
            </h3>
            <div className="mb-3 md:mb-0 text-lg font-light">
                {new Date(heroBlog.pubDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
          <div className="text-left">
            <p className="text-md font-extralight leading-relaxed mb-3">{heroBlog.description}</p>
            <div className="text-md">
              <FaPenNib className="inline-block mr-2" />
              {heroBlog.author}
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">More Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {moreBlogs.map((blog) => (
          <div key={blog.title} className="flex flex-col">
            <div className="relative h-64">
              <Image
                src={blog.cover_image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-grow gap-0">
              <h3 className="text-xl font-bold my-2">
                <a href={blog.link} className="hover:underline">
                  {blog.title}
                </a>
              </h3>
              <div className="mb-2 text-sm font-light">
              {new Date(heroBlog.pubDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <div className="text-md font-extralight leading-relaxed mb-2">
                {blog.description}
              </div>
              <div className="text-sm">
                <FaPenNib className="inline-block mr-2" />
                {blog.author}
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
