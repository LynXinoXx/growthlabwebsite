'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.process': 'Our Process',
    'nav.results': 'Results',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title.part1': 'Transform Your Leads Into',
    'hero.title.part2': 'Qualified Clients',
    'hero.subtitle': 'Professional videos and targeted advertising for local businesses in Montreal',
    'hero.cta.primary': 'Get a Free Consultation',
    'hero.cta.secondary': 'Discover Our Services',
    'hero.stats.videos': 'Videos Produced',
    'hero.stats.views': 'Views Generated',
    'hero.stats.roi': 'Average ROI',
    'hero.stats.clients': 'Satisfied Clients',
    
    // Services Section
    'services.title': 'Our',
    'services.title.highlight': 'Services',
    'services.subtitle': 'Complete solutions to maximize your digital presence',
    'services.video.title': 'Video Production',
    'services.video.description': 'Create captivating video content that tells your brand story and engages your audience.',
    'services.video.feature1': 'Promotional and advertising videos',
    'services.video.feature2': 'Client testimonials and case studies',
    'services.video.feature3': 'Social media content',
    'services.video.feature4': 'Professional editing and post-production',
    'services.ads.title': 'Targeted Advertising',
    'services.ads.description': 'Reach your ideal customers with strategic and optimized advertising campaigns.',
    'services.ads.feature1': 'Optimized Facebook & Instagram Ads',
    'services.ads.feature2': 'Google Ads and search campaigns',
    'services.ads.feature3': 'Geographic targeting (Montreal)',
    'services.ads.feature4': 'Detailed reports and continuous optimization',
    
    // Process Section
    'process.title': 'Our',
    'process.title.highlight': 'Process',
    'process.subtitle': 'A structured approach to guarantee your success',
    'process.step1.title': 'Consultation',
    'process.step1.description': 'We analyze your needs and business objectives',
    'process.step2.title': 'Strategy',
    'process.step2.description': 'Creating a personalized strategy for your market',
    'process.step3.title': 'Production',
    'process.step3.description': 'Video content creation and campaign launch',
    'process.step4.title': 'Optimization',
    'process.step4.description': 'Continuous improvement based on results',
    
    // Results Section
    'results.title': 'Proven',
    'results.title.highlight': 'Results',
    'results.subtitle': 'Our clients see concrete and measurable results',
    'results.metric1.value': '+250%',
    'results.metric1.title': 'Increase in Leads',
    'results.metric1.description': 'On average for our clients in the first 3 months',
    'results.metric2.value': '3.5x',
    'results.metric2.title': 'Return on Investment',
    'results.metric2.description': 'Average ROI on our advertising campaigns',
    'results.metric3.value': '95%',
    'results.metric3.title': 'Satisfaction Rate',
    'results.metric3.description': 'Of our clients recommend us to others',
    
    // Contact Section
    'contact.title': 'Ready to',
    'contact.title.highlight': 'Grow?',
    'contact.subtitle': 'Contact us for a free consultation and discover how we can help you',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Service of Interest',
    'contact.form.service.select': 'Select...',
    'contact.form.service.video': 'Video Production',
    'contact.form.service.ads': 'Targeted Advertising',
    'contact.form.service.both': 'Both',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.phone': '(514) 555-0123',
    'contact.form.placeholder.message': 'Tell us about your project...',
    'contact.direct': 'Or contact us directly:',
    'contact.success': 'Thank you! We will contact you soon.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.location': 'Montreal, Quebec',
  },
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.process': 'Notre Processus',
    'nav.results': 'Résultats',
    'nav.contact': 'Contactez-nous',
    
    // Hero Section
    'hero.title.part1': 'Transformez Vos Leads En',
    'hero.title.part2': 'Clients Qualifiés',
    'hero.subtitle': 'Vidéos professionnelles et publicités ciblées pour les entreprises locales de Montréal',
    'hero.cta.primary': 'Obtenir une Consultation Gratuite',
    'hero.cta.secondary': 'Découvrir Nos Services',
    'hero.stats.videos': 'Vidéos Produites',
    'hero.stats.views': 'Vues Générées',
    'hero.stats.roi': 'ROI Moyen',
    'hero.stats.clients': 'Clients Satisfaits',
    
    // Services Section
    'services.title': 'Nos',
    'services.title.highlight': 'Services',
    'services.subtitle': 'Des solutions complètes pour maximiser votre présence digitale',
    'services.video.title': 'Production Vidéo',
    'services.video.description': 'Créez du contenu vidéo captivant qui raconte l\'histoire de votre marque et engage votre audience.',
    'services.video.feature1': 'Vidéos promotionnelles et publicitaires',
    'services.video.feature2': 'Témoignages clients et études de cas',
    'services.video.feature3': 'Contenu pour réseaux sociaux',
    'services.video.feature4': 'Montage et post-production professionnels',
    'services.ads.title': 'Publicités Ciblées',
    'services.ads.description': 'Atteignez vos clients idéaux avec des campagnes publicitaires stratégiques et optimisées.',
    'services.ads.feature1': 'Facebook & Instagram Ads optimisées',
    'services.ads.feature2': 'Google Ads et campagnes de recherche',
    'services.ads.feature3': 'Ciblage géographique (Montréal)',
    'services.ads.feature4': 'Rapports détaillés et optimisation continue',
    
    // Process Section
    'process.title': 'Notre',
    'process.title.highlight': 'Processus',
    'process.subtitle': 'Une approche structurée pour garantir votre succès',
    'process.step1.title': 'Consultation',
    'process.step1.description': 'Nous analysons vos besoins et objectifs commerciaux',
    'process.step2.title': 'Stratégie',
    'process.step2.description': 'Création d\'une stratégie personnalisée pour votre marché',
    'process.step3.title': 'Production',
    'process.step3.description': 'Création de contenu vidéo et lancement des campagnes',
    'process.step4.title': 'Optimisation',
    'process.step4.description': 'Amélioration continue basée sur les résultats',
    
    // Results Section
    'results.title': 'Résultats',
    'results.title.highlight': 'Prouvés',
    'results.subtitle': 'Nos clients voient des résultats concrets et mesurables',
    'results.metric1.value': '+250%',
    'results.metric1.title': 'Augmentation des Leads',
    'results.metric1.description': 'En moyenne pour nos clients dans les 3 premiers mois',
    'results.metric2.value': '3.5x',
    'results.metric2.title': 'Retour sur Investissement',
    'results.metric2.description': 'ROI moyen sur nos campagnes publicitaires',
    'results.metric3.value': '95%',
    'results.metric3.title': 'Taux de Satisfaction',
    'results.metric3.description': 'De nos clients nous recommandent à d\'autres',
    
    // Contact Section
    'contact.title': 'Prêt à',
    'contact.title.highlight': 'Croître?',
    'contact.subtitle': 'Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.service': 'Service d\'intérêt',
    'contact.form.service.select': 'Sélectionnez...',
    'contact.form.service.video': 'Production Vidéo',
    'contact.form.service.ads': 'Publicités Ciblées',
    'contact.form.service.both': 'Les Deux',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.form.placeholder.name': 'Jean Dupont',
    'contact.form.placeholder.email': 'jean@exemple.com',
    'contact.form.placeholder.phone': '(514) 555-0123',
    'contact.form.placeholder.message': 'Parlez-nous de votre projet...',
    'contact.direct': 'Ou contactez-nous directement:',
    'contact.success': 'Merci! Nous vous contactons bientôt.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.location': 'Montréal, Québec',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

