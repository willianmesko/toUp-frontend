import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // const hasUnread = useMemo(
  //   () => !!notifications.find(notification => notification.read === false),
  //   [notifications],
  // );

  // useEffect(() => {
  //   async function loadNotifications() {
  //     const response = await api.get('notifications');

  //     const data = response.data.map(notification => ({
  //       ...notification,
  //       timeDistance: formatDistance(
  //         parseISO(notification.createdAt),
  //         new Date(),
  //         { addSuffix: true, locale: pt },
  //       ),
  //     }));

  //     setNotifications(data);
  //   }
  //   loadNotifications();
  // }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    // await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id
          ? { ...notification, read: true }
          : notification,
      ),
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={true}>
        <MdNotifications color="rgb(42,159,255)" size={30} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification key={2} unread={true}>
            <p>opa</p>
            <time>22</time>

            <button onClick={() => handleMarkAsRead(10)} type="button">
              Marcar como lida
            </button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
