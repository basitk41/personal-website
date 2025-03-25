import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import CompanySlider from './CompanySlider';
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
}

export function Experience() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('sp-global');

  // const selectedJob = jobs.find((job) => job.id === activeTab);
  const companies = [
    {
      name: 'Company A',
      logo: '/public/profile.png',
      description: 'A global leader in technology solutions.',
    },
    {
      name: 'Company B',
      logo: '/logos/company-b.png',
      description: 'Innovators in software and cloud services.',
    },
    {
      name: 'Company C',
      logo: '/logos/company-c.png',
      description: 'Transforming industries with cutting-edge tools.',
    },
    {
      name: 'Company D',
      logo: '/logos/company-d.png',
      description: 'Empowering businesses through digital transformation.',
    },
    {
      name: 'Company D',
      logo: '/logos/company-d.png',
      description: 'Empowering businesses through digital transformation.',
    },
    {
      name: 'Company D',
      logo: '/logos/company-d.png',
      description: 'Empowering businesses through digital transformation.',
    },
    {
      name: 'Company D',
      logo: '/logos/company-d.png',
      description: 'Empowering businesses through digital transformation.',
    },
    {
      name: 'Company D',
      logo: '/logos/company-d.png',
      description: 'Empowering businesses through digital transformation.',
    },
  ];

  return (
    <section id='experience' className='section-padding px-6 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <div
            className='inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium'
            data-aos='fade-up'
          >
            {t('experience.title')}
          </div>
          <h2
            className='section-heading'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            {t('experience.subtitle')}
          </h2>
          <p
            className='max-w-2xl mx-auto text-foreground/70'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {t('experience.description')}
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
          <CompanySlider />
        </div>
      </div>
    </section>
  );
}

export default Experience;
