import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Award, Zap, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function Index() {
  const { t, language, dir } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Open mailto with the email
      window.location.href = `mailto:support@arabfunded.com?subject=Launch Notification Request&body=Please notify me at: ${email}`;
      toast.success(t('contact.success'));
      setEmail('');
    }
  };

  const features = [
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'تمويل يصل إلى 200,000 دولار' : 'Funding up to $200,000',
      description: language === 'ar' ? 'ابدأ برأس مال كبير بدون مخاطرة على أموالك' : 'Start with significant capital without risking your own money',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'قواعد عادلة' : 'Fair Rules',
      description: language === 'ar' ? 'قواعد إدارة مخاطر واضحة وقابلة للتحقيق' : 'Clear and achievable risk management rules',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'حتى 90٪ أرباح' : 'Up to 90% Profit Split',
      description: language === 'ar' ? 'احتفظ بالجزء الأكبر من أرباحك' : 'Keep the majority of your trading profits',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'دفعات سريعة' : 'Fast Payouts',
      description: language === 'ar' ? 'اسحب أرباحك بسرعة وسهولة' : 'Withdraw your profits quickly and easily',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'دعم عربي' : 'Arabic Support',
      description: language === 'ar' ? 'فريق دعم يتحدث العربية' : 'Arabic-speaking support team',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'خطة توسع' : 'Scaling Plan',
      description: language === 'ar' ? 'وسّع حسابك مع نمو أدائك' : 'Scale your account as your performance grows',
    },
  ];

  return (
    <main className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                {language === 'ar' ? 'قريباً' : 'Coming Soon'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              {t('hero.subtitle')}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            {/* Email Form */}
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder={t('contact.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-card/50 border-border/50 focus:border-primary"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 gradient-primary hover:opacity-90 transition-opacity glow-primary"
              >
                {t('hero.cta')}
                <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              {t('hero.note')}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'انضم إلى قائمة الانتظار وكن من أوائل المتداولين الذين سيحصلون على التمويل.'
                : 'Join the waitlist and be among the first traders to get funded.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary hover:opacity-90 glow-primary">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  {t('nav.howItWorks')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
