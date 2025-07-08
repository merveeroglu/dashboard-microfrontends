import { create } from 'zustand';

const useAppStore = create((set) => ({
  // Kullanıcı bilgisi
  user: {
    avatar: 'https://ui-avatars.com/api/?name=Merve+Eroglu&background=random',
    name: 'Merve Eroğlu',
    contact: [
      { type: 'Email', value: 'merve@example.com' },
      { type: 'Telefon', value: '0555 111 11 11' },
      { type: 'Adres', value: 'İstanbul/TURKIYE' },
    ],
  },

  // Bildirimler
  notifications: [
    { id: 1, message: 'Yeni mesajınız var' },
    { id: 2, message: 'Profiliniz güncellendi' },
    { id: 3, message: 'Şifreniz başarıyla değiştirildi' },
  ],

  // Okunmamış bildirim sayısı
  unreadCount: 3,

  // Setter Fonksiyonları
  setUser: (user) => set({ user }),
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, notification],
    unreadCount: state.unreadCount + 1,
  })),
  clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
  removeNotification: (id) =>
    set((state) => {
      const filtered = state.notifications.filter((n) => n.id !== id);
      return {
        notifications: filtered,
        unreadCount: filtered.length,
      };
    }),
}));

export default useAppStore;
