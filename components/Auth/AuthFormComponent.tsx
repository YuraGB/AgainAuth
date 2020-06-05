/**
 * The Auth component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";

import authStyles from './Auth.module.css';
import {useRef} from "react";
import SocialsComponent from "../Socials/SocialsComponent";

/**
 * AuthFormComponent
 *
 * @return {*} JSXComponent
 */
const AuthFormComponent = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm();
    const ref = useRef(null);

    const onSubmit = () => {
        if (ref !== null) {
            (ref.current as any).submit();
        }
    };

    return (
        <article>
            <section className={authStyles.Auth}>
                <Typography variant="h4" align='center' >
                    Only trusted user
                </Typography>
                <form
                    className={authStyles.root}
                    method='post'
                    ref={ref}
                    autoComplete="off"
                    action='/register'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        id="user-auth"
                        name='name'
                        inputRef={register({required: true})}
                        label="Visitor"
                        autoFocus={true}
                        placeholder={'email or name'}
                    />
                    {errors.name && <span className={authStyles.error}>'This field is required.'</span>}
                    <TextField
                        id="user-auth"
                        name='password'
                        inputRef={register({required: true})}
                        label="Password"
                        autoFocus={true}
                        placeholder={'password'}
                    />
                    {errors.name && <span className={authStyles.error}>'This field is required.'</span>}

                    <SocialsComponent/>

                    <div className={authStyles.actions}>
                        <Button
                            size="small"
                            variant="outlined"
                            type='submit'
                            color={'primary'}>
                            Submit
                        </Button>
                    </div>
                </form>
            </section>
        </article>
    )
};

export default AuthFormComponent;