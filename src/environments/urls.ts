const auth="https://interviewcrack-auth.herokuapp.com/validate";

export const AuthUrls={
    validateAccessTokens:`${auth}/token`,
    getNewTokens:`${auth}/refresh`
}