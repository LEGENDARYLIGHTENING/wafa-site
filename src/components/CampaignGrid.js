import Link from 'next/link';

export default function CampaignGrid({ campaigns }) {
  if (!campaigns || campaigns.length === 0) return null;

  return (
    <div className="campaigns-grid">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="campaign-card">
          <Link href={`/services/${campaign.id}`} className="campaign-card-image">
            <img src={campaign.image} alt={campaign.title} />
            <div className="campaign-card-overlay" />
          </Link>
          <div className="campaign-card-body">
            <h3>
              <Link href={`/services/${campaign.id}`}>{campaign.title}</Link>
            </h3>
            <div
              className="campaign-card-excerpt"
              dangerouslySetInnerHTML={{ __html: (campaign.content || '').substring(0, 100) + '...' }}
            />
          </div>
          <div className="campaign-card-footer">
            <Link href={`/services/${campaign.id}`} className="read-more">
              Read More <span>→</span>
            </Link>
            <Link href={`/donate?cause=${campaign.id}`} className="btn btn-primary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Donate Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
