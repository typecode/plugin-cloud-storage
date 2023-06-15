import { Storage } from '@google-cloud/storage';
import type { HandleDelete } from '../../types';
interface Args {
    getStorageClient: () => Storage;
    bucket: string;
}
export declare const getHandleDelete: ({ getStorageClient, bucket }: Args) => HandleDelete;
export {};
