export interface IBaseStorage<T> {
    getAll(): Promise<T[]>;

    getById(id: string): Promise<T | null>;

    create(item: T): Promise<void>;

    update(item: T): Promise<void>;

    delete(id: string): Promise<void>;
}