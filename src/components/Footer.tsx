import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Twitter, MessageCircle, Send } from 'lucide-react';
export function Footer() {
  const {
    t,
    language
  } = useLanguage();
  const quickLinks = [{
    path: '/',
    label: t('nav.home')
  }, {
    path: '/how-it-works',
    label: t('nav.howItWorks')
  }, {
    path: '/pricing',
    label: t('nav.pricing')
  }, {
    path: '/rules',
    label: t('nav.rules')
  }, {
    path: '/contact',
    label: t('nav.contact')
  }];
  const legalLinks = [{
    path: '#',
    label: t('footer.terms')
  }, {
    path: '#',
    label: t('footer.privacy')
  }, {
    path: '#',
    label: t('footer.disclaimer')
  }];
  return <footer className="relative z-10 border-t border-border/50 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gradient mb-4">
              {language === 'ar' ? 'عرب فاندد' : 'ArabFunded'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Discord">
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Telegram">
                <Send className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map(link => <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.contact')}</h4>
            <a className="text-sm text-primary hover:underline" href="mailto:arabfunded@gmail.com">
              arabfunded@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t('footer.construction')}
          </p>
        </div>
      </div>
    </footer>;
}