import React from "react";
import user from "../data/user"


function Links({github,linkedin}){
    return(
        <>
        <h3>Links</h3>
        <a href="{github}">{user.links.github}</a>
        <a href="{linkedin}">{user.links.linkedin}</a>
        </>
    )
}
export default Links;