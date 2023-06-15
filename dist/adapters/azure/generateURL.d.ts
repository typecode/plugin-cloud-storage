import type { GenerateURL } from '../../types';
interface Args {
    containerName: string;
    baseURL: string;
}
export declare const getGenerateURL: ({ containerName, baseURL }: Args) => GenerateURL;
export {};
