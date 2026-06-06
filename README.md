# 🌟 Fatma Nur Karagöz - Kişisel Portföy Web Sitesi

Modern web teknolojileri, temiz kod mimarileri ve interaktif UI/UX tasarım standartları doğrultusunda geliştirilmiş, tamamen responsive (mobil uyumlu) kişisel portföy uygulaması.

Aydınlık (Light) ve Karanlık (Dark) mod desteği, akıcı sayfa içi geçiş animasyonları ve dinamik alt sayfalarla zenginleştirilmiş premium bir kullanıcı deneyimi sunar.

---

## 🚀 Özellikler

### 🎨 Görsel Tasarım ve Arayüz (UI/UX)
- **Dinamik Tema Sistemi**: Tek tıkla geçiş yapılabilen modern aydınlık ve karanlık mod desteği. Aydınlık modda havada yavaşça süzülen bulutlar, karanlık modda ise parıldayan yıldızlar yer alır.
- **İnteraktif Giriş Animasyonu (Intro)**: Sayfa ilk açıldığında kağıt uçak ve mektup taşıyan kuş animasyonunun yer aldığı, kullanıcının tıklamasıyla mektubun açılıp portföye yönlendirdiği interaktif karşılama ekranı.
- **Dinamik Sticky Navigasyon**: Scroll spy özellikli, kullanıcının sayfadaki konumuna göre otomatik aktifleşen ve aşağı kaydırıldığında yarı saydam cam (glassmorphism) efektine bürünen şık üst menü.

### 📄 Bölümler ve Sayfalar
- **Hakkımda (About)**: Yazılım mühendisliği öğrencisi olarak akademik ve teknik vizyonumu, araştırma alanlarımı (Makine Öğrenmesi, LLM'ler) ve ilgi alanlarımı tanıtan dikey hizalı profil görselli şık biyografi bölümü.
- **Yetenekler (Skills)**: Frontend, Backend ve Araçlar olmak üzere 3 kategoride toplanmış, seviye göstergeli (1-5/5) ve animasyonlu yetenek barları (React, TS, Node, Colab vb.).
- **Projeler (Projects)**:
  - Projeleri kategorilere göre anında filtreleyebilen dinamik grid yapısı.
  - Ekip projeleri için özel `👥 Ekip Projesi` rozetleri ve projedeki rol ve katkıları detaylandıran **"Ekipteki Rolüm & Katkılarım"** kartları.
  - Ekran görüntülerinin kesilmeden/kırpılmadan gösterilmesi için dinamik `contain/cover` görsel yerleşimi.
  - Proje görsellerini tam ekran olarak inceleyebilmeyi sağlayan **Lightbox Görsel Galerisi**.
- **İletişim (Contact)**: **Web3Forms API** ile tam entegre çalışan, anlık doğrulama kontrollü ve şık geri bildirim uyarılarına (Alert) sahip iletişim formu.
- **Blog**: Yazılım ve teknoloji odaklı içeriklerin listelendiği, 16:9 geniş görsel formatına uygun tasarlanmış blog alt sayfası.

---

## 🛠️ Teknoloji Yığını

- **Frontend Core**: React 18.3.1 (Modern Hooks & Functional Components), TypeScript
- **Derleyici & Araçlar**: Vite, npm
- **Stil & Tasarım**: Tailwind CSS (v4), Vanilla CSS
- **Animasyonlar**: Framer Motion
- **Entegrasyonlar**: Web3Forms (İletişim Formu E-posta Gönderimi)

---

## 📁 Proje Klasör Yapısı

```text
web-lab-hello/
├── public/                 # Statik dosyalar (projeler verisi, görseller)
│   ├── data/
│   │   └── projects.json   # Projelerin dinamik JSON veri tabanı
│   └── images/             # Proje ekran görüntüleri ve profil resmi
├── src/
│   ├── components/         # Ortak bileşenler
│   │   ├── forms/          # Formlar (İletişim, filtreleme)
│   │   ├── layout/         # Sayfa düzeni (Header, Footer)
│   │   ├── sections/       # Ana sayfa bölümleri (Hero, About, Skills, ProjectList)
│   │   ├── BlogPage.tsx    # Blog sayfası bileşeni
│   │   ├── ProjectsPage.tsx # Tüm projeler listeleme sayfası
│   │   ├── ProjectDetailPage.tsx # Detaylı proje inceleme sayfası
│   │   └── PageBackground.tsx   # Dinamik gökyüzü arka planı (Bulutlar & Yıldızlar)
│   ├── services/           # Servis katmanı (Veri çekme işlemleri)
│   ├── types/              # TypeScript tip tanımlamaları
│   ├── App.tsx             # Ana uygulama orkestratörü
│   ├── main.tsx            # Giriş noktası
│   └── index.css           # Global Tailwind & özel stil tanımlamaları
├── index.html              # HTML şablonu
├── package.json            # Bağımlılık ve script tanımları
└── vite.config.ts          # Vite konfigürasyonu
```

---

## ⚙️ Kurulum ve Yerel Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Depoyu Klonlayın**:
   ```bash
   git clone https://github.com/fatmanurkaragozz/web-lab-hello.git
   cd web-lab-hello
   ```

2. **Bağımlılıkları Yükleyin**:
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın**:
   ```bash
   npm run dev
   ```
   *Tarayıcınızda otomatik açılmazsa `http://localhost:5173` adresine giderek görüntüleyebilirsiniz.*

4. **Üretim Sürümünü Derleyin (Build)**:
   ```bash
   npm run build
   ```

---

## 🌐 GitHub Pages (github.io) ile Yayınlama Rehberi

Bu projeyi **GitHub Pages** üzerinde ücretsiz olarak canlıya almak için iki pratik yöntemden birini tercih edebilirsiniz:

### Yöntem A: GitHub Actions (En Modern ve Önerilen Yöntem)
Herhangi bir yerel bağımlılık eklemeden, depoya push yaptığınızda otomatik derleme ve yayınlama yapmasını sağlar:

1. Proje ana dizininde `.github/workflows/deploy.yml` dosyasını oluşturun ve aşağıdaki kodları ekleyin:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main  # Hangi branch'e push yapıldığında tetikleneceği

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./build  # Vite build çıktı klasörü
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
2. GitHub depo ayarlarınızdan (Settings -> Pages -> Build and deployment) kaynak olarak **"GitHub Actions"** seçeneğini işaretleyin.
3. Değişiklikleri push ettiğinizde portföyünüz `https://<kullanici-adiniz>.github.io/<repo-adiniz>/` adresinde canlıya geçecektir.

### Yöntem B: `gh-pages` Paketini Kullanarak Yayınlama
Yerel terminalinizden manuel olarak yayınlamak isterseniz:

1. Bağımlılığı projenize ekleyin:
   ```bash
   npm install gh-pages --save-dev
   ```
2. [vite.config.ts](file:///c:/Users/myPC/OneDrive/Masaüstü/web-lab-hello/vite.config.ts) dosyasındaki `base` parametresini şu şekilde ayarlayın (yayınlanacağı alt klasör adı ile eşleşmelidir):
   ```typescript
   export default defineConfig({
     base: '/web-lab-hello/', // Depo adınız
     // ...diğer ayarlar
   })
   ```
3. `package.json` dosyanızın `scripts` alanına aşağıdaki komutları ekleyin:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Terminalden yayına almak için komutu çalıştırın:
   ```bash
   npm run deploy
   ```
   *Bu komut projeyi derleyecek ve otomatik olarak `gh-pages` adında bir branch oluşturup derlenen dosyaları oraya yükleyecektir.*
5. GitHub depo ayarlarından (Settings -> Pages) kaynak olarak **"Deploy from a branch"** seçip branch olarak **"gh-pages"** seçin.
