export function EventStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: 'Dance Eko 2025',
    description: 'A two-day Afrobeats, Amapiano, and Afrohouse festival celebrating African music and culture.',
    startDate: '2025-12-27',
    endDate: '2025-12-28',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Lagos, Nigeria',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Dance Eko',
      url: 'https://danceeko.com',
    },
    offers: {
      '@type': 'AggregateOffer',
      url: 'https://www.jetronticket.com/dance-eko-25',
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-12-01',
    },
    performer: {
      '@type': 'PerformingGroup',
      name: 'Various African DJs and Artists',
    },
    image: 'https://danceeko.com/Dance-EKO-2025-Logo-trans.png',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
