import { motion } from 'framer-motion';
import Button from './Button';
import Input from './Input';
import Card from './Card';
import Alert from './Alert';

interface UiKitPageProps {
  onBack: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function UiKitPage({ onBack, isDarkMode, toggleDarkMode }: UiKitPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow hover:shadow-md transition-all font-medium"
          >
            <span>←</span> Geri Dön
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">LAB-4 UI Kit</h1>
          
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform text-xl"
            aria-label="Temayı Değiştir"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Button Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Button Bileşeni</h2>
            
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500">Boyutlar</p>
              <div className="flex flex-wrap items-end gap-4">
                <Button size="sm">Küçük (sm)</Button>
                <Button size="md">Orta (md)</Button>
                <Button size="lg">Büyük (lg)</Button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500">Varyantlar</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500">Durumlar</p>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Devre Dışı</Button>
              </div>
            </div>
          </section>

          {/* Input Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Input Bileşeni</h2>
            <div className="space-y-4">
              <Input id="name" label="Ad Soyad" placeholder="Örn: Ahmet Yılmaz" />
              <Input 
                id="email" 
                type="email" 
                label="E-posta" 
                helpText="Örnek: ad@mail.com" 
                defaultValue="gecersiz-mail"
              />
              <Input 
                id="pass" 
                type="password" 
                label="Şifre" 
                error="Şifre en az 8 karakter olmalıdır" 
              />
              <Input id="disabled" label="Devre Dışı" disabled value="Düzenlenemez" />
            </div>
          </section>

          {/* Alert Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Alert Bileşeni</h2>
            <div className="space-y-4">
              <Alert variant="info" title="Bilgi" dismissible>
                Sistem güncellemeleri bu gece yapılacak.
              </Alert>
              <Alert variant="success" title="Başarılı">
                Dosya başarıyla yüklendi!
              </Alert>
              <Alert variant="warning" title="Uyarı">
                Oturumunuz 2 dakika içinde sona erecek.
              </Alert>
              <Alert variant="error" title="Hata" dismissible>
                İşlem sırasında bir hata oluştu.
              </Alert>
            </div>
          </section>

          {/* Card Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-2 dark:text-gray-200 dark:border-gray-700">Card Bileşeni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card 
                title="Yazılım Geliştirme" 
                variant="elevated"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400"
                footer={<Button size="sm" className="w-full">Detay Gör</Button>}
              >
                Modern web teknolojileri ile projeler geliştiriyoruz.
              </Card>
              
              <div className="space-y-6">
                <Card title="Hakkımızda" variant="outlined">
                  Ekibimiz 10 yıllık tecrübe ile hizmet vermektedir.
                </Card>
                <Card title="İletişim" variant="filled" footer={<p className="text-xs">Bize her zaman ulaşabilirsiniz.</p>}>
                  E-posta: info@example.com
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
