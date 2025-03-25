const CompanyCards = () => {
  const companies = [
    {
      logo: '/logos/spglobal-logo-2.png',
      subtitle: 'S&P Global',
      link: 'https://spglobal.com/',
    },
    {
      logo: '/logos/spglobal-logo-4.png',
      subtitle: 'Capital IQ Pro',
      link: 'https://www.spglobal.com/market-intelligence/en/solutions/products/sp-capital-iq-pro',
    },
    {
      logo: '/logos/leanscale-logo-3.jpeg',
      subtitle: 'Leanscale',
      link: 'https://leanscale.com/',
    },
    {
      logo: '/logos/salam-logo.png',
      subtitle: 'Salam Telecom',
      link: 'https://salam.sa/en/',
    },
    {
      logo: '/logos/ens-logo.png',
      subtitle: 'Evamp & Saanga',
      link: 'https://evampsaanga.com/',
    },
    {
      logo: '/logos/iplex-logo.webp',
      subtitle: 'iPlex',
      link: 'https://iplex.co/',
    },
    {
      logo: '/logos/tech-mentors-logo.webp',
      subtitle: 'Tech Mentors',
      link: 'https://techmentors.pro/',
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {companies.map((company, index) => (
          <a key={index} href={company.link} target='_blank'>
            <div
              className='text-center glass-card rounded-xl p-6 card-hover opacity-0 animate-fade-in-up cursor-pointer'
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                minWidth: '200px',
              }}
            >
              <img
                src={company.logo}
                alt={company.subtitle || 'Company Logo'}
                className='w-20 h-16 mb-4 inline-block'
              />
              {company.subtitle && (
                <p className='text-sm text-gray-500 mt-1'>{company.subtitle}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompanyCards;
