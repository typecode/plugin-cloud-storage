import type { CollectionConfig, Field } from 'payload/types';
import type { GeneratedAdapter, GenerateFileURL } from '../types';
interface Args {
    collection: CollectionConfig;
    disablePayloadAccessControl?: true;
    generateFileURL?: GenerateFileURL;
    prefix?: string;
    adapter: GeneratedAdapter;
}
export declare const getFields: ({ adapter, collection, disablePayloadAccessControl, generateFileURL, prefix, }: Args) => Field[];
export {};
