import type { ObjectId } from "mongodb";

export type UserGender = 'male' | 'female' | 'other'

export type UserProps = {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  gender: UserGender;
  birthDate: Date;
}

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

export class User implements Omit<IUser, '_id' | 'createdAt' | 'updatedAt'> {
  public readonly _id?: ObjectId;
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public gender: UserGender;
  public birthDate: Date = new Date();
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.gender = props.gender;
    this.birthDate = props.birthDate;

    if (!props?._id) {
      this.createdAt = new Date();
      this.updatedAt = new Date();
    } else {
      this._id = props._id;
      this.updatedAt = new Date();
    }
  }
}
