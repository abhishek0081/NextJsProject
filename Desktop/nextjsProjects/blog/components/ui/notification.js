import ReactDOM from 'react-dom';
import classes from './notification.module.css';
import { useContext } from 'react';
import NotificationContext from '../../utilities/NotificationContext';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ),document.getElementById("notifications"));
}

export default Notification;
