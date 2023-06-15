import type * as AWS from '@aws-sdk/client-s3';
import type { CollectionConfig } from 'payload/types';
import type { HandleUpload } from '../../types';
interface Args {
    collection: CollectionConfig;
    bucket: string;
    acl?: 'private' | 'public-read';
    prefix?: string;
    getStorageClient: () => AWS.S3;
}
export declare const getHandleUpload: ({ getStorageClient, bucket, acl, prefix, }: Args) => HandleUpload;
export {};
