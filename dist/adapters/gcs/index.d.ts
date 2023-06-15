import { StorageOptions } from '@google-cloud/storage';
import type { Adapter } from '../../types';
export interface Args {
    options: StorageOptions;
    bucket: string;
    acl?: 'Private' | 'Public';
}
export declare const gcsAdapter: ({ options, bucket, acl }: Args) => Adapter;
