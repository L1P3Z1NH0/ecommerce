import type { UserGender } from "../../domain/entities/User";

export interface CreateUserDTO {
  name: string;
  email: string;
  gender: UserGender;
  birthDate: Date;
  password: string;
  confirmPassword: string;
}
