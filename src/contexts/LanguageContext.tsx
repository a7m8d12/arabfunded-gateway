import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.rules': 'Rules',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'ArabFunded',
    'hero.subtitle': 'Your Future Funded Account Starts Soon',
    'hero.description': 'We are building a next-generation funding platform designed for traders in the Middle East. Official launch will be announced soon.',
    'hero.cta': 'Notify Me On Launch',
    'hero.note': 'ArabFunded is currently under development — no accounts are available yet.',
    
    // About
    'about.title': 'About ArabFunded',
    'about.description': 'We are creating a modern prop firm offering traders access to funded trading accounts with fair rules, high payouts, and a transparent environment. Our system is being developed to ensure reliability, speed, and a smooth trading experience.',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Your path to a funded trading account',
    'howItWorks.step1.title': 'Challenge Phase',
    'howItWorks.step1.description': 'Prove your trading skills by meeting profit targets while respecting risk management rules.',
    'howItWorks.step2.title': 'Verification Phase',
    'howItWorks.step2.description': 'Confirm your consistency with a second evaluation phase under similar conditions.',
    'howItWorks.step3.title': 'Get Funded',
    'howItWorks.step3.description': 'Receive your funded account and start trading with our capital. Keep up to 90% of profits.',
    
    // Pricing
    'pricing.title': 'Account Sizes',
    'pricing.subtitle': 'Choose your funded account size',
    'pricing.placeholder': 'Pricing information will be available at launch. We are finalizing our evaluation models and account structures.',
    'pricing.profitTarget': 'Profit Target',
    'pricing.dailyLoss': 'Daily Loss Limit',
    'pricing.maxDrawdown': 'Max Drawdown',
    'pricing.buyNow': 'Coming Soon',
    
    // Rules
    'rules.title': 'Trading Rules',
    'rules.subtitle': 'Guidelines for your funded account',
    'rules.rule1.title': 'Daily Loss Limit',
    'rules.rule1.description': 'Maximum daily loss is 5% of the initial account balance. Exceeding this will result in account termination.',
    'rules.rule2.title': 'Maximum Drawdown',
    'rules.rule2.description': 'Total drawdown must not exceed 10% of the initial account balance at any time.',
    'rules.rule3.title': 'Profit Target',
    'rules.rule3.description': 'Achieve 8% profit in Challenge phase and 5% in Verification phase to advance.',
    'rules.rule4.title': 'Trading Days',
    'rules.rule4.description': 'Minimum 5 trading days required in each phase. No maximum time limit.',
    'rules.rule5.title': 'Profit Split',
    'rules.rule5.description': 'Funded traders receive up to 90% profit split on all profits generated.',
    'rules.rule6.title': 'Scaling Plan',
    'rules.rule6.description': 'Consistent profitable traders can scale their accounts up to $2,000,000.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get notified when we launch',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Message (Optional)',
    'contact.submit': 'Notify Me',
    'contact.success': 'Thank you! We\'ll notify you when we launch.',
    'contact.emailUs': 'Or email us at',
    
    // Footer
    'footer.description': 'A modern prop firm for Middle East traders.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.disclaimer': 'Risk Disclaimer',
    'footer.copyright': '© 2025 ArabFunded — All rights reserved.',
    'footer.construction': 'This platform is currently under construction.',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.howItWorks': 'كيف يعمل',
    'nav.pricing': 'الأسعار',
    'nav.rules': 'القواعد',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'عرب فاندد',
    'hero.subtitle': 'حسابك الممول يبدأ قريباً',
    'hero.description': 'نحن نبني منصة تمويل من الجيل التالي مصممة للمتداولين في الشرق الأوسط. سيتم الإعلان عن الإطلاق الرسمي قريباً.',
    'hero.cta': 'أخبرني عند الإطلاق',
    'hero.note': 'عرب فاندد قيد التطوير حالياً — لا توجد حسابات متاحة بعد.',
    
    // About
    'about.title': 'عن عرب فاندد',
    'about.description': 'نحن نبني شركة تداول حديثة تقدم للمتداولين إمكانية الوصول إلى حسابات تداول ممولة بقواعد عادلة وأرباح عالية وبيئة شفافة. يتم تطوير نظامنا لضمان الموثوقية والسرعة وتجربة تداول سلسة.',
    
    // How It Works
    'howItWorks.title': 'كيف يعمل',
    'howItWorks.subtitle': 'طريقك للحصول على حساب تداول ممول',
    'howItWorks.step1.title': 'مرحلة التحدي',
    'howItWorks.step1.description': 'أثبت مهاراتك في التداول من خلال تحقيق أهداف الربح مع احترام قواعد إدارة المخاطر.',
    'howItWorks.step2.title': 'مرحلة التحقق',
    'howItWorks.step2.description': 'أكد اتساقك من خلال مرحلة تقييم ثانية بشروط مماثلة.',
    'howItWorks.step3.title': 'احصل على التمويل',
    'howItWorks.step3.description': 'استلم حسابك الممول وابدأ التداول برأس مالنا. احتفظ بنسبة تصل إلى 90٪ من الأرباح.',
    
    // Pricing
    'pricing.title': 'أحجام الحسابات',
    'pricing.subtitle': 'اختر حجم حسابك الممول',
    'pricing.placeholder': 'ستتوفر معلومات الأسعار عند الإطلاق. نحن نضع اللمسات الأخيرة على نماذج التقييم وهياكل الحسابات.',
    'pricing.profitTarget': 'هدف الربح',
    'pricing.dailyLoss': 'حد الخسارة اليومي',
    'pricing.maxDrawdown': 'أقصى تراجع',
    'pricing.buyNow': 'قريباً',
    
    // Rules
    'rules.title': 'قواعد التداول',
    'rules.subtitle': 'إرشادات لحسابك الممول',
    'rules.rule1.title': 'حد الخسارة اليومي',
    'rules.rule1.description': 'الحد الأقصى للخسارة اليومية هو 5٪ من رصيد الحساب الأولي. تجاوز هذا سيؤدي إلى إنهاء الحساب.',
    'rules.rule2.title': 'أقصى تراجع',
    'rules.rule2.description': 'يجب ألا يتجاوز إجمالي التراجع 10٪ من رصيد الحساب الأولي في أي وقت.',
    'rules.rule3.title': 'هدف الربح',
    'rules.rule3.description': 'حقق ربح 8٪ في مرحلة التحدي و5٪ في مرحلة التحقق للتقدم.',
    'rules.rule4.title': 'أيام التداول',
    'rules.rule4.description': 'مطلوب 5 أيام تداول كحد أدنى في كل مرحلة. لا يوجد حد أقصى للوقت.',
    'rules.rule5.title': 'تقسيم الأرباح',
    'rules.rule5.description': 'يحصل المتداولون الممولون على ما يصل إلى 90٪ من جميع الأرباح المحققة.',
    'rules.rule6.title': 'خطة التوسع',
    'rules.rule6.description': 'يمكن للمتداولين المربحين باستمرار توسيع حساباتهم حتى 2,000,000 دولار.',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'احصل على إشعار عند الإطلاق',
    'contact.name': 'اسمك',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة (اختياري)',
    'contact.submit': 'أخبرني',
    'contact.success': 'شكراً لك! سنبلغك عند الإطلاق.',
    'contact.emailUs': 'أو راسلنا على',
    
    // Footer
    'footer.description': 'شركة تداول حديثة لمتداولي الشرق الأوسط.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.legal': 'قانوني',
    'footer.terms': 'شروط الخدمة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.disclaimer': 'إخلاء المسؤولية',
    'footer.copyright': '© 2025 عرب فاندد — جميع الحقوق محفوظة.',
    'footer.construction': 'هذه المنصة قيد الإنشاء حالياً.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('arabfunded-lang') as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('arabfunded-lang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
