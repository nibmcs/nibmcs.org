import Image from "next/image";
import {FaPenNib} from 'react-icons/fa';
interface BlogPost {
  title: string;
  author: string;
  pubDate: string;
  link: string;
  cover_image?: string;
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
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold">Blog</h1>
      <div className="flex flex-col w-full gap-10 text-left mt-10">
        {blogs.map((blog, index) => (
          <div className="flex md:flex-row flex-col gap-4" key={`blog-${index}`}>
            <Image
              src={blog.cover_image || 'https://cdn.hashnode.com/res/hashnode/image/upload/v1679075289714/I2spUyUW6.png'}
              width={1869}
              height={750}
              alt={blog.title}
              className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h3 className="font-normal lg:text-[35px] text-[26px]">
                  {blog.title}
                </h3>
                <div className="flex items-center mt-2">
                  <FaPenNib className="text-gray-700 dark:text-gray-300" />
                  <p className="text-[14px] ml-[8px] text-gray-700 dark:text-gray-300">
                    {blog.author}
                  </p>
                </div>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px]">
                  {blog.description}
                </p>
                <a href={blog.link} title={blog.title} target="_blank" rel="noreferrer">
                  <p className="text-[15px] pt-1 underline">
                    Read more <span className="sr-only">about {blog.title}</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
