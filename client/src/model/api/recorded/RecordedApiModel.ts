import { inject, injectable } from 'inversify';
import * as apid from '../../../../../api';
import IRepositoryModel from '../IRepositoryModel';
import IRecordedApiModel from './IRecordedApiModel';

@injectable()
export default class RecordedApiModel implements IRecordedApiModel {
    private repository: IRepositoryModel;

    constructor(@inject('IRepositoryModel') repository: IRepositoryModel) {
        this.repository = repository;
    }

    /**
     * 録画情報の取得
     * @param option: GetRecordedOption
     * @return Promise<apid.Records>
     */
    public async gets(option: apid.GetRecordedOption): Promise<apid.Records> {
        const result = await this.repository.get('/recorded', {
            params: option,
        });

        return <any>result.data;
    }

    /**
     * 指定した recorded id の録画情報を取得する
     * @param recordedId: apid.RecordedId
     * @param isHalfWidth: boolean 半角で取得するか
     * @return Promise<apid.RecordedItem>
     */
    public async get(recordedId: apid.RecordedId, isHalfWidth: boolean): Promise<apid.RecordedItem> {
        const result = await this.repository.get(`/recorded/${recordedId.toString(10)}`, {
            params: {
                isHalfWidth: isHalfWidth,
            },
        });

        return <any>result.data;
    }

    /**
     * 録画番組の削除
     * @param recordedId: RecordedId
     * @return Promise<void>
     */
    public async delete(recordedId: apid.RecordedId): Promise<void> {
        await this.repository.delete(`/recorded/${recordedId}`);
    }

    /**
     * エンコードの停止
     * @param recordedId: apid.RecordedId
     * @return Promise<void>
     */
    public async stopEncode(recordedId: apid.RecordedId): Promise<void> {
        await this.repository.delete(`/recorded/${recordedId}/encode`);
    }
}
