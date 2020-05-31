/**
 * The Auth component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import {SocialMediaIconsReact} from 'social-media-icons-react';

import authStyles from './Auth.module.css';
import {useRef} from "react";

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
                    Login in
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
                        label="Passport"
                        autoFocus={true}
                        placeholder={'passport'}
                    />
                    {errors.name && <span className={authStyles.error}>'This field is required.'</span>}

                    <div className={authStyles.socials}>
                        <SocialMediaIconsReact icon="facebook" iconSize={32} url="/facebook"/>
                        <SocialMediaIconsReact icon="linkedin" iconSize={32} url="/linkedin"/>
                        <SocialMediaIconsReact icon="github" iconSize={32} url="/github"/>
                        <SocialMediaIconsReact icon="googleplus" iconSize={32} url="/google"/>
                    </div>


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