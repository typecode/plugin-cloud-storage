import { Storage } from '@google-cloud/storage';
import type { GenerateURL } from '../../types';
interface Args {
    getStorageClient: () => Storage;
    bucket: string;
}
export declare const getGenerateURL: ({ getStorageClient, bucket }: Args) => GenerateURL;
export {};
