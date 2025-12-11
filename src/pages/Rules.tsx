import { AlertTriangle, TrendingDown, Target, Calendar, DollarSign, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Rules() {
  const { t, language } = useLanguage();

  const rules = [
    {
      icon: TrendingDown,
      title: t('rules.rule1.title'),
      description: t('rules.rule1.description'),
      value: '5%',
      color: 'text-destructive',
    },
    {
      icon: AlertTriangle,
      title: t('rules.rule2.title'),
      description: t('rules.rule2.description'),
      value: '10%',
      color: 'text-destructive',
    },
    {
      icon: Target,
      title: t('rules.rule3.title'),
      description: t('rules.rule3.description'),
      value: '8% / 5%',
      color: 'text-primary',
    },
    {
      icon: Calendar,
      title: t('rules.rule4.title'),
      description: t('rules.rule4.description'),
      value: '5+',
      color: 'text-primary',
    },
    {
      icon: DollarSign,
      title: t('rules.rule5.title'),
      description: t('rules.rule5.description'),
      value: '90%',
      color: 'text-primary',
    },
    {
      icon: BarChart3,
      title: t('rules.rule6.title'),
      description: t('rules.rule6.description'),
      value: '$2M',
      color: 'text-primary',
    },
  ];

  return (
    <main className="relative z-10 pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('rules.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('rules.subtitle')}
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <rule.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{rule.title}</h3>
                    <span className={`text-xl font-bold ${rule.color}`}>{rule.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto mt-12 animate-fade-up">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'ar' ? 'ملاحظة مهمة' : 'Important Notice'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar'
                  ? 'هذه القواعد قابلة للتغيير قبل الإطلاق الرسمي. سيتم الإعلان عن القواعد النهائية عند بدء التشغيل. التداول ينطوي على مخاطر كبيرة وقد لا يكون مناسبًا للجميع.'
                  : 'These rules are subject to change before the official launch. Final rules will be announced at launch. Trading involves significant risk and may not be suitable for everyone.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
