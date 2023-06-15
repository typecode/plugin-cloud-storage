import type { CollectionConfig } from 'payload/types';
import type { ContainerClient } from '@azure/storage-blob';
import type { HandleDelete } from '../../types';
interface Args {
    collection: CollectionConfig;
    getStorageClient: () => ContainerClient;
}
export declare const getHandleDelete: ({ getStorageClient }: Args) => HandleDelete;
export {};
