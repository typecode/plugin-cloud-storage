import type { CollectionConfig, PayloadRequest } from 'payload/types';
export declare function getFilePrefix({ req, collection, }: {
    req: PayloadRequest;
    collection: CollectionConfig;
}): Promise<string>;
