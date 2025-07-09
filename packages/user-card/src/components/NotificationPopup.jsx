import {
  NotificationPopupWrapper,
  NotificationItem,
  DeleteButton,
  DismissButton,
} from "./StyledComponents";

export default function NotificationPopup({
  notifications,
  onClear,
  onDelete,
}) {
  return (
    <NotificationPopupWrapper>
      {notifications.length > 0 ? (
        <>
          {notifications.map((note) => (
            <NotificationItem key={note.id}>
              <span>{note.message}</span>
              <DeleteButton onClick={() => onDelete(note.id)}>×</DeleteButton>
            </NotificationItem>
          ))}
          <DismissButton onClick={onClear}>
            Tüm Bildirimleri Temizle
          </DismissButton>
        </>
      ) : (
        <NotificationItem>Bildirim yok.</NotificationItem>
      )}
    </NotificationPopupWrapper>
  );
}
