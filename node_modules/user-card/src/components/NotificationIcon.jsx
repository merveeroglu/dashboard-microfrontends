import { Badge, NotificationIconWrapper } from './StyledComponents';

const NotificationIcon = ({ count, onClick }) => (
  <NotificationIconWrapper onClick={onClick} title="Bildirimler">
    <span role="img" aria-label="bell">🔔</span>
    {count > 0 && <Badge>{count}</Badge>}
  </NotificationIconWrapper>
);

export default NotificationIcon;
