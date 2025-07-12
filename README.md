# Dashboard Microfrontends

## Proje Açıklaması
Bu proje, mikro-frontend mimarisiyle geliştirilmiş bir dashboard uygulamasıdır. Her bir modül (ör. UserCard, ContentBar, Shell) bağımsız olarak geliştirilip dağıtılabilir. Vite, React ve Module Federation teknolojileriyle modern, ölçeklenebilir ve esnek bir yapı sunar.

## Kullanılan Teknolojiler
- React 19
- Vite
- Module Federation (vite-plugin-federation)
- Styled-components
- Zustand (state management)
- ESLint

## Kullanım Örnekleri
- Kullanıcı kartı ve içerik barı gibi modüller bağımsız olarak geliştirilebilir ve shell uygulamasında entegre şekilde çalışır.
- Her modül kendi başına çalıştırılabilir veya ana shell üzerinden mikro-frontend olarak yüklenebilir.
