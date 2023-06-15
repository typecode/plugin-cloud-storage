import type { Storage } from '@google-cloud/storage';
import type { CollectionConfig } from 'payload/types';
import type { StaticHandler } from '../../types';
interface Args {
    getStorageClient: () => Storage;
    bucket: string;
    collection: CollectionConfig;
}
export declare const getHandler: ({ getStorageClient, bucket, collection }: Args) => StaticHandler;
export {};
