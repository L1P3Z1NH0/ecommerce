
export interface IMongoRepository<T> {
  create(user: T): Promise<T>;
  findOne(query: Record<string, any>): Promise<T | null>;
  findById(id: string): Promise<T | null>;
  find(query: Record<string, any>): Promise<T[] | null>;
  update(user: T): Promise<T>;
  delete(id: string): Promise<boolean>;
}
