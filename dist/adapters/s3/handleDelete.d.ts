import type * as AWS from '@aws-sdk/client-s3';
import type { HandleDelete } from '../../types';
interface Args {
    getStorageClient: () => AWS.S3;
    bucket: string;
}
export declare const getHandleDelete: ({ getStorageClient, bucket }: Args) => HandleDelete;
export {};
