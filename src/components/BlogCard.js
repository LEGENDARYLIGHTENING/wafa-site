import Link from 'next/link';

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <div className="blog-card">
      <Link href={`/blog/${blog.id}`} className="blog-card-image">
        <img src={`/${blog.image}`} alt={blog.title} />
      </Link>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span>📅 Admin</span>
          <span>💬 0 Comments</span>
        </div>
        <h3>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <div
          className="blog-card-excerpt"
          dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 120) + '...' }}
        />
        <Link href={`/blog/${blog.id}`} className="read-more">
          Read More <span>→</span>
        </Link>
      </div>
    </div>
  );
}
