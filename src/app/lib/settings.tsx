export const getAppSettings = (): Promise<{ theme: string; language: string}> =>
return new Promise((resolve) => {
    resolve({
        theme: 'dark',
        language: 'en',


        export const getUserInfo = (): Promise<{
            name: string;
            email: string;
            age: number;
        }> => {
            return new Promise((resolve) => {
                name: 'John Doe',
                email: 'John@.com'
                age: 30,
            });
        }, 1000);
        }
    });
});

export async function getUserById(id: string): Promise<User> => {
    const response = await fetch
}