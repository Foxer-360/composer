"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delta = require("@foxer360/delta");

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _Editor = _interopRequireDefault(require("./components/Editor"));

var _Spinner = _interopRequireDefault(require("./components/Spinner"));

var _Users = _interopRequireDefault(require("./components/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

// import './composer.css';
// tslint:disable:jsx-no-multiline-js
// tslint:disable:jsx-no-lambda
// tslint:disable:max-classes-per-file
var confirm = _antd.Modal.confirm;

var cleanContent = function () {
  var d = new _delta.Delta();
  d.commit('init', {
    data: {}
  });
  d.push();
  return (0, _delta.builder)(d);
}();

var dummySpinner = {
  disable: function disable() {
    return;
  },
  enable: function enable() {
    return;
  }
};

var Composer =
/** @class */
function (_super) {
  __extends(Composer, _super);
  /**
   * Component class constructor
   *
   * @param {IProperties} props
   */


  function Composer(props) {
    var _this = _super.call(this, props) || this;

    _this.RESET_STATE = {
      componentEditor: {
        id: null,
        revData: {}
      },
      content: cleanContent,
      data: {},
      name: 'Editor',
      plugins: [],
      step: 'editor'
    }; // Simple debug flag

    _this.DEBUG = true; // Spinner reference

    _this.spinner = dummySpinner; // Create new empty delta

    _this.delta = new _delta.Delta();

    _this.delta.commit('init', {
      data: {}
    });

    _this.delta.push();

    _this.state = __assign({}, _this.RESET_STATE, {
      content: (0, _delta.builder)(_this.delta)
    });
    _this.pluginsInstances = {};
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleTabChange = _this.handleTabChange.bind(_this); // Private events

    _this._eventUpdateComponent = _this._eventUpdateComponent.bind(_this);
    _this._eventRemoveComponent = _this._eventRemoveComponent.bind(_this); // Actions for component editation

    _this.handleCancelComponent = _this.handleCancelComponent.bind(_this);
    _this.handleSaveComponent = _this.handleSaveComponent.bind(_this);
    _this.handleStartEditComponent = _this.handleStartEditComponent.bind(_this);
    _this.handleStopEditComponent = _this.handleStopEditComponent.bind(_this);
    _this.handleUpdateComponent = _this.handleUpdateComponent.bind(_this);
    _this.handleAddComponent = _this.handleAddComponent.bind(_this);
    _this.handleMoveComponent = _this.handleMoveComponent.bind(_this);
    _this.handleRemoveComponent = _this.handleRemoveComponent.bind(_this);
    _this.handleAddContainer = _this.handleAddContainer.bind(_this);
    _this.handleRemoveContainer = _this.handleRemoveContainer.bind(_this);
    _this.handleLockContainer = _this.handleLockContainer.bind(_this);
    return _this;
  }
  /**
   * Standard React render method
   *
   * @return {JSX.Element}
   */


  Composer.prototype.render = function () {
    var _this = this; // tslint:disable-next-line:no-console


    console.log('DELTA and CONTENT', this.delta.export(), this.state.content);

    if (!this.state.content) {
      return React.createElement("span", null, "Waiting for content");
    }

    var editors = [];

    if (this.props.editors) {
      editors = this.props.editors;
    }

    var ExtraContent = React.createElement(React.Fragment, null, React.createElement("hr", {
      style: {
        border: '0',
        borderTop: '1px solid #e6e6e6',
        marginLeft: '6px',
        marginRight: '6px',
        marginTop: '24px'
      }
    }), React.createElement(_antd.Button, {
      type: "primary",
      style: {
        marginTop: '0px'
      },
      onClick: this.handleSave
    }, React.createElement(_antd.Icon, {
      type: "save"
    }), "Save"), React.createElement("hr", {
      style: {
        border: '0',
        borderTop: '1px solid #e6e6e6',
        marginBottom: '24px',
        marginLeft: '6px',
        marginRight: '6px',
        marginTop: '24px'
      }
    }), React.createElement(_antd.Button, {
      type: "primary",
      style: {
        marginTop: '0px'
      },
      onClick: this.props.toggleChatAndTask
    }, React.createElement(_antd.Icon, {
      type: "save"
    }), "Chat and Tasks"), React.createElement("div", {
      style: {
        marginTop: '18px',
        padding: '0px 8px',
        textAlign: 'left'
      }
    }, React.createElement(_Users.default, {
      editors: editors
    })));
    return React.createElement("div", null, React.createElement(_antd.Tabs, {
      activeKey: this.state.step,
      onChange: this.handleTabChange,
      tabPosition: "right",
      tabBarExtraContent: ExtraContent
    }, React.createElement(_antd.Tabs.TabPane, {
      tab: React.createElement("span", null, React.createElement(_antd.Icon, {
        type: "form"
      }), "Page Content"),
      key: "editor"
    }, React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, React.createElement(_Spinner.default, {
      ref: function ref(node) {
        return _this.spinner = node;
      }
    }, React.createElement(_Editor.default, {
      content: this.state.content,
      pageName: this.state.name,
      selectedComponent: this.state.componentEditor.id,
      updateComponent: this._eventUpdateComponent,
      cancelComponent: this.handleCancelComponent,
      saveComponent: this.handleSaveComponent,
      selectComponent: this.handleStartEditComponent,
      componentsService: this.props.componentService,
      moveComponent: this.handleMoveComponent,
      addComponent: this.handleAddComponent,
      removeComponent: this._eventRemoveComponent,
      editors: this.props.editors,
      locks: this.props.locks,
      me: this.props.me,
      addContainer: this.handleAddContainer,
      removeContainer: this.handleRemoveContainer,
      lockContainer: this.handleLockContainer,
      layouts: this.props.layouts,
      context: this.props.context
    })))), this.state.plugins.map(function (name) {
      var Plugin = _this.props.pluginService.getPluginComponent(name);

      var tabName = _this.props.pluginService.getPluginTabName(name);

      var Title = React.createElement("h2", {
        style: {
          paddingBottom: 0,
          marginBottom: 0
        }
      }, tabName);
      return React.createElement(_antd.Tabs.TabPane, {
        tab: React.createElement("span", null, React.createElement(_antd.Icon, {
          type: "database"
        }), tabName),
        key: name
      }, React.createElement(_antd.Card, {
        title: Title
      }, React.createElement(Plugin, {
        onChange: function onChange(data) {
          return _this.handlePluginDataChange(name, data);
        },
        initData: _this.state.data[name] || null,
        config: _this.state.data[name] || null
      })));
    })));
  };
  /**
   * Get data in defined format
   *
   * @return {IData}
   */


  Composer.prototype.getData = function () {
    var data = {
      content: this.state.content,
      plugins: this.state.data
    };
    return data;
  };
  /**
   * Set content to Composer for editing
   *
   * @param {IContent} content
   * @return {Promise<void>}
   */


  Composer.prototype.setContent = function (content) {
    var _this = this; // Reset delta


    this.delta = new _delta.Delta();
    return new Promise(function (resolve) {
      _this.setState({
        content: __assign({}, content)
      }, function () {
        return resolve();
      });
    });
  };
  /**
   * Set data for specific plugin
   *
   * @param {string} name
   * @param {ILooseObject} data
   * @return {void}
   */


  Composer.prototype.setPluginData = function (name, data) {
    var _a;

    this.setState({
      data: __assign({}, this.state.data, (_a = {}, _a[name] = data, _a))
    });
  };
  /**
   * Reset content in Composer
   *
   * @return {void}
   */


  Composer.prototype.resetContent = function () {
    // Reset delta
    this.delta = new _delta.Delta();
    this.delta.commit('init', {
      data: {}
    });
    this.delta.push();
    this.setState({
      content: (0, _delta.builder)(this.delta)
    });
  };
  /**
   * Reset data for specific plugin
   *
   * @param {string} name
   * @return {void}
   */


  Composer.prototype.resetPluginData = function (name) {
    var _a;

    this.setState({
      data: __assign({}, this.state.data, (_a = {}, _a[name] = {}, _a))
    });
  };
  /**
   * Reset data for all plugins
   *
   * @return {void}
   */


  Composer.prototype.resetPlugins = function () {
    this.setState({
      data: {}
    });
  };
  /**
   * Enable plugins in composer
   *
   * @param {string | string[]} names one name or array of names
   * @return {Promise<void>}
   */


  Composer.prototype.enablePlugins = function (names, client) {
    var _this = this;

    if (!Array.isArray(names)) {
      names = [names];
    }

    names = names.filter(function (name) {
      var index = _this.state.plugins.indexOf(name);

      if (index > -1) {
        if (_this.pluginsInstances[name]) {
          _this.pluginsInstances[name].resetPlugin(_this.props.context, null);
        }

        return false;
      }

      return true;
    }); // Filter already existing plugins

    names.forEach(function (name) {
      var Plugin = _this.props.pluginService.getPlugin(name);

      if (Plugin) {
        _this.pluginsInstances[name] = new Plugin(_this.props.context, null, client);

        _this.props.context.addListener(name, function () {
          _this.forceUpdate();
        });
      } else {
        // tslint:disable-next-line:no-console
        console.log("Plugin " + name + " failed to load...");
      }
    });
    return new Promise(function (resolve) {
      _this.setState({
        plugins: _this.state.plugins.concat(names)
      }, function () {
        return resolve();
      });
    });
  };
  /**
   * Set name
   *
   * @param {string} name
   * @return {Promise<void>}
   */


  Composer.prototype.setName = function (name) {
    var _this = this; // If name is null


    if (name === undefined || name === null) {
      return Promise.resolve();
    } // If name is empty string


    if (name.length < 1) {
      return Promise.resolve();
    }

    return new Promise(function (resolve) {
      _this.setState({
        name: name
      }, function () {
        return resolve();
      });
    });
  }; //
  //
  // PUBLIC CONTROL
  //
  //

  /**
   * Add component into content from outside of composer
   *
   * @param {IAddComponentObject} data of new component
   * @param {boolean} activated? true if you want to skip activator in addComponent flow
   * @return {Promise<void>}
   */


  Composer.prototype.addComponent = function (data, activated) {
    var position = data.position;
    var parent = data.parent;
    return this.handleAddComponent(data, position, parent, activated);
  };

  Composer.prototype.removeComponent = function (id, activated) {
    return this.handleRemoveComponent(id, activated);
  };

  Composer.prototype.updateComponent = function (id, data, activated) {
    return this.handleUpdateComponent(id, data, activated);
  };

  Composer.prototype.moveComponent = function (id, position) {
    return Promise.resolve(true);
  };

  Composer.prototype.updatePositions = function (positionMap, activated) {
    return this.handleUpdatePositions(positionMap, activated);
  };

  Composer.prototype.update = function (updates) {
    var _this = this;

    this.delta.update(updates);
    return new Promise(function (resolve) {
      _this.setState({
        content: (0, _delta.builder)(_this.delta, _this.state.content)
      }, function () {
        return resolve();
      });
    });
  };

  Composer.prototype.importDelta = function (data) {
    var _this = this;

    this.delta.import(data);
    return new Promise(function (resolve) {
      _this.setState({
        content: (0, _delta.builder)(_this.delta, _this.state.content)
      }, function () {
        return resolve();
      });
    });
  }; // tslint:disable-next-line:no-any


  Composer.prototype.updateCommits = function (commits) {
    var _this = this; // tslint:disable-next-line:no-console


    console.log('Update commits', commits);
    this.delta.forceCommit(commits);
    this.delta.push();
    return new Promise(function (resolve) {
      _this.setState({
        content: (0, _delta.builder)(_this.delta, _this.state.content)
      }, function () {
        return resolve();
      });
    });
  }; //
  //
  // PUBLIC EVENT HANDLERS
  //
  //
  // /**
  //  * Fired when composer try to add new component
  //  *
  //  * @param {IAddComponentObject} data of new component
  //  * @return {void}
  //  */
  // private eventCommponentTryAdd(data: IAddComponentObject): void {
  //   // Just call event if exists
  //   if (this.props.onComponentTryAdd) {
  //     this.props.onComponentTryAdd(data);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentTryAdd event', data);
  // }
  // /**
  //  * Fired when composer successfully add new component
  //  *
  //  * @param {IAddComponentObject} data of new component
  //  * @return {void}
  //  */
  // private eventComponentAdded(data: IAddComponentObject): void {
  //   // Just call event if exists
  //   if (this.props.onComponentAdded) {
  //     this.props.onComponentAdded(data);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentAdded event', data);
  // }
  // /**
  //  * Fired when composer try to remove some component
  //  *
  //  * @param {number} id of component which tries to remove
  //  * @return {void}
  //  */
  // private eventComponentTryRemove(id: number): void {
  //   // Just call event if exists
  //   if (this.props.onComponentTryRemove) {
  //     this.props.onComponentTryRemove(id);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentTryRemove event', id);
  // }
  // /**
  //  * Fired when composer successfully remove some component
  //  *
  //  * @param {number} id of component which was successfully removed
  //  * @return {void}
  //  */
  // private eventComponentRemoved(id: number): void {
  //   // Just call event if exists
  //   if (this.props.onComponentRemoved) {
  //     this.props.onComponentRemoved(id);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentRemoved event', id);
  // }
  // *
  //  * Fired when composer try to move some component to new position
  //  *
  //  * @param {number} id of component which tries to move
  //  * @param {number} position new position of component
  //  * @return {void}
  // private eventComponentTryMove(id: number, position: number): void {
  //   // Just call event if exists
  //   if (this.props.onComponentTryMove) {
  //     this.props.onComponentTryMove(id, position);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentTryMove event', id, position);
  // }
  // /**
  //  * Fired when composer successfulley move some component to new position
  //  *
  //  * @param {number} id of component which was successfully moved
  //  * @param {number} position new position of component
  //  * @return {void}
  //  */
  // private eventComponentMoved(id: number, position: number): void {
  //   // Just call event if exists
  //   if (this.props.onComponentMoved) {
  //     this.props.onComponentMoved(id, position);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentMoved event', id, position);
  // }
  // /**
  //  * Fired when composer try to update some component
  //  *
  //  * @param {number} id of component which tries to update
  //  * @param {IComponentObject} data updated data of component
  //  * @return {void}
  //  */
  // private eventComponentTryUpdate(id: number, data: ILooseObject): void {
  //   // Just call event if exists
  //   if (this.props.onComponentTryUpdate) {
  //     this.props.onComponentTryUpdate(id, data);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentTryUpdate event', data);
  // }
  // /**
  //  * Fired when composer successfully update data of some component
  //  *
  //  * @param {number} id of component which was successfully updated
  //  * @param {IComponentObject} data updated data of component
  //  * @return {void}
  //  */
  // private eventComponentUpdated(id: number, data: IComponentObject): void {
  //   // Just call event if exists
  //   if (this.props.onComponentUpdated) {
  //     this.props.onComponentUpdated(id, data);
  //   }
  //   // Debug message
  //   this.debug('Fired onComponentUpdated event', data);
  // }

  /**
   * Fired when composer try to start edit some component. By edit some component
   * it's meant that user click on edit button on component and composer will
   * open form for this component
   *
   * @param {number} id of edited component
   * @return {void}
   */


  Composer.prototype.eventComponentTryStartEdit = function (id) {
    // Just call event if exists
    if (this.props.onComponentTryStartEdit) {
      this.props.onComponentTryStartEdit(id);
    } // Debug message


    this.debug('Fired onComponentTryStartEdit event', id);
  };
  /**
   * Fired when composer successfully start edit some component. By edit some component
   * it's meant that user click on edit button on component and composer will open
   * form for this component
   *
   * @param {number} id of edited component
   * @return {void}s
   */


  Composer.prototype.eventComponentStartEdit = function (id) {
    // Just call event if exists
    if (this.props.onComponentStartEdit) {
      this.props.onComponentStartEdit(id);
    } // Debug message


    this.debug('Fired onComponentStartEdit event', id);
  };
  /**
   * Fired when composer try to stop edit some component. By stop edit component it's meant
   * that user had opened form of this component and click on save/cancel button and composer
   * will close form for this component
   *
   * @param {number} id of edited component
   * @return {void}
   */


  Composer.prototype.eventComponentTryStopEdit = function (id) {
    // Just call event if exists
    if (this.props.onComponentTryStopEdit) {
      this.props.onComponentTryStopEdit(id);
    } // Debug message


    this.debug('Fired onComponentTryStopEdit event', id);
  };
  /**
   * Fired when composer successfully stop edit some component. By stop edit component it's meant
   * that user had opened form of this component and click on save/cancel button and composer
   * will close form for this component
   *
   * @param {number} id of edited component
   * @return {void}
   */


  Composer.prototype.eventComponentStopEdit = function (id) {
    // Just call event if exists
    if (this.props.onComponentStopEdit) {
      this.props.onComponentStopEdit(id);
    } // Debug message


    this.debug('Fired onComponentStopEdit event', id);
  }; //
  //
  // ACTIVATORS SECTION
  //
  //
  // /**
  //  * Simple activator for adding new component. If activator returns false,
  //  * than new component will not be added.
  //  *
  //  * @param {IAddComponentObject} data of new component
  //  * @return {Promise<boolean>}
  //  */
  // private activateComponentAdd(data: ILooseObject): Promise<boolean> {
  //   if (this.props.activateComponentAdd) {
  //     return this.props.activateComponentAdd(data);
  //   }
  //   return Promise.resolve(true);
  // }
  // /**
  //  * Simple activator for removing component. If activator returns false,
  //  * than selected component will not be removed.
  //  *
  //  * @param {number} id of component which composer try to remove
  //  * @return {Promise<boolean>}
  //  */
  // private activateComponentRemove(id: number): Promise<boolean> {
  //   if (this.props.activateComponentRemove) {
  //     return this.props.activateComponentRemove(id);
  //   }
  //   return Promise.resolve(true);
  // }
  // *
  //  * Simple activator for moving component. If activator returns false,
  //  * than selected component will not be moved.
  //  *
  //  * @param {number} id of component which composer try to move
  //  * @param {number} position new position of component
  //  * @return {Promise<boolean>}
  // private activateComponentMove(id: number, position: number): Promise<boolean> {
  //   if (this.props.activateComponentMove) {
  //     return this.props.activateComponentMove(id, position);
  //   }
  //   return Promise.resolve(true);
  // }
  // /**
  //  * Simple activator for updating component. If activator returns false,
  //  * than selected component will not be updated
  //  *
  //  * @param {number} id of component which composer try to update
  //  * @param {IComponentObject} data of component
  //  * @return {Promise<boolean>}
  //  */
  // private activateComponentUpdate(id: number, data: ILooseObject): Promise<boolean> {
  //   if (this.props.activateComponentUpdate) {
  //     return this.props.activateComponentUpdate(id, data);
  //   }
  //   return Promise.resolve(true);
  // }

  /**
   * Simple activator for start editing component. If activator returns false,
   * than selected component cannot be edited.
   *
   * @param {number} id of component which composer wants to start edit
   * @return {Promise<boolean>}
   */


  Composer.prototype.activateComponentStartEdit = function (id) {
    if (this.props.activateComponentStartEdit) {
      return this.props.activateComponentStartEdit(id);
    }

    return Promise.resolve(true);
  };
  /**
   * Simple activator for stop editing component. If activator teturns false,
   * than selected component cannot be save/cancel of editing.
   *
   * @param {number} id of component which composer wants to stop edit
   * @return {Promise<boolean>}
   */


  Composer.prototype.activateComponentStopEdit = function (id) {
    if (this.props.activateComponentStopEdit) {
      return this.props.activateComponentStopEdit(id);
    }

    return Promise.resolve(true);
  };
  /**
   * Simple activator, that always returns true
   *
   * @return {Promise<boolean>}
   */


  Composer.prototype.activateAlways = function () {
    return Promise.resolve(true);
  };
  /**
   * Simple activator for general commit in delta
   */


  Composer.prototype.activateCommit = function (data) {
    if (this.props.activateCommit) {
      return this.props.activateCommit(data);
    }

    return Promise.resolve(true);
  }; //
  //
  // PRIVATE EVENT HANDLERS SECTION
  //
  //

  /**
   * Inner event for handling update component
   *
   * @param {ILooseObject} data in component
   * @return {void}
   */


  Composer.prototype._eventUpdateComponent = function (data) {
    // Get ID of edited component
    var id = this.state.componentEditor.id; // Find component in content

    var component = (0, _delta.getObjectFromContent)(this.state.content, id + ''); // const component = this.state.content.find((c: IComponentObject) => {
    //   if (c.id === id) {
    //     return true;
    //   }
    //   return false;
    // });
    // Check if we have component

    if (!component) {
      this.debug("Cannot find component with ID " + id + " in content to update it");
      return;
    } // Update data in component object and call handleUpdateComponent control action


    component.data = data;
    this.handleUpdateComponent(id, component);
  };
  /**
   * Inner event for handling remove component and show
   * confirm dialog
   *
   * @param {number} id of component
   * @return {void}
   */


  Composer.prototype._eventRemoveComponent = function (id) {
    var _this = this;

    confirm({
      content: 'Be sure you want to do this. If you remove component you cannot revert this action.',
      onOk: function onOk() {
        return _this.handleRemoveComponent(id);
      },
      title: 'Do you want to remove this page ?'
    });
  }; //
  //
  // PRIVATE CONTROL SECTION
  //
  //

  /**
   * Handle Add Component control action to add new component.
   *
   * @param {IAddComponentObject} data of new component
   * @param {number} position? of newly added component
   * @param {boolean} activated? true if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleAddComponent = function (data, position, container, activated) {
    var _this = this; // Fire onComponentTryAdd event


    this.delta.commit('add', {
      data: {
        data: __assign({}, data.data),
        name: data.name,
        parent: container,
        position: position
      },
      type: 'component'
    });
    var comm = this.delta.pull(); // Activator

    this.spinner.enable();
    var activator = this.activateAlways();

    if (!activated) {
      activator = this.activateCommit(comm);
    }

    return activator.then(function (can) {
      if (!can) {
        _this.spinner.disable();

        _this.delta.revert();

        return Promise.resolve(false);
      }

      _this.delta.push();

      return new Promise(function (resolve) {
        _this.setState({
          content: (0, _delta.builder)(_this.delta, _this.state.content)
        }, function () {
          // Fire onComponentAdd event
          // this.eventComponentAdded(preparedData);
          // And just resolve this promise
          _this.spinner.disable();

          resolve(true);
        });
      });
    }); // this.delta.push();
    // return new Promise((resolve) => {
    //   this.setState({
    //     content: builder(this.delta, this.state.content),
    //   }, () => resolve());
    // });
    // // Check position
    // if (position === undefined || position === null) {
    //   position = this.state.content.length;
    // }
    // // If position is negative, start counting from end
    // if (position < 0) {
    //   position = this.state.content.length + position + 1;
    // }
    // // Get new ID
    // let id = 0;
    // this.state.content.forEach((o: IComponentObject) => {
    //   if (o.id >= id) {
    //     id = o.id + 1;
    //   }
    // });
    // const preparedData = {
    //   name: 'Fuck YOu',
    //   data: {},
    //   ...data,
    //   position,
    //   id,
    //   plugins: [] as string[],
    // } as IComponentObject;
    // // Fire onComponentTryAdd event
    // this.eventCommponentTryAdd(preparedData);
    // // Use activator activateComponentAdd
    // this.spinner.enable();
    // let activator = this.activateAlways();
    // if (!activated) {
    //   activator = this.activateComponentAdd(preparedData);
    // }
    // return activator.then((can: boolean) => {
    //   // If can not add, just finish process
    //   if (!can) {
    //     this.spinner.disable();
    //     return Promise.resolve(false);
    //   }
    //   // Can be added, so add it into content at position
    //   const content = this.state.content.map((o: IComponentObject) => {
    //     if (o.position >= position) {
    //       o.position++;
    //     }
    //     return o;
    //   });
    //   content.push(preparedData);
    //   // Sort this content
    //   content.sort(this.compareComponents);
    //   // Save into state
    //   return new Promise((resolve) => {
    //     this.setState({
    //       content
    //     }, () => {
    //       // Fire onComponentAdd event
    //       this.eventComponentAdded(preparedData);
    //       // And just resolve this promise
    //       this.spinner.disable();
    //       resolve(true);
    //     });
    //   }) as Promise<boolean>;
    // });
  };
  /**
   * Handle Remove Component control action to remove some component
   * from content
   *
   * @param {number} id of component which will be removed
   * @param {boolean} activated? trur if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleRemoveComponent = function (id, activated) {
    var _this = this; // Using delta


    this.delta.commit('remove', {
      data: {},
      id: '' + id
    });
    var comm = this.delta.pull(); // Activator

    this.spinner.enable();
    var activator = this.activateAlways();

    if (!activated) {
      activator = this.activateCommit(comm);
    }

    return activator.then(function (can) {
      if (!can) {
        _this.spinner.disable();

        _this.delta.revert();

        return Promise.resolve(false);
      }

      _this.delta.push();

      return new Promise(function (resolve) {
        _this.setState({
          content: (0, _delta.builder)(_this.delta, _this.state.content)
        }, function () {
          // Fire onComponentAdd event
          // this.eventComponentAdded(preparedData);
          // And just resolve this promise
          _this.spinner.disable();

          resolve(true);
        });
      });
    }); // this.delta.push();
    // return new Promise((resolve) => {
    //   this.setState({
    //     content: builder(this.delta, this.state.content),
    //   }, () => resolve());
    // });
    // this.setState({});
    // let position = -1;
    // let index = -1;
    // this.state.content.forEach((o: IComponentObject, i: number) => {
    //   if (o.id === id) {
    //     position = o.position;
    //     index = i;
    //   }
    // }, this);
    // // Fire onComponentTryRemove event
    // this.eventComponentTryRemove(id);
    // // Something goes wrong or component doesn't exists
    // if (position < 0 || index < 0) {
    //   return Promise.resolve(false);
    // }
    // // If component is under editing, try to deselect this component
    // this.spinner.enable();
    // let preparation = this.activateAlways();
    // if (this.state.componentEditor.id === id) {
    //   preparation = this.handleStopEditComponent();
    // }
    // return preparation.then((res: boolean) => {
    //   if (!res) {
    //     this.spinner.disable();
    //     return Promise.resolve(false);
    //   }
    //   let activator = this.activateAlways();
    //   if (!activated) {
    //     activator = this.activateComponentRemove(id);
    //   }
    //   return activator.then((can: boolean) => {
    //     if (!can) {
    //       this.spinner.disable();
    //       return Promise.resolve(false);
    //     }
    //     let content = this.state.content.map((o: IComponentObject) => {
    //       if (o.position > position) {
    //         o.position--;
    //       }
    //       return o;
    //     });
    //     content.splice(index, 1);
    //     content.sort(this.compareComponents);
    //     return new Promise((resolve) => {
    //       this.setState({
    //         content
    //       }, () => {
    //         // Fire onComponentRemoved event
    //         this.eventComponentRemoved(id);
    //         this.spinner.disable();
    //         resolve(true);
    //       });
    //     }) as Promise<boolean>;
    //   });
    // });
  };
  /**
   * Handle Update Component control action to update some component
   * in content
   *
   * @param {number} id of component which will be edited
   * @param {ILooseObject} data of component (inner data without name, id, position etc)
   * @param {boolean} activated? true if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleUpdateComponent = function (id, data, activated) {
    var _this = this; // Using delta
    // tslint:disable-next-line:no-console


    console.log('UPDATE', data);
    this.delta.commit('edit', {
      data: __assign({}, data.data),
      id: '' + id
    });
    var comm = this.delta.pull(); // Activator

    this.spinner.enable();
    var activator = this.activateAlways();

    if (!activated) {
      activator = this.activateCommit(comm);
    }

    return activator.then(function (can) {
      if (!can) {
        _this.spinner.disable();

        _this.delta.revert();

        return Promise.resolve(false);
      }

      _this.delta.push();

      return new Promise(function (resolve) {
        _this.setState({
          content: (0, _delta.builder)(_this.delta, _this.state.content)
        }, function () {
          // Fire onComponentAdd event
          // this.eventComponentAdded(preparedData);
          // And just resolve this promise
          _this.spinner.disable();

          resolve(true);
        });
      });
    }); // this.delta.push();
    // return new Promise((resolve) => {
    //   this.setState({
    //     content: builder(this.delta, this.state.content),
    //   }, () => resolve());
    // });
    // // Fire onComponentTryUpdate event
    // this.eventComponentTryUpdate(id, data);
    // this.spinner.enable();
    // let activator = this.activateAlways();
    // if (!activated) {
    //   activator = this.activateComponentUpdate(id, data);
    // }
    // return activator.then((can: boolean) => {
    //   if (!can) {
    //     this.spinner.disable();
    //     return Promise.resolve(false);
    //   }
    //   let content = this.state.content.map((o: IComponentObject) => {
    //     if (o.id === id) {
    //       return data;
    //     }
    //     return o;
    //   });
    //   return new Promise((resolve) => {
    //     this.setState({
    //       content
    //     }, () => {
    //       // Fire onComponentUpdated event
    //       this.eventComponentUpdated(id, data);
    //       this.spinner.disable();
    //       resolve(true);
    //     });
    //   }) as Promise<boolean>;
    // });
  };
  /**
   * Handle Move Component control action to move some component
   * in content to new position
   *
   * @param {number} id of component which will be moved
   * @param {number} position new position of component
   * @param {boolean} activated? true if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleMoveComponent = function (id, position, activated) {
    var _this = this; // Using delta


    this.delta.commit('move', {
      data: {
        position: position
      },
      id: '' + id
    });
    var comm = this.delta.pull(); // Activator

    this.spinner.enable();
    var activator = this.activateAlways();

    if (!activated) {
      activator = this.activateCommit(comm);
    }

    return activator.then(function (can) {
      if (!can) {
        _this.spinner.disable();

        _this.delta.revert();

        return Promise.resolve(false);
      }

      _this.delta.push();

      return new Promise(function (resolve) {
        _this.setState({
          content: (0, _delta.builder)(_this.delta, _this.state.content)
        }, function () {
          // Fire onComponentAdd event
          // this.eventComponentAdded(preparedData);
          // And just resolve this promise
          _this.spinner.disable();

          resolve(true);
        });
      });
    }); // this.delta.push();
    // return new Promise((resolve) => {
    //   this.setState({
    //     content: builder(this.delta, this.state.content),
    //   }, () => resolve());
    // });
    // // Fire onComponentTryMove event
    // this.eventComponentTryMove(id, position);
    // let oldPosition = -1;
    // let index = -1;
    // this.state.content.forEach((o: IComponentObject, i: number) => {
    //   if (o.id === id) {
    //     index = i;
    //     oldPosition = o.position;
    //   }
    // }, this);
    // // Something goes wrong or component doesn't exists
    // if (oldPosition < 0 || index < 0) {
    //   return Promise.resolve(false);
    // }
    // // Use activator
    // this.spinner.enable();
    // let activator = this.activateAlways();
    // if (!activated) {
    //   activator = this.activateComponentMove(id, position);
    // }
    // return activator.then((can: boolean) => {
    //   if (!can) {
    //     this.spinner.disable();
    //     return Promise.resolve(false);
    //   }
    //   // Calculate new content positions
    //   let content = this.state.content.map((o: IComponentObject) => {
    //     if (o.id === id) {
    //       o.position = position;
    //       return o;
    //     }
    //     let pos = o.position;
    //     if (oldPosition < o.position && o.position <= position) {
    //       pos--;
    //     }
    //     if (position <= o.position && o.position < oldPosition) {
    //       pos++;
    //     }
    //     o.position = pos;
    //     return o;
    //   });
    //   // Sort content
    //   content.sort(this.compareComponents);
    //   return new Promise((resolve) => {
    //     this.setState({
    //       content
    //     }, () => {
    //       // Fire onComponentMoved event
    //       this.eventComponentMoved(id, position);
    //       this.spinner.disable();
    //       resolve(true);
    //     });
    //   }) as Promise<boolean>;
    // });
  };

  Composer.prototype.handleAddContainer = function () {
    var _this = this;

    this.delta.commit('add', {
      data: {
        parent: 'root',
        position: -1
      },
      type: 'container'
    });
    this.delta.push();
    return new Promise(function (resolve) {
      _this.setState({
        content: (0, _delta.builder)(_this.delta, _this.state.content)
      }, function () {
        return resolve();
      });
    });
  };

  Composer.prototype.handleRemoveContainer = function (id) {
    var _this = this;

    this.delta.commit('remove', {
      data: {},
      id: id,
      type: 'container'
    });
    this.delta.push();
    return new Promise(function (resolve) {
      _this.setState({
        content: (0, _delta.builder)(_this.delta, _this.state.content)
      }, function () {
        return resolve();
      });
    });
  };

  Composer.prototype.handleLockContainer = function (id, lock) {
    var _this = this;

    var name = lock ? 'lock' : 'unlock';
    this.delta.commit(name, {
      data: {},
      id: id,
      type: 'container'
    });
    this.delta.push();
    return new Promise(function (resolve) {
      _this.setState({
        content: (0, _delta.builder)(_this.delta, __assign({}, _this.state.content))
      }, function () {
        return resolve();
      });
    });
  };
  /**
   * Handle Start Edit Component control action to select this
   * component and start editing (show form for this component)
   *
   * @param {number} id of component you want to start edit
   * @param {boolean} activated? true if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleStartEditComponent = function (id, activated) {
    var _this = this; // tslint:disable-next-line:no-any


    var elm = (0, _delta.getObjectFromContent)(this.state.content, id + ''); // Fire onComponentTryStartEdit event

    this.eventComponentTryStartEdit(id);

    if (!elm) {
      return Promise.resolve(false);
    }

    var data = elm.data; // Check if component exists and get data from this component
    // let data = null as ILooseObject;
    // let found = false;
    // this.state.content.forEach((c: IComponentObject) => {
    //   if (c.id === id) {
    //     data = deepCopy(c.data);
    //     found = true;
    //   }
    // }, this);
    // // Fire onComponentTryStartEdit event
    // this.eventComponentTryStartEdit(id);
    // if (!found) {
    //   return Promise.resolve(false);
    // }
    // If there is some already editing component, try
    // to stop edit it

    this.spinner.enable();
    var preparation = Promise.resolve(true);
    var prevId = this.state.componentEditor.id;

    if (prevId !== null) {
      preparation = this.handleStopEditComponent(prevId, activated);
    }

    return preparation.then(function (res) {
      if (!res) {
        _this.spinner.disable();

        return Promise.resolve(false);
      } // Prepare data and try to start edit


      var componentEditor = {
        id: id,
        revData: data
      };

      var activator = _this.activateAlways();

      if (!activated) {
        activator = _this.activateComponentStartEdit(id);
      }

      return activator.then(function (can) {
        if (!can) {
          _this.spinner.disable();

          return Promise.resolve(false);
        }

        return new Promise(function (resolve) {
          _this.setState({
            componentEditor: componentEditor
          }, function () {
            // Fire onComponentStartEdit event
            _this.eventComponentStartEdit(id);

            _this.spinner.disable();

            resolve(true);
          });
        });
      });
    });
  };
  /**
   * Handle Stop Edit Component control action to deselect this
   * component and stop editing (hide form for this component).
   *
   * @param {number} id? of component you want to stop edit
   * @param {boolean} activated? true if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleStopEditComponent = function (id, activated) {
    var _this = this; // Get ID if it's undefined


    id = this.state.componentEditor.id; // If ID is undefined, than do nothing

    if (id === undefined || id === null) {
      return Promise.resolve(true);
    } // Fire onComponentTryStopEdit event


    this.eventComponentTryStopEdit(id);
    this.spinner.enable();
    var activator = this.activateAlways();

    if (!activated) {
      activator = this.activateComponentStopEdit(id);
    }

    return activator.then(function (can) {
      // If we can not stop edit
      if (!can) {
        _this.spinner.disable();

        return Promise.resolve(false);
      } // Prepare reset values


      var componentEditor = {
        id: null,
        revData: {}
      };
      return new Promise(function (resolve) {
        _this.setState({
          componentEditor: componentEditor
        }, function () {
          // Fire onComponentStopEdit event
          _this.eventComponentStopEdit(id);

          _this.spinner.disable();

          resolve(true);
        });
      });
    });
  };
  /**
   * Handle Update Positions control action. This is useful when you recieve
   * new positions from server to update positions at once
   *
   * @param {ILooseObject} positionMap where key id id of component and value is position
   * @param {boolean} activated? true if you want to skip activator
   * @return {Promise<boolean>}
   */


  Composer.prototype.handleUpdatePositions = function (positionMap, activated) {
    return Promise.resolve(true); // Fire onTryUpdatePositions event
    // Activator
    // this.spinner.enable();
    // const activator = this.activateAlways();
    // return activator.then((can: boolean) => {
    //   if (!can) {
    //     this.spinner.disable();
    //     return Promise.resolve(false);
    //   }
    //   const content = this.state.content.map((c: IComponentObject) => {
    //     c.position = positionMap[c.id];
    //     return c;
    //   });
    //   content.sort(this.compareComponents);
    //   return new Promise((resolve) => {
    //     this.setState({
    //       content
    //     }, () => {
    //       // Fire onUpdatedPositions event
    //       this.spinner.disable();
    //       resolve(true);
    //     });
    //   });
    // }) as Promise<boolean>;
  }; //
  //
  // OTHERS
  //
  //

  /**
   * Handle on cancel event and call cancel callback
   *
   * @return {void}
   */


  Composer.prototype.handleCancel = function () {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };
  /**
   * Handle on save event and call save callback with
   * all gathered data
   *
   * @return {void}
   */


  Composer.prototype.handleSave = function () {
    if (this.props.onSave) {
      this.props.onSave(this.getData());
    }
  };
  /**
   * Handle on tab change event and change state
   * of composer to selected tab and call callback
   *
   * @param {string} activeKey
   * @return {void}
   */


  Composer.prototype.handleTabChange = function (activeKey) {
    // Fire event onTabChange or something like this
    if (this.props.onTabChange) {
      this.props.onTabChange();
    } // Change step in state


    this.setState({
      step: activeKey
    });
  };
  /**
   * Handle on plugin data change event and save these changes into
   * state of Composer
   *
   * @param {string} name
   * @param {ILooseObject} data
   * @return {void}
   */


  Composer.prototype.handlePluginDataChange = function (name, data) {
    var _a;

    this.setState({
      data: __assign({}, this.state.data, (_a = {}, _a[name] = data, _a))
    }); // Write new config into plugin

    if (this.pluginsInstances[name]) {
      this.pluginsInstances[name].writeConfig(data);
    }
  };
  /** Actions for working with content */


  Composer.prototype.handleRevertComponent = function () {
    // Get info from state
    var id = this.state.componentEditor.id;

    if (id === null) {
      return Promise.resolve(true);
    }

    var component = (0, _delta.getObjectFromContent)(this.state.content, id + ''); // const component = this.state.content.find((c: IComponentObject) => {
    //   if (c.id === id) {
    //     return true;
    //   }
    //   return false;
    // });

    if (!component) {
      return Promise.resolve(true);
    }

    var data = this.state.componentEditor.revData;
    component.data = data;
    return this.handleUpdateComponent(id, component);
  };

  Composer.prototype.handleCancelComponent = function () {
    var _this = this; // There can be fired some event to top for information that
    // content in component was reverted to defaults


    return this.handleRevertComponent().then(function () {
      // return this.handleDeselectComponent();
      return _this.handleStopEditComponent();
    });
  };

  Composer.prototype.handleSaveComponent = function () {
    // There can be fired some event to top for information that
    // content in component was updated
    // return this.handleDeselectComponent();
    return this.handleStopEditComponent();
  };
  /**
   * Very simple method for debuging Composer. It's just call
   * console.log method, but only if debug flag is true
   *
   * @param {string} name
   * @param {any[]} args
   * @return {void}
   */
  // tslint:disable-next-line:no-any


  Composer.prototype.debug = function (name) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (this.DEBUG) {
      // tslint:disable-next-line:no-console
      console.log.apply(console, [name].concat(args));
    }
  };

  return Composer;
}(React.Component);

var _default = Composer;
exports.default = _default;