import mongoose, { Document } from 'mongoose';
export interface Iuser extends Document {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    playlist: string[];
}
export declare const User: mongoose.Model<Iuser, {}, {}, {}, Document<unknown, {}, Iuser, {}, mongoose.DefaultSchemaOptions> & Iuser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, Iuser>;
//# sourceMappingURL=model.d.ts.map