import type { Storage } from '@google-cloud/storage';
import type { CollectionConfig } from 'payload/types';
import type { HandleUpload } from '../../types';
interface Args {
    collection: CollectionConfig;
    bucket: string;
    acl?: 'Private' | 'Public';
    prefix?: string;
    getStorageClient: () => Storage;
}
export declare const getHandleUpload: ({ getStorageClient, bucket, acl, prefix, }: Args) => HandleUpload;
export {};
