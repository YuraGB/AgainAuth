/**
 * The 404 page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";
import Index from "../hoc/Layout";
import CompCustom404 from "../components/404/Custom404";

export default function Custom404() {
    return (
        <Index>
            <CompCustom404 />
        </Index>
    )
}