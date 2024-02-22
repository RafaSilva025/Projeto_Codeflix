export const getAppSettings = (): Promise<{ theme: string; language: string}> =>
return new Promise((resolve) => {
    resolve({
        theme: 'dark',
        language: 'en',
    });
});