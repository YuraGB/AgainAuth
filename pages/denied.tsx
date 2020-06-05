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