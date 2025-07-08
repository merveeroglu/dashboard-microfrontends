import React, { useState } from "react";
import styled from "styled-components";
import useAppStore from "../../../shell/src/store/useAppStore";

const Card = styled.div`
  min-width: 270px;
  min-height: 440px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 40px 24px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 880px) {
    min-height: 443px;
  }
  @media (max-width: 768px) {
    min-width: 350px;
    min-height: auto;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #cc9b9b;
`;

const Name = styled.h2`
  font-size: 1.6rem;
  margin: 20px 0 0;
  color: #222;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  font-size: 1rem;
  color: #555;
  margin: 6px 0;
  width: 100%;
  text-align: center;
  user-select: text;
`;

const NotificationIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 26px;
  color: #007bff;
  user-select: none;
`;

const Badge = styled.span`
  background: red;
  color: #fff;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 14px;
  position: absolute;
  top: -8px;
  right: -8px;
  font-weight: 700;
  pointer-events: none;
`;

const NotificationPopup = styled.div`
  position: absolute;
  top: 60px;
  right: 15px;
  width: 280px;
  max-height: 300px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  padding: 15px;
  overflow-y: auto;
  z-index: 20;
`;

const NotificationItem = styled.div`
  font-size: 0.9rem;
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;
const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #dc3545;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: #a71d2a;
  }
`;

const DismissButton = styled.button`
  background: #007bff;
  border: none;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const ClearButton = styled(DismissButton)`
  margin-top: 80px;
  width: 80%;
`;

const UserCard = () => {
  const {
    user,
    notifications,
    unreadCount,
    clearNotifications,
    removeNotification,
  } = useAppStore();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  return (
    <Card>
      {/* Notification Count */}
      <NotificationIcon onClick={toggleNotifications}>
        🔔
        {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
      </NotificationIcon>

      {/* Info */}
      <Avatar src={user.avatar} alt="User Avatar" />
      <Name>{user.name}</Name>

      {user.contact.map((item, i) => (
        <ContactInfo key={i}>
          <strong>{item.type}:</strong> {item.value}
        </ContactInfo>
      ))}

      {/* Notification */}
      {showNotifications && (
        <NotificationPopup>
          {notifications.length > 0 ? (
            <>
              {notifications.map((note) => (
                <NotificationItem key={note.id}>
                  <span>{note.message}</span>
                  <DeleteButton onClick={() => removeNotification(note.id)}>
                    ×
                  </DeleteButton>
                </NotificationItem>
              ))}
              <DismissButton
                onClick={() => {
                  clearNotifications();
                  setShowNotifications(false);
                }}
              >
                Tüm Bildirimleri Temizle
              </DismissButton>
            </>
          ) : (
            <NotificationItem>Bildirim yok.</NotificationItem>
          )}
        </NotificationPopup>
      )}

      {/* Notification Clear Button */}
      <ClearButton onClick={clearNotifications}>
        Tüm Bildirimleri Temizle ({unreadCount})
      </ClearButton>
    </Card>
  );
};

export default UserCard;
