import { Link } from 'react-router-dom';
import { Check, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const { t, language } = useLanguage();

  const plans = [
    {
      size: '$5,000',
      price: language === 'ar' ? 'قريباً' : 'Coming Soon',
      popular: false,
      features: {
        profitTarget: '8% / 5%',
        dailyLoss: '5%',
        maxDrawdown: '10%',
        profitSplit: '80%',
      },
    },
    {
      size: '$10,000',
      price: language === 'ar' ? 'قريباً' : 'Coming Soon',
      popular: false,
      features: {
        profitTarget: '8% / 5%',
        dailyLoss: '5%',
        maxDrawdown: '10%',
        profitSplit: '80%',
      },
    },
    {
      size: '$25,000',
      price: language === 'ar' ? 'قريباً' : 'Coming Soon',
      popular: true,
      features: {
        profitTarget: '8% / 5%',
        dailyLoss: '5%',
        maxDrawdown: '10%',
        profitSplit: '85%',
      },
    },
    {
      size: '$50,000',
      price: language === 'ar' ? 'قريباً' : 'Coming Soon',
      popular: false,
      features: {
        profitTarget: '8% / 5%',
        dailyLoss: '5%',
        maxDrawdown: '10%',
        profitSplit: '85%',
      },
    },
    {
      size: '$100,000',
      price: language === 'ar' ? 'قريباً' : 'Coming Soon',
      popular: false,
      features: {
        profitTarget: '8% / 5%',
        dailyLoss: '5%',
        maxDrawdown: '10%',
        profitSplit: '90%',
      },
    },
    {
      size: '$200,000',
      price: language === 'ar' ? 'قريباً' : 'Coming Soon',
      popular: false,
      features: {
        profitTarget: '8% / 5%',
        dailyLoss: '5%',
        maxDrawdown: '10%',
        profitSplit: '90%',
      },
    },
  ];

  return (
    <main className="relative z-10 pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('pricing.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Notice */}
        <div className="glass rounded-xl p-6 max-w-2xl mx-auto mb-12 text-center animate-fade-up">
          <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">
            {t('pricing.placeholder')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                'glass rounded-2xl p-6 relative animate-fade-up hover-lift',
                plan.popular && 'border-2 border-primary'
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full gradient-primary text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                  </div>
                </div>
              )}

              {/* Size */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-3xl font-bold text-gradient">{plan.size}</h3>
                <p className="text-2xl font-semibold mt-2">{plan.price}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">{t('pricing.profitTarget')}</span>
                  <span className="font-semibold">{plan.features.profitTarget}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">{t('pricing.dailyLoss')}</span>
                  <span className="font-semibold">{plan.features.dailyLoss}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">{t('pricing.maxDrawdown')}</span>
                  <span className="font-semibold">{plan.features.maxDrawdown}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'تقسيم الأرباح' : 'Profit Split'}
                  </span>
                  <span className="font-semibold text-primary">{plan.features.profitSplit}</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                className={cn(
                  'w-full',
                  plan.popular 
                    ? 'gradient-primary hover:opacity-90' 
                    : 'bg-card hover:bg-card/80 border border-border'
                )}
                disabled
              >
                {t('pricing.buyNow')}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <p className="text-muted-foreground mb-4">
            {language === 'ar' 
              ? 'هل تريد أن نعلمك عند الإطلاق؟'
              : 'Want to be notified when we launch?'
            }
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary hover:opacity-90 glow-primary">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
