import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Trophy, Target, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const { t, language, dir } = useLanguage();

  const steps = [
    {
      icon: Target,
      number: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      details: language === 'ar' 
        ? ['حقق هدف الربح 8٪', 'التزم بحد الخسارة اليومي 5٪', 'لا تتجاوز التراجع الأقصى 10٪', 'تداول لمدة 5 أيام على الأقل']
        : ['Achieve 8% profit target', 'Respect 5% daily loss limit', 'Stay within 10% max drawdown', 'Trade for minimum 5 days'],
    },
    {
      icon: CheckCircle,
      number: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      details: language === 'ar'
        ? ['حقق هدف الربح 5٪', 'نفس قواعد إدارة المخاطر', 'أكد اتساقك', 'لا حد أقصى للوقت']
        : ['Achieve 5% profit target', 'Same risk management rules', 'Prove your consistency', 'No maximum time limit'],
    },
    {
      icon: Trophy,
      number: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      details: language === 'ar'
        ? ['استلم حسابك الممول', 'تداول برأس مالنا', 'احصل على 90٪ من الأرباح', 'اسحب في أي وقت']
        : ['Receive your funded account', 'Trade with our capital', 'Keep up to 90% of profits', 'Withdraw anytime'],
    },
  ];

  return (
    <main className="relative z-10 pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('howItWorks.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 animate-fade-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon & Number */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  
                  {/* Details */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <ArrowRight className={`w-8 h-8 text-primary/30 rotate-90 ${dir === 'rtl' ? 'rotate-[270deg]' : ''}`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link to="/pricing">
            <Button size="lg" className="gradient-primary hover:opacity-90 glow-primary">
              {language === 'ar' ? 'عرض الأسعار' : 'View Pricing'}
              <Rocket className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
