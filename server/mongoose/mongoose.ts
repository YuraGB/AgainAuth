/**
 * The mongoose configurations
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from '../config.json';

export default () => {
    mongoose.Promise = bluebird;

    const options =  {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true
    };

    mongoose.connect(
        `mongodb+srv://${config.env.MONGO_USER}:${config.env.MONGO_PASSWORD}@cluster0-r3zwb.mongodb.net/${config.env.MONGO_DB}?retryWrites=true&w=majority`,
        options
    );

    return mongoose.connection;
};
