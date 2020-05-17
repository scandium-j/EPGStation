import Reserve from '../../db/entities/Reserve';

export interface IReserveUpdateValues {
    insert?: Reserve[];
    update?: Reserve[];
    delete?: Reserve[];
}

export default interface IReserveEvent {
    emitUpdated(diff: IReserveUpdateValues): void;
    setUpdated(callback: (diff: IReserveUpdateValues) => void): void;
}
