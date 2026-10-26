import React from 'react';

const Blog: React.FC = () => {
    const posts = [
        { category: "TUTORIAL", title: "Building your first autonomous agent", date: "Oct 12, 2024", image: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" },
        { category: "INSIGHTS", title: "The future of enterprise AI automation", date: "Oct 08, 2024", image: "linear-gradient(135deg, #3b82f6 0%, #14b8a6 100%)" },
        { category: "PRODUCT", title: "Introducing Framework 2.0", date: "Sep 25, 2024", image: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)" },
    ];

    return (
        <section className="py-24 border-t border-white/10" id="blog">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Resources for Agents</h2>
                        <p className="text-gray-400">Latest news, tutorials, and insights from the team.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium">
                        View all posts <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div
                                className="h-48 rounded-xl mb-6 relative overflow-hidden"
                                style={{ background: post.image }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <div className="text-xs font-bold text-indigo-400 mb-2 tracking-wider">{post.category}</div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                            <div className="text-sm text-gray-500">{post.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
