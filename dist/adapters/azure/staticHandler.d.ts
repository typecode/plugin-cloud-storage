import type { ContainerClient } from '@azure/storage-blob';
import type { CollectionConfig } from 'payload/types';
import type { StaticHandler } from '../../types';
interface Args {
    getStorageClient: () => ContainerClient;
    collection: CollectionConfig;
}
export declare const getHandler: ({ getStorageClient, collection }: Args) => StaticHandler;
export {};
