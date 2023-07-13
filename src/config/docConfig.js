import __dirname from "../utils/index.js"
import swaggerJSDoc from "swagger-jsdoc";

const PORT = 8080;


const swaggerOptions ={
    definition: {
        openapi: "3.0.1",
        info:{
            title:"documentacion de app mascotas",
            description:"api rest para gestionar adopciones de mascotas",
            version:"1.0.0"
        },
       // servers:[{url:`http://localhost:${PORT}`}], // servidores que vamos a documentar
    },
    apis:[`${__dirname}/docs/**/*.yaml`],//archivos que contienen la documentacion de las rutas
}

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
