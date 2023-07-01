/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Users {
    int: string;
    name: string;
    lastName: string;
    email: string;
    birthDate: DateTime;
    country: string;
    lookingForWork?: Nullable<boolean>;
    profileImage?: Nullable<string>;
    githubUser: string;
    roles: string[];
    level?: Nullable<string>;
    experiences: string[];
    technologies: string[];
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract getProfile(): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class IMutation {
    abstract registerUser(): string | Promise<string>;
}

export type DateTime = any;
type Nullable<T> = T | null;
