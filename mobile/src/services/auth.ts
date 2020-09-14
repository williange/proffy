export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'as6d516q5w13a2sd1adq',
                user: {
                    name: 'teste',
                    email: 'lpansarini@gmail.com',
                }
            })
        }, 2000)
    })
}