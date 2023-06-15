import type { ContainerClient } from '@azure/storage-blob';
import type { CollectionConfig } from 'payload/types';
import type { HandleUpload } from '../../types';
interface Args {
    collection: CollectionConfig;
    getStorageClient: () => ContainerClient;
    prefix?: string;
}
export declare const getHandleUpload: ({ getStorageClient, prefix }: Args) => HandleUpload;
export {};
