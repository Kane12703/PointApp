import {routes} from '../../../constants';
import { Screen } from '../../../types/common';
import Notification from './Notification';
import AllNotification from './Notification/all notification';
import ElectronicInvoice from './Notification/electronic invoice';

export {default as Notification} from './Notification';
export const notificationScreens: Screen[] = [
    {
        name: routes.NOTIFICATION,
        component: Notification
    },
    {
        name: routes.ALLNOTIFICATION,
        component: AllNotification
    },
    {
        name: routes.ELECTRONICINVOICE,
        component: ElectronicInvoice
    },
];
