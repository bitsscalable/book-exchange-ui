export class Notification{
    severity : NotificationType | undefined;
    summary : string | any;
    detail : String | any;
}

export enum NotificationType{
    success='success',
    error='error',
    info='info',
    warn='warn'
}