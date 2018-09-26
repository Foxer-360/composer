import { deepCopy } from '@source/utils';
import * as createHash from 'object-hash';

interface IStorageProperty {
  name: string;
  hash: string;
  updates: number;
  data: any; // tslint:disable-line:no-any
}

interface IStorage {
  [property: string]: IStorageProperty;
}

/**
 * Context class. This is something like data stream used in Composer to
 * handle context data and plugin data, etc.
 */
class Context {

  private properties: string[];

  private storage: IStorage;

  constructor() {
    this.properties = [] as string[];
    this.storage = {} as IStorage;
  }

  public addListener() {
    // ToDo
  }

  public removeListener() {
    // ToDo
  }

  /**
   * Just returns hash of given property or null, if property doesn't exists
   *
   * @param {string} property name
   * @return {string | null}
   */
  public getHashOfProperty(property: string): string | null {
    if (!this.isPropertyExists(property)) {
      return null;
    }

    return this.storage[property].hash;
  }

  /**
   * Simple read data from given property. If property doesn't exists, returns
   * undefined.
   *
   * @param  {string} property name
   * @return {any} returns undefined if doesn't exists
   */
  public readProperty(property: string): any | undefined { // tslint:disable-line:no-any
    if (!this.isPropertyExists(property)) {
      return undefined;
    }

    return this.storage[property].data;
  }

  /**
   * Simply write property into storage. This property can be anything
   * (string, number, object, array)
   *
   * @param {string} property name
   * @param {any} data which you want to store
   * @return {void}
   */
  public writeProperty(property: string, data: any): void { // tslint:disable-line:no-any
    const hash = createHash(data);
    let storageProperty: IStorageProperty;
    if (!this.isPropertyExists(property)) {
      storageProperty = {
        hash,
        name: property,
        updates: 0,
      } as IStorageProperty;
    } else {
      storageProperty = this.storage[property];
      storageProperty.hash = hash;
      storageProperty.updates++;

      if (typeof data === 'object') {
        storageProperty.data = deepCopy(data);
      } else if (Array.isArray(data)) {
        storageProperty.data = [ ...data ];
      } else {
        storageProperty.data = data;
      }
    }

    this.storage[property] = storageProperty;
  }

  /**
   * Check if given propery exists in context.
   *
   * @param {string} property name
   * @return {boolean} true if exists
   */
  public isPropertyExists(property: string): boolean {
    const index = this.properties.indexOf(property);
    return index >= 0;
  }

}

export {
  Context,
};
