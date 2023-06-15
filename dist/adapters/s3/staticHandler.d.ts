import type * as AWS from '@aws-sdk/client-s3';
import type { CollectionConfig } from 'payload/types';
import type { StaticHandler } from '../../types';
interface Args {
    getStorageClient: () => AWS.S3;
    bucket: string;
    collection: CollectionConfig;
}
export declare const getHandler: ({ getStorageClient, bucket, collection }: Args) => StaticHandler;
export {};
