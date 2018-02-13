function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId]) {
			/******/return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/i: moduleId,
			/******/l: false,
			/******/exports: {}
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/__webpack_require__.d = function (exports, name, getter) {
		/******/if (!__webpack_require__.o(exports, name)) {
			/******/Object.defineProperty(exports, name, {
				/******/configurable: false,
				/******/enumerable: true,
				/******/get: getter
				/******/ });
			/******/
		}
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/__webpack_require__.n = function (module) {
		/******/var getter = module && module.__esModule ?
		/******/function getDefault() {
			return module['default'];
		} :
		/******/function getModuleExports() {
			return module;
		};
		/******/__webpack_require__.d(getter, 'a', getter);
		/******/return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/62921/";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = 1);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

	module.exports = THREE;

	/***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";

	Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__css_reset_css__ = __webpack_require__(2);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_reset_css__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(3);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(0);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__renderer__ = __webpack_require__(4);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__scene__ = __webpack_require__(5);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__render_loop__ = __webpack_require__(6);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__donut__ = __webpack_require__(7);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_three_OrbitControls__ = __webpack_require__(13);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_three_OrbitControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_three_OrbitControls__);

	var containerEl = document.getElementsByClassName('container')[0];
	var cW = containerEl.offsetWidth;
	var cH = containerEl.offsetHeight;

	var renderer = Object(__WEBPACK_IMPORTED_MODULE_3__renderer__["a" /* default */])({ containerEl: containerEl });

	var _Object = Object(__WEBPACK_IMPORTED_MODULE_4__scene__["a" /* default */])({
		cameraPos: [10, 0, 0],
		cameraAspect: cW / cH,
		cameraFov: 45
	}),
	    scene = _Object.scene,
	    camera = _Object.camera;

	var controls = new __WEBPACK_IMPORTED_MODULE_2_three__["OrbitControls"](camera);
	controls.enableDamping = true;
	controls.rotateSpeed = 0.5;
	controls.autoRotate = true;
	controls.dampingFactor = 0.25;

	Object(__WEBPACK_IMPORTED_MODULE_6__donut__["a" /* default */])().then(function (obj) {
		scene.add(obj);
	});

	window.addEventListener('resize', function () {
		cW = containerEl.offsetWidth;
		cH = containerEl.offsetHeight;
		renderer.setSize(cW, cH);
		camera.aspect = cW / cH;
		camera.updateProjectionMatrix();
	});

	Object(__WEBPACK_IMPORTED_MODULE_5__render_loop__["a" /* default */])({ renderer: renderer, scene: scene, camera: camera, controls: controls });

	/***/
},
/* 2 */
/***/function (module, exports) {

	// removed by extract-text-webpack-plugin

	/***/},
/* 3 */
/***/function (module, exports) {

	// removed by extract-text-webpack-plugin

	/***/},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";
	/* harmony import */
	var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(0);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);

	function Renderer(_ref) {
		var containerEl = _ref.containerEl,
		    clearColor = _ref.clearColor;

		var renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["WebGLRenderer"]({ antialias: true, alpha: true });
		var w = containerEl.offsetWidth;
		var h = containerEl.offsetHeight;
		renderer.setSize(w, h);
		if (clearColor) {
			renderer.setClearColor(clearColor);
		}
		renderer.setPixelRatio(window.devicePixelRatio);
		containerEl.appendChild(renderer.domElement);
		return renderer;
	}

	/* harmony default export */__webpack_exports__["a"] = Renderer;

	/***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";
	/* harmony import */
	var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(0);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);

	function Scene(_ref2) {
		var _camera$position;

		var cameraPos = _ref2.cameraPos,
		    cameraFov = _ref2.cameraFov,
		    cameraAspect = _ref2.cameraAspect;

		var scene = new __WEBPACK_IMPORTED_MODULE_0_three__["Scene"]();
		var camera = new __WEBPACK_IMPORTED_MODULE_0_three__["PerspectiveCamera"](cameraFov, cameraAspect, 1, 10000);
		var hemiLight = new __WEBPACK_IMPORTED_MODULE_0_three__["HemisphereLight"]('#FFFFFF', '#B99486', 1.5);
		(_camera$position = camera.position).set.apply(_camera$position, _toConsumableArray(cameraPos));
		camera.lookAt(scene.position);

		scene.add(camera);
		scene.add(hemiLight);
		return { scene: scene, camera: camera };
	}

	/* harmony default export */__webpack_exports__["a"] = Scene;

	/***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";

	function RenderLoop(_ref3) {
		var renderer = _ref3.renderer,
		    scene = _ref3.scene,
		    camera = _ref3.camera,
		    controls = _ref3.controls;

		if (controls) {
			controls.update();
		}
		window.requestAnimationFrame(function () {
			return RenderLoop({ renderer: renderer, scene: scene, camera: camera, controls: controls });
		});
		renderer.render(scene, camera);
	}

	/* harmony default export */__webpack_exports__["a"] = RenderLoop;

	/***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";
	/* harmony import */
	var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(0);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_three_LoaderSupport__ = __webpack_require__(8);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_three_LoaderSupport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three_LoaderSupport__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_three_OBJLoader2__ = __webpack_require__(9);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_three_OBJLoader2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three_OBJLoader2__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_three_MTLLoader__ = __webpack_require__(10);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_three_MTLLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_three_MTLLoader__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__models_low_poly_donut_obj__ = __webpack_require__(11);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__models_low_poly_donut_obj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__models_low_poly_donut_obj__);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__models_low_poly_donut_mtl__ = __webpack_require__(12);
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__models_low_poly_donut_mtl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__models_low_poly_donut_mtl__);

	function ExampleCube() {
		var loadingMgr = new __WEBPACK_IMPORTED_MODULE_0_three__["LoadingManager"]();
		var objLoader = new __WEBPACK_IMPORTED_MODULE_0_three__["OBJLoader2"](loadingMgr);
		objLoader.crossOrigin = '';

		return new Promise(function (resolve) {
			// objLoader.load(url, onLoad, onProgress, onError, onMeshAlter, useAsync)
			// objLoader.loadMtl(url, name, content, callbackOnLoad, crossOrigin)
			var onLoaderProgress = function onLoaderProgress(prog) {
				return console.log('proggy: ', prog);
			};
			var onLoaderError = function onLoaderError(err) {
				return console.error(err);
			};
			var onLoadMtl = function onLoadMtl(materials) {
				objLoader.setMaterials(materials);
				objLoader.setUseIndices(true);
				loadObj();
			};
			var onObjLoad = function onObjLoad(loaderEvent) {
				var obj = loaderEvent.detail.loaderRootNode;
				obj.rotation.set(0, 0, Math.PI * 1.5);
				resolve(obj);
			};
			var loadObj = function loadObj() {
				return objLoader.load(__WEBPACK_IMPORTED_MODULE_4__models_low_poly_donut_obj___default.a, onObjLoad, onLoaderProgress, onLoaderError);
			};
			objLoader.loadMtl(__WEBPACK_IMPORTED_MODULE_5__models_low_poly_donut_mtl___default.a, 'low-poly-donut.mtl', null, onLoadMtl, 'anonymous');
		});
	}

	/* harmony default export */__webpack_exports__["a"] = ExampleCube;

	/***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */
	(function (THREE) {
		/**
  * @author Kai Salmen / https://kaisalmen.de
  * Development repository: https://github.com/kaisalmen/WWOBJLoader
  */

		if (THREE.LoaderSupport === undefined) {
			THREE.LoaderSupport = {};
		}

		/**
   * Validation functions.
   * @class
   */
		THREE.LoaderSupport.Validator = {
			/**
    * If given input is null or undefined, false is returned otherwise true.
    *
    * @param input Can be anything
    * @returns {boolean}
    */
			isValid: function isValid(input) {
				return input !== null && input !== undefined;
			},
			/**
    * If given input is null or undefined, the defaultValue is returned otherwise the given input.
    *
    * @param input Can be anything
    * @param defaultValue Can be anything
    * @returns {*}
    */
			verifyInput: function verifyInput(input, defaultValue) {
				return input === null || input === undefined ? defaultValue : input;
			}
		};

		/**
   * Logging wrapper for console.
   * @class
   *
   * @param {boolean} enabled=true Tell if logger is enabled.
   * @param {boolean} debug=false Toggle debug logging.
   */
		THREE.LoaderSupport.ConsoleLogger = function () {

			function ConsoleLogger(enabled, debug) {
				this.enabled = enabled !== false;
				this.debug = debug === true;
			}

			/**
    * Enable or disable debug logging.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {boolean} debug True or False
    */
			ConsoleLogger.prototype.setDebug = function (debug) {
				this.debug = debug === true;
			};

			/**
    * Returns if is enabled and debug.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @returns {boolean}
    */
			ConsoleLogger.prototype.isDebug = function () {
				return this.isEnabled() && this.debug;
			};

			/**
    * Enable or disable info, debug and time logging.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {boolean} enabled True or False
    */
			ConsoleLogger.prototype.setEnabled = function (enabled) {
				this.enabled = enabled === true;
			};

			/**
    * Returns if is enabled.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @returns {boolean}
    */
			ConsoleLogger.prototype.isEnabled = function () {
				return this.enabled;
			};

			/**
    * Log a debug message if enabled and debug is set.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {string} message Message to log
    */
			ConsoleLogger.prototype.logDebug = function (message) {
				if (this.enabled && this.debug) console.info(message);
			};

			/**
    * Log an info message if enabled.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {string} message Message to log
    */
			ConsoleLogger.prototype.logInfo = function (message) {
				if (this.enabled) console.info(message);
			};

			/**
    * Log a warn message (always).
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {string} message Message to log
    */
			ConsoleLogger.prototype.logWarn = function (message) {
				console.warn(message);
			};

			/**
    * Log an error message (always).
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {string} message Message to log
    */
			ConsoleLogger.prototype.logError = function (message) {
				console.error(message);
			};

			/**
    * Start time measurement with provided id.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {string} id Time identification
    */
			ConsoleLogger.prototype.logTimeStart = function (id) {
				if (this.enabled) console.time(id);
			};

			/**
    * Stop time measurement started with provided id.
    * @memberOf THREE.LoaderSupport.ConsoleLogger
    *
    * @param {string} id Time identification
    */
			ConsoleLogger.prototype.logTimeEnd = function (id) {
				if (this.enabled) console.timeEnd(id);
			};

			return ConsoleLogger;
		}();

		/**
   * Callbacks utilized by loaders and builder.
   * @class
   */
		THREE.LoaderSupport.Callbacks = function () {

			var Validator = THREE.LoaderSupport.Validator;

			function Callbacks() {
				this.onProgress = null;
				this.onMeshAlter = null;
				this.onLoad = null;
				this.onLoadMaterials = null;
			}

			/**
    * Register callback function that is invoked by internal function "announceProgress" to print feedback.
    * @memberOf THREE.LoaderSupport.Callbacks
    *
    * @param {callback} callbackOnProgress Callback function for described functionality
    */
			Callbacks.prototype.setCallbackOnProgress = function (callbackOnProgress) {
				this.onProgress = Validator.verifyInput(callbackOnProgress, this.onProgress);
			};

			/**
    * Register callback function that is called every time a mesh was loaded.
    * Use {@link THREE.LoaderSupport.LoadedMeshUserOverride} for alteration instructions (geometry, material or disregard mesh).
    * @memberOf THREE.LoaderSupport.Callbacks
    *
    * @param {callback} callbackOnMeshAlter Callback function for described functionality
    */
			Callbacks.prototype.setCallbackOnMeshAlter = function (callbackOnMeshAlter) {
				this.onMeshAlter = Validator.verifyInput(callbackOnMeshAlter, this.onMeshAlter);
			};

			/**
    * Register callback function that is called once loading of the complete OBJ file is completed.
    * @memberOf THREE.LoaderSupport.Callbacks
    *
    * @param {callback} callbackOnLoad Callback function for described functionality
    */
			Callbacks.prototype.setCallbackOnLoad = function (callbackOnLoad) {
				this.onLoad = Validator.verifyInput(callbackOnLoad, this.onLoad);
			};

			/**
    * Register callback function that is called when materials have been loaded.
    * @memberOf THREE.LoaderSupport.Callbacks
    *
    * @param {callback} callbackOnLoadMaterials Callback function for described functionality
    */
			Callbacks.prototype.setCallbackOnLoadMaterials = function (callbackOnLoadMaterials) {
				this.onLoadMaterials = Validator.verifyInput(callbackOnLoadMaterials, this.onLoadMaterials);
			};

			return Callbacks;
		}();

		/**
   * Object to return by callback onMeshAlter. Used to disregard a certain mesh or to return one to many meshes.
   * @class
   *
   * @param {boolean} disregardMesh=false Tell implementation to completely disregard this mesh
   * @param {boolean} disregardMesh=false Tell implementation that mesh(es) have been altered or added
   */
		THREE.LoaderSupport.LoadedMeshUserOverride = function () {

			function LoadedMeshUserOverride(disregardMesh, alteredMesh) {
				this.disregardMesh = disregardMesh === true;
				this.alteredMesh = alteredMesh === true;
				this.meshes = [];
			}

			/**
    * Add a mesh created within callback.
    *
    * @memberOf THREE.OBJLoader2.LoadedMeshUserOverride
    *
    * @param {THREE.Mesh} mesh
    */
			LoadedMeshUserOverride.prototype.addMesh = function (mesh) {
				this.meshes.push(mesh);
				this.alteredMesh = true;
			};

			/**
    * Answers if mesh shall be disregarded completely.
    *
    * @returns {boolean}
    */
			LoadedMeshUserOverride.prototype.isDisregardMesh = function () {
				return this.disregardMesh;
			};

			/**
    * Answers if new mesh(es) were created.
    *
    * @returns {boolean}
    */
			LoadedMeshUserOverride.prototype.providesAlteredMeshes = function () {
				return this.alteredMesh;
			};

			return LoadedMeshUserOverride;
		}();

		/**
   * A resource description used by {@link THREE.LoaderSupport.PrepData} and others.
   * @class
   *
   * @param {string} url URL to the file
   * @param {string} extension The file extension (type)
   */
		THREE.LoaderSupport.ResourceDescriptor = function () {

			var Validator = THREE.LoaderSupport.Validator;

			function ResourceDescriptor(url, extension) {
				var urlParts = url.split('/');

				if (urlParts.length < 2) {

					this.path = null;
					this.name = this.name = url;
					this.url = url;
				} else {

					this.path = Validator.verifyInput(urlParts.slice(0, urlParts.length - 1).join('/') + '/', null);
					this.name = Validator.verifyInput(urlParts[urlParts.length - 1], null);
					this.url = url;
				}
				this.extension = Validator.verifyInput(extension, "default");
				this.extension = this.extension.trim();
				this.content = null;
			}

			/**
    * Set the content of this resource (String)
    * @memberOf THREE.LoaderSupport.ResourceDescriptor
    *
    * @param {Object} content The file content as arraybuffer or text
    */
			ResourceDescriptor.prototype.setContent = function (content) {
				this.content = Validator.verifyInput(content, null);
			};

			return ResourceDescriptor;
		}();

		/**
   * Configuration instructions to be used by run method.
   * @class
   */
		THREE.LoaderSupport.PrepData = function () {

			var Validator = THREE.LoaderSupport.Validator;

			function PrepData(modelName) {
				this.modelName = Validator.verifyInput(modelName, '');
				this.resources = [];
				this.streamMeshesTo = null;
				this.materialPerSmoothingGroup = false;
				this.useIndices = false;
				this.disregardNormals = false;
				this.callbacks = new THREE.LoaderSupport.Callbacks();
				this.crossOrigin;
				this.useAsync = false;
			}

			/**
    * Set the node where the loaded objects will be attached directly.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {THREE.Object3D} streamMeshesTo Object already attached to scenegraph where new meshes will be attached to
    */
			PrepData.prototype.setStreamMeshesTo = function (streamMeshesTo) {
				this.streamMeshesTo = Validator.verifyInput(streamMeshesTo, null);
			};

			/**
    * Tells whether a material shall be created per smoothing group.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {boolean} materialPerSmoothingGroup=false
    */
			PrepData.prototype.setMaterialPerSmoothingGroup = function (materialPerSmoothingGroup) {
				this.materialPerSmoothingGroup = materialPerSmoothingGroup === true;
			};

			/**
    * Tells whether indices should be used
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {boolean} useIndices=false
    */
			PrepData.prototype.setUseIndices = function (useIndices) {
				this.useIndices = useIndices === true;
			};

			/**
    * Tells whether normals should be completely disregarded and regenerated.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {boolean} disregardNormals=false
    */
			PrepData.prototype.setDisregardNormals = function (disregardNormals) {
				this.disregardNormals = disregardNormals === true;
			};

			/**
    * Returns all callbacks as {@link THREE.LoaderSupport.Callbacks}
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @returns {THREE.LoaderSupport.Callbacks}
    */
			PrepData.prototype.getCallbacks = function () {
				return this.callbacks;
			};

			/**
    * Sets the CORS string to be used.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {string} crossOrigin CORS value
    */
			PrepData.prototype.setCrossOrigin = function (crossOrigin) {
				this.crossOrigin = crossOrigin;
			};

			/**
    * Add a resource description.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {THREE.LoaderSupport.ResourceDescriptor}
    */
			PrepData.prototype.addResource = function (resource) {
				this.resources.push(resource);
			};

			/**
    * If true uses async loading with worker, if false loads data synchronously.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @param {boolean} useAsync
    */
			PrepData.prototype.setUseAsync = function (useAsync) {
				this.useAsync = useAsync === true;
			};

			/**
    * Clones this object and returns it afterwards.
    * @memberOf THREE.LoaderSupport.PrepData
    *
    * @returns {@link THREE.LoaderSupport.PrepData}
    */
			PrepData.prototype.clone = function () {
				var clone = new THREE.LoaderSupport.PrepData(this.modelName);
				clone.resources = this.resources;
				clone.streamMeshesTo = this.streamMeshesTo;
				clone.materialPerSmoothingGroup = this.materialPerSmoothingGroup;
				clone.useIndices = this.useIndices;
				clone.disregardNormals = this.disregardNormals;
				clone.callbacks = this.callbacks;
				clone.crossOrigin = this.crossOrigin;
				clone.useAsync = this.useAsync;
				return clone;
			};

			return PrepData;
		}();

		/**
   * Builds one or many THREE.Mesh from one raw set of Arraybuffers, materialGroup descriptions and further parameters.
   * Supports vertex, vertexColor, normal, uv and index buffers.
   * @class
   */
		THREE.LoaderSupport.Builder = function () {

			var LOADER_BUILDER_VERSION = '1.1.1';

			var Validator = THREE.LoaderSupport.Validator;
			var ConsoleLogger = THREE.LoaderSupport.ConsoleLogger;

			function Builder(logger) {
				this.logger = Validator.verifyInput(logger, new ConsoleLogger());
				this.logger.logInfo('Using THREE.LoaderSupport.Builder version: ' + LOADER_BUILDER_VERSION);
				this.callbacks = new THREE.LoaderSupport.Callbacks();
				this.materials = [];
			}

			/**
    * Set materials loaded by any supplier of an Array of {@link THREE.Material}.
    * @memberOf THREE.LoaderSupport.Builder
    *
    * @param {THREE.Material[]} materials Array of {@link THREE.Material}
    */
			Builder.prototype.setMaterials = function (materials) {
				var payload = {
					cmd: 'materialData',
					materials: {
						materialCloneInstructions: null,
						serializedMaterials: null,
						runtimeMaterials: Validator.isValid(this.callbacks.onLoadMaterials) ? this.callbacks.onLoadMaterials(materials) : materials
					}
				};
				this.updateMaterials(payload);
			};

			Builder.prototype._setCallbacks = function (callbacks) {
				if (Validator.isValid(callbacks.onProgress)) this.callbacks.setCallbackOnProgress(callbacks.onProgress);
				if (Validator.isValid(callbacks.onMeshAlter)) this.callbacks.setCallbackOnMeshAlter(callbacks.onMeshAlter);
				if (Validator.isValid(callbacks.onLoad)) this.callbacks.setCallbackOnLoad(callbacks.onLoad);
				if (Validator.isValid(callbacks.onLoadMaterials)) this.callbacks.setCallbackOnLoadMaterials(callbacks.onLoadMaterials);
			};

			/**
    * Delegates processing of the payload (mesh building or material update) to the corresponding functions (BW-compatibility).
    * @memberOf THREE.LoaderSupport.Builder
    *
    * @param {Object} payload Raw Mesh or Material descriptions.
    * @returns {THREE.Mesh[]} mesh Array of {@link THREE.Mesh} or null in case of material update
    */
			Builder.prototype.processPayload = function (payload) {
				if (payload.cmd === 'meshData') {

					return this.buildMeshes(payload);
				} else if (payload.cmd === 'materialData') {

					this.updateMaterials(payload);
					return null;
				}
			};

			/**
    * Builds one or multiple meshes from the data described in the payload (buffers, params, material info).
    * @memberOf THREE.LoaderSupport.Builder
    *
    * @param {Object} meshPayload Raw mesh description (buffers, params, materials) used to build one to many meshes.
    * @returns {THREE.Mesh[]} mesh Array of {@link THREE.Mesh}
    */
			Builder.prototype.buildMeshes = function (meshPayload) {
				var meshName = meshPayload.params.meshName;

				var bufferGeometry = new THREE.BufferGeometry();
				bufferGeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.vertices), 3));
				if (Validator.isValid(meshPayload.buffers.indices)) {

					bufferGeometry.setIndex(new THREE.BufferAttribute(new Uint32Array(meshPayload.buffers.indices), 1));
				}
				var haveVertexColors = Validator.isValid(meshPayload.buffers.colors);
				if (haveVertexColors) {

					bufferGeometry.addAttribute('color', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.colors), 3));
				}
				if (Validator.isValid(meshPayload.buffers.normals)) {

					bufferGeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.normals), 3));
				} else {

					bufferGeometry.computeVertexNormals();
				}
				if (Validator.isValid(meshPayload.buffers.uvs)) {

					bufferGeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(meshPayload.buffers.uvs), 2));
				}

				var material, materialName, key;
				var materialNames = meshPayload.materials.materialNames;
				var createMultiMaterial = meshPayload.materials.multiMaterial;
				var multiMaterials = [];
				for (key in materialNames) {

					materialName = materialNames[key];
					material = this.materials[materialName];
					if (createMultiMaterial) multiMaterials.push(material);
				}
				if (createMultiMaterial) {

					material = multiMaterials;
					var materialGroups = meshPayload.materials.materialGroups;
					var materialGroup;
					for (key in materialGroups) {

						materialGroup = materialGroups[key];
						bufferGeometry.addGroup(materialGroup.start, materialGroup.count, materialGroup.index);
					}
				}

				var meshes = [];
				var mesh;
				var callbackOnMeshAlter = this.callbacks.onMeshAlter;
				var callbackOnMeshAlterResult;
				var useOrgMesh = true;
				if (Validator.isValid(callbackOnMeshAlter)) {

					callbackOnMeshAlterResult = callbackOnMeshAlter({
						detail: {
							meshName: meshName,
							bufferGeometry: bufferGeometry,
							material: material
						}
					});
					if (Validator.isValid(callbackOnMeshAlterResult)) {

						if (!callbackOnMeshAlterResult.isDisregardMesh() && callbackOnMeshAlterResult.providesAlteredMeshes()) {

							for (var i in callbackOnMeshAlterResult.meshes) {

								meshes.push(callbackOnMeshAlterResult.meshes[i]);
							}
						}
						useOrgMesh = false;
					}
				}
				if (useOrgMesh) {

					mesh = new THREE.Mesh(bufferGeometry, material);
					mesh.name = meshName;
					meshes.push(mesh);
				}

				var progressMessage;
				if (Validator.isValid(meshes) && meshes.length > 0) {

					var meshNames = [];
					for (var i in meshes) {

						mesh = meshes[i];
						meshNames[i] = mesh.name;
					}
					progressMessage = 'Adding mesh(es) (' + meshNames.length + ': ' + meshNames + ') from input mesh: ' + meshName;
					progressMessage += ' (' + (meshPayload.progress.numericalValue * 100).toFixed(2) + '%)';
				} else {

					progressMessage = 'Not adding mesh: ' + meshName;
					progressMessage += ' (' + (meshPayload.progress.numericalValue * 100).toFixed(2) + '%)';
				}
				var callbackOnProgress = this.callbacks.onProgress;
				if (Validator.isValid(callbackOnProgress)) {

					var event = new CustomEvent('BuilderEvent', {
						detail: {
							type: 'progress',
							modelName: meshPayload.params.meshName,
							text: progressMessage,
							numericalValue: meshPayload.progress.numericalValue
						}
					});
					callbackOnProgress(event);
				}

				return meshes;
			};

			/**
    * Updates the materials with contained material objects (sync) or from alteration instructions (async).
    * @memberOf THREE.LoaderSupport.Builder
    *
    * @param {Object} materialPayload Material update instructions
    */
			Builder.prototype.updateMaterials = function (materialPayload) {
				var material, materialName;
				var materialCloneInstructions = materialPayload.materials.materialCloneInstructions;
				if (Validator.isValid(materialCloneInstructions)) {

					var materialNameOrg = materialCloneInstructions.materialNameOrg;
					var materialOrg = this.materials[materialNameOrg];
					material = materialOrg.clone();

					materialName = materialCloneInstructions.materialName;
					material.name = materialName;

					var materialProperties = materialCloneInstructions.materialProperties;
					for (var key in materialProperties) {

						if (material.hasOwnProperty(key) && materialProperties.hasOwnProperty(key)) material[key] = materialProperties[key];
					}
					this.materials[materialName] = material;
				}

				var materials = materialPayload.materials.serializedMaterials;
				if (Validator.isValid(materials) && Object.keys(materials).length > 0) {

					var loader = new THREE.MaterialLoader();
					var materialJson;
					for (materialName in materials) {

						materialJson = materials[materialName];
						if (Validator.isValid(materialJson)) {

							material = loader.parse(materialJson);
							this.logger.logInfo('De-serialized material with name "' + materialName + '" will be added.');
							this.materials[materialName] = material;
						}
					}
				}

				materials = materialPayload.materials.runtimeMaterials;
				if (Validator.isValid(materials) && Object.keys(materials).length > 0) {

					for (materialName in materials) {

						material = materials[materialName];
						this.logger.logInfo('Material with name "' + materialName + '" will be added.');
						this.materials[materialName] = material;
					}
				}
			};

			/**
    * Returns the mapping object of material name and corresponding jsonified material.
    *
    * @returns {Object} Map of Materials in JSON representation
    */
			Builder.prototype.getMaterialsJSON = function () {
				var materialsJSON = {};
				var material;
				for (var materialName in this.materials) {

					material = this.materials[materialName];
					materialsJSON[materialName] = material.toJSON();
				}

				return materialsJSON;
			};

			/**
    * Returns the mapping object of material name and corresponding material.
    *
    * @returns {Object} Map of {@link THREE.Material}
    */
			Builder.prototype.getMaterials = function () {
				return this.materials;
			};

			return Builder;
		}();

		/**
   * Base class to be used by loaders.
   * @class
   *
   * @param {THREE.DefaultLoadingManager} [manager] The loadingManager for the loader to use. Default is {@link THREE.DefaultLoadingManager}
   * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
   */
		THREE.LoaderSupport.LoaderBase = function () {

			var Validator = THREE.LoaderSupport.Validator;
			var ConsoleLogger = THREE.LoaderSupport.ConsoleLogger;

			function LoaderBase(manager, logger) {
				this.manager = Validator.verifyInput(manager, THREE.DefaultLoadingManager);
				this.logger = Validator.verifyInput(logger, new ConsoleLogger());

				this.modelName = '';
				this.instanceNo = 0;
				this.path = '';
				this.useIndices = false;
				this.disregardNormals = false;

				this.loaderRootNode = new THREE.Group();
				this.builder = new THREE.LoaderSupport.Builder(this.logger);
				this._createDefaultMaterials();
				this.callbacks = new THREE.LoaderSupport.Callbacks();
			};

			LoaderBase.prototype._createDefaultMaterials = function () {
				var defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xDCF1FF });
				defaultMaterial.name = 'defaultMaterial';

				var vertexColorMaterial = new THREE.MeshStandardMaterial({ color: 0xDCF1FF });
				vertexColorMaterial.name = 'vertexColorMaterial';
				vertexColorMaterial.vertexColors = THREE.VertexColors;

				var runtimeMaterials = {};
				runtimeMaterials[defaultMaterial.name] = defaultMaterial;
				runtimeMaterials[vertexColorMaterial.name] = vertexColorMaterial;

				this.builder.updateMaterials({
					cmd: 'materialData',
					materials: {
						materialCloneInstructions: null,
						serializedMaterials: null,
						runtimeMaterials: runtimeMaterials
					}
				});
			};

			LoaderBase.prototype._applyPrepData = function (prepData) {
				if (Validator.isValid(prepData)) {

					this.setModelName(prepData.modelName);
					this.setStreamMeshesTo(prepData.streamMeshesTo);
					this.builder.setMaterials(prepData.materials);
					this.setUseIndices(prepData.useIndices);
					this.setDisregardNormals(prepData.disregardNormals);

					this._setCallbacks(prepData.getCallbacks());
				}
			};

			LoaderBase.prototype._setCallbacks = function (callbacks) {
				if (Validator.isValid(callbacks.onProgress)) this.callbacks.setCallbackOnProgress(callbacks.onProgress);
				if (Validator.isValid(callbacks.onMeshAlter)) this.callbacks.setCallbackOnMeshAlter(callbacks.onMeshAlter);
				if (Validator.isValid(callbacks.onLoad)) this.callbacks.setCallbackOnLoad(callbacks.onLoad);
				if (Validator.isValid(callbacks.onLoadMaterials)) this.callbacks.setCallbackOnLoadMaterials(callbacks.onLoadMaterials);

				this.builder._setCallbacks(this.callbacks);
			};

			/**
    * Provides access to console logging wrapper.
    *
    * @returns {THREE.LoaderSupport.ConsoleLogger}
    */
			LoaderBase.prototype.getLogger = function () {
				return this.logger;
			};

			/**
    * Set the name of the model.
    * @memberOf THREE.LoaderSupport.LoaderBase
    *
    * @param {string} modelName
    */
			LoaderBase.prototype.setModelName = function (modelName) {
				this.modelName = Validator.verifyInput(modelName, this.modelName);
			};

			/**
    * The URL of the base path.
    * @memberOf THREE.LoaderSupport.LoaderBase
    *
    * @param {string} path URL
    */
			LoaderBase.prototype.setPath = function (path) {
				this.path = Validator.verifyInput(path, this.path);
			};

			/**
    * Set the node where the loaded objects will be attached directly.
    * @memberOf THREE.LoaderSupport.LoaderBase
    *
    * @param {THREE.Object3D} streamMeshesTo Object already attached to scenegraph where new meshes will be attached to
    */
			LoaderBase.prototype.setStreamMeshesTo = function (streamMeshesTo) {
				this.loaderRootNode = Validator.verifyInput(streamMeshesTo, this.loaderRootNode);
			};

			/**
    * Set materials loaded by MTLLoader or any other supplier of an Array of {@link THREE.Material}.
    * @memberOf THREE.LoaderSupport.LoaderBase
    *
    * @param {THREE.Material[]} materials Array of {@link THREE.Material}
    */
			LoaderBase.prototype.setMaterials = function (materials) {
				this.builder.setMaterials(materials);
			};

			/**
    * Instructs loaders to create indexed {@link THREE.BufferGeometry}.
    * @memberOf THREE.LoaderSupport.LoaderBase
    *
    * @param {boolean} useIndices=false
    */
			LoaderBase.prototype.setUseIndices = function (useIndices) {
				this.useIndices = useIndices === true;
			};

			/**
    * Tells whether normals should be completely disregarded and regenerated.
    * @memberOf THREE.LoaderSupport.LoaderBase
    *
    * @param {boolean} disregardNormals=false
    */
			LoaderBase.prototype.setDisregardNormals = function (disregardNormals) {
				this.disregardNormals = disregardNormals === true;
			};

			/**
    * Announce feedback which is give to the registered callbacks.
    * @memberOf THREE.LoaderSupport.LoaderBase
    * @private
    *
    * @param {string} type The type of event
    * @param {string} text Textual description of the event
    * @param {number} numericalValue Numerical value describing the progress
    */
			LoaderBase.prototype.onProgress = function (type, text, numericalValue) {
				var content = Validator.isValid(text) ? text : '';
				var event = {
					detail: {
						type: type,
						modelName: this.modelName,
						instanceNo: this.instanceNo,
						text: content,
						numericalValue: numericalValue
					}
				};

				if (Validator.isValid(this.callbacks.onProgress)) this.callbacks.onProgress(event);

				this.logger.logDebug(content);
			};

			return LoaderBase;
		}();

		/**
   * Default implementation of the WorkerRunner responsible for creation and configuration of the parser within the worker.
   *
   * @class
   */
		THREE.LoaderSupport.WorkerRunnerRefImpl = function () {

			function WorkerRunnerRefImpl() {
				var scope = this;
				var scopedRunner = function scopedRunner(event) {
					scope.processMessage(event.data);
				};
				self.addEventListener('message', scopedRunner, false);
			}

			/**
    * Applies values from parameter object via set functions or via direct assignment.
    * @memberOf THREE.LoaderSupport.WorkerRunnerRefImpl
    *
    * @param {Object} parser The parser instance
    * @param {Object} params The parameter object
    */
			WorkerRunnerRefImpl.prototype.applyProperties = function (parser, params) {
				var property, funcName, values;
				for (property in params) {
					funcName = 'set' + property.substring(0, 1).toLocaleUpperCase() + property.substring(1);
					values = params[property];

					if (typeof parser[funcName] === 'function') {

						parser[funcName](values);
					} else if (parser.hasOwnProperty(property)) {

						parser[property] = values;
					}
				}
			};

			/**
    * Configures the Parser implementation according the supplied configuration object.
    * @memberOf THREE.LoaderSupport.WorkerRunnerRefImpl
    *
    * @param {Object} payload Raw mesh description (buffers, params, materials) used to build one to many meshes.
    */
			WorkerRunnerRefImpl.prototype.processMessage = function (payload) {
				var logger = new ConsoleLogger();
				if (Validator.isValid(payload.logger)) {

					logger.setEnabled(payload.logger.enabled);
					logger.setDebug(payload.logger.debug);
				}
				if (payload.cmd === 'run') {

					var callbacks = {
						callbackBuilder: function callbackBuilder(payload) {
							self.postMessage(payload);
						},
						callbackProgress: function callbackProgress(text) {
							logger.logDebug('WorkerRunner: progress: ' + text);
						}
					};

					// Parser is expected to be named as such
					var parser = new Parser(logger);
					this.applyProperties(parser, payload.params);
					this.applyProperties(parser, payload.materials);
					this.applyProperties(parser, callbacks);
					parser.workerScope = self;
					parser.parse(payload.data.input, payload.data.options);

					logger.logInfo('WorkerRunner: Run complete!');

					callbacks.callbackBuilder({
						cmd: 'complete',
						msg: 'WorkerRunner completed run.'
					});
				} else {

					logger.logError('WorkerRunner: Received unknown command: ' + payload.cmd);
				}
			};

			return WorkerRunnerRefImpl;
		}();

		/**
   * This class provides means to transform existing parser code into a web worker. It defines a simple communication protocol
   * which allows to configure the worker and receive raw mesh data during execution.
   * @class
   *
   * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
   */
		THREE.LoaderSupport.WorkerSupport = function () {

			var WORKER_SUPPORT_VERSION = '1.1.1';

			var Validator = THREE.LoaderSupport.Validator;

			function WorkerSupport(logger) {
				this.logger = Validator.verifyInput(logger, new THREE.LoaderSupport.ConsoleLogger());
				this.logger.logInfo('Using THREE.LoaderSupport.WorkerSupport version: ' + WORKER_SUPPORT_VERSION);

				// check worker support first
				if (window.Worker === undefined) throw "This browser does not support web workers!";
				if (window.Blob === undefined) throw "This browser does not support Blob!";
				if (typeof window.URL.createObjectURL !== 'function') throw "This browser does not support Object creation from URL!";

				this.worker = null;
				this.workerCode = null;
				this.loading = true;
				this.queuedMessage = null;
				this.running = false;
				this.terminateRequested = false;

				this.callbacks = {
					builder: null,
					onLoad: null
				};
			}

			/**
    * Validate the status of worker code and the derived worker.
    * @memberOf THREE.LoaderSupport.WorkerSupport
    *
    * @param {Function} functionCodeBuilder Function that is invoked with funcBuildObject and funcBuildSingelton that allows stringification of objects and singletons.
    * @param {boolean} forceWorkerReload Force re-build of the worker code.
    * @param {String[]} libLocations URL of libraries that shall be added to worker code relative to libPath
    * @param {String} libPath Base path used for loading libraries
    * @param {THREE.LoaderSupport.WorkerRunnerRefImpl} runnerImpl The default worker parser wrapper implementation (communication and execution). An extended class could be passed here.
    */
			WorkerSupport.prototype.validate = function (functionCodeBuilder, forceWorkerReload, libLocations, libPath, runnerImpl) {
				this.running = false;
				if (forceWorkerReload) {

					this.worker = null;
					this.workerCode = null;
					this.loading = true;
					this.queuedMessage = null;
					this.callbacks.builder = null;
					this.callbacks.onLoad = null;
				}

				if (!Validator.isValid(this.worker)) {

					this.logger.logInfo('WorkerSupport: Building worker code...');
					this.logger.logTimeStart('buildWebWorkerCode');

					var workerRunner;
					if (Validator.isValid(runnerImpl)) {

						this.logger.logInfo('WorkerSupport: Using "' + runnerImpl.name + '" as Runncer class for worker.');
						workerRunner = runnerImpl;
					} else {

						this.logger.logInfo('WorkerSupport: Using DEFAULT "THREE.LoaderSupport.WorkerRunnerRefImpl" as Runncer class for worker.');
						workerRunner = THREE.LoaderSupport.WorkerRunnerRefImpl;
					}

					var scope = this;
					var buildWorkerCode = function buildWorkerCode(baseWorkerCode) {
						scope.workerCode = baseWorkerCode;
						if (workerRunner == THREE.LoaderSupport.WorkerRunnerRefImpl) {

							scope.workerCode += buildObject('Validator', THREE.LoaderSupport.Validator);
							scope.workerCode += buildSingelton('ConsoleLogger', 'ConsoleLogger', THREE.LoaderSupport.ConsoleLogger);
						}
						scope.workerCode += functionCodeBuilder(buildObject, buildSingelton);
						scope.workerCode += buildSingelton(workerRunner.name, workerRunner.name, workerRunner);
						scope.workerCode += 'new ' + workerRunner.name + '();\n\n';

						var blob = new Blob([scope.workerCode], { type: 'application/javascript' });
						scope.worker = new Worker(window.URL.createObjectURL(blob));
						scope.logger.logTimeEnd('buildWebWorkerCode');

						var receiveWorkerMessage = function receiveWorkerMessage(e) {
							var payload = e.data;

							switch (payload.cmd) {
								case 'meshData':
								case 'materialData':
								case 'imageData':
									scope.callbacks.builder(payload);
									break;

								case 'complete':
									scope.callbacks.onLoad(payload.msg);
									scope.running = false;

									if (scope.terminateRequested) {

										scope.logger.logInfo('WorkerSupport [' + workerRunner + ']: Run is complete. Terminating application on request!');
										scope.terminateWorker();
									}
									break;

								case 'error':
									scope.logger.logError('WorkerSupport [' + workerRunner + ']: Reported error: ' + payload.msg);
									break;

								default:
									scope.logger.logError('WorkerSupport [' + workerRunner + ']: Received unknown command: ' + payload.cmd);
									break;

							}
						};
						scope.worker.addEventListener('message', receiveWorkerMessage, false);
						scope.loading = false;
						scope._postMessage();
					};

					if (Validator.isValid(libLocations) && libLocations.length > 0) {

						var libsContent = '';
						var loadAllLibraries = function loadAllLibraries(path, locations) {
							if (locations.length === 0) {

								buildWorkerCode(libsContent);
							} else {

								var loadedLib = function loadedLib(contentAsString) {
									libsContent += contentAsString;
									loadAllLibraries(path, locations);
								};

								var fileLoader = new THREE.FileLoader();
								fileLoader.setPath(path);
								fileLoader.setResponseType('text');
								fileLoader.load(locations[0], loadedLib);
								locations.shift();
							}
						};
						loadAllLibraries(libPath, libLocations);
					} else {

						buildWorkerCode('');
					}
				}
			};

			/**
    * Terminate the worker and the code.
    * @memberOf THREE.LoaderSupport.WorkerSupport
    */
			WorkerSupport.prototype.terminateWorker = function () {
				if (Validator.isValid(this.worker)) {
					this.worker.terminate();
				}
				this.worker = null;
				this.workerCode = null;
			};

			/**
    * Specify functions that should be build when new raw mesh data becomes available and when the parser is finished.
    * @memberOf THREE.LoaderSupport.WorkerSupport
    *
    * @param {Function} builder The builder function. Default is {@link THREE.LoaderSupport.Builder}.
    * @param {Function} onLoad The function that is called when parsing is complete.
    */
			WorkerSupport.prototype.setCallbacks = function (builder, onLoad) {
				this.callbacks = {
					builder: builder,
					onLoad: onLoad
				};
			};

			var buildObject = function buildObject(fullName, object) {
				var objectString = fullName + ' = {\n';
				var part;
				for (var name in object) {

					part = object[name];
					if (typeof part === 'string' || part instanceof String) {

						part = part.replace('\n', '\\n');
						part = part.replace('\r', '\\r');
						objectString += '\t' + name + ': "' + part + '",\n';
					} else if (part instanceof Array) {

						objectString += '\t' + name + ': [' + part + '],\n';
					} else if (Number.isInteger(part)) {

						objectString += '\t' + name + ': ' + part + ',\n';
					} else if (typeof part === 'function') {

						objectString += '\t' + name + ': ' + part + ',\n';
					}
				}
				objectString += '}\n\n';

				return objectString;
			};

			var buildSingelton = function buildSingelton(fullName, internalName, object) {
				var objectString = fullName + ' = (function () {\n\n';
				objectString += '\t' + object.prototype.constructor.toString() + '\n\n';
				objectString = objectString.replace(object.name, internalName);

				var funcString;
				var objectPart;
				for (var name in object.prototype) {

					objectPart = object.prototype[name];
					if (typeof objectPart === 'function') {

						funcString = objectPart.toString();
						objectString += '\t' + internalName + '.prototype.' + name + ' = ' + funcString + ';\n\n';
					}
				}
				objectString += '\treturn ' + internalName + ';\n';
				objectString += '})();\n\n';

				return objectString;
			};

			/**
    * Request termination of worker once parser is finished.
    * @memberOf THREE.LoaderSupport.WorkerSupport
    *
    * @param {boolean} terminateRequested True or false.
    */
			WorkerSupport.prototype.setTerminateRequested = function (terminateRequested) {
				this.terminateRequested = terminateRequested === true;
			};

			/**
    * Runs the parser with the provided configuration.
    * @memberOf THREE.LoaderSupport.WorkerSupport
    *
    * @param {Object} payload Raw mesh description (buffers, params, materials) used to build one to many meshes.
    */
			WorkerSupport.prototype.run = function (payload) {
				if (!Validator.isValid(this.callbacks.builder)) throw 'Unable to run as no "builder" callback is set.';
				if (!Validator.isValid(this.callbacks.onLoad)) throw 'Unable to run as no "onLoad" callback is set.';
				if (Validator.isValid(this.worker) || this.loading) {
					if (payload.cmd !== 'run') payload.cmd = 'run';
					this.queuedMessage = payload;
					this.running = true;
					this._postMessage();
				}
			};

			WorkerSupport.prototype._postMessage = function () {
				if (!this.loading && Validator.isValid(this.queuedMessage)) {
					this.worker.postMessage(this.queuedMessage);
				}
			};

			return WorkerSupport;
		}();

		/**
   * Orchestrate loading of multiple OBJ files/data from an instruction queue with a configurable amount of workers (1-16).
   * Workflow:
   *   prepareWorkers
   *   enqueueForRun
   *   processQueue
   *   deregister
   *
   * @class
   *
   * @param {string} classDef Class definition to be used for construction
   * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
   */
		THREE.LoaderSupport.WorkerDirector = function () {

			var LOADER_WORKER_DIRECTOR_VERSION = '2.0.0';

			var Validator = THREE.LoaderSupport.Validator;

			var MAX_WEB_WORKER = 16;
			var MAX_QUEUE_SIZE = 8192;

			function WorkerDirector(classDef, logger) {
				this.logger = Validator.verifyInput(logger, new THREE.LoaderSupport.ConsoleLogger());
				this.logger.logInfo('Using THREE.LoaderSupport.WorkerDirector version: ' + LOADER_WORKER_DIRECTOR_VERSION);

				this.maxQueueSize = MAX_QUEUE_SIZE;
				this.maxWebWorkers = MAX_WEB_WORKER;
				this.crossOrigin = null;

				if (!Validator.isValid(classDef)) throw 'Provided invalid classDef: ' + classDef;

				this.workerDescription = {
					classDef: classDef,
					globalCallbacks: {},
					workerSupports: []
				};
				this.objectsCompleted = 0;
				this.instructionQueue = [];
			}

			/**
    * Returns the maximum length of the instruction queue.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    *
    * @returns {number}
    */
			WorkerDirector.prototype.getMaxQueueSize = function () {
				return this.maxQueueSize;
			};

			/**
    * Returns the maximum number of workers.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    *
    * @returns {number}
    */
			WorkerDirector.prototype.getMaxWebWorkers = function () {
				return this.maxWebWorkers;
			};

			/**
    * Sets the CORS string to be used.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    *
    * @param {string} crossOrigin CORS value
    */
			WorkerDirector.prototype.setCrossOrigin = function (crossOrigin) {
				this.crossOrigin = crossOrigin;
			};

			/**
    * Create or destroy workers according limits. Set the name and register callbacks for dynamically created web workers.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    *
    * @param {THREE.OBJLoader2.WWOBJLoader2.PrepDataCallbacks} globalCallbacks  Register global callbacks used by all web workers
    * @param {number} maxQueueSize Set the maximum size of the instruction queue (1-1024)
    * @param {number} maxWebWorkers Set the maximum amount of workers (1-16)
    */
			WorkerDirector.prototype.prepareWorkers = function (globalCallbacks, maxQueueSize, maxWebWorkers) {
				if (Validator.isValid(globalCallbacks)) this.workerDescription.globalCallbacks = globalCallbacks;
				this.maxQueueSize = Math.min(maxQueueSize, MAX_QUEUE_SIZE);
				this.maxWebWorkers = Math.min(maxWebWorkers, MAX_WEB_WORKER);
				this.objectsCompleted = 0;
				this.instructionQueue = [];

				var start = this.workerDescription.workerSupports.length;
				var i;
				if (start < this.maxWebWorkers) {

					for (i = start; i < this.maxWebWorkers; i++) {

						this.workerDescription.workerSupports[i] = {
							workerSupport: new THREE.LoaderSupport.WorkerSupport(this.logger),
							loader: null
						};
					}
				} else {

					for (i = start - 1; i >= this.maxWebWorkers; i--) {

						this.workerDescription.workerSupports[i].workerSupport.setRequestTerminate(true);
						this.workerDescription.workerSupports.pop();
					}
				}
			};

			/**
    * Store run instructions in internal instructionQueue.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    *
    * @param {THREE.LoaderSupport.PrepData} prepData
    */
			WorkerDirector.prototype.enqueueForRun = function (prepData) {
				if (this.instructionQueue.length < this.maxQueueSize) {
					this.instructionQueue.push(prepData);
				}
			};

			/**
    * Process the instructionQueue until it is depleted.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    */
			WorkerDirector.prototype.processQueue = function () {
				if (this.instructionQueue.length === 0) return;

				var length = Math.min(this.maxWebWorkers, this.instructionQueue.length);
				for (var i = 0; i < length; i++) {

					this._kickWorkerRun(this.instructionQueue[0], i);
					this.instructionQueue.shift();
				}
			};

			WorkerDirector.prototype._kickWorkerRun = function (prepData, workerInstanceNo) {
				var scope = this;
				var directorOnLoad = function directorOnLoad(event) {
					scope.objectsCompleted++;

					var nextPrepData = scope.instructionQueue[0];
					if (Validator.isValid(nextPrepData)) {

						scope.instructionQueue.shift();
						scope.logger.logInfo('\nAssigning next item from queue to worker (queue length: ' + scope.instructionQueue.length + ')\n\n');
						scope._kickWorkerRun(nextPrepData, event.detail.instanceNo);
					} else if (scope.instructionQueue.length === 0) {

						scope.deregister();
					}
				};

				var prepDataCallbacks = prepData.getCallbacks();
				var globalCallbacks = this.workerDescription.globalCallbacks;
				var wrapperOnLoad = function wrapperOnLoad(event) {
					if (Validator.isValid(globalCallbacks.onLoad)) globalCallbacks.onLoad(event);
					if (Validator.isValid(prepDataCallbacks.onLoad)) prepDataCallbacks.onLoad(event);
					directorOnLoad(event);
				};

				var wrapperOnProgress = function wrapperOnProgress(event) {
					if (Validator.isValid(globalCallbacks.onProgress)) globalCallbacks.onProgress(event);
					if (Validator.isValid(prepDataCallbacks.onProgress)) prepDataCallbacks.onProgress(event);
				};

				var wrapperOnMeshAlter = function wrapperOnMeshAlter(event) {
					if (Validator.isValid(globalCallbacks.onMeshAlter)) globalCallbacks.onMeshAlter(event);
					if (Validator.isValid(prepDataCallbacks.onMeshAlter)) prepDataCallbacks.onMeshAlter(event);
				};

				var supportTuple = this.workerDescription.workerSupports[workerInstanceNo];
				supportTuple.loader = this._buildLoader(workerInstanceNo);

				var updatedCallbacks = new THREE.LoaderSupport.Callbacks();
				updatedCallbacks.setCallbackOnLoad(wrapperOnLoad);
				updatedCallbacks.setCallbackOnProgress(wrapperOnProgress);
				updatedCallbacks.setCallbackOnMeshAlter(wrapperOnMeshAlter);
				prepData.callbacks = updatedCallbacks;

				supportTuple.loader.run(prepData, supportTuple.workerSupport);
			};

			WorkerDirector.prototype._buildLoader = function (instanceNo) {
				var classDef = this.workerDescription.classDef;
				var loader = Object.create(classDef.prototype);
				this.workerDescription.classDef.call(loader, null, this.logger);

				// verify that all required functions are implemented
				if (!loader.hasOwnProperty('instanceNo')) throw classDef.name + ' has no property "instanceNo".';
				loader.instanceNo = instanceNo;

				if (!loader.hasOwnProperty('workerSupport')) {

					throw classDef.name + ' has no property "workerSupport".';
				} else if (!classDef.workerSupport instanceof THREE.LoaderSupport.WorkerSupport) {

					throw classDef.name + '.workerSupport is not of type "THREE.LoaderSupport.WorkerSupport".';
				}
				if (typeof loader.run !== 'function') throw classDef.name + ' has no function "run".';

				return loader;
			};

			/**
    * Terminate all workers.
    * @memberOf THREE.LoaderSupport.WorkerDirector
    */
			WorkerDirector.prototype.deregister = function () {
				this.logger.logInfo('WorkerDirector received the deregister call. Terminating all workers!');

				for (var i = 0, length = this.workerDescription.workerSupports.length; i < length; i++) {

					var supportTuple = this.workerDescription.workerSupports[i];
					supportTuple.workerSupport.setTerminateRequested(true);
					this.logger.logInfo('Requested termination of worker.');

					var loaderCallbacks = supportTuple.loader.callbacks;
					if (Validator.isValid(loaderCallbacks.onProgress)) loaderCallbacks.onProgress({ detail: { text: '' } });
				}

				this.workerDescription.workerSupports = [];
				this.instructionQueue = [];
			};

			return WorkerDirector;
		}();

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(0));

	/***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */
	(function (THREE) {
		/**
  * @author Kai Salmen / https://kaisalmen.de
  * Development repository: https://github.com/kaisalmen/WWOBJLoader
  */

		if (THREE.OBJLoader2 === undefined) {
			THREE.OBJLoader2 = {};
		}

		/**
   * Use this class to load OBJ data from files or to parse OBJ data from an arraybuffer
   * @class
   *
   * @param {THREE.DefaultLoadingManager} [manager] The loadingManager for the loader to use. Default is {@link THREE.DefaultLoadingManager}
   * @param {THREE.LoaderSupport.ConsoleLogger} logger logger to be used
   */
		THREE.OBJLoader2 = function () {

			var OBJLOADER2_VERSION = '2.1.2';
			var LoaderBase = THREE.LoaderSupport.LoaderBase;
			var Validator = THREE.LoaderSupport.Validator;

			OBJLoader2.prototype = Object.create(THREE.LoaderSupport.LoaderBase.prototype);
			OBJLoader2.prototype.constructor = OBJLoader2;

			function OBJLoader2(manager, logger) {
				THREE.LoaderSupport.LoaderBase.call(this, manager, logger);
				this.logger.logInfo('Using THREE.OBJLoader2 version: ' + OBJLOADER2_VERSION);

				this.materialPerSmoothingGroup = false;
				this.fileLoader = Validator.verifyInput(this.fileLoader, new THREE.FileLoader(this.manager));

				this.workerSupport = null;
				this.terminateWorkerOnLoad = true;
			};

			/**
    * Tells whether a material shall be created per smoothing group.
    * @memberOf THREE.OBJLoader2
    *
    * @param {boolean} materialPerSmoothingGroup=false
    */
			OBJLoader2.prototype.setMaterialPerSmoothingGroup = function (materialPerSmoothingGroup) {
				this.materialPerSmoothingGroup = materialPerSmoothingGroup === true;
			};

			/**
    * Use this convenient method to load an OBJ file at the given URL. By default the fileLoader uses an arraybuffer.
    * @memberOf THREE.OBJLoader2
    *
    * @param {string}  url A string containing the path/URL of the .obj file.
    * @param {callback} onLoad A function to be called after loading is successfully completed. The function receives loaded Object3D as an argument.
    * @param {callback} [onProgress] A function to be called while the loading is in progress. The argument will be the XMLHttpRequest instance, which contains total and Integer bytes.
    * @param {callback} [onError] A function to be called if an error occurs during loading. The function receives the error as an argument.
    * @param {callback} [onMeshAlter] A function to be called after a new mesh raw data becomes available for alteration.
    * @param {boolean} [useAsync] If true, uses async loading with worker, if false loads data synchronously.
    */
			OBJLoader2.prototype.load = function (url, onLoad, onProgress, onError, onMeshAlter, useAsync) {
				var scope = this;
				if (!Validator.isValid(onProgress)) {
					var numericalValueRef = 0;
					var numericalValue = 0;
					onProgress = function onProgress(event) {
						if (!event.lengthComputable) return;

						numericalValue = event.loaded / event.total;
						if (numericalValue > numericalValueRef) {

							numericalValueRef = numericalValue;
							var output = 'Download of "' + url + '": ' + (numericalValue * 100).toFixed(2) + '%';
							scope.onProgress('progressLoad', output, numericalValue);
						}
					};
				}

				if (!Validator.isValid(onError)) {
					onError = function onError(event) {
						var output = 'Error occurred while downloading "' + url + '"';
						scope.logger.logError(output + ': ' + event);
						scope.onProgress('error', output, -1);
					};
				}

				this.fileLoader.setPath(this.path);
				this.fileLoader.setResponseType('arraybuffer');
				this.fileLoader.load(url, function (content) {
					if (useAsync) {

						scope.parseAsync(content, onLoad);
					} else {

						var callbacks = new THREE.LoaderSupport.Callbacks();
						callbacks.setCallbackOnMeshAlter(onMeshAlter);
						scope._setCallbacks(callbacks);
						onLoad({
							detail: {
								loaderRootNode: scope.parse(content),
								modelName: scope.modelName,
								instanceNo: scope.instanceNo
							}
						});
					}
				}, onProgress, onError);
			};

			/**
    * Run the loader according the provided instructions.
    * @memberOf THREE.OBJLoader2
    *
    * @param {THREE.LoaderSupport.PrepData} prepData All parameters and resources required for execution
    * @param {THREE.LoaderSupport.WorkerSupport} [workerSupportExternal] Use pre-existing WorkerSupport
    */
			OBJLoader2.prototype.run = function (prepData, workerSupportExternal) {
				this._applyPrepData(prepData);
				var available = this._checkFiles(prepData.resources);
				if (Validator.isValid(workerSupportExternal)) {

					this.terminateWorkerOnLoad = false;
					this.workerSupport = workerSupportExternal;
					this.logger = workerSupportExternal.logger;
				} else {

					this.terminateWorkerOnLoad = true;
				}
				var scope = this;
				var onMaterialsLoaded = function onMaterialsLoaded(materials) {
					scope.builder.setMaterials(materials);

					if (Validator.isValid(available.obj.content)) {

						if (prepData.useAsync) {

							scope.parseAsync(available.obj.content, scope.callbacks.onLoad);
						} else {

							scope.parse(available.obj.content);
						}
					} else {

						scope.setPath(available.obj.path);
						scope.load(available.obj.name, scope.callbacks.onLoad, null, null, scope.callbacks.onMeshAlter, prepData.useAsync);
					}
				};

				this._loadMtl(available.mtl, onMaterialsLoaded, prepData.crossOrigin);
			};

			OBJLoader2.prototype._applyPrepData = function (prepData) {
				THREE.LoaderSupport.LoaderBase.prototype._applyPrepData.call(this, prepData);

				if (Validator.isValid(prepData)) {

					this.setMaterialPerSmoothingGroup(prepData.materialPerSmoothingGroup);
				}
			};

			/**
    * Parses OBJ data synchronously from arraybuffer or string.
    * @memberOf THREE.OBJLoader2
    *
    * @param {arraybuffer|string} content OBJ data as Uint8Array or String
    */
			OBJLoader2.prototype.parse = function (content) {
				this.logger.logTimeStart('OBJLoader2 parse: ' + this.modelName);

				var parser = new Parser(this.logger);
				parser.setMaterialPerSmoothingGroup(this.materialPerSmoothingGroup);
				parser.setUseIndices(this.useIndices);
				parser.setDisregardNormals(this.disregardNormals);
				// sync code works directly on the material references
				parser.setMaterials(this.builder.getMaterials());

				var scope = this;
				var onMeshLoaded = function onMeshLoaded(payload) {
					var meshes = scope.builder.processPayload(payload);
					var mesh;
					for (var i in meshes) {
						mesh = meshes[i];
						scope.loaderRootNode.add(mesh);
					}
				};
				parser.setCallbackBuilder(onMeshLoaded);
				var onProgressScoped = function onProgressScoped(text, numericalValue) {
					scope.onProgress('progressParse', text, numericalValue);
				};
				parser.setCallbackProgress(onProgressScoped);

				if (content instanceof ArrayBuffer || content instanceof Uint8Array) {

					this.logger.logInfo('Parsing arrayBuffer...');
					parser.parse(content);
				} else if (typeof content === 'string' || content instanceof String) {

					this.logger.logInfo('Parsing text...');
					parser.parseText(content);
				} else {

					throw 'Provided content was neither of type String nor Uint8Array! Aborting...';
				}
				this.logger.logTimeEnd('OBJLoader2 parse: ' + this.modelName);

				return this.loaderRootNode;
			};

			/**
    * Parses OBJ content asynchronously from arraybuffer.
    * @memberOf THREE.OBJLoader2
    *
    * @param {arraybuffer} content OBJ data as Uint8Array
    * @param {callback} onLoad Called after worker successfully completed loading
    */
			OBJLoader2.prototype.parseAsync = function (content, onLoad) {
				this.logger.logTimeStart('OBJLoader2 parseAsync: ' + this.modelName);

				var scope = this;
				var scopedOnLoad = function scopedOnLoad() {
					onLoad({
						detail: {
							loaderRootNode: scope.loaderRootNode,
							modelName: scope.modelName,
							instanceNo: scope.instanceNo
						}
					});
					if (scope.terminateWorkerOnLoad) scope.workerSupport.terminateWorker();
					scope.logger.logTimeEnd('OBJLoader2 parseAsync: ' + scope.modelName);
				};
				var scopedOnMeshLoaded = function scopedOnMeshLoaded(payload) {
					var meshes = scope.builder.processPayload(payload);
					var mesh;
					for (var i in meshes) {
						mesh = meshes[i];
						scope.loaderRootNode.add(mesh);
					}
				};

				this.workerSupport = Validator.verifyInput(this.workerSupport, new THREE.LoaderSupport.WorkerSupport(this.logger));
				var buildCode = function buildCode(funcBuildObject, funcBuildSingelton) {
					var workerCode = '';
					workerCode += '/**\n';
					workerCode += '  * This code was constructed by OBJLoader2 buildCode.\n';
					workerCode += '  */\n\n';
					workerCode += funcBuildSingelton('LoaderBase', 'LoaderBase', LoaderBase);
					workerCode += funcBuildObject('Consts', Consts);
					workerCode += funcBuildSingelton('Parser', 'Parser', Parser);
					workerCode += funcBuildSingelton('RawMesh', 'RawMesh', RawMesh);
					workerCode += funcBuildSingelton('RawMeshSubGroup', 'RawMeshSubGroup', RawMeshSubGroup);

					return workerCode;
				};
				this.workerSupport.validate(buildCode, false);
				this.workerSupport.setCallbacks(scopedOnMeshLoaded, scopedOnLoad);

				var materialNames = {};
				var materials = this.builder.getMaterials();
				for (var materialName in materials) {

					materialNames[materialName] = materialName;
				}
				this.workerSupport.run({
					params: {
						useAsync: true,
						materialPerSmoothingGroup: this.materialPerSmoothingGroup,
						useIndices: this.useIndices,
						disregardNormals: this.disregardNormals
					},
					logger: {
						debug: this.logger.debug,
						enabled: this.logger.enabled
					},
					materials: {
						// in async case only material names are supplied to parser
						materials: materialNames
					},
					data: {
						input: content,
						options: null
					}
				}, [content.buffer]);
			};

			/**
    * Constants used by THREE.OBJLoader2
    */
			var Consts = {
				CODE_LF: 10,
				CODE_CR: 13,
				CODE_SPACE: 32,
				CODE_SLASH: 47,
				STRING_LF: '\n',
				STRING_CR: '\r',
				STRING_SPACE: ' ',
				STRING_SLASH: '/',
				LINE_F: 'f',
				LINE_G: 'g',
				LINE_L: 'l',
				LINE_O: 'o',
				LINE_S: 's',
				LINE_V: 'v',
				LINE_VT: 'vt',
				LINE_VN: 'vn',
				LINE_MTLLIB: 'mtllib',
				LINE_USEMTL: 'usemtl'
			};

			/**
    * Parse OBJ data either from ArrayBuffer or string
    * @class
    */
			var Parser = function () {

				function Parser(logger) {
					this.callbackProgress = null;
					this.callbackBuilder = null;

					this.materials = {};
					this.rawMesh = null;
					this.useAsync = false;
					this.materialPerSmoothingGroup = false;
					this.useIndices = false;
					this.disregardNormals = false;

					this.inputObjectCount = 1;
					this.outputObjectCount = 1;
					this.counts = {
						vertices: 0,
						faces: 0,
						doubleIndicesCount: 0
					};
					this.logger = logger;
					this.totalBytes = 0;
					this.reachedFaces = false;
				};

				Parser.prototype.setUseAsync = function (useAsync) {
					this.useAsync = useAsync;
				};

				Parser.prototype.setMaterialPerSmoothingGroup = function (materialPerSmoothingGroup) {
					this.materialPerSmoothingGroup = materialPerSmoothingGroup;
				};

				Parser.prototype.setUseIndices = function (useIndices) {
					this.useIndices = useIndices;
				};

				Parser.prototype.setDisregardNormals = function (disregardNormals) {
					this.disregardNormals = disregardNormals;
				};

				Parser.prototype.setMaterials = function (materials) {
					this.materials = Validator.verifyInput(materials, this.materials);
					this.materials = Validator.verifyInput(this.materials, {});
				};

				Parser.prototype.setCallbackBuilder = function (callbackBuilder) {
					this.callbackBuilder = callbackBuilder;
					if (!Validator.isValid(this.callbackBuilder)) throw 'Unable to run as no "builder" callback is set.';
				};

				Parser.prototype.setCallbackProgress = function (callbackProgress) {
					this.callbackProgress = callbackProgress;
				};

				Parser.prototype.configure = function () {
					this.rawMesh = new RawMesh(this.materialPerSmoothingGroup, this.useIndices, this.disregardNormals);

					if (this.logger.isEnabled()) {

						var matKeys = Object.keys(this.materials);
						var matNames = matKeys.length > 0 ? '\n\tmaterialNames:\n\t\t- ' + matKeys.join('\n\t\t- ') : '\n\tmaterialNames: None';
						var printedConfig = 'OBJLoader2.Parser configuration:' + matNames + '\n\tuseAsync: ' + this.useAsync + '\n\tmaterialPerSmoothingGroup: ' + this.materialPerSmoothingGroup + '\n\tuseIndices: ' + this.useIndices + '\n\tdisregardNormals: ' + this.disregardNormals + '\n\tcallbackBuilderName: ' + this.callbackBuilder.name + '\n\tcallbackProgressName: ' + this.callbackProgress.name;
						this.logger.logInfo(printedConfig);
					}
				};

				/**
     * Parse the provided arraybuffer
     * @memberOf Parser
     *
     * @param {Uint8Array} arrayBuffer OBJ data as Uint8Array
     */
				Parser.prototype.parse = function (arrayBuffer) {
					this.logger.logTimeStart('OBJLoader2.Parser.parse');
					this.configure();

					var arrayBufferView = new Uint8Array(arrayBuffer);
					var length = arrayBufferView.byteLength;
					this.totalBytes = length;
					var buffer = new Array(128);
					var bufferPointer = 0;
					var slashSpacePattern = new Array(16);
					var slashSpacePatternPointer = 0;
					var code;
					var word = '';
					var i = 0;
					for (; i < length; i++) {

						code = arrayBufferView[i];
						switch (code) {
							case Consts.CODE_SPACE:
								if (word.length > 0) buffer[bufferPointer++] = word;
								slashSpacePattern[slashSpacePatternPointer++] = 0;
								word = '';
								break;

							case Consts.CODE_SLASH:
								if (word.length > 0) buffer[bufferPointer++] = word;
								slashSpacePattern[slashSpacePatternPointer++] = 1;
								word = '';
								break;

							case Consts.CODE_LF:
								if (word.length > 0) buffer[bufferPointer++] = word;
								word = '';
								this.processLine(buffer, bufferPointer, slashSpacePattern, slashSpacePatternPointer, i);
								bufferPointer = 0;
								slashSpacePatternPointer = 0;
								break;

							case Consts.CODE_CR:
								break;

							default:
								word += String.fromCharCode(code);
								break;
						}
					}
					this.finalize(i);
					this.logger.logTimeEnd('OBJLoader2.Parser.parse');
				};

				/**
     * Parse the provided text
     * @memberOf Parser
     *
     * @param {string} text OBJ data as string
     */
				Parser.prototype.parseText = function (text) {
					this.logger.logTimeStart('OBJLoader2.Parser.parseText');
					this.configure();

					var length = text.length;
					this.totalBytes = length;
					var buffer = new Array(128);
					var bufferPointer = 0;
					var slashSpacePattern = new Array(16);
					var slashSpacePatternPointer = 0;
					var char;
					var word = '';
					var i = 0;
					for (; i < length; i++) {

						char = text[i];
						switch (char) {
							case Consts.STRING_SPACE:
								if (word.length > 0) buffer[bufferPointer++] = word;
								slashSpacePattern[slashSpacePatternPointer++] = 0;
								word = '';
								break;

							case Consts.STRING_SLASH:
								if (word.length > 0) buffer[bufferPointer++] = word;
								slashSpacePattern[slashSpacePatternPointer++] = 1;
								word = '';
								break;

							case Consts.STRING_LF:
								if (word.length > 0) buffer[bufferPointer++] = word;
								word = '';
								this.processLine(buffer, bufferPointer, slashSpacePattern, slashSpacePatternPointer, i);
								bufferPointer = 0;
								slashSpacePatternPointer = 0;
								break;

							case Consts.STRING_CR:
								break;

							default:
								word += char;
						}
					}
					this.finalize(i);
					this.logger.logTimeEnd('OBJLoader2.Parser.parseText');
				};

				Parser.prototype.processLine = function (buffer, bufferPointer, slashSpacePattern, slashSpacePatternPointer, currentByte) {
					if (bufferPointer < 1) return;

					var countSlashes = function countSlashes(slashSpacePattern, slashSpacePatternPointer) {
						var slashesCount = 0;
						for (var i = 0; i < slashSpacePatternPointer; i++) {
							slashesCount += slashSpacePattern[i];
						}
						return slashesCount;
					};

					var concatStringBuffer = function concatStringBuffer(buffer, bufferPointer, slashSpacePattern) {
						var concatBuffer = '';
						if (bufferPointer === 2) {

							concatBuffer = buffer[1];
						} else {

							var bufferLength = bufferPointer - 1;
							for (var i = 1; i < bufferLength; i++) {

								concatBuffer += buffer[i] + (slashSpacePattern[i] === 0 ? ' ' : '/');
							}
							concatBuffer += buffer[bufferLength];
						}
						return concatBuffer;
					};

					var flushStringBuffer = function flushStringBuffer(buffer, bufferPointer) {
						for (var i = 0; i < bufferPointer; i++) {
							buffer[i] = '';
						}
					};

					switch (buffer[0]) {
						case Consts.LINE_V:
							// object complete instance required if reached faces already (= reached next block of v)
							if (this.reachedFaces) {

								if (this.rawMesh.colors.length > 0 && this.rawMesh.colors.length !== this.rawMesh.vertices.length) {

									throw 'Vertex Colors were detected, but vertex count and color count do not match!';
								}
								// only when new vertices after faces are detected complete new mesh is prepared (reset offsets, etc)
								this.processCompletedMesh(this.rawMesh.objectName, this.rawMesh.groupName, currentByte, true);
								this.reachedFaces = false;
							}
							if (bufferPointer === 4) {

								this.rawMesh.pushVertex(buffer);
							} else {

								this.rawMesh.pushVertexAndVertextColors(buffer);
							}
							break;

						case Consts.LINE_VT:
							this.rawMesh.pushUv(buffer);
							break;

						case Consts.LINE_VN:
							this.rawMesh.pushNormal(buffer);
							break;

						case Consts.LINE_F:
							this.reachedFaces = true;
							this.rawMesh.processFaces(buffer, bufferPointer, countSlashes(slashSpacePattern, slashSpacePatternPointer));
							break;

						case Consts.LINE_L:
							this.rawMesh.processLines(buffer, bufferPointer, countSlashes(slashSpacePattern, slashSpacePatternPointer));
							break;

						case Consts.LINE_S:
							this.rawMesh.pushSmoothingGroup(buffer[1]);
							flushStringBuffer(buffer, bufferPointer);
							break;

						case Consts.LINE_G:
							this.processCompletedMesh(this.rawMesh.objectName, concatStringBuffer(buffer, bufferPointer, slashSpacePattern), currentByte, false);
							flushStringBuffer(buffer, bufferPointer);
							break;

						case Consts.LINE_O:
							this.processCompletedMesh(concatStringBuffer(buffer, bufferPointer, slashSpacePattern), this.rawMesh.groupName, currentByte, false);
							flushStringBuffer(buffer, bufferPointer);
							break;

						case Consts.LINE_MTLLIB:
							this.rawMesh.pushMtllib(concatStringBuffer(buffer, bufferPointer, slashSpacePattern));
							flushStringBuffer(buffer, bufferPointer);
							break;

						case Consts.LINE_USEMTL:
							this.rawMesh.pushUsemtl(concatStringBuffer(buffer, bufferPointer, slashSpacePattern));
							flushStringBuffer(buffer, bufferPointer);
							break;

						default:
							break;
					}
				};

				Parser.prototype.createRawMeshReport = function (rawMesh, inputObjectCount) {
					var report = rawMesh.createReport(inputObjectCount);
					return 'Input Object number: ' + inputObjectCount + '\n\tObject name: ' + report.objectName + '\n\tGroup name: ' + report.groupName + '\n\tMtllib name: ' + report.mtllibName + '\n\tVertex count: ' + report.vertexCount + '\n\tNormal count: ' + report.normalCount + '\n\tUV count: ' + report.uvCount + '\n\tSmoothingGroup count: ' + report.smoothingGroupCount + '\n\tMaterial count: ' + report.mtlCount + '\n\tReal RawMeshSubGroup count: ' + report.subGroups;
				};

				Parser.prototype.processCompletedMesh = function (objectName, groupName, currentByte, beginNewObject) {
					var result = this.rawMesh.finalize();
					if (Validator.isValid(result)) {

						this.inputObjectCount++;
						if (this.logger.isDebug()) this.logger.logDebug(this.createRawMeshReport(this.rawMesh, this.inputObjectCount));
						this.buildMesh(result, currentByte);
						var progressBytesPercent = currentByte / this.totalBytes;
						this.callbackProgress('Completed [o: ' + this.rawMesh.objectName + ' g:' + this.rawMesh.groupName + '] Total progress: ' + (progressBytesPercent * 100).toFixed(2) + '%', progressBytesPercent);
						this.rawMesh = beginNewObject ? this.rawMesh.newInstanceResetOffsets() : this.rawMesh.newInstanceKeepOffsets();
					}
					// Always update group an object name in case they have changed and are valid
					if (this.rawMesh.objectName !== objectName && Validator.isValid(objectName)) this.rawMesh.pushObject(objectName);
					if (this.rawMesh.groupName !== groupName && Validator.isValid(groupName)) this.rawMesh.pushGroup(groupName);
				};

				Parser.prototype.finalize = function (currentByte) {
					this.logger.logInfo('Global output object count: ' + this.outputObjectCount);
					var result = Validator.isValid(this.rawMesh) ? this.rawMesh.finalize() : null;
					if (Validator.isValid(result)) {

						this.inputObjectCount++;
						if (this.logger.isDebug()) this.logger.logDebug(this.createRawMeshReport(this.rawMesh, this.inputObjectCount));
						this.buildMesh(result, currentByte);

						if (this.logger.isEnabled()) {

							var parserFinalReport = 'Overall counts: ' + '\n\tVertices: ' + this.counts.vertices + '\n\tFaces: ' + this.counts.faces + '\n\tMultiple definitions: ' + this.counts.doubleIndicesCount;
							this.logger.logInfo(parserFinalReport);
						}
						var progressBytesPercent = currentByte / this.totalBytes;
						this.callbackProgress('Completed Parsing: 100.00%', progressBytesPercent);
					}
				};

				/**
     * RawObjectDescriptions are transformed to too intermediate format that is forwarded to the Builder.
     * It is ensured that rawObjectDescriptions only contain objects with vertices (no need to check).
     *
     * @param result
     */
				Parser.prototype.buildMesh = function (result, currentByte) {
					var rawObjectDescriptions = result.subGroups;

					var vertexFA = new Float32Array(result.absoluteVertexCount);
					this.counts.vertices += result.absoluteVertexCount / 3;
					this.counts.faces += result.faceCount;
					this.counts.doubleIndicesCount += result.doubleIndicesCount;
					var indexUA = result.absoluteIndexCount > 0 ? new Uint32Array(result.absoluteIndexCount) : null;
					var colorFA = result.absoluteColorCount > 0 ? new Float32Array(result.absoluteColorCount) : null;
					var normalFA = result.absoluteNormalCount > 0 ? new Float32Array(result.absoluteNormalCount) : null;
					var uvFA = result.absoluteUvCount > 0 ? new Float32Array(result.absoluteUvCount) : null;
					var haveVertexColors = Validator.isValid(colorFA);

					var rawObjectDescription;
					var materialNames = [];

					var createMultiMaterial = rawObjectDescriptions.length > 1;
					var materialIndex = 0;
					var materialIndexMapping = [];
					var selectedMaterialIndex;
					var materialGroup;
					var materialGroups = [];

					var vertexFAOffset = 0;
					var indexUAOffset = 0;
					var colorFAOffset = 0;
					var normalFAOffset = 0;
					var uvFAOffset = 0;
					var materialGroupOffset = 0;
					var materialGroupLength = 0;

					var materialOrg, material, materialName, materialNameOrg;
					for (var oodIndex in rawObjectDescriptions) {

						if (!rawObjectDescriptions.hasOwnProperty(oodIndex)) continue;
						rawObjectDescription = rawObjectDescriptions[oodIndex];

						materialNameOrg = rawObjectDescription.materialName;
						materialName = materialNameOrg + (haveVertexColors ? '_vertexColor' : '') + (rawObjectDescription.smoothingGroup === 0 ? '_flat' : '');
						materialOrg = this.materials[materialNameOrg];
						material = this.materials[materialName];

						// both original and derived names do not lead to an existing material => need to use a default material
						if (!Validator.isValid(materialOrg) && !Validator.isValid(material)) {

							var defaultMaterialName = haveVertexColors ? 'vertexColorMaterial' : 'defaultMaterial';
							materialOrg = this.materials[defaultMaterialName];
							this.logger.logWarn('object_group "' + rawObjectDescription.objectName + '_' + rawObjectDescription.groupName + '" was defined with unresolvable material "' + materialNameOrg + '"! Assigning "' + defaultMaterialName + '".');
							materialNameOrg = defaultMaterialName;

							// if names are identical then there is no need for later manipulation
							if (materialNameOrg === materialName) {

								material = materialOrg;
								materialName = defaultMaterialName;
							}
						}
						if (!Validator.isValid(material)) {

							var materialCloneInstructions = {
								materialNameOrg: materialNameOrg,
								materialName: materialName,
								materialProperties: {
									vertexColors: haveVertexColors ? 2 : 0,
									flatShading: rawObjectDescription.smoothingGroup === 0
								}
							};
							var payload = {
								cmd: 'materialData',
								materials: {
									materialCloneInstructions: materialCloneInstructions
								}
							};
							this.callbackBuilder(payload);

							// fake entry for async; sync Parser always works on material references (Builder update directly visible here)
							if (this.useAsync) this.materials[materialName] = materialCloneInstructions;
						}

						if (createMultiMaterial) {

							// re-use material if already used before. Reduces materials array size and eliminates duplicates
							selectedMaterialIndex = materialIndexMapping[materialName];
							if (!selectedMaterialIndex) {

								selectedMaterialIndex = materialIndex;
								materialIndexMapping[materialName] = materialIndex;
								materialNames.push(materialName);
								materialIndex++;
							}
							materialGroupLength = this.useIndices ? rawObjectDescription.indices.length : rawObjectDescription.vertices.length / 3;
							materialGroup = {
								start: materialGroupOffset,
								count: materialGroupLength,
								index: selectedMaterialIndex
							};
							materialGroups.push(materialGroup);
							materialGroupOffset += materialGroupLength;
						} else {

							materialNames.push(materialName);
						}

						vertexFA.set(rawObjectDescription.vertices, vertexFAOffset);
						vertexFAOffset += rawObjectDescription.vertices.length;

						if (indexUA) {

							indexUA.set(rawObjectDescription.indices, indexUAOffset);
							indexUAOffset += rawObjectDescription.indices.length;
						}

						if (colorFA) {

							colorFA.set(rawObjectDescription.colors, colorFAOffset);
							colorFAOffset += rawObjectDescription.colors.length;
						}

						if (normalFA) {

							normalFA.set(rawObjectDescription.normals, normalFAOffset);
							normalFAOffset += rawObjectDescription.normals.length;
						}
						if (uvFA) {

							uvFA.set(rawObjectDescription.uvs, uvFAOffset);
							uvFAOffset += rawObjectDescription.uvs.length;
						}

						if (this.logger.isDebug()) {
							var materialIndexLine = Validator.isValid(selectedMaterialIndex) ? '\n\t\tmaterialIndex: ' + selectedMaterialIndex : '';
							var createdReport = 'Output Object no.: ' + this.outputObjectCount + '\n\t\tobjectName: ' + rawObjectDescription.objectName + '\n\t\tgroupName: ' + rawObjectDescription.groupName + '\n\t\tmaterialName: ' + rawObjectDescription.materialName + materialIndexLine + '\n\t\tsmoothingGroup: ' + rawObjectDescription.smoothingGroup + '\n\t\t#vertices: ' + rawObjectDescription.vertices.length / 3 + '\n\t\t#indices: ' + rawObjectDescription.indices.length + '\n\t\t#colors: ' + rawObjectDescription.colors.length / 3 + '\n\t\t#uvs: ' + rawObjectDescription.uvs.length / 2 + '\n\t\t#normals: ' + rawObjectDescription.normals.length / 3;
							this.logger.logDebug(createdReport);
						}
					}

					this.outputObjectCount++;
					this.callbackBuilder({
						cmd: 'meshData',
						progress: {
							numericalValue: currentByte / this.totalBytes
						},
						params: {
							meshName: result.name
						},
						materials: {
							multiMaterial: createMultiMaterial,
							materialNames: materialNames,
							materialGroups: materialGroups
						},
						buffers: {
							vertices: vertexFA,
							indices: indexUA,
							colors: colorFA,
							normals: normalFA,
							uvs: uvFA
						}
					}, [vertexFA.buffer], Validator.isValid(indexUA) ? [indexUA.buffer] : null, Validator.isValid(colorFA) ? [colorFA.buffer] : null, Validator.isValid(normalFA) ? [normalFA.buffer] : null, Validator.isValid(uvFA) ? [uvFA.buffer] : null);
				};

				return Parser;
			}();

			/**
    * {@link RawMesh} is only used by {@link Parser}.
    * The user of OBJLoader2 does not need to care about this class.
    * It is defined publicly for inclusion in web worker based OBJ loader ({@link THREE.OBJLoader2.WWOBJLoader2})
    */
			var RawMesh = function () {

				function RawMesh(materialPerSmoothingGroup, useIndices, disregardNormals, activeMtlName) {
					this.globalVertexOffset = 1;
					this.globalUvOffset = 1;
					this.globalNormalOffset = 1;

					this.vertices = [];
					this.colors = [];
					this.normals = [];
					this.uvs = [];

					// faces are stored according combined index of group, material and smoothingGroup (0 or not)
					this.activeMtlName = Validator.verifyInput(activeMtlName, '');
					this.objectName = '';
					this.groupName = '';
					this.mtllibName = '';
					this.smoothingGroup = {
						splitMaterials: materialPerSmoothingGroup === true,
						normalized: -1,
						real: -1
					};
					this.useIndices = useIndices === true;
					this.disregardNormals = disregardNormals === true;

					this.mtlCount = 0;
					this.smoothingGroupCount = 0;

					this.subGroups = [];
					this.subGroupInUse = null;
					// this default index is required as it is possible to define faces without 'g' or 'usemtl'
					this.pushSmoothingGroup(1);

					this.doubleIndicesCount = 0;
					this.faceCount = 0;
				}

				RawMesh.prototype.newInstanceResetOffsets = function () {
					var newRawObject = new RawMesh(this.smoothingGroup.splitMaterials, this.useIndices, this.disregardNormals, this.activeMtlName);

					// move indices forward
					newRawObject.globalVertexOffset = this.globalVertexOffset + this.vertices.length / 3;
					newRawObject.globalUvOffset = this.globalUvOffset + this.uvs.length / 2;
					newRawObject.globalNormalOffset = this.globalNormalOffset + this.normals.length / 3;

					return newRawObject;
				};

				RawMesh.prototype.newInstanceKeepOffsets = function () {
					var newRawObject = new RawMesh(this.smoothingGroup.splitMaterials, this.useIndices, this.disregardNormals, this.activeMtlName);
					// keep objectName
					newRawObject.pushObject(this.objectName);

					// keep current buffers and indices forward
					newRawObject.vertices = this.vertices;
					newRawObject.colors = this.colors;
					newRawObject.uvs = this.uvs;
					newRawObject.normals = this.normals;
					newRawObject.globalVertexOffset = this.globalVertexOffset;
					newRawObject.globalUvOffset = this.globalUvOffset;
					newRawObject.globalNormalOffset = this.globalNormalOffset;

					return newRawObject;
				};

				RawMesh.prototype.pushVertex = function (buffer) {
					this.vertices.push(parseFloat(buffer[1]));
					this.vertices.push(parseFloat(buffer[2]));
					this.vertices.push(parseFloat(buffer[3]));
				};

				RawMesh.prototype.pushVertexAndVertextColors = function (buffer) {
					this.vertices.push(parseFloat(buffer[1]));
					this.vertices.push(parseFloat(buffer[2]));
					this.vertices.push(parseFloat(buffer[3]));
					this.colors.push(parseFloat(buffer[4]));
					this.colors.push(parseFloat(buffer[5]));
					this.colors.push(parseFloat(buffer[6]));
				};

				RawMesh.prototype.pushUv = function (buffer) {
					this.uvs.push(parseFloat(buffer[1]));
					this.uvs.push(parseFloat(buffer[2]));
				};

				RawMesh.prototype.pushNormal = function (buffer) {
					this.normals.push(parseFloat(buffer[1]));
					this.normals.push(parseFloat(buffer[2]));
					this.normals.push(parseFloat(buffer[3]));
				};

				RawMesh.prototype.pushObject = function (objectName) {
					this.objectName = Validator.verifyInput(objectName, '');
				};

				RawMesh.prototype.pushMtllib = function (mtllibName) {
					this.mtllibName = Validator.verifyInput(mtllibName, '');
				};

				RawMesh.prototype.pushGroup = function (groupName) {
					this.groupName = Validator.verifyInput(groupName, '');
				};

				RawMesh.prototype.pushUsemtl = function (mtlName) {
					if (this.activeMtlName === mtlName || !Validator.isValid(mtlName)) return;
					this.activeMtlName = mtlName;
					this.mtlCount++;

					this.verifyIndex();
				};

				RawMesh.prototype.pushSmoothingGroup = function (smoothingGroup) {
					var smoothingGroupInt = parseInt(smoothingGroup);
					if (isNaN(smoothingGroupInt)) {
						smoothingGroupInt = smoothingGroup === "off" ? 0 : 1;
					}

					var smoothCheck = this.smoothingGroup.normalized;
					this.smoothingGroup.normalized = this.smoothingGroup.splitMaterials ? smoothingGroupInt : smoothingGroupInt === 0 ? 0 : 1;
					this.smoothingGroup.real = smoothingGroupInt;

					if (smoothCheck !== smoothingGroupInt) {

						this.smoothingGroupCount++;
						this.verifyIndex();
					}
				};

				RawMesh.prototype.verifyIndex = function () {
					var index = this.activeMtlName + '|' + this.smoothingGroup.normalized;
					this.subGroupInUse = this.subGroups[index];
					if (!Validator.isValid(this.subGroupInUse)) {

						this.subGroupInUse = new RawMeshSubGroup(this.objectName, this.groupName, this.activeMtlName, this.smoothingGroup.normalized);
						this.subGroups[index] = this.subGroupInUse;
					}
				};

				RawMesh.prototype.processFaces = function (buffer, bufferPointer, slashesCount) {
					var bufferLength = bufferPointer - 1;
					var i, length;

					// "f vertex ..."
					if (slashesCount === 0) {

						for (i = 2, length = bufferLength - 1; i < length; i++) {

							this.buildFace(buffer[1]);
							this.buildFace(buffer[i]);
							this.buildFace(buffer[i + 1]);
						}

						// "f vertex/uv ..."
					} else if (bufferLength === slashesCount * 2) {

						for (i = 3, length = bufferLength - 2; i < length; i += 2) {

							this.buildFace(buffer[1], buffer[2]);
							this.buildFace(buffer[i], buffer[i + 1]);
							this.buildFace(buffer[i + 2], buffer[i + 3]);
						}

						// "f vertex/uv/normal ..."
					} else if (bufferLength * 2 === slashesCount * 3) {

						for (i = 4, length = bufferLength - 3; i < length; i += 3) {

							this.buildFace(buffer[1], buffer[2], buffer[3]);
							this.buildFace(buffer[i], buffer[i + 1], buffer[i + 2]);
							this.buildFace(buffer[i + 3], buffer[i + 4], buffer[i + 5]);
						}

						// "f vertex//normal ..."
					} else {

						for (i = 3, length = bufferLength - 2; i < length; i += 2) {

							this.buildFace(buffer[1], undefined, buffer[2]);
							this.buildFace(buffer[i], undefined, buffer[i + 1]);
							this.buildFace(buffer[i + 2], undefined, buffer[i + 3]);
						}
					}
				};

				RawMesh.prototype.buildFace = function (faceIndexV, faceIndexU, faceIndexN) {
					var sgiu = this.subGroupInUse;
					if (this.disregardNormals) faceIndexN = undefined;
					var scope = this;
					var updateRawObjectDescriptionInUse = function updateRawObjectDescriptionInUse() {

						var indexPointerV = (parseInt(faceIndexV) - scope.globalVertexOffset) * 3;
						var indexPointerC = scope.colors.length > 0 ? indexPointerV : null;

						var vertices = sgiu.vertices;
						vertices.push(scope.vertices[indexPointerV++]);
						vertices.push(scope.vertices[indexPointerV++]);
						vertices.push(scope.vertices[indexPointerV]);

						if (indexPointerC !== null) {

							var colors = sgiu.colors;
							colors.push(scope.colors[indexPointerC++]);
							colors.push(scope.colors[indexPointerC++]);
							colors.push(scope.colors[indexPointerC]);
						}

						if (faceIndexU) {

							var indexPointerU = (parseInt(faceIndexU) - scope.globalUvOffset) * 2;
							var uvs = sgiu.uvs;
							uvs.push(scope.uvs[indexPointerU++]);
							uvs.push(scope.uvs[indexPointerU]);
						}
						if (faceIndexN) {

							var indexPointerN = (parseInt(faceIndexN) - scope.globalNormalOffset) * 3;
							var normals = sgiu.normals;
							normals.push(scope.normals[indexPointerN++]);
							normals.push(scope.normals[indexPointerN++]);
							normals.push(scope.normals[indexPointerN]);
						}
					};

					if (this.useIndices) {

						var mappingName = faceIndexV + (faceIndexU ? '_' + faceIndexU : '_n') + (faceIndexN ? '_' + faceIndexN : '_n');
						var indicesPointer = sgiu.indexMappings[mappingName];
						if (Validator.isValid(indicesPointer)) {

							this.doubleIndicesCount++;
						} else {

							indicesPointer = sgiu.vertices.length / 3;
							updateRawObjectDescriptionInUse();
							sgiu.indexMappings[mappingName] = indicesPointer;
							sgiu.indexMappingsCount++;
						}
						sgiu.indices.push(indicesPointer);
					} else {

						updateRawObjectDescriptionInUse();
					}
					this.faceCount++;
				};

				/*
     * Support for lines with or without texture. First element in indexArray is the line identification
     * 0: "f vertex/uv		vertex/uv 		..."
     * 1: "f vertex			vertex 			..."
     */
				RawMesh.prototype.processLines = function (buffer, bufferPointer, slashCount) {
					var i = 1;
					var length;
					var bufferLength = bufferPointer - 1;

					if (bufferLength === slashCount * 2) {

						for (length = bufferLength - 2; i < length; i += 2) {

							this.vertices.push(parseInt(buffer[i]));
							this.uvs.push(parseInt(buffer[i + 1]));
						}
					} else {

						for (length = bufferLength - 1; i < length; i++) {

							this.vertices.push(parseInt(buffer[i]));
						}
					}
				};

				/**
     * Clear any empty rawObjectDescription and calculate absolute vertex, normal and uv counts
     */
				RawMesh.prototype.finalize = function () {
					var rawObjectDescriptionsTemp = [];
					var rawObjectDescription;
					var absoluteVertexCount = 0;
					var absoluteIndexMappingsCount = 0;
					var absoluteIndexCount = 0;
					var absoluteColorCount = 0;
					var absoluteNormalCount = 0;
					var absoluteUvCount = 0;
					var indices;
					for (var name in this.subGroups) {

						rawObjectDescription = this.subGroups[name];
						if (rawObjectDescription.vertices.length > 0) {

							indices = rawObjectDescription.indices;
							if (indices.length > 0 && absoluteIndexMappingsCount > 0) {

								for (var i in indices) {
									indices[i] = indices[i] + absoluteIndexMappingsCount;
								}
							}
							rawObjectDescriptionsTemp.push(rawObjectDescription);
							absoluteVertexCount += rawObjectDescription.vertices.length;
							absoluteIndexMappingsCount += rawObjectDescription.indexMappingsCount;
							absoluteIndexCount += rawObjectDescription.indices.length;
							absoluteColorCount += rawObjectDescription.colors.length;
							absoluteUvCount += rawObjectDescription.uvs.length;
							absoluteNormalCount += rawObjectDescription.normals.length;
						}
					}

					// do not continue if no result
					var result = null;
					if (rawObjectDescriptionsTemp.length > 0) {

						result = {
							name: this.groupName !== '' ? this.groupName : this.objectName,
							subGroups: rawObjectDescriptionsTemp,
							absoluteVertexCount: absoluteVertexCount,
							absoluteIndexCount: absoluteIndexCount,
							absoluteColorCount: absoluteColorCount,
							absoluteNormalCount: absoluteNormalCount,
							absoluteUvCount: absoluteUvCount,
							faceCount: this.faceCount,
							doubleIndicesCount: this.doubleIndicesCount
						};
					}
					return result;
				};

				RawMesh.prototype.createReport = function () {
					var report = {
						objectName: this.objectName,
						groupName: this.groupName,
						mtllibName: this.mtllibName,
						vertexCount: this.vertices.length / 3,
						normalCount: this.normals.length / 3,
						uvCount: this.uvs.length / 2,
						smoothingGroupCount: this.smoothingGroupCount,
						mtlCount: this.mtlCount,
						subGroups: this.subGroups.length
					};

					return report;
				};

				return RawMesh;
			}();

			/**
    * Descriptive information and data (vertices, normals, uvs) to passed on to mesh building function.
    * @class
    *
    * @param {string} objectName Name of the mesh
    * @param {string} groupName Name of the group
    * @param {string} materialName Name of the material
    * @param {number} smoothingGroup Normalized smoothingGroup (0: flat shading, 1: smooth shading)
    */
			var RawMeshSubGroup = function () {

				function RawMeshSubGroup(objectName, groupName, materialName, smoothingGroup) {
					this.objectName = objectName;
					this.groupName = groupName;
					this.materialName = materialName;
					this.smoothingGroup = smoothingGroup;
					this._init();
				}

				RawMeshSubGroup.prototype._init = function () {
					this.vertices = [];
					this.indexMappingsCount = 0;
					this.indexMappings = [];
					this.indices = [];
					this.colors = [];
					this.uvs = [];
					this.normals = [];
				};

				return RawMeshSubGroup;
			}();

			OBJLoader2.prototype._checkFiles = function (resources) {
				var resource;
				var result = {
					mtl: null,
					obj: null
				};
				for (var index in resources) {

					resource = resources[index];
					if (!Validator.isValid(resource.name)) continue;
					if (Validator.isValid(resource.content)) {

						if (resource.extension === 'OBJ') {

							// fast-fail on bad type
							if (!(resource.content instanceof Uint8Array)) throw 'Provided content is not of type arraybuffer! Aborting...';
							result.obj = resource;
						} else if (resource.extension === 'MTL' && Validator.isValid(resource.name)) {

							if (!(typeof resource.content === 'string' || resource.content instanceof String)) throw 'Provided  content is not of type String! Aborting...';
							result.mtl = resource;
						} else if (resource.extension === "ZIP") {
							// ignore

						} else {

							throw 'Unidentified resource "' + resource.name + '": ' + resource.url;
						}
					} else {

						// fast-fail on bad type
						if (!(typeof resource.name === 'string' || resource.name instanceof String)) throw 'Provided file is not properly defined! Aborting...';
						if (resource.extension === 'OBJ') {

							result.obj = resource;
						} else if (resource.extension === 'MTL') {

							result.mtl = resource;
						} else if (resource.extension === "ZIP") {
							// ignore

						} else {

							throw 'Unidentified resource "' + resource.name + '": ' + resource.url;
						}
					}
				}

				return result;
			};

			/**
    * Utility method for loading an mtl file according resource description.
    * @memberOf THREE.OBJLoader2
    *
    * @param {string} url URL to the file
    * @param {string} name The name of the object
    * @param {Object} content The file content as arraybuffer or text
    * @param {function} callbackOnLoad
    * @param {string} [crossOrigin] CORS value
    */
			OBJLoader2.prototype.loadMtl = function (url, name, content, callbackOnLoad, crossOrigin) {
				var resource = new THREE.LoaderSupport.ResourceDescriptor(url, 'MTL');
				resource.setContent(content);
				this._loadMtl(resource, callbackOnLoad, crossOrigin);
			};

			/**
    * Utility method for loading an mtl file according resource description.
    * @memberOf THREE.OBJLoader2
    *
    * @param {THREE.LoaderSupport.ResourceDescriptor} resource
    * @param {function} callbackOnLoad
    * @param {string} [crossOrigin] CORS value
    */
			OBJLoader2.prototype._loadMtl = function (resource, callbackOnLoad, crossOrigin) {
				if (Validator.isValid(resource)) this.logger.logTimeStart('Loading MTL: ' + resource.name);

				var materials = [];
				var scope = this;
				var processMaterials = function processMaterials(materialCreator) {
					var materialCreatorMaterials = [];
					if (Validator.isValid(materialCreator)) {

						materialCreator.preload();
						materialCreatorMaterials = materialCreator.materials;
						for (var materialName in materialCreatorMaterials) {

							if (materialCreatorMaterials.hasOwnProperty(materialName)) {

								materials[materialName] = materialCreatorMaterials[materialName];
							}
						}
					}

					if (Validator.isValid(resource)) scope.logger.logTimeEnd('Loading MTL: ' + resource.name);
					callbackOnLoad(materials);
				};

				var mtlLoader = new THREE.MTLLoader();
				crossOrigin = Validator.verifyInput(crossOrigin, 'anonymous');
				mtlLoader.setCrossOrigin(crossOrigin);

				// fast-fail
				if (!Validator.isValid(resource) || !Validator.isValid(resource.content) && !Validator.isValid(resource.url)) {

					processMaterials();
				} else {

					mtlLoader.setPath(resource.path);
					if (Validator.isValid(resource.content)) {

						processMaterials(Validator.isValid(resource.content) ? mtlLoader.parse(resource.content) : null);
					} else if (Validator.isValid(resource.url)) {

						var onError = function onError(event) {
							var output = 'Error occurred while downloading "' + resource.url + '"';
							this.logger.logError(output + ': ' + event);
							throw output;
						};

						mtlLoader.load(resource.name, processMaterials, undefined, onError);
					}
				}
			};

			return OBJLoader2;
		}();

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(0));

	/***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (THREE) {
		/**
  * Loads a Wavefront .mtl file specifying materials
  *
  * @author angelxuanchang
  */

		THREE.MTLLoader = function (manager) {

			this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
		};

		THREE.MTLLoader.prototype = {

			constructor: THREE.MTLLoader,

			/**
    * Loads and parses a MTL asset from a URL.
    *
    * @param {String} url - URL to the MTL file.
    * @param {Function} [onLoad] - Callback invoked with the loaded object.
    * @param {Function} [onProgress] - Callback for download progress.
    * @param {Function} [onError] - Callback for download errors.
    *
    * @see setPath setTexturePath
    *
    * @note In order for relative texture references to resolve correctly
    * you must call setPath and/or setTexturePath explicitly prior to load.
    */
			load: function load(url, onLoad, onProgress, onError) {

				var scope = this;

				var loader = new THREE.FileLoader(this.manager);
				loader.setPath(this.path);
				loader.load(url, function (text) {

					onLoad(scope.parse(text));
				}, onProgress, onError);
			},

			/**
    * Set base path for resolving references.
    * If set this path will be prepended to each loaded and found reference.
    *
    * @see setTexturePath
    * @param {String} path
    *
    * @example
    *     mtlLoader.setPath( 'assets/obj/' );
    *     mtlLoader.load( 'my.mtl', ... );
    */
			setPath: function setPath(path) {

				this.path = path;
			},

			/**
    * Set base path for resolving texture references.
    * If set this path will be prepended found texture reference.
    * If not set and setPath is, it will be used as texture base path.
    *
    * @see setPath
    * @param {String} path
    *
    * @example
    *     mtlLoader.setPath( 'assets/obj/' );
    *     mtlLoader.setTexturePath( 'assets/textures/' );
    *     mtlLoader.load( 'my.mtl', ... );
    */
			setTexturePath: function setTexturePath(path) {

				this.texturePath = path;
			},

			setBaseUrl: function setBaseUrl(path) {

				console.warn('THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.');

				this.setTexturePath(path);
			},

			setCrossOrigin: function setCrossOrigin(value) {

				this.crossOrigin = value;
			},

			setMaterialOptions: function setMaterialOptions(value) {

				this.materialOptions = value;
			},

			/**
    * Parses a MTL file.
    *
    * @param {String} text - Content of MTL file
    * @return {THREE.MTLLoader.MaterialCreator}
    *
    * @see setPath setTexturePath
    *
    * @note In order for relative texture references to resolve correctly
    * you must call setPath and/or setTexturePath explicitly prior to parse.
    */
			parse: function parse(text) {

				var lines = text.split('\n');
				var info = {};
				var delimiter_pattern = /\s+/;
				var materialsInfo = {};

				for (var i = 0; i < lines.length; i++) {

					var line = lines[i];
					line = line.trim();

					if (line.length === 0 || line.charAt(0) === '#') {

						// Blank line or comment ignore
						continue;
					}

					var pos = line.indexOf(' ');

					var key = pos >= 0 ? line.substring(0, pos) : line;
					key = key.toLowerCase();

					var value = pos >= 0 ? line.substring(pos + 1) : '';
					value = value.trim();

					if (key === 'newmtl') {

						// New material

						info = { name: value };
						materialsInfo[value] = info;
					} else if (info) {

						if (key === 'ka' || key === 'kd' || key === 'ks') {

							var ss = value.split(delimiter_pattern, 3);
							info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];
						} else {

							info[key] = value;
						}
					}
				}

				var materialCreator = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
				materialCreator.setCrossOrigin(this.crossOrigin);
				materialCreator.setManager(this.manager);
				materialCreator.setMaterials(materialsInfo);
				return materialCreator;
			}

		};

		/**
   * Create a new THREE-MTLLoader.MaterialCreator
   * @param baseUrl - Url relative to which textures are loaded
   * @param options - Set of options on how to construct the materials
   *                  side: Which side to apply the material
   *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
   *                  wrap: What type of wrapping to apply for textures
   *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
   *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
   *                                Default: false, assumed to be already normalized
   *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
   *                                  Default: false
   * @constructor
   */

		THREE.MTLLoader.MaterialCreator = function (baseUrl, options) {

			this.baseUrl = baseUrl || '';
			this.options = options;
			this.materialsInfo = {};
			this.materials = {};
			this.materialsArray = [];
			this.nameLookup = {};

			this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide;
			this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping;
		};

		THREE.MTLLoader.MaterialCreator.prototype = {

			constructor: THREE.MTLLoader.MaterialCreator,

			crossOrigin: 'Anonymous',

			setCrossOrigin: function setCrossOrigin(value) {

				this.crossOrigin = value;
			},

			setManager: function setManager(value) {

				this.manager = value;
			},

			setMaterials: function setMaterials(materialsInfo) {

				this.materialsInfo = this.convert(materialsInfo);
				this.materials = {};
				this.materialsArray = [];
				this.nameLookup = {};
			},

			convert: function convert(materialsInfo) {

				if (!this.options) return materialsInfo;

				var converted = {};

				for (var mn in materialsInfo) {

					// Convert materials info into normalized form based on options

					var mat = materialsInfo[mn];

					var covmat = {};

					converted[mn] = covmat;

					for (var prop in mat) {

						var save = true;
						var value = mat[prop];
						var lprop = prop.toLowerCase();

						switch (lprop) {

							case 'kd':
							case 'ka':
							case 'ks':

								// Diffuse color (color under white light) using RGB values

								if (this.options && this.options.normalizeRGB) {

									value = [value[0] / 255, value[1] / 255, value[2] / 255];
								}

								if (this.options && this.options.ignoreZeroRGBs) {

									if (value[0] === 0 && value[1] === 0 && value[2] === 0) {

										// ignore

										save = false;
									}
								}

								break;

							default:

								break;

						}

						if (save) {

							covmat[lprop] = value;
						}
					}
				}

				return converted;
			},

			preload: function preload() {

				for (var mn in this.materialsInfo) {

					this.create(mn);
				}
			},

			getIndex: function getIndex(materialName) {

				return this.nameLookup[materialName];
			},

			getAsArray: function getAsArray() {

				var index = 0;

				for (var mn in this.materialsInfo) {

					this.materialsArray[index] = this.create(mn);
					this.nameLookup[mn] = index;
					index++;
				}

				return this.materialsArray;
			},

			create: function create(materialName) {

				if (this.materials[materialName] === undefined) {

					this.createMaterial_(materialName);
				}

				return this.materials[materialName];
			},

			createMaterial_: function createMaterial_(materialName) {

				// Create material

				var scope = this;
				var mat = this.materialsInfo[materialName];
				var params = {

					name: materialName,
					side: this.side

				};

				function resolveURL(baseUrl, url) {

					if (typeof url !== 'string' || url === '') return '';

					// Absolute URL
					if (/^https?:\/\//i.test(url)) return url;

					return baseUrl + url;
				}

				function setMapForType(mapType, value) {

					if (params[mapType]) return; // Keep the first encountered texture

					var texParams = scope.getTextureParams(value, params);
					var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));

					map.repeat.copy(texParams.scale);
					map.offset.copy(texParams.offset);

					map.wrapS = scope.wrap;
					map.wrapT = scope.wrap;

					params[mapType] = map;
				}

				for (var prop in mat) {

					var value = mat[prop];
					var n;

					if (value === '') continue;

					switch (prop.toLowerCase()) {

						// Ns is material specular exponent

						case 'kd':

							// Diffuse color (color under white light) using RGB values

							params.color = new THREE.Color().fromArray(value);

							break;

						case 'ks':

							// Specular color (color when light is reflected from shiny surface) using RGB values
							params.specular = new THREE.Color().fromArray(value);

							break;

						case 'map_kd':

							// Diffuse texture map

							setMapForType("map", value);

							break;

						case 'map_ks':

							// Specular map

							setMapForType("specularMap", value);

							break;

						case 'norm':

							setMapForType("normalMap", value);

							break;

						case 'map_bump':
						case 'bump':

							// Bump texture map

							setMapForType("bumpMap", value);

							break;

						case 'ns':

							// The specular exponent (defines the focus of the specular highlight)
							// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

							params.shininess = parseFloat(value);

							break;

						case 'd':
							n = parseFloat(value);

							if (n < 1) {

								params.opacity = n;
								params.transparent = true;
							}

							break;

						case 'tr':
							n = parseFloat(value);

							if (n > 0) {

								params.opacity = 1 - n;
								params.transparent = true;
							}

							break;

						default:
							break;

					}
				}

				this.materials[materialName] = new THREE.MeshPhongMaterial(params);
				return this.materials[materialName];
			},

			getTextureParams: function getTextureParams(value, matParams) {

				var texParams = {

					scale: new THREE.Vector2(1, 1),
					offset: new THREE.Vector2(0, 0)

				};

				var items = value.split(/\s+/);
				var pos;

				pos = items.indexOf('-bm');

				if (pos >= 0) {

					matParams.bumpScale = parseFloat(items[pos + 1]);
					items.splice(pos, 2);
				}

				pos = items.indexOf('-s');

				if (pos >= 0) {

					texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
					items.splice(pos, 4); // we expect 3 parameters here!
				}

				pos = items.indexOf('-o');

				if (pos >= 0) {

					texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
					items.splice(pos, 4); // we expect 3 parameters here!
				}

				texParams.url = items.join(' ').trim();
				return texParams;
			},

			loadTexture: function loadTexture(url, mapping, onLoad, onProgress, onError) {

				var texture;
				var loader = THREE.Loader.Handlers.get(url);
				var manager = this.manager !== undefined ? this.manager : THREE.DefaultLoadingManager;

				if (loader === null) {

					loader = new THREE.TextureLoader(manager);
				}

				if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
				texture = loader.load(url, onLoad, onProgress, onError);

				if (mapping !== undefined) texture.mapping = mapping;

				return texture;
			}

		};

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(0));

	/***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

	module.exports = "js/pc.obj";

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	module.exports =  "js/pc.mtl";

	/***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (THREE) {
		/**
  * @author qiao / https://github.com/qiao
  * @author mrdoob / http://mrdoob.com
  * @author alteredq / http://alteredqualia.com/
  * @author WestLangley / http://github.com/WestLangley
  * @author erich666 / http://erichaines.com
  */

		// This set of controls performs orbiting, dollying (zooming), and panning.
		// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
		//
		//    Orbit - left mouse / touch: one finger move
		//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
		//    Pan - right mouse, or arrow keys / touch: three finger swipe

		THREE.OrbitControls = function (object, domElement) {

			this.object = object;

			this.domElement = domElement !== undefined ? domElement : document;

			// Set to false to disable this control
			this.enabled = true;

			// "target" sets the location of focus, where the object orbits around
			this.target = new THREE.Vector3();

			// How far you can dolly in and out ( PerspectiveCamera only )
			this.minDistance = 0;
			this.maxDistance = Infinity;

			// How far you can zoom in and out ( OrthographicCamera only )
			this.minZoom = 0;
			this.maxZoom = Infinity;

			// How far you can orbit vertically, upper and lower limits.
			// Range is 0 to Math.PI radians.
			this.minPolarAngle = 0; // radians
			this.maxPolarAngle = Math.PI; // radians

			// How far you can orbit horizontally, upper and lower limits.
			// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
			this.minAzimuthAngle = -Infinity; // radians
			this.maxAzimuthAngle = Infinity; // radians

			// Set to true to enable damping (inertia)
			// If damping is enabled, you must call controls.update() in your animation loop
			this.enableDamping = false;
			this.dampingFactor = 0.25;

			// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
			// Set to false to disable zooming
			this.enableZoom = true;
			this.zoomSpeed = 1.0;

			// Set to false to disable rotating
			this.enableRotate = true;
			this.rotateSpeed = 1.0;

			// Set to false to disable panning
			this.enablePan = true;
			this.keyPanSpeed = 7.0; // pixels moved per arrow key push

			// Set to true to automatically rotate around the target
			// If auto-rotate is enabled, you must call controls.update() in your animation loop
			this.autoRotate = false;
			this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

			// Set to false to disable use of the keys
			this.enableKeys = true;

			// The four arrow keys
			this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

			// Mouse buttons
			this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

			// for reset
			this.target0 = this.target.clone();
			this.position0 = this.object.position.clone();
			this.zoom0 = this.object.zoom;

			//
			// public methods
			//

			this.getPolarAngle = function () {

				return spherical.phi;
			};

			this.getAzimuthalAngle = function () {

				return spherical.theta;
			};

			this.saveState = function () {

				scope.target0.copy(scope.target);
				scope.position0.copy(scope.object.position);
				scope.zoom0 = scope.object.zoom;
			};

			this.reset = function () {

				scope.target.copy(scope.target0);
				scope.object.position.copy(scope.position0);
				scope.object.zoom = scope.zoom0;

				scope.object.updateProjectionMatrix();
				scope.dispatchEvent(changeEvent);

				scope.update();

				state = STATE.NONE;
			};

			// this method is exposed, but perhaps it would be better if we can make it private...
			this.update = function () {

				var offset = new THREE.Vector3();

				// so camera.up is the orbit axis
				var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
				var quatInverse = quat.clone().inverse();

				var lastPosition = new THREE.Vector3();
				var lastQuaternion = new THREE.Quaternion();

				return function update() {

					var position = scope.object.position;

					offset.copy(position).sub(scope.target);

					// rotate offset to "y-axis-is-up" space
					offset.applyQuaternion(quat);

					// angle from z-axis around y-axis
					spherical.setFromVector3(offset);

					if (scope.autoRotate && state === STATE.NONE) {

						rotateLeft(getAutoRotationAngle());
					}

					spherical.theta += sphericalDelta.theta;
					spherical.phi += sphericalDelta.phi;

					// restrict theta to be between desired limits
					spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

					// restrict phi to be between desired limits
					spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

					spherical.makeSafe();

					spherical.radius *= scale;

					// restrict radius to be between desired limits
					spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

					// move target to panned location
					scope.target.add(panOffset);

					offset.setFromSpherical(spherical);

					// rotate offset back to "camera-up-vector-is-up" space
					offset.applyQuaternion(quatInverse);

					position.copy(scope.target).add(offset);

					scope.object.lookAt(scope.target);

					if (scope.enableDamping === true) {

						sphericalDelta.theta *= 1 - scope.dampingFactor;
						sphericalDelta.phi *= 1 - scope.dampingFactor;
					} else {

						sphericalDelta.set(0, 0, 0);
					}

					scale = 1;
					panOffset.set(0, 0, 0);

					// update condition is:
					// min(camera displacement, camera rotation in radians)^2 > EPS
					// using small-angle approximation cos(x/2) = 1 - x^2 / 8

					if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

						scope.dispatchEvent(changeEvent);

						lastPosition.copy(scope.object.position);
						lastQuaternion.copy(scope.object.quaternion);
						zoomChanged = false;

						return true;
					}

					return false;
				};
			}();

			this.dispose = function () {

				scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
				scope.domElement.removeEventListener('mousedown', onMouseDown, false);
				scope.domElement.removeEventListener('wheel', onMouseWheel, false);

				scope.domElement.removeEventListener('touchstart', onTouchStart, false);
				scope.domElement.removeEventListener('touchend', onTouchEnd, false);
				scope.domElement.removeEventListener('touchmove', onTouchMove, false);

				document.removeEventListener('mousemove', onMouseMove, false);
				document.removeEventListener('mouseup', onMouseUp, false);

				window.removeEventListener('keydown', onKeyDown, false);

				//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
			};

			//
			// internals
			//

			var scope = this;

			var changeEvent = { type: 'change' };
			var startEvent = { type: 'start' };
			var endEvent = { type: 'end' };

			var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

			var state = STATE.NONE;

			var EPS = 0.000001;

			// current position in spherical coordinates
			var spherical = new THREE.Spherical();
			var sphericalDelta = new THREE.Spherical();

			var scale = 1;
			var panOffset = new THREE.Vector3();
			var zoomChanged = false;

			var rotateStart = new THREE.Vector2();
			var rotateEnd = new THREE.Vector2();
			var rotateDelta = new THREE.Vector2();

			var panStart = new THREE.Vector2();
			var panEnd = new THREE.Vector2();
			var panDelta = new THREE.Vector2();

			var dollyStart = new THREE.Vector2();
			var dollyEnd = new THREE.Vector2();
			var dollyDelta = new THREE.Vector2();

			function getAutoRotationAngle() {

				return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
			}

			function getZoomScale() {

				return Math.pow(0.95, scope.zoomSpeed);
			}

			function rotateLeft(angle) {

				sphericalDelta.theta -= angle;
			}

			function rotateUp(angle) {

				sphericalDelta.phi -= angle;
			}

			var panLeft = function () {

				var v = new THREE.Vector3();

				return function panLeft(distance, objectMatrix) {

					v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
					v.multiplyScalar(-distance);

					panOffset.add(v);
				};
			}();

			var panUp = function () {

				var v = new THREE.Vector3();

				return function panUp(distance, objectMatrix) {

					v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
					v.multiplyScalar(distance);

					panOffset.add(v);
				};
			}();

			// deltaX and deltaY are in pixels; right and down are positive
			var pan = function () {

				var offset = new THREE.Vector3();

				return function pan(deltaX, deltaY) {

					var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

					if (scope.object.isPerspectiveCamera) {

						// perspective
						var position = scope.object.position;
						offset.copy(position).sub(scope.target);
						var targetDistance = offset.length();

						// half of the fov is center to top of screen
						targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

						// we actually don't use screenWidth, since perspective camera is fixed to screen height
						panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
						panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
					} else if (scope.object.isOrthographicCamera) {

						// orthographic
						panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
						panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
					} else {

						// camera neither orthographic nor perspective
						console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
						scope.enablePan = false;
					}
				};
			}();

			function dollyIn(dollyScale) {

				if (scope.object.isPerspectiveCamera) {

					scale /= dollyScale;
				} else if (scope.object.isOrthographicCamera) {

					scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
					scope.object.updateProjectionMatrix();
					zoomChanged = true;
				} else {

					console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
					scope.enableZoom = false;
				}
			}

			function dollyOut(dollyScale) {

				if (scope.object.isPerspectiveCamera) {

					scale *= dollyScale;
				} else if (scope.object.isOrthographicCamera) {

					scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
					scope.object.updateProjectionMatrix();
					zoomChanged = true;
				} else {

					console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
					scope.enableZoom = false;
				}
			}

			//
			// event callbacks - update the object state
			//

			function handleMouseDownRotate(event) {

				//console.log( 'handleMouseDownRotate' );

				rotateStart.set(event.clientX, event.clientY);
			}

			function handleMouseDownDolly(event) {

				//console.log( 'handleMouseDownDolly' );

				dollyStart.set(event.clientX, event.clientY);
			}

			function handleMouseDownPan(event) {

				//console.log( 'handleMouseDownPan' );

				panStart.set(event.clientX, event.clientY);
			}

			function handleMouseMoveRotate(event) {

				//console.log( 'handleMouseMoveRotate' );

				rotateEnd.set(event.clientX, event.clientY);
				rotateDelta.subVectors(rotateEnd, rotateStart);

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				// rotating across whole screen goes 360 degrees around
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

				// rotating up and down along whole screen attempts to go 360, but limited to 180
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

				rotateStart.copy(rotateEnd);

				scope.update();
			}

			function handleMouseMoveDolly(event) {

				//console.log( 'handleMouseMoveDolly' );

				dollyEnd.set(event.clientX, event.clientY);

				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

					dollyIn(getZoomScale());
				} else if (dollyDelta.y < 0) {

					dollyOut(getZoomScale());
				}

				dollyStart.copy(dollyEnd);

				scope.update();
			}

			function handleMouseMovePan(event) {

				//console.log( 'handleMouseMovePan' );

				panEnd.set(event.clientX, event.clientY);

				panDelta.subVectors(panEnd, panStart);

				pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);

				scope.update();
			}

			function handleMouseUp(event) {

				// console.log( 'handleMouseUp' );

			}

			function handleMouseWheel(event) {

				// console.log( 'handleMouseWheel' );

				if (event.deltaY < 0) {

					dollyOut(getZoomScale());
				} else if (event.deltaY > 0) {

					dollyIn(getZoomScale());
				}

				scope.update();
			}

			function handleKeyDown(event) {

				//console.log( 'handleKeyDown' );

				switch (event.keyCode) {

					case scope.keys.UP:
						pan(0, scope.keyPanSpeed);
						scope.update();
						break;

					case scope.keys.BOTTOM:
						pan(0, -scope.keyPanSpeed);
						scope.update();
						break;

					case scope.keys.LEFT:
						pan(scope.keyPanSpeed, 0);
						scope.update();
						break;

					case scope.keys.RIGHT:
						pan(-scope.keyPanSpeed, 0);
						scope.update();
						break;

				}
			}

			function handleTouchStartRotate(event) {

				//console.log( 'handleTouchStartRotate' );

				rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
			}

			function handleTouchStartDolly(event) {

				//console.log( 'handleTouchStartDolly' );

				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;

				var distance = Math.sqrt(dx * dx + dy * dy);

				dollyStart.set(0, distance);
			}

			function handleTouchStartPan(event) {

				//console.log( 'handleTouchStartPan' );

				panStart.set(event.touches[0].pageX, event.touches[0].pageY);
			}

			function handleTouchMoveRotate(event) {

				//console.log( 'handleTouchMoveRotate' );

				rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
				rotateDelta.subVectors(rotateEnd, rotateStart);

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				// rotating across whole screen goes 360 degrees around
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

				// rotating up and down along whole screen attempts to go 360, but limited to 180
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

				rotateStart.copy(rotateEnd);

				scope.update();
			}

			function handleTouchMoveDolly(event) {

				//console.log( 'handleTouchMoveDolly' );

				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;

				var distance = Math.sqrt(dx * dx + dy * dy);

				dollyEnd.set(0, distance);

				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

					dollyOut(getZoomScale());
				} else if (dollyDelta.y < 0) {

					dollyIn(getZoomScale());
				}

				dollyStart.copy(dollyEnd);

				scope.update();
			}

			function handleTouchMovePan(event) {

				//console.log( 'handleTouchMovePan' );

				panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

				panDelta.subVectors(panEnd, panStart);

				pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);

				scope.update();
			}

			function handleTouchEnd(event) {}

			//console.log( 'handleTouchEnd' );

			//
			// event handlers - FSM: listen for events and reset state
			//

			function onMouseDown(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (event.button) {

					case scope.mouseButtons.ORBIT:

						if (scope.enableRotate === false) return;

						handleMouseDownRotate(event);

						state = STATE.ROTATE;

						break;

					case scope.mouseButtons.ZOOM:

						if (scope.enableZoom === false) return;

						handleMouseDownDolly(event);

						state = STATE.DOLLY;

						break;

					case scope.mouseButtons.PAN:

						if (scope.enablePan === false) return;

						handleMouseDownPan(event);

						state = STATE.PAN;

						break;

				}

				if (state !== STATE.NONE) {

					document.addEventListener('mousemove', onMouseMove, false);
					document.addEventListener('mouseup', onMouseUp, false);

					scope.dispatchEvent(startEvent);
				}
			}

			function onMouseMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (state) {

					case STATE.ROTATE:

						if (scope.enableRotate === false) return;

						handleMouseMoveRotate(event);

						break;

					case STATE.DOLLY:

						if (scope.enableZoom === false) return;

						handleMouseMoveDolly(event);

						break;

					case STATE.PAN:

						if (scope.enablePan === false) return;

						handleMouseMovePan(event);

						break;

				}
			}

			function onMouseUp(event) {

				if (scope.enabled === false) return;

				handleMouseUp(event);

				document.removeEventListener('mousemove', onMouseMove, false);
				document.removeEventListener('mouseup', onMouseUp, false);

				scope.dispatchEvent(endEvent);

				state = STATE.NONE;
			}

			function onMouseWheel(event) {

				if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

				event.preventDefault();
				event.stopPropagation();

				handleMouseWheel(event);

				scope.dispatchEvent(startEvent); // not sure why these are here...
				scope.dispatchEvent(endEvent);
			}

			function onKeyDown(event) {

				if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

				handleKeyDown(event);
			}

			function onTouchStart(event) {

				if (scope.enabled === false) return;

				switch (event.touches.length) {

					case 1:
						// one-fingered touch: rotate

						if (scope.enableRotate === false) return;

						handleTouchStartRotate(event);

						state = STATE.TOUCH_ROTATE;

						break;

					case 2:
						// two-fingered touch: dolly

						if (scope.enableZoom === false) return;

						handleTouchStartDolly(event);

						state = STATE.TOUCH_DOLLY;

						break;

					case 3:
						// three-fingered touch: pan

						if (scope.enablePan === false) return;

						handleTouchStartPan(event);

						state = STATE.TOUCH_PAN;

						break;

					default:

						state = STATE.NONE;

				}

				if (state !== STATE.NONE) {

					scope.dispatchEvent(startEvent);
				}
			}

			function onTouchMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();
				event.stopPropagation();

				switch (event.touches.length) {

					case 1:
						// one-fingered touch: rotate

						if (scope.enableRotate === false) return;
						if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

						handleTouchMoveRotate(event);

						break;

					case 2:
						// two-fingered touch: dolly

						if (scope.enableZoom === false) return;
						if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

						handleTouchMoveDolly(event);

						break;

					case 3:
						// three-fingered touch: pan

						if (scope.enablePan === false) return;
						if (state !== STATE.TOUCH_PAN) return; // is this needed?...

						handleTouchMovePan(event);

						break;

					default:

						state = STATE.NONE;

				}
			}

			function onTouchEnd(event) {

				if (scope.enabled === false) return;

				handleTouchEnd(event);

				scope.dispatchEvent(endEvent);

				state = STATE.NONE;
			}

			function onContextMenu(event) {

				if (scope.enabled === false) return;

				event.preventDefault();
			}

			//

			scope.domElement.addEventListener('contextmenu', onContextMenu, false);

			scope.domElement.addEventListener('mousedown', onMouseDown, false);
			scope.domElement.addEventListener('wheel', onMouseWheel, false);

			scope.domElement.addEventListener('touchstart', onTouchStart, false);
			scope.domElement.addEventListener('touchend', onTouchEnd, false);
			scope.domElement.addEventListener('touchmove', onTouchMove, false);

			window.addEventListener('keydown', onKeyDown, false);

			// force an update at start

			this.update();
		};

		THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
		THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

		Object.defineProperties(THREE.OrbitControls.prototype, {

			center: {

				get: function get() {

					console.warn('THREE.OrbitControls: .center has been renamed to .target');
					return this.target;
				}

			},

			// backward compatibility

			noZoom: {

				get: function get() {

					console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
					return !this.enableZoom;
				},

				set: function set(value) {

					console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
					this.enableZoom = !value;
				}

			},

			noRotate: {

				get: function get() {

					console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
					return !this.enableRotate;
				},

				set: function set(value) {

					console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
					this.enableRotate = !value;
				}

			},

			noPan: {

				get: function get() {

					console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
					return !this.enablePan;
				},

				set: function set(value) {

					console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
					this.enablePan = !value;
				}

			},

			noKeys: {

				get: function get() {

					console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
					return !this.enableKeys;
				},

				set: function set(value) {

					console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
					this.enableKeys = !value;
				}

			},

			staticMoving: {

				get: function get() {

					console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
					return !this.enableDamping;
				},

				set: function set(value) {

					console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
					this.enableDamping = !value;
				}

			},

			dynamicDampingFactor: {

				get: function get() {

					console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
					return this.dampingFactor;
				},

				set: function set(value) {

					console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
					this.dampingFactor = value;
				}

			}

		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(0));

	/***/
}]
/******/);