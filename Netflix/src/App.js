import React, { useEffect } from "react";
import Api from "./Apis/Api";

const Tmdb = () => {
    useEffect(() => {
        const LoadAll = async () => {
            //pegando a lista total
            let list = await Api.getHomeList();
            console.log(list);
        }
        LoadAll();
    }, []);

        return (
            <div>
                Hola Mundo!
            </div>
        );
}

export default Tmdb;

