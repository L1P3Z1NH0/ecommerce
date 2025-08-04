"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        this.name = '';
        this.email = '';
        this.password = '';
        this.birthDate = new Date();
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.gender = props.gender;
        this.birthDate = props.birthDate;
        if (!props?._id) {
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        else {
            this._id = props._id;
            this.updatedAt = new Date();
        }
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map