import axios from "axios";

export interface HttpAdapter {

    get<t>(url: string): Promise<t>

}



export class PokeApiFetchAdapter implements HttpAdapter{

    async get<t>( url: string ): Promise<t>{
        //peticion get
        console.log("con fetch");
        
        const resp = await fetch(url);
        const data : t = await resp.json()
        return  data

    }

}


export class PokeApiAdapter implements HttpAdapter{

    private readonly axios = axios;


    async get<t>( url: string ): Promise<t>{
        //peticion get
        console.log("con axios");


        const { data } = await this.axios.get<t>(url);

        return  data

    }

}