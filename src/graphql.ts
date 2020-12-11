
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewMessage {
    recipientId: string;
    senderId: string;
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

export class NewVideo {
    title: string;
    url: string;
    userId: string;
}

export class Message {
    senderId: string;
    recipientId: string;
    text: string;
}

export abstract class IMutation {
    abstract sendMessage(input: NewMessage): Message | Promise<Message>;

    abstract createUser(input: NewUser): User | Promise<User>;

    abstract createVideo(input: NewVideo): Video | Promise<Video>;
}

export abstract class IQuery {
    abstract getMessage(senderId: string): Message[] | Promise<Message[]>;

    abstract getUserById(input?: UserId): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract videos(): Video[] | Promise<Video[]>;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class Video {
    id: string;
    title: string;
    url: string;
    author: Author;
}

export class Author {
    id: string;
    name: string;
}
