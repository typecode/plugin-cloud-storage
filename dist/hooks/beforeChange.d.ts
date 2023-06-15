import type { TypeWithID } from 'payload/dist/collections/config/types';
import type { FileData } from 'payload/dist/uploads/types';
import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload/types';
import type { GeneratedAdapter } from '../types';
interface Args {
    collection: CollectionConfig;
    adapter: GeneratedAdapter;
}
export declare const getBeforeChangeHook: ({ collection, adapter }: Args) => CollectionBeforeChangeHook<FileData & TypeWithID>;
export {};
