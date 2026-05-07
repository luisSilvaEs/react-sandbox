/**
 * Create a cookie, e.g. output: 'theme=dark; expires Thu, 18 Dec 2013 12:00:00 UTC'
 * @param name e.g.: 'theme'
 * @param value e.g.: 'dark'
 * @param days (optional) number of days until the cookie expires. If not provided or 0, the cookie will last for the session only
 * @param path (optional) the path the cookie applies to. Defaults to '/' which makes it available across the whole app
 *  
 */
export const setCookie = (name: string, value: string, days?: number, path?: string): void => {
    const expirationDate = days ? `; expires=${new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()}` : '';
    const cookiePath = path && path !== "" ? `; path=${path}` : "; Path=/"
    document.cookie = `${name}=${value}${expirationDate}${cookiePath}`;
}

export const getCookie = (name: string): string | null => {
    // The cookie we are looking for, e.g. "theme="
    const searchedCookie = name + "=";

    // decodeURIComponent converts encoded characters back to their original form
    // e.g. "%3B" becomes ";", "%20" becomes " ", ensuring we can read the value correctly
    const decodedCookie = decodeURIComponent(document.cookie);

    // document.cookie returns all cookies as a single string like "theme=dark; lang=en; visits=3"
    // splitting by ";" gives us an array of individual cookies
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        // trim() removes any leading/trailing spaces that may appear after the ";" separator
        const cookie = cookieArray[i].trim();

        // indexOf === 0 means the cookie string starts with our searched name
        if (cookie.indexOf(searchedCookie) === 0) {
            // extract only the value part, skipping past "name="
            return cookie.substring(searchedCookie.length, cookie.length);
        }
    }

    // return null explicitly when the cookie does not exist
    return null;
};

/**
 * Setting the expiration to January 1, 1970 (the Unix epoch) is the standard way to delete a cookie
 * @param name name of the cookie to delete
 */
export const deleteCookie = (name: string) : void => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}