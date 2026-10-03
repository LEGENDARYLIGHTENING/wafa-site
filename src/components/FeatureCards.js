'use client';

import Link from 'next/link';

const features = [
  {
    title: 'Mission',
    desc: 'Empowering communities through education and support.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
    ),
    link: '/about',
    color: 'var(--color-primary)'
  },
  {
    title: 'Events',
    desc: 'Join our upcoming events and make a difference.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    ),
    link: '/events',
    color: 'var(--color-accent)'
  },
  {
    title: 'Support',
    desc: 'Your contributions help us reach more people in need.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    ),
    link: '/donate',
    color: 'var(--color-primary)'
  },
  {
    title: 'Volunteer',
    desc: 'Become a volunteer and help us on the ground.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    link: '/volunteers',
    color: 'var(--color-accent)'
  }
];

export default function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="container">
        <div className="feature-cards-grid">
          {features.map((feature, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <Link href={feature.link} className="feature-link" aria-label={`Learn more about ${feature.title}`}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
