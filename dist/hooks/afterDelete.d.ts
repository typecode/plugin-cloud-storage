import type { TypeWithID } from 'payload/dist/globals/config/types';
import type { FileData } from 'payload/dist/uploads/types';
import type { CollectionAfterDeleteHook, CollectionConfig } from 'payload/types';
import type { GeneratedAdapter, TypeWithPrefix } from '../types';
interface Args {
    collection: CollectionConfig;
    adapter: GeneratedAdapter;
}
export declare const getAfterDeleteHook: ({ collection, adapter, }: Args) => CollectionAfterDeleteHook<FileData & TypeWithID & TypeWithPrefix>;
export {};
