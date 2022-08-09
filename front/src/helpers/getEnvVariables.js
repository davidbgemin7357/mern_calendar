export const getEnvVariables = () => {
    // obteniendo las variables de entorno:
    // al correr npm run build genera error, por eso comentamos la siguiente línea:
    // import.meta.env;
  
    return {
        // * para correr npm run build:
        VITE_API_URL: import.meta.env.VITE_API_URL
        // ...import.meta.env
    }
}