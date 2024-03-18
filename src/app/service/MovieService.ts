import { RequestOptions, apiRequest } from './ApiRequest';


export const getMovieById = async (id: string) => {

    return await apiRequest(`movies/${id}`);
}