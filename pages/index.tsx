/**
 * The Auth component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import AuthFormComponent from '../components/Auth/AuthFormComponent';
import Layout from '../hoc/Layout';

/**
 * Login Page
 *
 * @return {*} JSXComponent
 */
const Login = () => {
    return (
        <Layout>
            <AuthFormComponent/>
        </Layout>
    )
};

export default Login;