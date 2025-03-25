import React from 'react';
import {
  Code,
  Layout,
  User,
  Laptop,
  Database,
  Server,
  Shield,
  Cloud,
  Settings,
  Zap,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  const cards = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description:
        'Building scalable, responsive web applications using React, Next.js, TypeScript, and Redux.',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description:
        'Building secure and efficient APIs using Node.js, Express, and NestJS, ensuring seamless integration.',
    },
    {
      icon: <Layout size={24} />,
      title: 'UI Components',
      description:
        'Creating reusable UI components with Bootstrap, Tailwind, MUI, and Ant CSS in JS libraries.',
    },
    {
      icon: <User size={24} />,
      title: 'User Experience',
      description:
        'Developing smooth, user-friendly interfaces that prioritize accessibility and performance.',
    },
    {
      icon: <Laptop size={24} />,
      title: 'Testing & Optimization',
      description:
        'Implementing comprehensive testing and performance optimization using Jest, Cypress, and various tools.',
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description:
        'Designing and managing scalable databases using MySQL, Postgres, DynamoDB, and Prisma ORM.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Security & Authentication',
      description:
        'Implementing robust authentication, authorization, and data protection strategies using JWT, OAuth, and more.',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & DevOps',
      description:
        'Deploying applications using containerization with Docker and managing CI/CD pipelines for smooth delivery.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Workflow Automation',
      description:
        'Streamlining processes and automating workflows using tools like N8N, AI integrations, and scripts.',
    },
    {
      icon: <Zap size={24} />,
      title: 'AI & Generative Models',
      description:
        'Exploring AI, Generative AI, and LLMs to create smarter, data-driven solutions for modern applications.',
    },
  ];

  const arr1 = [0, 1, 2, 3, 4];
  const arr2 = [0, 1, 2, 3];

  return (
    <section
      id='about'
      className='section-padding px-6 md:px-10 bg-gradient-to-b from-background to-accent/30'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <div className='space-y-4'>
              <div
                className='inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium'
                data-aos='fade-up'
              >
                {t('about.title')}
              </div>
              <h2
                className='section-heading'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                {t('about.subtitle')}
              </h2>
              <div
                className='space-y-4 text-foreground/70'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <p
                  dangerouslySetInnerHTML={{ __html: t('about.description1') }}
                />
                <h3 className='text-xl text-white font-semibold'>
                  {t('about.my-core-expertise.title')}:
                </h3>
                <ul className='list-disc list-inside'>
                  {arr1.map((index) => (
                    <li key={index}>
                      <span className='font-bold text-[#fff]'>
                        {t(`about.my-core-expertise.data.${index}.title`)}:
                      </span>
                      <p
                        key={index}
                        className='ml-[20px]'
                        dangerouslySetInnerHTML={{
                          __html: t(
                            `about.my-core-expertise.data.${index}.description`
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                <h3 className='text-xl text-white font-semibold'>
                  {t('about.what-sets-me-apart.title')}:
                </h3>
                <ul className='list-disc list-inside'>
                  {arr2.map((index) => (
                    <li key={index}>
                      <span className='font-bold text-[#fff]'>
                        {t(`about.what-sets-me-apart.data.${index}.title`)}:
                      </span>
                      <p
                        key={index}
                        className='ml-[20px]'
                        dangerouslySetInnerHTML={{
                          __html: t(
                            `about.what-sets-me-apart.data.${index}.description`
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                <h3 className='text-xl text-white font-semibold'>
                  {t('about.beyond-work.title')}:
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.beyond-work.description.0'),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('about.beyond-work.description.1'),
                  }}
                />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='glass-card p-6 rounded-xl card-hover opacity-0 animate-fade-in-up'
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className='w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-lg'>
                  {card.icon}
                </div>
                <h3 className='text-lg font-semibold mb-2'>
                  {t(`about.card${index + 1}.title`)}
                </h3>
                <p className='text-foreground/70 text-sm'>
                  {t(`about.card${index + 1}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
