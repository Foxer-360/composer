import { IContent, IOperation } from '@foxer360/delta';
import { ILooseObject } from '../../types';
import { Context } from '../../utils';
import * as React from 'react';
export interface IComponentObject {
    id: number;
    name: string;
    position: number;
    data: ILooseObject;
    plugins: string[];
}
export interface IAddComponentObject {
    id?: number;
    name: string;
    position?: number;
    data: ILooseObject;
    parent?: string;
}
export interface IComponentsServiceLikeClass {
    getAllowedTypes(): string[];
    getComponent(type: string): typeof React.Component;
    getComponentResource(type: string): ILooseObject;
    getForm(type: string): typeof React.Component;
}
export interface IPluginServiceLikeClass {
    getPluginTabName(name: string): string;
    getPluginComponent(name: string): typeof React.Component;
    getPlugin(name: string): any;
}
export interface IData {
    content: IContent;
    plugins: ILooseObject;
}
export interface IEditorInfo {
    id: string;
    name?: string;
    icon?: string;
}
export interface ILockInfo {
    id: number;
    editorId: string;
}
export interface IProperties {
    onSave?: (data: IData) => void;
    onCancel?: () => void;
    onTabChange?: () => void;
    onComponentStartEditing?: (id: number) => void;
    onComponentStopEditing?: (id: number) => void;
    toggleChatAndTask?: () => void;
    locked?: number[];
    componentService: IComponentsServiceLikeClass;
    pluginService: IPluginServiceLikeClass;
    editors?: IEditorInfo[];
    locks?: ILockInfo[];
    me?: string;
    layouts?: boolean;
    context: Context;
    onComponentAdded?: (data: ILooseObject) => void;
    onComponentTryAdd?: (data: ILooseObject) => void;
    onComponentRemoved?: (id: number) => void;
    onComponentTryRemove?: (id: number) => void;
    onComponentUpdated?: (id: number, data: ILooseObject) => void;
    onComponentTryUpdate?: (id: number, data: ILooseObject) => void;
    onComponentMoved?: (id: number, position: number) => void;
    onComponentTryMove?: (id: number, position: number) => void;
    onComponentTryStartEdit?: (id: number) => void;
    onComponentStartEdit?: (id: number) => void;
    onComponentTryStopEdit?: (id: number) => void;
    onComponentStopEdit?: (id: number) => void;
    activateComponentAdd?: (data: ILooseObject) => Promise<boolean>;
    activateComponentRemove?: (id: number) => Promise<boolean>;
    activateComponentUpdate?: (id: number, data: ILooseObject) => Promise<boolean>;
    activateComponentMove?: (id: number, position: number) => Promise<boolean>;
    activateComponentStartEdit?: (id: number) => Promise<boolean>;
    activateComponentStopEdit?: (id: number) => Promise<boolean>;
    activateCommit?: (data: ILooseObject) => Promise<boolean>;
}
export interface IState {
    content: IContent;
    data: ILooseObject;
    plugins: string[];
    step: string;
    name: string;
    componentEditor: {
        id: number | null;
        revData: ILooseObject;
    };
}
declare class Composer extends React.Component<IProperties, IState> {
    private RESET_STATE;
    private DEBUG;
    private spinner;
    private pluginsInstances;
    private delta;
    /**
     * Component class constructor
     *
     * @param {IProperties} props
     */
    constructor(props: IProperties);
    /**
     * Standard React render method
     *
     * @return {JSX.Element}
     */
    render(): JSX.Element;
    /**
     * Get data in defined format
     *
     * @return {IData}
     */
    getData(): IData;
    /**
     * Set content to Composer for editing
     *
     * @param {IContent} content
     * @return {Promise<void>}
     */
    setContent(content: IContent): Promise<void>;
    /**
     * Set data for specific plugin
     *
     * @param {string} name
     * @param {ILooseObject} data
     * @return {void}
     */
    setPluginData(name: string, data: ILooseObject): void;
    /**
     * Reset content in Composer
     *
     * @return {void}
     */
    resetContent(): void;
    /**
     * Reset data for specific plugin
     *
     * @param {string} name
     * @return {void}
     */
    resetPluginData(name: string): void;
    /**
     * Reset data for all plugins
     *
     * @return {void}
     */
    resetPlugins(): void;
    /**
     * Enable plugins in composer
     *
     * @param {string | string[]} names one name or array of names
     * @return {Promise<void>}
     */
    enablePlugins(names: string | string[], client?: any): Promise<void>;
    /**
     * Set name
     *
     * @param {string} name
     * @return {Promise<void>}
     */
    setName(name: string): Promise<void>;
    /**
     * Add component into content from outside of composer
     *
     * @param {IAddComponentObject} data of new component
     * @param {boolean} activated? true if you want to skip activator in addComponent flow
     * @return {Promise<void>}
     */
    addComponent(data: IAddComponentObject, activated?: boolean): Promise<boolean>;
    removeComponent(id: number, activated?: boolean): Promise<boolean>;
    updateComponent(id: number, data: IComponentObject, activated?: boolean): Promise<boolean>;
    moveComponent(id: number, position: number): Promise<boolean>;
    updatePositions(positionMap: ILooseObject, activated?: boolean): Promise<boolean>;
    update(updates: IOperation[]): Promise<boolean>;
    importDelta(data: IOperation[]): Promise<boolean>;
    updateCommits(commits: any): Promise<boolean>;
    /**
     * Fired when composer try to start edit some component. By edit some component
     * it's meant that user click on edit button on component and composer will
     * open form for this component
     *
     * @param {number} id of edited component
     * @return {void}
     */
    private eventComponentTryStartEdit;
    /**
     * Fired when composer successfully start edit some component. By edit some component
     * it's meant that user click on edit button on component and composer will open
     * form for this component
     *
     * @param {number} id of edited component
     * @return {void}s
     */
    private eventComponentStartEdit;
    /**
     * Fired when composer try to stop edit some component. By stop edit component it's meant
     * that user had opened form of this component and click on save/cancel button and composer
     * will close form for this component
     *
     * @param {number} id of edited component
     * @return {void}
     */
    private eventComponentTryStopEdit;
    /**
     * Fired when composer successfully stop edit some component. By stop edit component it's meant
     * that user had opened form of this component and click on save/cancel button and composer
     * will close form for this component
     *
     * @param {number} id of edited component
     * @return {void}
     */
    private eventComponentStopEdit;
    /**
     * Simple activator for start editing component. If activator returns false,
     * than selected component cannot be edited.
     *
     * @param {number} id of component which composer wants to start edit
     * @return {Promise<boolean>}
     */
    private activateComponentStartEdit;
    /**
     * Simple activator for stop editing component. If activator teturns false,
     * than selected component cannot be save/cancel of editing.
     *
     * @param {number} id of component which composer wants to stop edit
     * @return {Promise<boolean>}
     */
    private activateComponentStopEdit;
    /**
     * Simple activator, that always returns true
     *
     * @return {Promise<boolean>}
     */
    private activateAlways;
    /**
     * Simple activator for general commit in delta
     */
    private activateCommit;
    /**
     * Inner event for handling update component
     *
     * @param {ILooseObject} data in component
     * @return {void}
     */
    private _eventUpdateComponent;
    /**
     * Inner event for handling remove component and show
     * confirm dialog
     *
     * @param {number} id of component
     * @return {void}
     */
    private _eventRemoveComponent;
    /**
     * Handle Add Component control action to add new component.
     *
     * @param {IAddComponentObject} data of new component
     * @param {number} position? of newly added component
     * @param {boolean} activated? true if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleAddComponent;
    /**
     * Handle Remove Component control action to remove some component
     * from content
     *
     * @param {number} id of component which will be removed
     * @param {boolean} activated? trur if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleRemoveComponent;
    /**
     * Handle Update Component control action to update some component
     * in content
     *
     * @param {number} id of component which will be edited
     * @param {ILooseObject} data of component (inner data without name, id, position etc)
     * @param {boolean} activated? true if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleUpdateComponent;
    /**
     * Handle Move Component control action to move some component
     * in content to new position
     *
     * @param {number} id of component which will be moved
     * @param {number} position new position of component
     * @param {boolean} activated? true if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleMoveComponent;
    private handleAddContainer;
    private handleRemoveContainer;
    private handleLockContainer;
    /**
     * Handle Start Edit Component control action to select this
     * component and start editing (show form for this component)
     *
     * @param {number} id of component you want to start edit
     * @param {boolean} activated? true if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleStartEditComponent;
    /**
     * Handle Stop Edit Component control action to deselect this
     * component and stop editing (hide form for this component).
     *
     * @param {number} id? of component you want to stop edit
     * @param {boolean} activated? true if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleStopEditComponent;
    /**
     * Handle Update Positions control action. This is useful when you recieve
     * new positions from server to update positions at once
     *
     * @param {ILooseObject} positionMap where key id id of component and value is position
     * @param {boolean} activated? true if you want to skip activator
     * @return {Promise<boolean>}
     */
    private handleUpdatePositions;
    /**
     * Handle on cancel event and call cancel callback
     *
     * @return {void}
     */
    private handleCancel;
    /**
     * Handle on save event and call save callback with
     * all gathered data
     *
     * @return {void}
     */
    private handleSave;
    /**
     * Handle on tab change event and change state
     * of composer to selected tab and call callback
     *
     * @param {string} activeKey
     * @return {void}
     */
    private handleTabChange;
    /**
     * Handle on plugin data change event and save these changes into
     * state of Composer
     *
     * @param {string} name
     * @param {ILooseObject} data
     * @return {void}
     */
    private handlePluginDataChange;
    /** Actions for working with content */
    private handleRevertComponent;
    private handleCancelComponent;
    private handleSaveComponent;
    /**
     * Very simple method for debuging Composer. It's just call
     * console.log method, but only if debug flag is true
     *
     * @param {string} name
     * @param {any[]} args
     * @return {void}
     */
    private debug;
}
export default Composer;
