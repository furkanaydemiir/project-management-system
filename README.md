# Proje Yönetim Sistemi - Admin Dashboard

Bu proje, ekiplerin ve projelerin verimli bir şekilde yönetilmesini sağlayan, React ve Redux Toolkit kullanılarak geliştirilmiş modern bir **admin dashboard** uygulamasıdır. Kullanıcılar yeni projeler oluşturabilir, ekipler kurabilir ve projelerin ilerlemesini takip edebilir.

## 🚀 Özellikler

-   **Dashboard:** Genel bakış ve ana sayfa yönetimi.
-   **Proje Yönetimi:** Yeni projeler oluşturma ve mevcut projeleri listeleme.
-   **Ekip Yönetimi:**
    -   Yeni ekipler oluşturma.
    -   Ekip detaylarını görüntüleme.
    -   Ekip bilgilerini güncelleme (Adjust Team).
    -   Ekip silme.
-   **Atama (Assign):** Projelerin veya görevlerin ekiplere atanması.
-   **Devam Eden Projeler (On-Going):** Aktif projelerin takibi.
-   **Modern UI:** Material UI (MUI) ile şık ve kullanıcı dostu arayüz.
-   **Bildirimler:** Sonner kütüphanesi ile etkileşimli geri bildirimler.
-   **Veri Kalıcılığı:** Veriler tarayıcının `localStorage` alanında saklanır, böylece sayfa yenilendiğinde kaybolmaz.

## 🛠️ Kullanılan Teknolojiler

-   **Frontend:** [React 19](https://react.dev/)
-   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
-   **Routing:** [React Router DOM v7](https://reactrouter.com/)
-   **UI Framework:** [Material UI (MUI)](https://mui.com/)
-   **Form Yönetimi:** [React Hook Form](https://react-hook-form.com/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Bildirim:** [Sonner](https://sonner.emilkowal.ski/)

## 📦 Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**
    ```bash
    git clone [repo-url]
    cd project-management
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı geliştirme modunda başlatın:**
    ```bash
    npm run dev
    ```

4.  **Tarayıcıda görüntüleyin:**
    Yerel sunucu başladıktan sonra terminalde belirtilen adresi (genellikle `http://localhost:5173`) ziyaret edin.

## 📂 Dosya Yapısı

```text
src/
├── component/    # Yeniden kullanılabilir bileşenler
├── layout/       # Sayfa düzenleri (MainLayout, TeamLayout)
├── pages/        # Uygulama sayfaları (Home, Teams, CreateProject, vb.)
├── redux/        # Redux store ve slice yapılandırmaları
├── App.jsx       # Ana uygulama ve yönlendirme tanımları
└── main.jsx      # Giriş noktası
```

## 📜 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
