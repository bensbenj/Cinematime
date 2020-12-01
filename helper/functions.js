export const getPicture = (path) => {
    if(path) {
        let baseUrlPicture = "http://image.tmdb.org/t/p/w500";
        return baseUrlPicture + path;
    }
    return "http://localhost:3000/_nuxt/assets/images/logo-cinematime.png"
}