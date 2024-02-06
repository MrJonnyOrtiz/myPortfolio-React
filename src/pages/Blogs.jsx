import { useEffect } from 'react';

const blogs = [
  {
    title: 'React & Rails Project Planning Process',
    description:
      'Ready to show off your React & Rails skills on a new project and wondering (while trying not to hyperventilate) where to begin? You’ve come to the right place...',
    published: 'Aug 2 2022',
    length: '4 min read',
    link: 'https://medium.com/@imj0nny0rt1z/react-rails-project-planning-process-711839a94b20',
  },
  {
    title: 'React-ed',
    description:
      'Or the wordier title I didn’t use: A Condensed Education on React. In this article, I’ll explain what React is and isn’t...',
    published: 'May 28, 2022',
    length: '3 min read',
    link: 'https://medium.com/@imj0nny0rt1z/react-ed-8b2248c8b807',
  },

  {
    title: 'General Javascript Coding Best Practices',
    description:
      '“Luke, trust me” — the final words from Obi Wan before Luke Skywalker successfully destroys the Death Star in Star Wars, A New Hope. Why am I reciting these words...',
    published: 'Apr 26, 2022',
    length: '5 min read',
    link: 'https://medium.com/@imj0nny0rt1z/general-javascript-coding-best-practices-800391d91c18',
  },
];

function Blogs() {
  useEffect(() => {
    window.gtag('event', 'blogsPage');
  }, []);

  return (
    <div className="grid gap-8 text-center">
      <h2 className="text-3xl md:text-5xl lg:text-7xl">Blog posts</h2>
      <ul className="grid gap-8">
        {blogs.map((blog) => (
          <a key={blog.title} href={blog.link} target="_blank" rel="noreferrer">
            <li className="mx-auto grid max-w-prose gap-3 rounded-xl border px-6 py-3 shadow-xl hover:bg-white hover:text-black ">
              <div className="text-xl md:text-2xl lg:text-4xl">
                {blog.title}
              </div>
              <div className="md:text-xl">&quot;{blog.description}&quot;</div>
              <div>Published: {blog.published}</div>
              <div>{blog.length}</div>
            </li>
          </a>
        ))}
      </ul>
      <a
        href="https://www.sarasotaremodeling.com/blog"
        target="_blank"
        rel="noreferrer"
        className="mx-auto my-3 w-fit animate-pulse rounded-xl bg-[#ff914d] px-6 py-3 font-semibold text-[#0030ff] hover:animate-none hover:bg-white hover:text-black"
      >
        More articles for a client
      </a>
    </div>
  );
}

export default Blogs;
