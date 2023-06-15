import * as AWS from '@aws-sdk/client-s3';
import type { Adapter } from '../../types';
export interface Args {
    config: AWS.S3ClientConfig;
    bucket: string;
    acl?: 'private' | 'public-read';
}
export declare const s3Adapter: ({ config, bucket, acl }: Args) => Adapter;
