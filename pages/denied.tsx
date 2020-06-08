/**
 * The Denied page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import Index from "../hoc/Layout";
import DeniedComponent from "../components/Denied/DeniedComponent";

const Denied: React.FC = (): JSX.Element => {
    return (
       <Index>
            <DeniedComponent />
       </Index>
    )
};

export default Denied;