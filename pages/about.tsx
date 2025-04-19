import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string; // Optional bio property
}

const AboutPage = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Mrunal Samal',
      role: 'Teammitglied',
      image: '/images/Mrunal.jpg'
    },
    {
      name: 'Aakriti Agarwal',
      role: 'Teammitglied',
      image: '/images/aakriti.jpg'
    },
    {
      name: 'Sandeep Sabella Reddy',
      role: 'Teammitglied',
      image: '/images/sandeep.jpg'
      
    },
    {
      name: 'Dhriti Rastogi',
      role: 'Teammitglied',
      image: '/images/dhriti.jpg'
    },
    
    {
      name: 'Prahshansha',
      role: 'Teammitglied',
      image: '/images/prashansa.jpg'
      
    }
  ];
  
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section 
        ref={headerRef}
        className="relative h-80 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
            alt="German cuisine" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          className="relative z-10 text-white text-center max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über Das Kochbuch</h1>
          <p className="text-lg md:text-xl">
            Unsere Mission ist es, authentische deutsche Rezepte und kulinarische Traditionen zu bewahren und zu teilen.
          </p>
        </motion.div>
      </section>
      
      {/* Our Story */}
      <section 
        ref={storyRef}
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
            <div className="space-y-4">
              <p>
                Das Kochbuch begann als bescheidene Sammlung von Familienrezepten, die über Generationen weitergegeben wurden. Was als persönliches Projekt zur Bewahrung unseres Erbes begann, hat sich zu einer umfassenden Ressource für deutsche Küche-Enthusiasten auf der ganzen Welt entwickelt.
              </p>
              <p>
              Diese Website wurde 2025 entwickelt und ist das Ergebnis engagierter Recherche und der Bemühungen, authentische deutsche Rezepte aus verschiedenen Regionen zu präsentieren. Von herzhaften Hausmannskost-Gerichten aus Bayern bis hin zu den schmackhaften Fischgerichten aus Norddeutschland habe ich diese Sammlung zusammengestellt, um Ihnen einen Einblick in die reichhaltige kulinarische Tradition Deutschlands zu geben – alles auf einer interaktiven Plattform.
              </p>
              <p>
                Jedes Rezept in unserer Sammlung wurde in Heimküchen sorgfältig getestet, um sicherzustellen, dass sie für Köche aller Kenntnisstufen zugänglich sind. Wir glauben, dass die deutsche Küche bewahrt und gefeiert werden sollte, und wir setzen uns dafür ein, diese Traditionen mit Feinschmeckern überall zu teilen.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Vintage cookbook" 
              className="rounded-lg shadow-xl"
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Traditional German cooking" 
              className="absolute -bottom-10 -left-10 w-48 h-48 object-cover rounded-lg shadow-xl border-4 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </section>
      
      {/* Our Values */}
      <section 
        ref={valuesRef}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Diese Grundprinzipien leiten uns in unserer Mission, authentische deutsche Küche zu teilen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentizität',
                description: 'Wir setzen uns dafür ein, die authentischen Aromen und Techniken der traditionellen deutschen Küche zu bewahren.',
                icon: (
                  <svg className="w-8 h-8 text-german-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: 'Zugänglichkeit',
                description: 'Wir glauben, dass deutsches Kochen für jeden zugänglich sein sollte, unabhängig von seinen kulinarischen Erfahrungen.',
                icon: (
                  <svg className="w-8 h-8 text-german-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: 'Kulturerbe',
                description: 'Wir ehren die reiche kulinarische Geschichte Deutschlands und die kulturelle Bedeutung seiner regionalen Gerichte.',
                icon: (
                  <svg className="w-8 h-8 text-german-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{value.title}</h3>
                <p className="text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section 
        ref={teamRef}
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Die leidenschaftlichen Kochexperten hinter Das Kochbuch.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-german-red font-medium mb-3">{member.role}</p>
                {member.bio && <p className="text-gray-600">{member.bio}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-cookbook-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-german-gold">Haben Sie eine Frage?</h2>
            <p className="text-lg mb-8">
              Wir würden gerne von Ihnen hören! Ob Sie eine Frage zu einem Rezept haben, Ihre Kocherfahrung teilen möchten oder an einer Zusammenarbeit mit uns interessiert sind, zögern Sie nicht, uns zu kontaktieren.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn btn-secondary text-lg px-8 py-3 inline-block">
                Kontakt
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 