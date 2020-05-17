import * as apid from '../../../api';
import Thumbnail from '../../db/entities/Thumbnail';

export default interface IThumbnailDB {
    insertOnce(thumbnail: Thumbnail): Promise<apid.ThumbnailId>;
    deleteOnce(thumbnailId: apid.ThumbnailId): Promise<void>;
    deleteRecordedId(recordedId: apid.RecordedId): Promise<void>;
    findId(thumbnailId: apid.ThumbnailId): Promise<Thumbnail | null>;
}
