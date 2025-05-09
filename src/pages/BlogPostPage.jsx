import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPostPage = () => {
  const { postId } = useParams();
  
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="flex items-center text-blue-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Sample Blog Post Title
        </h1>
        
        <div className="flex items-center text-slate-500 mb-8">
          <User className="w-5 h-5 mr-2" />
          <span className="mr-4">Author Name</span>
          <Calendar className="w-5 h-5 mr-2" />
          <span className="mr-4">May 6, 2025</span>
          <Clock className="w-5 h-5 mr-2" />
          <span>10 min read</span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p>This is a placeholder for blog post content with ID: {postId}</p>
          <p>Detailed blog content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;