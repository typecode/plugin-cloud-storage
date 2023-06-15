import type { Adapter } from '../../types';
export interface Args {
    connectionString: string;
    containerName: string;
    baseURL: string;
    allowContainerCreate: boolean;
}
export declare const azureBlobStorageAdapter: ({ connectionString, allowContainerCreate, containerName, baseURL, }: Args) => Adapter;
