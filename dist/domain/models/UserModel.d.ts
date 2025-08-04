import mongoose from 'mongoose';
declare const User: mongoose.Model<{
    createdAt?: NativeDate | null;
    updatedAt?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: string | null;
    birthDate?: NativeDate | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt?: NativeDate | null;
    updatedAt?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: string | null;
    birthDate?: NativeDate | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    createdAt?: NativeDate | null;
    updatedAt?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: string | null;
    birthDate?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt?: NativeDate | null;
    updatedAt?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: string | null;
    birthDate?: NativeDate | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt?: NativeDate | null;
    updatedAt?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: string | null;
    birthDate?: NativeDate | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    createdAt?: NativeDate | null;
    updatedAt?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: string | null;
    birthDate?: NativeDate | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=UserModel.d.ts.map