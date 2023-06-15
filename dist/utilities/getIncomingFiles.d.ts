import type { FileData } from 'payload/dist/uploads/types';
import type { PayloadRequest } from 'payload/types';
import type { File } from '../types';
export declare function getIncomingFiles({ req, data, }: {
    data: Partial<FileData>;
    req: PayloadRequest;
}): File[];
