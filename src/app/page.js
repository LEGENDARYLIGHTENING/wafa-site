import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';
import FeatureCards from '../components/FeatureCards';
import CounterSection from '../components/CounterSection';
import CampaignGrid from '../components/CampaignGrid';
import BlogCard from '../components/BlogCard';
import ProjectShowcase from '../components/ProjectShowcase';
import { getCounters, getAllServices, getAllBlogs, getGallery } from '../lib/data';

export default function Home() {
  const counters = getCounters();
  const allServices = getAllServices();
  const blogs = getAllBlogs();
  const gallery = getGallery();

  // Get top campaigns for the homepage
  const featuredCampaigns = allServices.slice(0, 6);

  return (
    <>
      <HeroSlider />
      
      {/* 4 Overlapping Feature Cards */}
      <FeatureCards />

      {/* Counters */}
      <CounterSection counters={counters} />

      {/* About Section - We're here to help them */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-image animate-fade-in">
              <img src="/assets/about.jpg" alt="About Wafa Trust" />
            </div>
            <div className="about-text animate-fade-in-up">
              <span className="subtitle" style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Wafa Educational &amp; Charitable Trust</span>
              <h2>We're here to help them</h2>
              <p>
                At Wafa Educational & Charitable Trust, our mission is to empower, educate, and 
                uplift communities across our nation through holistic, sustainable, and 
                compassionate initiatives. We are committed to making a meaningful and lasting 
                impact on the lives of the underprivileged, marginalized, and underserved.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Quality Education</span>
                </div>
                <div className="about-feature">
                  <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Clean Water Projects</span>
                </div>
                <div className="about-feature">
                  <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Healthcare Support</span>
                </div>
                <div className="about-feature">
                  <span className="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span>Community Building</span>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary mt-4">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase with Donate Now buttons & payment links */}
      <ProjectShowcase />

      {/* Latest News & Articles (Campaigns/Services) */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="subtitle">Our Services</span>
            <h2>Latest news &amp; articles</h2>
            <p>
              Stay updated with the latest news, activities, and impact stories 
              from Wafa Educational And Charitable Trust.
            </p>
          </div>
          <CampaignGrid campaigns={featuredCampaigns} />
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/services/water-well-for-needy-place" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Fundraising for the people and causes you care about</h2>
          <p>
            Your contribution, no matter how small, has the power to transform lives. 
            Join hands with us in our mission to create a better, more equitable world for everyone.
          </p>
          <Link href="/donate" className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Become a Donor Today
          </Link>
        </div>
      </section>

    </>
  );
}
