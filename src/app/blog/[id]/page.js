import Link from 'next/link';
import { getBlogById, getAllBlogs } from '../../../lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    id: String(blog.id),
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = getBlogById(resolvedParams.id);
  if (!blog) return { title: 'Not Found' };
  
  return {
    title: blog.title,
    openGraph: {
      images: [`/${blog.image}`],
    }
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const blog = getBlogById(resolvedParams.id);
  const recentBlogs = getAllBlogs().filter(b => String(b.id) !== String(resolvedParams.id)).slice(0, 3);
  
  if (!blog) {
    notFound();
  }

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1>{blog.title}</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> {blog.title}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="service-layout">
          {/* Main Content */}
          <div className="page-content" style={{ padding: '0', order: 1 }}>
            <div className="content-body" style={{ maxWidth: '100%', margin: 0 }}>
              <img 
                src={`/${blog.image}`} 
                alt={blog.title} 
                style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem' }} 
              />
              
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                <span>👤 By Admin</span>
                <span>📅 Published recently</span>
              </div>
              
              <div 
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="service-sidebar" style={{ order: 2 }}>
            <h4>Recent Posts</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentBlogs.map((b) => (
                <div key={b.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img 
                    src={`/${b.image}`} 
                    alt={b.title} 
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} 
                  />
                  <div>
                    <h5 style={{ fontSize: '0.95rem', margin: '0 0 0.5rem', lineHeight: '1.3' }}>
                      <Link href={`/blog/${b.id}`} style={{ color: 'var(--color-text)' }}>
                        {b.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
