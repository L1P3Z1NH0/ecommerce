import type { UserGender } from "../../domain/entities/User.js";
export interface CreateUserDTO {
    name: string;
    email: string;
    gender: UserGender;
    birthDate: Date;
    password: string;
    confirmPassword: string;
}
//# sourceMappingURL=CreateUserDTO.d.ts.map