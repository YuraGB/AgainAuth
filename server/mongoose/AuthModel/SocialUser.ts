/**
 * The Social User schema
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IUserDoc extends mongoose.Document {
    id: string,
    name: string,
    email: string,
    picture?: string,
    social: string,
    _createdAt: Date,
    _updatedAt: Date,
}

const UsersSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    picture: String,
    social: String,
    _createdAt: Date,
    _updatedAt: Date,
});

export default mongoose.model<IUserDoc>('SocialUser', UsersSchema);