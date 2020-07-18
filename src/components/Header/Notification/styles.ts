import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

interface BadgeProps {
  hasUnread: boolean;
}
interface NotificationProps {
  unread: boolean;
}

interface NotificationListProps {
  visible: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button<BadgeProps>`
  background: none;
  border: 0;
  position: relative;
  cursor: pointer;
  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 300px;
  padding: 5px 15px;
`;

export const NotificationList = styled.div<NotificationListProps>`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 20px);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Notification = styled.div<NotificationProps>`
  color: #fff;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
    margin-bottom: 10px;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    cursor: pointer;
  }
  /* ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 10px;
      }
    `} */
`;
