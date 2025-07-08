# Proje Kurulum ve Geliştirme Dokümantasyonu

## Kurulum Adımları
1. **Projeyi klonlayın:**
   ```bash
   git clone <repo-link>
   cd dashboard-microfrontends
   ```
2. **Ana dizinde bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Her bir modül için bağımlılıkları yükleyin:**
   ```bash
   cd packages/shell && npm install
   cd ../user-card && npm install
   cd ../content-bar && npm install
   ```

## Development Server Başlatma
Her modül için ayrı ayrı development server başlatılmalıdır:

- **User Card:**
  ```bash
  cd packages/user-card
  npm run build
  npm run preview
  ```
- **Content Bar:**
  ```bash
  cd packages/content-bar
  npm run build
  npm run preview
  ```
  - **Shell:**
  ```bash
  cd packages/shell
  npm run dev
  ```

## Build Alma Süreçleri
Her modül için ayrı ayrı build alınır:

- **Shell:**
  ```bash
  cd packages/shell
  npm run build
  ```
- **User Card:**
  ```bash
  cd packages/user-card
  npm run build
  ```
- **Content Bar:**
  ```bash
  cd packages/content-bar
  npm run build
  ```

## Deployment Talimatları
- Her modülün build çıktısı kendi `dist` klasöründe oluşur.
- Statik sunucuya veya CDN'e yükleyebilirsiniz.
- Shell uygulaması, remote modülleri doğru adreslerden yükleyebilmelidir (vite.config.js dosyalarındaki remoteEntry.js URL'lerini güncellemeyi unutmayın).

## Troubleshooting
- **Port Çakışması:** Her modül farklı portta çalışmalı. Portlar çakışırsa, ilgili modülün `vite.config.js` dosyasından portu değiştirin.
- **Remote Modül Yüklenemiyor:** RemoteEntry.js adreslerinin doğru olduğundan emin olun.
- **Bağımlılık Hataları:** Her modülde bağımlılıkların yüklü olduğundan emin olun (`npm install`). 