import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
export default function Contact() {
  const {
    t,
    language,
    dir
  } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Launch Notification - ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message || 'Please notify me when ArabFunded launches.'}`);
    window.location.href = `mailto:arabfunded@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success(t('contact.success'));
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <main className="relative z-10 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('contact.title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <Input id="name" type="text" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required className="bg-card/50 border-border/50 focus:border-primary" placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required className="bg-card/50 border-border/50 focus:border-primary" placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="bg-card/50 border-border/50 focus:border-primary min-h-[120px]" placeholder={language === 'ar' ? 'رسالتك (اختياري)' : 'Your message (optional)'} />
              </div>

              <Button type="submit" size="lg" className="w-full gradient-primary hover:opacity-90 glow-primary" disabled={isSubmitting}>
                {isSubmitting ? <>
                    <span className="animate-pulse">{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                  </> : <>
                    {t('contact.submit')}
                    <Send className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </>}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            {/* Email Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('contact.emailUs')}</h3>
                  <a className="text-primary hover:underline" href="mailto:arabfunded@gmail.com">
                    arabfunded@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">
                {language === 'ar' ? 'ماذا تتوقع' : 'What to Expect'}
              </h3>
              <ul className="space-y-3">
                {[language === 'ar' ? 'إشعار فوري عند الإطلاق' : 'Instant notification at launch', language === 'ar' ? 'وصول مبكر إلى المنصة' : 'Early access to the platform', language === 'ar' ? 'عروض حصرية للأعضاء الأوائل' : 'Exclusive offers for early members', language === 'ar' ? 'تحديثات منتظمة حول التقدم' : 'Regular updates on progress'].map((item, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>;
}