/**
 * Context class. This is something like data stream used in Composer to
 * handle context data and plugin data, etc.
 */
declare class Context {
    private properties;
    private storage;
    constructor();
    addListener(): void;
    removeListener(): void;
    /**
     * Just returns hash of given property or null, if property doesn't exists
     *
     * @param {string} property name
     * @return {string | null}
     */
    getHashOfProperty(property: string): string | null;
    /**
     * Simple read data from given property. If property doesn't exists, returns
     * undefined.
     *
     * @param  {string} property name
     * @return {any} returns undefined if doesn't exists
     */
    readProperty(property: string): any | undefined;
    /**
     * Simply write property into storage. This property can be anything
     * (string, number, object, array)
     *
     * @param {string} property name
     * @param {any} data which you want to store
     * @return {void}
     */
    writeProperty(property: string, data: any): void;
    /**
     * Check if given propery exists in context.
     *
     * @param {string} property name
     * @return {boolean} true if exists
     */
    isPropertyExists(property: string): boolean;
}
export { Context, };
