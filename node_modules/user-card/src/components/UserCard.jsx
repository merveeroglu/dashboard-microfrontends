import React, { useState } from "react";
import useAppStore from "../../../shell/src/store/useAppStore";
import { NotificationIcon, Badge, UserCardWrapper } from "./StyledComponents";
import NotificationPopup from "./NotificationPopup";
import UserInfo from "./UserInfo";

export default function UserCard() {
  // Store
  const {
    user,
    notifications,
    unreadCount,
    clearNotifications,
    removeNotification,
  } = useAppStore();
  // State
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  return (
    <UserCardWrapper>
      {/* Notification Icon */}
      <NotificationIcon onClick={toggleNotifications} title="Bildirimler">
        <span role="img" aria-label="bell">
          🔔
        </span>
        {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
      </NotificationIcon>
      {/* User Info */}
      <UserInfo user={user} />
      {/* Notifications List */}
      {showNotifications && (
        <NotificationPopup
          notifications={notifications}
          onClear={() => {
            clearNotifications();
            setShowNotifications(false);
          }}
          onDelete={removeNotification}
        />
      )}
    </UserCardWrapper>
  );
}
