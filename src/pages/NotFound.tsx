import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { language, dir } = useLanguage();

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center animate-fade-up">
        <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {language === 'ar' 
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : "Sorry, the page you're looking for doesn't exist or has been moved."
          }
        </p>
        <Link to="/">
          <Button size="lg" className="gradient-primary hover:opacity-90 glow-primary">
            <Home className={`w-5 h-5 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
