import { ILooseObject } from '../types';
import { Context } from './context';
/**
 * Simple method to deep copy some object
 *
 * @param {ILooseObject} object which will be copied
 * @return {ILooseObject} copied object
 */
declare const deepCopy: (object: ILooseObject) => ILooseObject;
/**
 * Simple method to compare deeply two objects
 *
 * @param {ILooseObject} a first object
 * @param {ILooseObject} b second object
 * @return {boolean} true if these objects are the same
 */
declare const deepEqual: (a: ILooseObject, b: ILooseObject) => boolean;
/**
 * !! DANGER !! This is method for Media Library, to get url of given image.
 * Move configuration of this address to some config file !
 *
 * @param {ILooseObject} data
 */
declare const getImgUrl: (data: ILooseObject) => string;
export { Context, deepCopy, deepEqual, getImgUrl, };
