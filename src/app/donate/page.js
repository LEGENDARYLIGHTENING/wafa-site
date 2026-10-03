import { Suspense } from 'react';
import DonateSection from '../../components/DonateSection';

export const metadata = {
  title: 'Donate Now - Support Our Causes',
  description: 'Contribute to Wafa Educational And Charitable Trust initiatives. 100% transparent donations eligible for Section 80G tax benefits.',
};

export default function DonatePage() {
  return (
    <>
      <div className="donate-hero">
        <div className="container">
          <span className="subtitle" style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Make a Difference</span>
          <h1>Donate for a Cause</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.9 }}>
            Your contribution helps us provide clean drinking water, education, healthcare, and 
            essential food supplies to marginalized communities across India.
          </p>
        </div>
      </div>

      <Suspense fallback={
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <p>Loading donation options...</p>
        </div>
      }>
        <DonateSection />
      </Suspense>
    </>
  );
}
