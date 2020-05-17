import * as apid from '../../../../api';

export interface EncodeRecordedIdIndex {
    [recordedId: number]: {
        encodeId: apid.EncodeId;
        name: string;
    }[];
}

export default interface IEncodeManageModel {
    push(addOption: apid.AddEncodeProgramOption): Promise<apid.EncodeId>;
    cancel(encodeId: apid.EncodeId): Promise<void>;
    getRecordedIndex(): EncodeRecordedIdIndex;
    cancelEncodeByRecordedId(recordedId: apid.RecordedId): Promise<void>;
}
