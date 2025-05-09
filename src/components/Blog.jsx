import React from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Effective Cross-Cultural Engineering Teams",
      excerpt: "Learn proven strategies for creating high-performing engineering teams that bridge time zones and cultural differences.",
      image: "/images/collaborate.png",
      author: "Michael Reed",
      date: "May 2, 2025",
      readTime: "8 min read",
      category: "Team Management"
    },
    {
      id: 2,
      title: "The ROI of Offshore Engineering Teams: A Case Study",
      excerpt: "Discover how US companies are achieving significant ROI by leveraging India's engineering talent pool.",
      image: "/images/business.png",
      author: "Priya Sharma",
      date: "April 28, 2025",
      readTime: "12 min read",
      category: "Business Strategy"
    },
    {
      id: 3,
      title: "Navigating Time Zone Challenges in Global Teams",
      excerpt: "Practical approaches to effective collaboration when your team spans multiple time zones.",
      image: "/images/collaborate.png",
      author: "Raj Patel",
      date: "April 15, 2025",
      readTime: "6 min read",
      category: "Remote Work"
    }
  ];

  // Featured post (first in the array)
  const featuredPost = blogPosts[0];
  // Regular posts (rest of the array)
  const regularPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Insights & Resources
          </h2>
          <p className="text-lg text-slate-600">
            Stay updated with the latest trends, strategies, and best practices in global engineering talent management.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
                  <Tag className="w-4 h-4 mr-1" />
                  {featuredPost.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-slate-500 mb-6">
                  <img 
                    src="/images/client-logo-2.png" 
                    alt={featuredPost.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-3">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <img 
                    src="/images/client-logo-1.png" 
                    alt={post.author}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors gap-2"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;