
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class FindChatInput {
    senderId: string;
    recipientId: string;
}

export class NewChatInput {
    senderId: string;
    recipientId: string;
}

export class NewMessage {
    chatId: string;
    text: string;
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

export class NewChat {
    senderId: string;
    recipientId: string;
}

export class Chat {
    id: string;
    senderId: string;
    recipientId: string;
}

export abstract class IMutation {
    abstract createChat(input: NewChatInput): Chat | Promise<Chat>;

    abstract sendMessage(input: NewMessage): Message | Promise<Message>;

    abstract createUser(input: NewUser): boolean | Promise<boolean>;

    abstract userSignIn(input?: UserSignInInput): SignInPayload | Promise<SignInPayload>;
}

export abstract class IQuery {
    abstract findChat(input?: FindChatInput): Chat | Promise<Chat>;

    abstract getMyChats(token: string): Chat[] | Promise<Chat[]>;

    abstract getMessages(chatId?: string): Message[] | Promise<Message[]>;

    abstract getUserById(input?: UserId): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract me(): User | Promise<User>;
}

export class Message {
    chatId: string;
    text: string;
    date: string;
    from: string;
    to: string;
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

export class SignInPayload {
    id: string;
    userName: string;
    token: string;
}
