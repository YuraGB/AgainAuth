/**
 * The User schema
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
   name: {
       type: String,
       required: true
   },

   password: {
       type: String
   },
    salt: String,
    hash: String
});

UsersSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(
        password,
        this.salt,
        10000,
        512,
        'sha512')
    .toString('hex');
};

UsersSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password,
        this.salt, 10000,
        512,
        'sha512')
    .toString('hex');

    return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
};

UsersSchema.methods.toAuthJSON = function() {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT(),
    };
};

export default mongoose.model('User', UsersSchema);