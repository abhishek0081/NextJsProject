import { Fragment, useContext } from "react";
import MainNavigation from "./MainNavigation";
import Notification from "../ui/notification";
import NotificationContext from "../../utilities/NotificationContext";

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}
