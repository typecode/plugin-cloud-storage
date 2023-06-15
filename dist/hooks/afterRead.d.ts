import type { ImageSize } from 'payload/dist/uploads/types';
import type { CollectionConfig, FieldHook } from 'payload/types';
import type { GeneratedAdapter, GenerateFileURL } from '../types';
interface Args {
    collection: CollectionConfig;
    adapter: GeneratedAdapter;
    disablePayloadAccessControl?: boolean;
    size?: ImageSize;
    generateFileURL?: GenerateFileURL;
}
export declare const getAfterReadHook: ({ collection, adapter, size, disablePayloadAccessControl, generateFileURL }: Args) => FieldHook;
export {};
