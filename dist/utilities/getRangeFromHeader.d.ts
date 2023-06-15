import type { BlockBlobClient } from '@azure/storage-blob';
declare const getRangeFromHeader: (blockBlobClient: BlockBlobClient, rangeHeader?: string) => Promise<{
    start: number;
    end: number | undefined;
}>;
export default getRangeFromHeader;
