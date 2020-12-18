
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewMessage {
    senderId: string;
    text: string;
    senderName: string;
}

export class NewUser {
    name: string;
    email: string;
    password: string;
}

export class UserId {
    id: string;
}

export class UserSignInInput {
    email: string;
    password: string;
}

export class Message {
    senderId: string;
    text: string;
    date: string;
    senderName: string;
}

export abstract class IMutation {
    abstract sendMessage(input: NewMessage): Message | Promise<Message>;

    abstract createUser(input: NewUser): User | Promise<User>;

    abstract userSignIn(input?: UserSignInInput): UserPayload | Promise<UserPayload>;
}

export abstract class IQuery {
    abstract getMessages(senderId?: string): Message[] | Promise<Message[]>;

    abstract getUserById(input?: UserId): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export abstract class ISubscription {
    abstract newMessage(): Message | Promise<Message>;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    salt: string;
}

export class UserPayload {
    id: string;
    userName: string;
}
