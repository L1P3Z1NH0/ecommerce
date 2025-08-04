import type { ObjectId } from "mongodb";
export type UserGender = 'male' | 'female' | 'other';
export type UserProps = {
    _id?: ObjectId;
    name: string;
    email: string;
    password: string;
    gender: UserGender;
    birthDate: Date;
};
export interface IUser {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    gender: UserGender;
    birthDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class User implements Omit<IUser, '_id' | 'createdAt' | 'updatedAt'> {
    readonly _id?: ObjectId;
    name: string;
    email: string;
    password: string;
    gender: UserGender;
    birthDate: Date;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    constructor(props: UserProps);
}
//# sourceMappingURL=User.d.ts.map