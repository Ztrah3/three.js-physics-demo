import {
  __export
} from "./chunk-SSYGV25P.js";

// node_modules/@dimforge/rapier3d/exports.js
var exports_exports = {};
__export(exports_exports, {
  ActiveCollisionTypes: () => ActiveCollisionTypes,
  ActiveEvents: () => ActiveEvents,
  ActiveHooks: () => ActiveHooks,
  Ball: () => Ball,
  BroadPhase: () => BroadPhase,
  CCDSolver: () => CCDSolver,
  Capsule: () => Capsule,
  CharacterCollision: () => CharacterCollision,
  CoefficientCombineRule: () => CoefficientCombineRule,
  Collider: () => Collider,
  ColliderDesc: () => ColliderDesc,
  ColliderSet: () => ColliderSet,
  Cone: () => Cone,
  ConvexPolyhedron: () => ConvexPolyhedron,
  Cuboid: () => Cuboid,
  Cylinder: () => Cylinder,
  DebugRenderBuffers: () => DebugRenderBuffers,
  DebugRenderPipeline: () => DebugRenderPipeline,
  EventQueue: () => EventQueue,
  FeatureType: () => FeatureType,
  FixedImpulseJoint: () => FixedImpulseJoint,
  FixedMultibodyJoint: () => FixedMultibodyJoint,
  HalfSpace: () => HalfSpace,
  Heightfield: () => Heightfield,
  ImpulseJoint: () => ImpulseJoint,
  ImpulseJointSet: () => ImpulseJointSet,
  IntegrationParameters: () => IntegrationParameters,
  IslandManager: () => IslandManager,
  JointData: () => JointData,
  JointType: () => JointType,
  KinematicCharacterController: () => KinematicCharacterController,
  MassPropsMode: () => MassPropsMode,
  MotorModel: () => MotorModel,
  MultibodyJoint: () => MultibodyJoint,
  MultibodyJointSet: () => MultibodyJointSet,
  NarrowPhase: () => NarrowPhase,
  PhysicsPipeline: () => PhysicsPipeline,
  PointColliderProjection: () => PointColliderProjection,
  PointProjection: () => PointProjection,
  Polyline: () => Polyline,
  PrismaticImpulseJoint: () => PrismaticImpulseJoint,
  PrismaticMultibodyJoint: () => PrismaticMultibodyJoint,
  Quaternion: () => Quaternion,
  QueryFilterFlags: () => QueryFilterFlags,
  QueryPipeline: () => QueryPipeline,
  Ray: () => Ray,
  RayColliderIntersection: () => RayColliderIntersection,
  RayColliderToi: () => RayColliderToi,
  RayIntersection: () => RayIntersection,
  RevoluteImpulseJoint: () => RevoluteImpulseJoint,
  RevoluteMultibodyJoint: () => RevoluteMultibodyJoint,
  RigidBody: () => RigidBody,
  RigidBodyDesc: () => RigidBodyDesc,
  RigidBodySet: () => RigidBodySet,
  RigidBodyType: () => RigidBodyType,
  RotationOps: () => RotationOps,
  RoundCone: () => RoundCone,
  RoundConvexPolyhedron: () => RoundConvexPolyhedron,
  RoundCuboid: () => RoundCuboid,
  RoundCylinder: () => RoundCylinder,
  RoundTriangle: () => RoundTriangle,
  SdpMatrix3: () => SdpMatrix3,
  SdpMatrix3Ops: () => SdpMatrix3Ops,
  Segment: () => Segment,
  SerializationPipeline: () => SerializationPipeline,
  Shape: () => Shape,
  ShapeColliderTOI: () => ShapeColliderTOI,
  ShapeContact: () => ShapeContact,
  ShapeTOI: () => ShapeTOI,
  ShapeType: () => ShapeType,
  SolverFlags: () => SolverFlags,
  SphericalImpulseJoint: () => SphericalImpulseJoint,
  SphericalMultibodyJoint: () => SphericalMultibodyJoint,
  TempContactForceEvent: () => TempContactForceEvent,
  TempContactManifold: () => TempContactManifold,
  TriMesh: () => TriMesh,
  Triangle: () => Triangle,
  UnitImpulseJoint: () => UnitImpulseJoint,
  UnitMultibodyJoint: () => UnitMultibodyJoint,
  Vector3: () => Vector3,
  VectorOps: () => VectorOps,
  World: () => World,
  version: () => version3
});

// node_modules/@dimforge/rapier3d/rapier_wasm3d.js
import * as wasm2 from "C:/Users/zane1/Web Development projects and resources/Three.js projects/Physics-Demo/node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm";

// node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.js
import * as wasm from "C:/Users/zane1/Web Development projects and resources/Three.js projects/Physics-Demo/node_modules/@dimforge/rapier3d/rapier_wasm3d_bg.wasm";
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedFloat64Memory0 = new Float64Array();
function getFloat64Memory0() {
  if (cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }
  return cachedFloat64Memory0;
}
var cachedInt32Memory0 = new Int32Array();
function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachedUint8Memory0 = new Uint8Array();
function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function version2() {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.version(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(r0, r1);
  }
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
var cachedFloat32Memory0 = new Float32Array();
function getFloat32Memory0() {
  if (cachedFloat32Memory0.byteLength === 0) {
    cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
  }
  return cachedFloat32Memory0;
}
var stack_pointer = 32;
function addBorrowedObject(obj) {
  if (stack_pointer == 1)
    throw new Error("out of js stack");
  heap[--stack_pointer] = obj;
  return stack_pointer;
}
function getArrayF32FromWasm0(ptr, len) {
  return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
var cachedUint32Memory0 = new Uint32Array();
function getUint32Memory0() {
  if (cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachedUint32Memory0;
}
function getArrayU32FromWasm0(ptr, len) {
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
var WASM_VECTOR_LEN = 0;
function passArrayF32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getFloat32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
var RawJointType = Object.freeze({ Revolute: 0, "0": "Revolute", Fixed: 1, "1": "Fixed", Prismatic: 2, "2": "Prismatic", Spherical: 3, "3": "Spherical", Generic: 4, "4": "Generic" });
var RawMotorModel = Object.freeze({ AccelerationBased: 0, "0": "AccelerationBased", ForceBased: 1, "1": "ForceBased" });
var RawJointAxis = Object.freeze({ X: 0, "0": "X", Y: 1, "1": "Y", Z: 2, "2": "Z", AngX: 3, "3": "AngX", AngY: 4, "4": "AngY", AngZ: 5, "5": "AngZ" });
var RawRigidBodyType = Object.freeze({ Dynamic: 0, "0": "Dynamic", Fixed: 1, "1": "Fixed", KinematicPositionBased: 2, "2": "KinematicPositionBased", KinematicVelocityBased: 3, "3": "KinematicVelocityBased" });
var RawFeatureType = Object.freeze({ Vertex: 0, "0": "Vertex", Edge: 1, "1": "Edge", Face: 2, "2": "Face", Unknown: 3, "3": "Unknown" });
var RawShapeType = Object.freeze({ Ball: 0, "0": "Ball", Cuboid: 1, "1": "Cuboid", Capsule: 2, "2": "Capsule", Segment: 3, "3": "Segment", Polyline: 4, "4": "Polyline", Triangle: 5, "5": "Triangle", TriMesh: 6, "6": "TriMesh", HeightField: 7, "7": "HeightField", Compound: 8, "8": "Compound", ConvexPolyhedron: 9, "9": "ConvexPolyhedron", Cylinder: 10, "10": "Cylinder", Cone: 11, "11": "Cone", RoundCuboid: 12, "12": "RoundCuboid", RoundTriangle: 13, "13": "RoundTriangle", RoundCylinder: 14, "14": "RoundCylinder", RoundCone: 15, "15": "RoundCone", RoundConvexPolyhedron: 16, "16": "RoundConvexPolyhedron", HalfSpace: 17, "17": "HalfSpace" });
var RawBroadPhase = class _RawBroadPhase {
  static __wrap(ptr) {
    const obj = Object.create(_RawBroadPhase.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawbroadphase_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawbroadphase_new();
    return _RawBroadPhase.__wrap(ret);
  }
};
var RawCCDSolver = class _RawCCDSolver {
  static __wrap(ptr) {
    const obj = Object.create(_RawCCDSolver.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawccdsolver_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawccdsolver_new();
    return _RawCCDSolver.__wrap(ret);
  }
};
var RawCharacterCollision = class _RawCharacterCollision {
  static __wrap(ptr) {
    const obj = Object.create(_RawCharacterCollision.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcharactercollision_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawcharactercollision_new();
    return _RawCharacterCollision.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  handle() {
    const ret = wasm.rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  translationApplied() {
    const ret = wasm.rawcharactercollision_translationApplied(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  translationRemaining() {
    const ret = wasm.rawcharactercollision_translationRemaining(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  worldWitness1() {
    const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldWitness2() {
    const ret = wasm.rawcharactercollision_worldWitness2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldNormal1() {
    const ret = wasm.rawcharactercollision_worldNormal1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldNormal2() {
    const ret = wasm.rawcharactercollision_worldNormal2(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawColliderSet = class _RawColliderSet {
  static __wrap(ptr) {
    const obj = Object.create(_RawColliderSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcolliderset_free(ptr);
  }
  /**
  * The world-space translation of this collider.
  * @param {number} handle
  * @returns {RawVector}
  */
  coTranslation(handle) {
    const ret = wasm.rawcolliderset_coTranslation(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space orientation of this collider.
  * @param {number} handle
  * @returns {RawRotation}
  */
  coRotation(handle) {
    const ret = wasm.rawcolliderset_coRotation(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Sets the translation of this collider.
  *
  * # Parameters
  * - `x`: the world-space position of the collider along the `x` axis.
  * - `y`: the world-space position of the collider along the `y` axis.
  * - `z`: the world-space position of the collider along the `z` axis.
  * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  coSetTranslation(handle, x, y, z) {
    wasm.rawcolliderset_coSetTranslation(this.ptr, handle, x, y, z);
  }
  /**
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  coSetTranslationWrtParent(handle, x, y, z) {
    wasm.rawcolliderset_coSetTranslationWrtParent(this.ptr, handle, x, y, z);
  }
  /**
  * Sets the rotation quaternion of this collider.
  *
  * This does nothing if a zero quaternion is provided.
  *
  * # Parameters
  * - `x`: the first vector component of the quaternion.
  * - `y`: the second vector component of the quaternion.
  * - `z`: the third vector component of the quaternion.
  * - `w`: the scalar component of the quaternion.
  * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  coSetRotation(handle, x, y, z, w) {
    wasm.rawcolliderset_coSetRotation(this.ptr, handle, x, y, z, w);
  }
  /**
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  coSetRotationWrtParent(handle, x, y, z, w) {
    wasm.rawcolliderset_coSetRotationWrtParent(this.ptr, handle, x, y, z, w);
  }
  /**
  * Is this collider a sensor?
  * @param {number} handle
  * @returns {boolean}
  */
  coIsSensor(handle) {
    const ret = wasm.rawcolliderset_coIsSensor(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The type of the shape of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coShapeType(handle) {
    const ret = wasm.rawcolliderset_coShapeType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHalfspaceNormal(handle) {
    const ret = wasm.rawcolliderset_coHalfspaceNormal(this.ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * The half-extents of this collider if it is has a cuboid shape.
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHalfExtents(handle) {
    const ret = wasm.rawcolliderset_coHalfExtents(this.ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * Set the half-extents of this collider if it has a cuboid shape.
  * @param {number} handle
  * @param {RawVector} newHalfExtents
  */
  coSetHalfExtents(handle, newHalfExtents) {
    _assertClass(newHalfExtents, RawVector);
    wasm.rawcolliderset_coSetHalfExtents(this.ptr, handle, newHalfExtents.ptr);
  }
  /**
  * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coRadius(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coRadius(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the radius of this collider if it is a ball, capsule, cylinder, or cone shape.
  * @param {number} handle
  * @param {number} newRadius
  */
  coSetRadius(handle, newRadius) {
    wasm.rawcolliderset_coSetRadius(this.ptr, handle, newRadius);
  }
  /**
  * The half height of this collider if it is a capsule, cylinder, or cone shape.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHalfHeight(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coHalfHeight(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the half height of this collider if it is a capsule, cylinder, or cone shape.
  * @param {number} handle
  * @param {number} newHalfheight
  */
  coSetHalfHeight(handle, newHalfheight) {
    wasm.rawcolliderset_coSetHalfHeight(this.ptr, handle, newHalfheight);
  }
  /**
  * The radius of the round edges of this collider.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coRoundRadius(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coRoundRadius(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the radius of the round edges of this collider.
  * @param {number} handle
  * @param {number} newBorderRadius
  */
  coSetRoundRadius(handle, newBorderRadius) {
    wasm.rawcolliderset_coSetRoundRadius(this.ptr, handle, newBorderRadius);
  }
  /**
  * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
  * @param {number} handle
  * @returns {Float32Array | undefined}
  */
  coVertices(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coVertices(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayF32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
      }
      return v0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
  * @param {number} handle
  * @returns {Uint32Array | undefined}
  */
  coIndices(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coIndices(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
      }
      return v0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The height of this heightfield if it is one.
  * @param {number} handle
  * @returns {Float32Array | undefined}
  */
  coHeightfieldHeights(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coHeightfieldHeights(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v0;
      if (r0 !== 0) {
        v0 = getArrayF32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
      }
      return v0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The scaling factor applied of this heightfield if it is one.
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHeightfieldScale(handle) {
    const ret = wasm.rawcolliderset_coHeightfieldScale(this.ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * The number of rows on this heightfield's height matrix, if it is one.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHeightfieldNRows(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coHeightfieldNRows(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The number of columns on this heightfield's height matrix, if it is one.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHeightfieldNCols(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coHeightfieldNCols(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The unique integer identifier of the collider this collider is attached to.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coParent(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coParent(retptr, this.ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  coSetEnabled(handle, enabled) {
    wasm.rawcolliderset_coSetEnabled(this.ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  coIsEnabled(handle) {
    const ret = wasm.rawcolliderset_coIsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The friction coefficient of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coFriction(handle) {
    const ret = wasm.rawcolliderset_coFriction(this.ptr, handle);
    return ret;
  }
  /**
  * The restitution coefficient of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coRestitution(handle) {
    const ret = wasm.rawcolliderset_coRestitution(this.ptr, handle);
    return ret;
  }
  /**
  * The density of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coDensity(handle) {
    const ret = wasm.rawcolliderset_coDensity(this.ptr, handle);
    return ret;
  }
  /**
  * The mass of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coMass(handle) {
    const ret = wasm.rawcolliderset_coMass(this.ptr, handle);
    return ret;
  }
  /**
  * The volume of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coVolume(handle) {
    const ret = wasm.rawcolliderset_coVolume(this.ptr, handle);
    return ret;
  }
  /**
  * The collision groups of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coCollisionGroups(handle) {
    const ret = wasm.rawcolliderset_coCollisionGroups(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The solver groups of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coSolverGroups(handle) {
    const ret = wasm.rawcolliderset_coSolverGroups(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The physics hooks enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveHooks(handle) {
    const ret = wasm.rawcolliderset_coActiveHooks(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The collision types enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveCollisionTypes(handle) {
    const ret = wasm.rawcolliderset_coActiveCollisionTypes(this.ptr, handle);
    return ret;
  }
  /**
  * The events enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveEvents(handle) {
    const ret = wasm.rawcolliderset_coActiveEvents(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The total force magnitude beyond which a contact force event can be emitted.
  * @param {number} handle
  * @returns {number}
  */
  coContactForceEventThreshold(handle) {
    const ret = wasm.rawcolliderset_coContactForceEventThreshold(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawVector} point
  * @returns {boolean}
  */
  coContainsPoint(handle, point) {
    _assertClass(point, RawVector);
    const ret = wasm.rawcolliderset_coContainsPoint(this.ptr, handle, point.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawVector} colliderVel
  * @param {RawShape} shape2
  * @param {RawVector} shape2Pos
  * @param {RawRotation} shape2Rot
  * @param {RawVector} shape2Vel
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeTOI | undefined}
  */
  coCastShape(handle, colliderVel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi, stop_at_penetration) {
    _assertClass(colliderVel, RawVector);
    _assertClass(shape2, RawShape);
    _assertClass(shape2Pos, RawVector);
    _assertClass(shape2Rot, RawRotation);
    _assertClass(shape2Vel, RawVector);
    const ret = wasm.rawcolliderset_coCastShape(this.ptr, handle, colliderVel.ptr, shape2.ptr, shape2Pos.ptr, shape2Rot.ptr, shape2Vel.ptr, maxToi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeTOI.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} collider1Vel
  * @param {number} collider2handle
  * @param {RawVector} collider2Vel
  * @param {number} max_toi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeColliderTOI | undefined}
  */
  coCastCollider(handle, collider1Vel, collider2handle, collider2Vel, max_toi, stop_at_penetration) {
    _assertClass(collider1Vel, RawVector);
    _assertClass(collider2Vel, RawVector);
    const ret = wasm.rawcolliderset_coCastCollider(this.ptr, handle, collider1Vel.ptr, collider2handle, collider2Vel.ptr, max_toi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeColliderTOI.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @returns {boolean}
  */
  coIntersectsShape(handle, shape2, shapePos2, shapeRot2) {
    _assertClass(shape2, RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawcolliderset_coIntersectsShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  coContactShape(handle, shape2, shapePos2, shapeRot2, prediction) {
    _assertClass(shape2, RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawcolliderset_coContactShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {number} collider2handle
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  coContactCollider(handle, collider2handle, prediction) {
    const ret = wasm.rawcolliderset_coContactCollider(this.ptr, handle, collider2handle, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} point
  * @param {boolean} solid
  * @returns {RawPointProjection}
  */
  coProjectPoint(handle, point, solid) {
    _assertClass(point, RawVector);
    const ret = wasm.rawcolliderset_coProjectPoint(this.ptr, handle, point.ptr, solid);
    return RawPointProjection.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @returns {boolean}
  */
  coIntersectsRay(handle, rayOrig, rayDir, maxToi) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawcolliderset_coIntersectsRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {number}
  */
  coCastRay(handle, rayOrig, rayDir, maxToi, solid) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawcolliderset_coCastRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {RawRayIntersection | undefined}
  */
  coCastRayAndGetNormal(handle, rayOrig, rayDir, maxToi, solid) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawcolliderset_coCastRayAndGetNormal(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret === 0 ? void 0 : RawRayIntersection.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {boolean} is_sensor
  */
  coSetSensor(handle, is_sensor) {
    wasm.rawcolliderset_coSetSensor(this.ptr, handle, is_sensor);
  }
  /**
  * @param {number} handle
  * @param {number} restitution
  */
  coSetRestitution(handle, restitution) {
    wasm.rawcolliderset_coSetRestitution(this.ptr, handle, restitution);
  }
  /**
  * @param {number} handle
  * @param {number} friction
  */
  coSetFriction(handle, friction) {
    wasm.rawcolliderset_coSetFriction(this.ptr, handle, friction);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coFrictionCombineRule(handle) {
    const ret = wasm.rawcolliderset_coFrictionCombineRule(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} rule
  */
  coSetFrictionCombineRule(handle, rule) {
    wasm.rawcolliderset_coSetFrictionCombineRule(this.ptr, handle, rule);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coRestitutionCombineRule(handle) {
    const ret = wasm.rawcolliderset_coRestitutionCombineRule(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} rule
  */
  coSetRestitutionCombineRule(handle, rule) {
    wasm.rawcolliderset_coSetRestitutionCombineRule(this.ptr, handle, rule);
  }
  /**
  * @param {number} handle
  * @param {number} groups
  */
  coSetCollisionGroups(handle, groups) {
    wasm.rawcolliderset_coSetCollisionGroups(this.ptr, handle, groups);
  }
  /**
  * @param {number} handle
  * @param {number} groups
  */
  coSetSolverGroups(handle, groups) {
    wasm.rawcolliderset_coSetSolverGroups(this.ptr, handle, groups);
  }
  /**
  * @param {number} handle
  * @param {number} hooks
  */
  coSetActiveHooks(handle, hooks) {
    wasm.rawcolliderset_coSetActiveHooks(this.ptr, handle, hooks);
  }
  /**
  * @param {number} handle
  * @param {number} events
  */
  coSetActiveEvents(handle, events) {
    wasm.rawcolliderset_coSetActiveEvents(this.ptr, handle, events);
  }
  /**
  * @param {number} handle
  * @param {number} types
  */
  coSetActiveCollisionTypes(handle, types) {
    wasm.rawcolliderset_coSetActiveCollisionTypes(this.ptr, handle, types);
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape
  */
  coSetShape(handle, shape) {
    _assertClass(shape, RawShape);
    wasm.rawcolliderset_coSetShape(this.ptr, handle, shape.ptr);
  }
  /**
  * @param {number} handle
  * @param {number} threshold
  */
  coSetContactForceEventThreshold(handle, threshold) {
    wasm.rawcolliderset_coSetContactForceEventThreshold(this.ptr, handle, threshold);
  }
  /**
  * @param {number} handle
  * @param {number} density
  */
  coSetDensity(handle, density) {
    wasm.rawcolliderset_coSetDensity(this.ptr, handle, density);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  */
  coSetMass(handle, mass) {
    wasm.rawcolliderset_coSetMass(this.ptr, handle, mass);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  */
  coSetMassProperties(handle, mass, centerOfMass, principalAngularInertia, angularInertiaFrame) {
    _assertClass(centerOfMass, RawVector);
    _assertClass(principalAngularInertia, RawVector);
    _assertClass(angularInertiaFrame, RawRotation);
    wasm.rawcolliderset_coSetMassProperties(this.ptr, handle, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawcolliderset_new();
    return _RawColliderSet.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  len() {
    const ret = wasm.rawcolliderset_len(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawcolliderset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {boolean} enabled
  * @param {RawShape} shape
  * @param {RawVector} translation
  * @param {RawRotation} rotation
  * @param {number} massPropsMode
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  * @param {number} density
  * @param {number} friction
  * @param {number} restitution
  * @param {number} frictionCombineRule
  * @param {number} restitutionCombineRule
  * @param {boolean} isSensor
  * @param {number} collisionGroups
  * @param {number} solverGroups
  * @param {number} activeCollisionTypes
  * @param {number} activeHooks
  * @param {number} activeEvents
  * @param {number} contactForceEventThreshold
  * @param {boolean} hasParent
  * @param {number} parent
  * @param {RawRigidBodySet} bodies
  * @returns {number | undefined}
  */
  createCollider(enabled, shape, translation, rotation, massPropsMode, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, hasParent, parent, bodies) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(shape, RawShape);
      _assertClass(translation, RawVector);
      _assertClass(rotation, RawRotation);
      _assertClass(centerOfMass, RawVector);
      _assertClass(principalAngularInertia, RawVector);
      _assertClass(angularInertiaFrame, RawRotation);
      _assertClass(bodies, RawRigidBodySet);
      wasm.rawcolliderset_createCollider(retptr, this.ptr, enabled, shape.ptr, translation.ptr, rotation.ptr, massPropsMode, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, hasParent, parent, bodies.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Removes a collider from this set and wake-up the rigid-body it is attached to.
  * @param {number} handle
  * @param {RawIslandManager} islands
  * @param {RawRigidBodySet} bodies
  * @param {boolean} wakeUp
  */
  remove(handle, islands, bodies, wakeUp) {
    _assertClass(islands, RawIslandManager);
    _assertClass(bodies, RawRigidBodySet);
    wasm.rawcolliderset_remove(this.ptr, handle, islands.ptr, bodies.ptr, wakeUp);
  }
  /**
  * Checks if a collider with the given integer handle exists.
  * @param {number} handle
  * @returns {boolean}
  */
  isHandleValid(handle) {
    const ret = wasm.rawcolliderset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
  * @param {Function} f
  */
  forEachColliderHandle(f) {
    try {
      wasm.rawcolliderset_forEachColliderHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawContactManifold = class _RawContactManifold {
  static __wrap(ptr) {
    const obj = Object.create(_RawContactManifold.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcontactmanifold_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = wasm.rawcontactmanifold_normal(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  local_n1() {
    const ret = wasm.rawcontactmanifold_local_n1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  local_n2() {
    const ret = wasm.rawcontactmanifold_local_n2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  subshape1() {
    const ret = wasm.rawcontactmanifold_subshape1(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  subshape2() {
    const ret = wasm.rawcontactmanifold_subshape2(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  num_contacts() {
    const ret = wasm.rawcontactmanifold_num_contacts(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  contact_local_p1(i) {
    const ret = wasm.rawcontactmanifold_contact_local_p1(this.ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  contact_local_p2(i) {
    const ret = wasm.rawcontactmanifold_contact_local_p2(this.ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_dist(i) {
    const ret = wasm.rawcontactmanifold_contact_dist(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_fid1(i) {
    const ret = wasm.rawcontactmanifold_contact_fid1(this.ptr, i);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_fid2(i) {
    const ret = wasm.rawcontactmanifold_contact_fid2(this.ptr, i);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_impulse(i) {
    const ret = wasm.rawcontactmanifold_contact_impulse(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_tangent_impulse_x(i) {
    const ret = wasm.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_tangent_impulse_y(i) {
    const ret = wasm.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, i);
    return ret;
  }
  /**
  * @returns {number}
  */
  num_solver_contacts() {
    const ret = wasm.rawcontactmanifold_num_solver_contacts(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  solver_contact_point(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_point(this.ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_dist(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_dist(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_friction(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_friction(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_restitution(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_restitution(this.ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {RawVector}
  */
  solver_contact_tangent_velocity(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, i);
    return RawVector.__wrap(ret);
  }
};
var RawContactPair = class _RawContactPair {
  static __wrap(ptr) {
    const obj = Object.create(_RawContactPair.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcontactpair_free(ptr);
  }
  /**
  * @returns {number}
  */
  collider1() {
    const ret = wasm.rawcontactpair_collider1(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  collider2() {
    const ret = wasm.rawcontactpair_collider2(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  numContactManifolds() {
    const ret = wasm.rawcontactpair_numContactManifolds(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawContactManifold | undefined}
  */
  contactManifold(i) {
    const ret = wasm.rawcontactpair_contactManifold(this.ptr, i);
    return ret === 0 ? void 0 : RawContactManifold.__wrap(ret);
  }
};
var RawDebugRenderPipeline = class _RawDebugRenderPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawDebugRenderPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawdebugrenderpipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawdebugrenderpipeline_new();
    return _RawDebugRenderPipeline.__wrap(ret);
  }
  /**
  * @returns {Float32Array}
  */
  vertices() {
    const ret = wasm.rawdebugrenderpipeline_vertices(this.ptr);
    return takeObject(ret);
  }
  /**
  * @returns {Float32Array}
  */
  colors() {
    const ret = wasm.rawdebugrenderpipeline_colors(this.ptr);
    return takeObject(ret);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} impulse_joints
  * @param {RawMultibodyJointSet} multibody_joints
  * @param {RawNarrowPhase} narrow_phase
  */
  render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(impulse_joints, RawImpulseJointSet);
    _assertClass(multibody_joints, RawMultibodyJointSet);
    _assertClass(narrow_phase, RawNarrowPhase);
    wasm.rawdebugrenderpipeline_render(this.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr, narrow_phase.ptr);
  }
};
var RawDeserializedWorld = class _RawDeserializedWorld {
  static __wrap(ptr) {
    const obj = Object.create(_RawDeserializedWorld.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawdeserializedworld_free(ptr);
  }
  /**
  * @returns {RawVector | undefined}
  */
  takeGravity() {
    const ret = wasm.rawdeserializedworld_takeGravity(this.ptr);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @returns {RawIntegrationParameters | undefined}
  */
  takeIntegrationParameters() {
    const ret = wasm.rawdeserializedworld_takeIntegrationParameters(this.ptr);
    return ret === 0 ? void 0 : RawIntegrationParameters.__wrap(ret);
  }
  /**
  * @returns {RawIslandManager | undefined}
  */
  takeIslandManager() {
    const ret = wasm.rawdeserializedworld_takeIslandManager(this.ptr);
    return ret === 0 ? void 0 : RawIslandManager.__wrap(ret);
  }
  /**
  * @returns {RawBroadPhase | undefined}
  */
  takeBroadPhase() {
    const ret = wasm.rawdeserializedworld_takeBroadPhase(this.ptr);
    return ret === 0 ? void 0 : RawBroadPhase.__wrap(ret);
  }
  /**
  * @returns {RawNarrowPhase | undefined}
  */
  takeNarrowPhase() {
    const ret = wasm.rawdeserializedworld_takeNarrowPhase(this.ptr);
    return ret === 0 ? void 0 : RawNarrowPhase.__wrap(ret);
  }
  /**
  * @returns {RawRigidBodySet | undefined}
  */
  takeBodies() {
    const ret = wasm.rawdeserializedworld_takeBodies(this.ptr);
    return ret === 0 ? void 0 : RawRigidBodySet.__wrap(ret);
  }
  /**
  * @returns {RawColliderSet | undefined}
  */
  takeColliders() {
    const ret = wasm.rawdeserializedworld_takeColliders(this.ptr);
    return ret === 0 ? void 0 : RawColliderSet.__wrap(ret);
  }
  /**
  * @returns {RawImpulseJointSet | undefined}
  */
  takeImpulseJoints() {
    const ret = wasm.rawdeserializedworld_takeImpulseJoints(this.ptr);
    return ret === 0 ? void 0 : RawImpulseJointSet.__wrap(ret);
  }
  /**
  * @returns {RawMultibodyJointSet | undefined}
  */
  takeMultibodyJoints() {
    const ret = wasm.rawdeserializedworld_takeMultibodyJoints(this.ptr);
    return ret === 0 ? void 0 : RawMultibodyJointSet.__wrap(ret);
  }
};
var RawEventQueue = class _RawEventQueue {
  static __wrap(ptr) {
    const obj = Object.create(_RawEventQueue.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_raweventqueue_free(ptr);
  }
  /**
  * Creates a new event collector.
  *
  * # Parameters
  * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
  * be automatically drained before each `world.step(collector)`. If false, the collector will
  * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
  * RAM if no drain is performed.
  * @param {boolean} autoDrain
  */
  constructor(autoDrain) {
    const ret = wasm.raweventqueue_new(autoDrain);
    return _RawEventQueue.__wrap(ret);
  }
  /**
  * Applies the given javascript closure on each collision event of this collector, then clear
  * the internal collision event buffer.
  *
  * # Parameters
  * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
  * closure should take three arguments: two integers representing the handles of the colliders
  * involved in the collision, and a boolean indicating if the collision started (true) or stopped
  * (false).
  * @param {Function} f
  */
  drainCollisionEvents(f) {
    try {
      wasm.raweventqueue_drainCollisionEvents(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {Function} f
  */
  drainContactForceEvents(f) {
    try {
      wasm.raweventqueue_drainContactForceEvents(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Removes all events contained by this collector.
  */
  clear() {
    wasm.raweventqueue_clear(this.ptr);
  }
};
var RawGenericJoint = class _RawGenericJoint {
  static __wrap(ptr) {
    const obj = Object.create(_RawGenericJoint.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawgenericjoint_free(ptr);
  }
  /**
  * Create a new joint descriptor that builds spehrical joints.
  *
  * A spherical joints allows three relative rotational degrees of freedom
  * by preventing any relative translation between the anchors of the
  * two attached rigid-bodies.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @returns {RawGenericJoint}
  */
  static spherical(anchor1, anchor2) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    const ret = wasm.rawgenericjoint_spherical(anchor1.ptr, anchor2.ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * Creates a new joint descriptor that builds a Prismatic joint.
  *
  * A prismatic joint removes all the degrees of freedom between the
  * affected bodies, except for the translation along one axis.
  *
  * Returns `None` if any of the provided axes cannot be normalized.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @param {RawVector} axis
  * @param {boolean} limitsEnabled
  * @param {number} limitsMin
  * @param {number} limitsMax
  * @returns {RawGenericJoint | undefined}
  */
  static prismatic(anchor1, anchor2, axis, limitsEnabled, limitsMin, limitsMax) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    _assertClass(axis, RawVector);
    const ret = wasm.rawgenericjoint_prismatic(anchor1.ptr, anchor2.ptr, axis.ptr, limitsEnabled, limitsMin, limitsMax);
    return ret === 0 ? void 0 : _RawGenericJoint.__wrap(ret);
  }
  /**
  * Creates a new joint descriptor that builds a Fixed joint.
  *
  * A fixed joint removes all the degrees of freedom between the affected bodies.
  * @param {RawVector} anchor1
  * @param {RawRotation} axes1
  * @param {RawVector} anchor2
  * @param {RawRotation} axes2
  * @returns {RawGenericJoint}
  */
  static fixed(anchor1, axes1, anchor2, axes2) {
    _assertClass(anchor1, RawVector);
    _assertClass(axes1, RawRotation);
    _assertClass(anchor2, RawVector);
    _assertClass(axes2, RawRotation);
    const ret = wasm.rawgenericjoint_fixed(anchor1.ptr, axes1.ptr, anchor2.ptr, axes2.ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * Create a new joint descriptor that builds Revolute joints.
  *
  * A revolute joint removes all degrees of freedom between the affected
  * bodies except for the rotation along one axis.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @param {RawVector} axis
  * @returns {RawGenericJoint | undefined}
  */
  static revolute(anchor1, anchor2, axis) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    _assertClass(axis, RawVector);
    const ret = wasm.rawgenericjoint_revolute(anchor1.ptr, anchor2.ptr, axis.ptr);
    return ret === 0 ? void 0 : _RawGenericJoint.__wrap(ret);
  }
};
var RawImpulseJointSet = class _RawImpulseJointSet {
  static __wrap(ptr) {
    const obj = Object.create(_RawImpulseJointSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawimpulsejointset_free(ptr);
  }
  /**
  * The type of this joint.
  * @param {number} handle
  * @returns {number}
  */
  jointType(handle) {
    const ret = wasm.rawimpulsejointset_jointType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The unique integer identifier of the first rigid-body this joint it attached to.
  * @param {number} handle
  * @returns {number}
  */
  jointBodyHandle1(handle) {
    const ret = wasm.rawimpulsejointset_jointBodyHandle1(this.ptr, handle);
    return ret;
  }
  /**
  * The unique integer identifier of the second rigid-body this joint is attached to.
  * @param {number} handle
  * @returns {number}
  */
  jointBodyHandle2(handle) {
    const ret = wasm.rawimpulsejointset_jointBodyHandle2(this.ptr, handle);
    return ret;
  }
  /**
  * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX1(handle) {
    const ret = wasm.rawimpulsejointset_jointFrameX1(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX2(handle) {
    const ret = wasm.rawimpulsejointset_jointFrameX2(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The position of the first anchor of this joint.
  *
  * The first anchor gives the position of the points application point on the
  * local frame of the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor1(handle) {
    const ret = wasm.rawimpulsejointset_jointAnchor1(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The position of the second anchor of this joint.
  *
  * The second anchor gives the position of the points application point on the
  * local frame of the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor2(handle) {
    const ret = wasm.rawimpulsejointset_jointAnchor2(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * Sets the position of the first local anchor
  * @param {number} handle
  * @param {RawVector} newPos
  */
  jointSetAnchor1(handle, newPos) {
    _assertClass(newPos, RawVector);
    wasm.rawimpulsejointset_jointSetAnchor1(this.ptr, handle, newPos.ptr);
  }
  /**
  * Sets the position of the second local anchor
  * @param {number} handle
  * @param {RawVector} newPos
  */
  jointSetAnchor2(handle, newPos) {
    _assertClass(newPos, RawVector);
    wasm.rawimpulsejointset_jointSetAnchor2(this.ptr, handle, newPos.ptr);
  }
  /**
  * Are contacts between the rigid-bodies attached by this joint enabled?
  * @param {number} handle
  * @returns {boolean}
  */
  jointContactsEnabled(handle) {
    const ret = wasm.rawimpulsejointset_jointContactsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
  * @param {number} handle
  * @param {boolean} enabled
  */
  jointSetContactsEnabled(handle, enabled) {
    wasm.rawimpulsejointset_jointSetContactsEnabled(this.ptr, handle, enabled);
  }
  /**
  * Are the limits for this joint enabled?
  * @param {number} handle
  * @param {number} axis
  * @returns {boolean}
  */
  jointLimitsEnabled(handle, axis) {
    const ret = wasm.rawimpulsejointset_jointLimitsEnabled(this.ptr, handle, axis);
    return ret !== 0;
  }
  /**
  * Return the lower limit along the given joint axis.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMin(handle, axis) {
    const ret = wasm.rawimpulsejointset_jointLimitsMin(this.ptr, handle, axis);
    return ret;
  }
  /**
  * If this is a prismatic joint, returns its upper limit.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMax(handle, axis) {
    const ret = wasm.rawimpulsejointset_jointLimitsMax(this.ptr, handle, axis);
    return ret;
  }
  /**
  * Enables and sets the joint limits
  * @param {number} handle
  * @param {number} axis
  * @param {number} min
  * @param {number} max
  */
  jointSetLimits(handle, axis, min, max) {
    wasm.rawimpulsejointset_jointSetLimits(this.ptr, handle, axis, min, max);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} model
  */
  jointConfigureMotorModel(handle, axis, model) {
    wasm.rawimpulsejointset_jointConfigureMotorModel(this.ptr, handle, axis, model);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} targetVel
  * @param {number} factor
  */
  jointConfigureMotorVelocity(handle, axis, targetVel, factor) {
    wasm.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, handle, axis, targetVel, factor);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} targetPos
  * @param {number} stiffness
  * @param {number} damping
  */
  jointConfigureMotorPosition(handle, axis, targetPos, stiffness, damping) {
    wasm.rawimpulsejointset_jointConfigureMotorPosition(this.ptr, handle, axis, targetPos, stiffness, damping);
  }
  /**
  * @param {number} handle
  * @param {number} axis
  * @param {number} targetPos
  * @param {number} targetVel
  * @param {number} stiffness
  * @param {number} damping
  */
  jointConfigureMotor(handle, axis, targetPos, targetVel, stiffness, damping) {
    wasm.rawimpulsejointset_jointConfigureMotor(this.ptr, handle, axis, targetPos, targetVel, stiffness, damping);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawimpulsejointset_new();
    return _RawImpulseJointSet.__wrap(ret);
  }
  /**
  * @param {RawGenericJoint} params
  * @param {number} parent1
  * @param {number} parent2
  * @param {boolean} wake_up
  * @returns {number}
  */
  createJoint(params, parent1, parent2, wake_up) {
    _assertClass(params, RawGenericJoint);
    const ret = wasm.rawimpulsejointset_createJoint(this.ptr, params.ptr, parent1, parent2, wake_up);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  remove(handle, wakeUp) {
    wasm.rawimpulsejointset_remove(this.ptr, handle, wakeUp);
  }
  /**
  * @returns {number}
  */
  len() {
    const ret = wasm.rawimpulsejointset_len(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawimpulsejointset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachJointHandle(f) {
    try {
      wasm.rawimpulsejointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
  * @param {number} body
  * @param {Function} f
  */
  forEachJointAttachedToRigidBody(body, f) {
    try {
      wasm.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawIntegrationParameters = class _RawIntegrationParameters {
  static __wrap(ptr) {
    const obj = Object.create(_RawIntegrationParameters.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawintegrationparameters_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawintegrationparameters_new();
    return _RawIntegrationParameters.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  get dt() {
    const ret = wasm.rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get erp() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get allowedLinearError() {
    const ret = wasm.rawintegrationparameters_allowedLinearError(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get predictionDistance() {
    const ret = wasm.rawintegrationparameters_predictionDistance(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get maxVelocityIterations() {
    const ret = wasm.rawintegrationparameters_maxVelocityIterations(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxVelocityFrictionIterations() {
    const ret = wasm.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxStabilizationIterations() {
    const ret = wasm.rawintegrationparameters_maxStabilizationIterations(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get minIslandSize() {
    const ret = wasm.rawintegrationparameters_minIslandSize(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxCcdSubsteps() {
    const ret = wasm.rawintegrationparameters_maxCcdSubsteps(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} value
  */
  set dt(value) {
    wasm.rawintegrationparameters_set_dt(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set erp(value) {
    wasm.rawintegrationparameters_set_erp(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set allowedLinearError(value) {
    wasm.rawintegrationparameters_set_allowedLinearError(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set predictionDistance(value) {
    wasm.rawintegrationparameters_set_predictionDistance(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxVelocityIterations(value) {
    wasm.rawintegrationparameters_set_maxVelocityIterations(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxVelocityFrictionIterations(value) {
    wasm.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxStabilizationIterations(value) {
    wasm.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set minIslandSize(value) {
    wasm.rawintegrationparameters_set_minIslandSize(this.ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxCcdSubsteps(value) {
    wasm.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, value);
  }
};
var RawIslandManager = class _RawIslandManager {
  static __wrap(ptr) {
    const obj = Object.create(_RawIslandManager.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawislandmanager_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawislandmanager_new();
    return _RawIslandManager.__wrap(ret);
  }
  /**
  * Applies the given JavaScript function to the integer handle of each active rigid-body
  * managed by this island manager.
  *
  * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
  * the physics engine in order to save computational power. A sleeping rigid-body never moves
  * unless it is moved manually by the user.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
  *   set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachActiveRigidBodyHandle(f) {
    try {
      wasm.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawKinematicCharacterController = class _RawKinematicCharacterController {
  static __wrap(ptr) {
    const obj = Object.create(_RawKinematicCharacterController.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawkinematiccharactercontroller_free(ptr);
  }
  /**
  * @param {number} offset
  */
  constructor(offset) {
    const ret = wasm.rawkinematiccharactercontroller_new(offset);
    return _RawKinematicCharacterController.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  up() {
    const ret = wasm.rawkinematiccharactercontroller_up(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @param {RawVector} vector
  */
  setUp(vector) {
    _assertClass(vector, RawVector);
    wasm.rawkinematiccharactercontroller_setUp(this.ptr, vector.ptr);
  }
  /**
  * @returns {number}
  */
  offset() {
    const ret = wasm.rawkinematiccharactercontroller_offset(this.ptr);
    return ret;
  }
  /**
  * @param {number} value
  */
  setOffset(value) {
    wasm.rawkinematiccharactercontroller_setOffset(this.ptr, value);
  }
  /**
  * @returns {boolean}
  */
  slideEnabled() {
    const ret = wasm.rawkinematiccharactercontroller_slideEnabled(this.ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} enabled
  */
  setSlideEnabled(enabled) {
    wasm.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, enabled);
  }
  /**
  * @returns {number | undefined}
  */
  autostepMaxHeight() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawkinematiccharactercontroller_autostepMaxHeight(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {number | undefined}
  */
  autostepMinWidth() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawkinematiccharactercontroller_autostepMinWidth(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {boolean | undefined}
  */
  autostepIncludesDynamicBodies() {
    const ret = wasm.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.ptr);
    return ret === 16777215 ? void 0 : ret !== 0;
  }
  /**
  * @returns {boolean}
  */
  autostepEnabled() {
    const ret = wasm.rawkinematiccharactercontroller_autostepEnabled(this.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} maxHeight
  * @param {number} minWidth
  * @param {boolean} includeDynamicBodies
  */
  enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
    wasm.rawkinematiccharactercontroller_enableAutostep(this.ptr, maxHeight, minWidth, includeDynamicBodies);
  }
  /**
  */
  disableAutostep() {
    wasm.rawkinematiccharactercontroller_disableAutostep(this.ptr);
  }
  /**
  * @returns {number}
  */
  maxSlopeClimbAngle() {
    const ret = wasm.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
    return ret;
  }
  /**
  * @param {number} angle
  */
  setMaxSlopeClimbAngle(angle) {
    wasm.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, angle);
  }
  /**
  * @returns {number}
  */
  minSlopeSlideAngle() {
    const ret = wasm.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
    return ret;
  }
  /**
  * @param {number} angle
  */
  setMinSlopeSlideAngle(angle) {
    wasm.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, angle);
  }
  /**
  * @returns {number | undefined}
  */
  snapToGroundDistance() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawkinematiccharactercontroller_snapToGroundDistance(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} distance
  */
  enableSnapToGround(distance) {
    wasm.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, distance);
  }
  /**
  */
  disableSnapToGround() {
    wasm.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
  }
  /**
  * @returns {boolean}
  */
  snapToGroundEnabled() {
    const ret = wasm.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr);
    return ret !== 0;
  }
  /**
  * @param {number} dt
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawQueryPipeline} queries
  * @param {number} collider_handle
  * @param {RawVector} desired_translation
  * @param {boolean} apply_impulses_to_dynamic_bodies
  * @param {number | undefined} character_mass
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {Function} filter_predicate
  */
  computeColliderMovement(dt, bodies, colliders, queries, collider_handle, desired_translation, apply_impulses_to_dynamic_bodies, character_mass, filter_flags, filter_groups, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(queries, RawQueryPipeline);
      _assertClass(desired_translation, RawVector);
      wasm.rawkinematiccharactercontroller_computeColliderMovement(this.ptr, dt, bodies.ptr, colliders.ptr, queries.ptr, collider_handle, desired_translation.ptr, apply_impulses_to_dynamic_bodies, !isLikeNone(character_mass), isLikeNone(character_mass) ? 0 : character_mass, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @returns {RawVector}
  */
  computedMovement() {
    const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  computedGrounded() {
    const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.ptr);
    return ret !== 0;
  }
  /**
  * @returns {number}
  */
  numComputedCollisions() {
    const ret = wasm.rawkinematiccharactercontroller_numComputedCollisions(this.ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @param {RawCharacterCollision} collision
  * @returns {boolean}
  */
  computedCollision(i, collision) {
    _assertClass(collision, RawCharacterCollision);
    const ret = wasm.rawkinematiccharactercontroller_computedCollision(this.ptr, i, collision.ptr);
    return ret !== 0;
  }
};
var RawMultibodyJointSet = class _RawMultibodyJointSet {
  static __wrap(ptr) {
    const obj = Object.create(_RawMultibodyJointSet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawmultibodyjointset_free(ptr);
  }
  /**
  * The type of this joint.
  * @param {number} handle
  * @returns {number}
  */
  jointType(handle) {
    const ret = wasm.rawmultibodyjointset_jointType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX1(handle) {
    const ret = wasm.rawmultibodyjointset_jointFrameX1(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX2(handle) {
    const ret = wasm.rawmultibodyjointset_jointFrameX2(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The position of the first anchor of this joint.
  *
  * The first anchor gives the position of the points application point on the
  * local frame of the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor1(handle) {
    const ret = wasm.rawmultibodyjointset_jointAnchor1(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The position of the second anchor of this joint.
  *
  * The second anchor gives the position of the points application point on the
  * local frame of the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor2(handle) {
    const ret = wasm.rawmultibodyjointset_jointAnchor2(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * Are contacts between the rigid-bodies attached by this joint enabled?
  * @param {number} handle
  * @returns {boolean}
  */
  jointContactsEnabled(handle) {
    const ret = wasm.rawmultibodyjointset_jointContactsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
  * @param {number} handle
  * @param {boolean} enabled
  */
  jointSetContactsEnabled(handle, enabled) {
    wasm.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, handle, enabled);
  }
  /**
  * Are the limits for this joint enabled?
  * @param {number} handle
  * @param {number} axis
  * @returns {boolean}
  */
  jointLimitsEnabled(handle, axis) {
    const ret = wasm.rawmultibodyjointset_jointLimitsEnabled(this.ptr, handle, axis);
    return ret !== 0;
  }
  /**
  * Return the lower limit along the given joint axis.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMin(handle, axis) {
    const ret = wasm.rawmultibodyjointset_jointLimitsMin(this.ptr, handle, axis);
    return ret;
  }
  /**
  * If this is a prismatic joint, returns its upper limit.
  * @param {number} handle
  * @param {number} axis
  * @returns {number}
  */
  jointLimitsMax(handle, axis) {
    const ret = wasm.rawmultibodyjointset_jointLimitsMax(this.ptr, handle, axis);
    return ret;
  }
  /**
  */
  constructor() {
    const ret = wasm.rawmultibodyjointset_new();
    return _RawMultibodyJointSet.__wrap(ret);
  }
  /**
  * @param {RawGenericJoint} params
  * @param {number} parent1
  * @param {number} parent2
  * @param {boolean} wakeUp
  * @returns {number}
  */
  createJoint(params, parent1, parent2, wakeUp) {
    _assertClass(params, RawGenericJoint);
    const ret = wasm.rawmultibodyjointset_createJoint(this.ptr, params.ptr, parent1, parent2, wakeUp);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  remove(handle, wakeUp) {
    wasm.rawmultibodyjointset_remove(this.ptr, handle, wakeUp);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawmultibodyjointset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachJointHandle(f) {
    try {
      wasm.rawmultibodyjointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
  * @param {number} body
  * @param {Function} f
  */
  forEachJointAttachedToRigidBody(body, f) {
    try {
      wasm.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawNarrowPhase = class _RawNarrowPhase {
  static __wrap(ptr) {
    const obj = Object.create(_RawNarrowPhase.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawnarrowphase_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawnarrowphase_new();
    return _RawNarrowPhase.__wrap(ret);
  }
  /**
  * @param {number} handle1
  * @param {Function} f
  */
  contacts_with(handle1, f) {
    wasm.rawnarrowphase_contacts_with(this.ptr, handle1, addHeapObject(f));
  }
  /**
  * @param {number} handle1
  * @param {number} handle2
  * @returns {RawContactPair | undefined}
  */
  contact_pair(handle1, handle2) {
    const ret = wasm.rawnarrowphase_contact_pair(this.ptr, handle1, handle2);
    return ret === 0 ? void 0 : RawContactPair.__wrap(ret);
  }
  /**
  * @param {number} handle1
  * @param {Function} f
  */
  intersections_with(handle1, f) {
    wasm.rawnarrowphase_intersections_with(this.ptr, handle1, addHeapObject(f));
  }
  /**
  * @param {number} handle1
  * @param {number} handle2
  * @returns {boolean}
  */
  intersection_pair(handle1, handle2) {
    const ret = wasm.rawnarrowphase_intersection_pair(this.ptr, handle1, handle2);
    return ret !== 0;
  }
};
var RawPhysicsPipeline = class _RawPhysicsPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawPhysicsPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawphysicspipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawphysicspipeline_new();
    return _RawPhysicsPipeline.__wrap(ret);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  * @param {RawCCDSolver} ccd_solver
  */
  step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    _assertClass(ccd_solver, RawCCDSolver);
    wasm.rawphysicspipeline_step(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  * @param {RawCCDSolver} ccd_solver
  * @param {RawEventQueue} eventQueue
  * @param {object} hookObject
  * @param {Function} hookFilterContactPair
  * @param {Function} hookFilterIntersectionPair
  */
  stepWithEvents(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver, eventQueue, hookObject, hookFilterContactPair, hookFilterIntersectionPair) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    _assertClass(ccd_solver, RawCCDSolver);
    _assertClass(eventQueue, RawEventQueue);
    wasm.rawphysicspipeline_stepWithEvents(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr, eventQueue.ptr, addHeapObject(hookObject), addHeapObject(hookFilterContactPair), addHeapObject(hookFilterIntersectionPair));
  }
};
var RawPointColliderProjection = class _RawPointColliderProjection {
  static __wrap(ptr) {
    const obj = Object.create(_RawPointColliderProjection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawpointcolliderprojection_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawpointcolliderprojection_colliderHandle(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  point() {
    const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  isInside() {
    const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.ptr);
    return ret !== 0;
  }
  /**
  * @returns {number}
  */
  featureType() {
    const ret = wasm.rawpointcolliderprojection_featureType(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawpointcolliderprojection_featureId(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawPointProjection = class _RawPointProjection {
  static __wrap(ptr) {
    const obj = Object.create(_RawPointProjection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawpointprojection_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  point() {
    const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  isInside() {
    const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.ptr);
    return ret !== 0;
  }
};
var RawQueryPipeline = class _RawQueryPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawQueryPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawquerypipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawquerypipeline_new();
    return _RawQueryPipeline.__wrap(ret);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  */
  update(bodies, colliders) {
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    wasm.rawquerypipeline_update(this.ptr, bodies.ptr, colliders.ptr);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawRayColliderToi | undefined}
  */
  castRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      const ret = wasm.rawquerypipeline_castRay(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawRayColliderToi.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawRayColliderIntersection | undefined}
  */
  castRayAndGetNormal(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      const ret = wasm.rawquerypipeline_castRayAndGetNormal(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawRayColliderIntersection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      wasm.rawquerypipeline_intersectionsWithRay(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawShape} shape
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {number | undefined}
  */
  intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shape, RawShape);
      wasm.rawquerypipeline_intersectionWithShape(retptr, this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawPointColliderProjection | undefined}
  */
  projectPoint(bodies, colliders, point, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      const ret = wasm.rawquerypipeline_projectPoint(this.ptr, bodies.ptr, colliders.ptr, point.ptr, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawPointColliderProjection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawPointColliderProjection | undefined}
  */
  projectPointAndGetFeature(bodies, colliders, point, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      const ret = wasm.rawquerypipeline_projectPointAndGetFeature(this.ptr, bodies.ptr, colliders.ptr, point.ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawPointColliderProjection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithPoint(bodies, colliders, point, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      wasm.rawquerypipeline_intersectionsWithPoint(this.ptr, bodies.ptr, colliders.ptr, point.ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} shapeVel
  * @param {RawShape} shape
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawShapeColliderTOI | undefined}
  */
  castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stop_at_penetration, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shapeVel, RawVector);
      _assertClass(shape, RawShape);
      const ret = wasm.rawquerypipeline_castShape(this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shapeVel.ptr, shape.ptr, maxToi, stop_at_penetration, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawShapeColliderTOI.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawShape} shape
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shape, RawShape);
      wasm.rawquerypipeline_intersectionsWithShape(this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawVector} aabbCenter
  * @param {RawVector} aabbHalfExtents
  * @param {Function} callback
  */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    try {
      _assertClass(aabbCenter, RawVector);
      _assertClass(aabbHalfExtents, RawVector);
      wasm.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, aabbCenter.ptr, aabbHalfExtents.ptr, addBorrowedObject(callback));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawRayColliderIntersection = class _RawRayColliderIntersection {
  static __wrap(ptr) {
    const obj = Object.create(_RawRayColliderIntersection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawraycolliderintersection_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = wasm.rawraycolliderintersection_normal(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawraycolliderintersection_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  featureType() {
    const ret = wasm.rawraycolliderintersection_featureType(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawraycolliderintersection_featureId(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawRayColliderToi = class _RawRayColliderToi {
  static __wrap(ptr) {
    const obj = Object.create(_RawRayColliderToi.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawraycollidertoi_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
};
var RawRayIntersection = class _RawRayIntersection {
  static __wrap(ptr) {
    const obj = Object.create(_RawRayIntersection.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawrayintersection_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  featureType() {
    const ret = wasm.rawrayintersection_featureType(this.ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawrayintersection_featureId(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawRigidBodySet = class _RawRigidBodySet {
  static __wrap(ptr) {
    const obj = Object.create(_RawRigidBodySet.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawrigidbodyset_free(ptr);
  }
  /**
  * The world-space translation of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbTranslation(handle) {
    const ret = wasm.rawrigidbodyset_rbTranslation(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space orientation of this rigid-body.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbRotation(handle) {
    const ret = wasm.rawrigidbodyset_rbRotation(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Put the given rigid-body to sleep.
  * @param {number} handle
  */
  rbSleep(handle) {
    wasm.rawrigidbodyset_rbSleep(this.ptr, handle);
  }
  /**
  * Is this rigid-body sleeping?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsSleeping(handle) {
    const ret = wasm.rawrigidbodyset_rbIsSleeping(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Is the velocity of this rigid-body not zero?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsMoving(handle) {
    const ret = wasm.rawrigidbodyset_rbIsMoving(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The world-space predicted translation of this rigid-body.
  *
  * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
  * method and is used for estimating the kinematic body velocity at the next timestep.
  * For non-kinematic bodies, this value is currently unspecified.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbNextTranslation(handle) {
    const ret = wasm.rawrigidbodyset_rbNextTranslation(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space predicted orientation of this rigid-body.
  *
  * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
  * method and is used for estimating the kinematic body velocity at the next timestep.
  * For non-kinematic bodies, this value is currently unspecified.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbNextRotation(handle) {
    const ret = wasm.rawrigidbodyset_rbNextRotation(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Sets the translation of this rigid-body.
  *
  * # Parameters
  * - `x`: the world-space position of the rigid-body along the `x` axis.
  * - `y`: the world-space position of the rigid-body along the `y` axis.
  * - `z`: the world-space position of the rigid-body along the `z` axis.
  * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {boolean} wakeUp
  */
  rbSetTranslation(handle, x, y, z, wakeUp) {
    wasm.rawrigidbodyset_rbSetTranslation(this.ptr, handle, x, y, z, wakeUp);
  }
  /**
  * Sets the rotation quaternion of this rigid-body.
  *
  * This does nothing if a zero quaternion is provided.
  *
  * # Parameters
  * - `x`: the first vector component of the quaternion.
  * - `y`: the second vector component of the quaternion.
  * - `z`: the third vector component of the quaternion.
  * - `w`: the scalar component of the quaternion.
  * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  * @param {boolean} wakeUp
  */
  rbSetRotation(handle, x, y, z, w, wakeUp) {
    wasm.rawrigidbodyset_rbSetRotation(this.ptr, handle, x, y, z, w, wakeUp);
  }
  /**
  * Sets the linear velocity of this rigid-body.
  * @param {number} handle
  * @param {RawVector} linvel
  * @param {boolean} wakeUp
  */
  rbSetLinvel(handle, linvel, wakeUp) {
    _assertClass(linvel, RawVector);
    wasm.rawrigidbodyset_rbSetLinvel(this.ptr, handle, linvel.ptr, wakeUp);
  }
  /**
  * Sets the angular velocity of this rigid-body.
  * @param {number} handle
  * @param {RawVector} angvel
  * @param {boolean} wakeUp
  */
  rbSetAngvel(handle, angvel, wakeUp) {
    _assertClass(angvel, RawVector);
    wasm.rawrigidbodyset_rbSetAngvel(this.ptr, handle, angvel.ptr, wakeUp);
  }
  /**
  * If this rigid body is kinematic, sets its future translation after the next timestep integration.
  *
  * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
  * interacting with this kinematic body behave as expected. Internally, Rapier will compute
  * an artificial velocity for this rigid-body from its current position and its next kinematic
  * position. This velocity will be used to compute forces on dynamic bodies interacting with
  * this body.
  *
  * # Parameters
  * - `x`: the world-space position of the rigid-body along the `x` axis.
  * - `y`: the world-space position of the rigid-body along the `y` axis.
  * - `z`: the world-space position of the rigid-body along the `z` axis.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  rbSetNextKinematicTranslation(handle, x, y, z) {
    wasm.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, handle, x, y, z);
  }
  /**
  * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
  *
  * This should be used instead of `rigidBody.setRotation` to make the dynamic object
  * interacting with this kinematic body behave as expected. Internally, Rapier will compute
  * an artificial velocity for this rigid-body from its current position and its next kinematic
  * position. This velocity will be used to compute forces on dynamic bodies interacting with
  * this body.
  *
  * # Parameters
  * - `x`: the first vector component of the quaternion.
  * - `y`: the second vector component of the quaternion.
  * - `z`: the third vector component of the quaternion.
  * - `w`: the scalar component of the quaternion.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  rbSetNextKinematicRotation(handle, x, y, z, w) {
    wasm.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, handle, x, y, z, w);
  }
  /**
  * @param {number} handle
  * @param {RawColliderSet} colliders
  */
  rbRecomputeMassPropertiesFromColliders(handle, colliders) {
    _assertClass(colliders, RawColliderSet);
    wasm.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr, handle, colliders.ptr);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {boolean} wake_up
  */
  rbSetAdditionalMass(handle, mass, wake_up) {
    wasm.rawrigidbodyset_rbSetAdditionalMass(this.ptr, handle, mass, wake_up);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  * @param {boolean} wake_up
  */
  rbSetAdditionalMassProperties(handle, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, wake_up) {
    _assertClass(centerOfMass, RawVector);
    _assertClass(principalAngularInertia, RawVector);
    _assertClass(angularInertiaFrame, RawRotation);
    wasm.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr, handle, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, wake_up);
  }
  /**
  * The linear velocity of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbLinvel(handle) {
    const ret = wasm.rawrigidbodyset_rbLinvel(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The angular velocity of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbAngvel(handle) {
    const ret = wasm.rawrigidbodyset_rbAngvel(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {boolean} locked
  * @param {boolean} wake_up
  */
  rbLockTranslations(handle, locked, wake_up) {
    wasm.rawrigidbodyset_rbLockTranslations(this.ptr, handle, locked, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} allow_x
  * @param {boolean} allow_y
  * @param {boolean} allow_z
  * @param {boolean} wake_up
  */
  rbSetEnabledTranslations(handle, allow_x, allow_y, allow_z, wake_up) {
    wasm.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} locked
  * @param {boolean} wake_up
  */
  rbLockRotations(handle, locked, wake_up) {
    wasm.rawrigidbodyset_rbLockRotations(this.ptr, handle, locked, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} allow_x
  * @param {boolean} allow_y
  * @param {boolean} allow_z
  * @param {boolean} wake_up
  */
  rbSetEnabledRotations(handle, allow_x, allow_y, allow_z, wake_up) {
    wasm.rawrigidbodyset_rbSetEnabledRotations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbDominanceGroup(handle) {
    const ret = wasm.rawrigidbodyset_rbDominanceGroup(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} group
  */
  rbSetDominanceGroup(handle, group) {
    wasm.rawrigidbodyset_rbSetDominanceGroup(this.ptr, handle, group);
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  rbEnableCcd(handle, enabled) {
    wasm.rawrigidbodyset_rbEnableCcd(this.ptr, handle, enabled);
  }
  /**
  * The mass of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbMass(handle) {
    const ret = wasm.rawrigidbodyset_rbMass(this.ptr, handle);
    return ret;
  }
  /**
  * The inverse of the mass of a rigid-body.
  *
  * If this is zero, the rigid-body is assumed to have infinite mass.
  * @param {number} handle
  * @returns {number}
  */
  rbInvMass(handle) {
    const ret = wasm.rawrigidbodyset_rbInvMass(this.ptr, handle);
    return ret;
  }
  /**
  * The inverse mass taking into account translation locking.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbEffectiveInvMass(handle) {
    const ret = wasm.rawrigidbodyset_rbEffectiveInvMass(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The center of mass of a rigid-body expressed in its local-space.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbLocalCom(handle) {
    const ret = wasm.rawrigidbodyset_rbLocalCom(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space center of mass of the rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbWorldCom(handle) {
    const ret = wasm.rawrigidbodyset_rbWorldCom(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The inverse of the principal angular inertia of the rigid-body.
  *
  * Components set to zero are assumed to be infinite along the corresponding principal axis.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbInvPrincipalInertiaSqrt(handle) {
    const ret = wasm.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The principal vectors of the local angular inertia tensor of the rigid-body.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbPrincipalInertiaLocalFrame(handle) {
    const ret = wasm.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular inertia along the principal inertia axes of the rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbPrincipalInertia(handle) {
    const ret = wasm.rawrigidbodyset_rbPrincipalInertia(this.ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
  * taking into account rotation locking.
  * @param {number} handle
  * @returns {RawSdpMatrix3}
  */
  rbEffectiveWorldInvInertiaSqrt(handle) {
    const ret = wasm.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, handle);
    return RawSdpMatrix3.__wrap(ret);
  }
  /**
  * The effective world-space angular inertia (that takes the potential rotation locking into account) of
  * this rigid-body.
  * @param {number} handle
  * @returns {RawSdpMatrix3}
  */
  rbEffectiveAngularInertia(handle) {
    const ret = wasm.rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, handle);
    return RawSdpMatrix3.__wrap(ret);
  }
  /**
  * Wakes this rigid-body up.
  *
  * A dynamic rigid-body that does not move during several consecutive frames will
  * be put to sleep by the physics engine, i.e., it will stop being simulated in order
  * to avoid useless computations.
  * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
  * the position of a dynamic body so that it is properly simulated afterwards.
  * @param {number} handle
  */
  rbWakeUp(handle) {
    wasm.rawrigidbodyset_rbWakeUp(this.ptr, handle);
  }
  /**
  * Is Continuous Collision Detection enabled for this rigid-body?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsCcdEnabled(handle) {
    const ret = wasm.rawrigidbodyset_rbIsCcdEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The number of colliders attached to this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbNumColliders(handle) {
    const ret = wasm.rawrigidbodyset_rbNumColliders(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * Retrieves the `i-th` collider attached to this rigid-body.
  *
  * # Parameters
  * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
  *         This index is **not** the same as the unique identifier of the collider.
  * @param {number} handle
  * @param {number} at
  * @returns {number}
  */
  rbCollider(handle, at) {
    const ret = wasm.rawrigidbodyset_rbCollider(this.ptr, handle, at);
    return ret;
  }
  /**
  * The status of this rigid-body: fixed, dynamic, or kinematic.
  * @param {number} handle
  * @returns {number}
  */
  rbBodyType(handle) {
    const ret = wasm.rawrigidbodyset_rbBodyType(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
  * @param {number} handle
  * @param {number} status
  * @param {boolean} wake_up
  */
  rbSetBodyType(handle, status, wake_up) {
    wasm.rawrigidbodyset_rbSetBodyType(this.ptr, handle, status, wake_up);
  }
  /**
  * Is this rigid-body fixed?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsFixed(handle) {
    const ret = wasm.rawrigidbodyset_rbIsFixed(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Is this rigid-body kinematic?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsKinematic(handle) {
    const ret = wasm.rawrigidbodyset_rbIsKinematic(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Is this rigid-body dynamic?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsDynamic(handle) {
    const ret = wasm.rawrigidbodyset_rbIsDynamic(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * The linear damping coefficient of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbLinearDamping(handle) {
    const ret = wasm.rawrigidbodyset_rbLinearDamping(this.ptr, handle);
    return ret;
  }
  /**
  * The angular damping coefficient of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbAngularDamping(handle) {
    const ret = wasm.rawrigidbodyset_rbAngularDamping(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} factor
  */
  rbSetLinearDamping(handle, factor) {
    wasm.rawrigidbodyset_rbSetLinearDamping(this.ptr, handle, factor);
  }
  /**
  * @param {number} handle
  * @param {number} factor
  */
  rbSetAngularDamping(handle, factor) {
    wasm.rawrigidbodyset_rbSetAngularDamping(this.ptr, handle, factor);
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  rbSetEnabled(handle, enabled) {
    wasm.rawrigidbodyset_rbSetEnabled(this.ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsEnabled(handle) {
    const ret = wasm.rawrigidbodyset_rbIsEnabled(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbGravityScale(handle) {
    const ret = wasm.rawrigidbodyset_rbGravityScale(this.ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} factor
  * @param {boolean} wakeUp
  */
  rbSetGravityScale(handle, factor, wakeUp) {
    wasm.rawrigidbodyset_rbSetGravityScale(this.ptr, handle, factor, wakeUp);
  }
  /**
  * Resets to zero all user-added forces added to this rigid-body.
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  rbResetForces(handle, wakeUp) {
    wasm.rawrigidbodyset_rbResetForces(this.ptr, handle, wakeUp);
  }
  /**
  * Resets to zero all user-added torques added to this rigid-body.
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  rbResetTorques(handle, wakeUp) {
    wasm.rawrigidbodyset_rbResetTorques(this.ptr, handle, wakeUp);
  }
  /**
  * Adds a force at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `force`: the world-space force to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} force
  * @param {boolean} wakeUp
  */
  rbAddForce(handle, force, wakeUp) {
    _assertClass(force, RawVector);
    wasm.rawrigidbodyset_rbAddForce(this.ptr, handle, force.ptr, wakeUp);
  }
  /**
  * Applies an impulse at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `impulse`: the world-space impulse to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} impulse
  * @param {boolean} wakeUp
  */
  rbApplyImpulse(handle, impulse, wakeUp) {
    _assertClass(impulse, RawVector);
    wasm.rawrigidbodyset_rbApplyImpulse(this.ptr, handle, impulse.ptr, wakeUp);
  }
  /**
  * Adds a torque at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `torque`: the world-space torque to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} torque
  * @param {boolean} wakeUp
  */
  rbAddTorque(handle, torque, wakeUp) {
    _assertClass(torque, RawVector);
    wasm.rawrigidbodyset_rbAddTorque(this.ptr, handle, torque.ptr, wakeUp);
  }
  /**
  * Applies an impulsive torque at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `torque impulse`: the world-space torque impulse to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} torque_impulse
  * @param {boolean} wakeUp
  */
  rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
    _assertClass(torque_impulse, RawVector);
    wasm.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, handle, torque_impulse.ptr, wakeUp);
  }
  /**
  * Adds a force at the given world-space point of this rigid-body.
  *
  * # Parameters
  * - `force`: the world-space force to apply on the rigid-body.
  * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} force
  * @param {RawVector} point
  * @param {boolean} wakeUp
  */
  rbAddForceAtPoint(handle, force, point, wakeUp) {
    _assertClass(force, RawVector);
    _assertClass(point, RawVector);
    wasm.rawrigidbodyset_rbAddForceAtPoint(this.ptr, handle, force.ptr, point.ptr, wakeUp);
  }
  /**
  * Applies an impulse at the given world-space point of this rigid-body.
  *
  * # Parameters
  * - `impulse`: the world-space impulse to apply on the rigid-body.
  * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} impulse
  * @param {RawVector} point
  * @param {boolean} wakeUp
  */
  rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
    _assertClass(impulse, RawVector);
    _assertClass(point, RawVector);
    wasm.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, handle, impulse.ptr, point.ptr, wakeUp);
  }
  /**
  * An arbitrary user-defined 32-bit integer
  * @param {number} handle
  * @returns {number}
  */
  rbUserData(handle) {
    const ret = wasm.rawrigidbodyset_rbUserData(this.ptr, handle);
    return ret >>> 0;
  }
  /**
  * Sets the user-defined 32-bit integer of this rigid-body.
  *
  * # Parameters
  * - `data`: an arbitrary user-defined 32-bit integer.
  * @param {number} handle
  * @param {number} data
  */
  rbSetUserData(handle, data) {
    wasm.rawrigidbodyset_rbSetUserData(this.ptr, handle, data);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawrigidbodyset_new();
    return _RawRigidBodySet.__wrap(ret);
  }
  /**
  * @param {boolean} enabled
  * @param {RawVector} translation
  * @param {RawRotation} rotation
  * @param {number} gravityScale
  * @param {number} mass
  * @param {boolean} massOnly
  * @param {RawVector} centerOfMass
  * @param {RawVector} linvel
  * @param {RawVector} angvel
  * @param {RawVector} principalAngularInertia
  * @param {RawRotation} angularInertiaFrame
  * @param {boolean} translationEnabledX
  * @param {boolean} translationEnabledY
  * @param {boolean} translationEnabledZ
  * @param {boolean} rotationEnabledX
  * @param {boolean} rotationEnabledY
  * @param {boolean} rotationEnabledZ
  * @param {number} linearDamping
  * @param {number} angularDamping
  * @param {number} rb_type
  * @param {boolean} canSleep
  * @param {boolean} sleeping
  * @param {boolean} ccdEnabled
  * @param {number} dominanceGroup
  * @returns {number}
  */
  createRigidBody(enabled, translation, rotation, gravityScale, mass, massOnly, centerOfMass, linvel, angvel, principalAngularInertia, angularInertiaFrame, translationEnabledX, translationEnabledY, translationEnabledZ, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup) {
    _assertClass(translation, RawVector);
    _assertClass(rotation, RawRotation);
    _assertClass(centerOfMass, RawVector);
    _assertClass(linvel, RawVector);
    _assertClass(angvel, RawVector);
    _assertClass(principalAngularInertia, RawVector);
    _assertClass(angularInertiaFrame, RawRotation);
    const ret = wasm.rawrigidbodyset_createRigidBody(this.ptr, enabled, translation.ptr, rotation.ptr, gravityScale, mass, massOnly, centerOfMass.ptr, linvel.ptr, angvel.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, translationEnabledX, translationEnabledY, translationEnabledZ, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawIslandManager} islands
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  */
  remove(handle, islands, colliders, joints, articulations) {
    _assertClass(islands, RawIslandManager);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    wasm.rawrigidbodyset_remove(this.ptr, handle, islands.ptr, colliders.ptr, joints.ptr, articulations.ptr);
  }
  /**
  * The number of rigid-bodies on this set.
  * @returns {number}
  */
  len() {
    const ret = wasm.rawrigidbodyset_len(this.ptr);
    return ret >>> 0;
  }
  /**
  * Checks if a rigid-body with the given integer handle exists.
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawrigidbodyset_contains(this.ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachRigidBodyHandle(f) {
    try {
      wasm.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawColliderSet} colliders
  */
  propagateModifiedBodyPositionsToColliders(colliders) {
    _assertClass(colliders, RawColliderSet);
    wasm.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.ptr, colliders.ptr);
  }
};
var RawRotation = class _RawRotation {
  static __wrap(ptr) {
    const obj = Object.create(_RawRotation.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawrotation_free(ptr);
  }
  /**
  * @param {number} x
  * @param {number} y
  * @param {number} z
  * @param {number} w
  */
  constructor(x, y, z, w) {
    const ret = wasm.rawrotation_new(x, y, z, w);
    return _RawRotation.__wrap(ret);
  }
  /**
  * The identity quaternion.
  * @returns {RawRotation}
  */
  static identity() {
    const ret = wasm.rawrotation_identity();
    return _RawRotation.__wrap(ret);
  }
  /**
  * The `x` component of this quaternion.
  * @returns {number}
  */
  get x() {
    const ret = wasm.rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * The `y` component of this quaternion.
  * @returns {number}
  */
  get y() {
    const ret = wasm.rawrotation_y(this.ptr);
    return ret;
  }
  /**
  * The `z` component of this quaternion.
  * @returns {number}
  */
  get z() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * The `w` component of this quaternion.
  * @returns {number}
  */
  get w() {
    const ret = wasm.rawrotation_w(this.ptr);
    return ret;
  }
};
var RawSdpMatrix3 = class _RawSdpMatrix3 {
  static __wrap(ptr) {
    const obj = Object.create(_RawSdpMatrix3.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawsdpmatrix3_free(ptr);
  }
  /**
  * Row major list of the upper-triangular part of the symmetric matrix.
  * @returns {Float32Array}
  */
  elements() {
    const ret = wasm.rawsdpmatrix3_elements(this.ptr);
    return takeObject(ret);
  }
};
var RawSerializationPipeline = class _RawSerializationPipeline {
  static __wrap(ptr) {
    const obj = Object.create(_RawSerializationPipeline.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawserializationpipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawserializationpipeline_new();
    return _RawSerializationPipeline.__wrap(ret);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} impulse_joints
  * @param {RawMultibodyJointSet} multibody_joints
  * @returns {Uint8Array | undefined}
  */
  serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulse_joints, multibody_joints) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(impulse_joints, RawImpulseJointSet);
    _assertClass(multibody_joints, RawMultibodyJointSet);
    const ret = wasm.rawserializationpipeline_serializeAll(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr);
    return takeObject(ret);
  }
  /**
  * @param {Uint8Array} data
  * @returns {RawDeserializedWorld | undefined}
  */
  deserializeAll(data) {
    const ret = wasm.rawserializationpipeline_deserializeAll(this.ptr, addHeapObject(data));
    return ret === 0 ? void 0 : RawDeserializedWorld.__wrap(ret);
  }
};
var RawShape = class _RawShape {
  static __wrap(ptr) {
    const obj = Object.create(_RawShape.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshape_free(ptr);
  }
  /**
  * @param {number} hx
  * @param {number} hy
  * @param {number} hz
  * @returns {RawShape}
  */
  static cuboid(hx, hy, hz) {
    const ret = wasm.rawshape_cuboid(hx, hy, hz);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} hx
  * @param {number} hy
  * @param {number} hz
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCuboid(hx, hy, hz, borderRadius) {
    const ret = wasm.rawshape_roundCuboid(hx, hy, hz, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} radius
  * @returns {RawShape}
  */
  static ball(radius) {
    const ret = wasm.rawshape_ball(radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} normal
  * @returns {RawShape}
  */
  static halfspace(normal) {
    _assertClass(normal, RawVector);
    const ret = wasm.rawshape_halfspace(normal.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static capsule(halfHeight, radius) {
    const ret = wasm.rawshape_capsule(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static cylinder(halfHeight, radius) {
    const ret = wasm.rawshape_cylinder(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCylinder(halfHeight, radius, borderRadius) {
    const ret = wasm.rawshape_roundCylinder(halfHeight, radius, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static cone(halfHeight, radius) {
    const ret = wasm.rawshape_cone(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCone(halfHeight, radius, borderRadius) {
    const ret = wasm.rawshape_roundCone(halfHeight, radius, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape}
  */
  static polyline(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_polyline(ptr0, len0, ptr1, len1);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape}
  */
  static trimesh(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_trimesh(ptr0, len0, ptr1, len1);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} nrows
  * @param {number} ncols
  * @param {Float32Array} heights
  * @param {RawVector} scale
  * @returns {RawShape}
  */
  static heightfield(nrows, ncols, heights, scale) {
    const ptr0 = passArrayF32ToWasm0(heights, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(scale, RawVector);
    const ret = wasm.rawshape_heightfield(nrows, ncols, ptr0, len0, scale.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @returns {RawShape}
  */
  static segment(p1, p2) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    const ret = wasm.rawshape_segment(p1.ptr, p2.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @param {RawVector} p3
  * @returns {RawShape}
  */
  static triangle(p1, p2, p3) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    _assertClass(p3, RawVector);
    const ret = wasm.rawshape_triangle(p1.ptr, p2.ptr, p3.ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @param {RawVector} p3
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundTriangle(p1, p2, p3, borderRadius) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    _assertClass(p3, RawVector);
    const ret = wasm.rawshape_roundTriangle(p1.ptr, p2.ptr, p3.ptr, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} points
  * @returns {RawShape | undefined}
  */
  static convexHull(points) {
    const ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_convexHull(ptr0, len0);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} points
  * @param {number} borderRadius
  * @returns {RawShape | undefined}
  */
  static roundConvexHull(points, borderRadius) {
    const ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_roundConvexHull(ptr0, len0, borderRadius);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape | undefined}
  */
  static convexMesh(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_convexMesh(ptr0, len0, ptr1, len1);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @param {number} borderRadius
  * @returns {RawShape | undefined}
  */
  static roundConvexMesh(vertices, indices, borderRadius) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_roundConvexMesh(ptr0, len0, ptr1, len1, borderRadius);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawVector} shapeVel1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {RawVector} shapeVel2
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeTOI | undefined}
  */
  castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi, stop_at_penetration) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shapeVel1, RawVector);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    _assertClass(shapeVel2, RawVector);
    const ret = wasm.rawshape_castShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shapeVel1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, shapeVel2.ptr, maxToi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeTOI.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @returns {boolean}
  */
  intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawshape_intersectsShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawshape_contactShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} point
  * @returns {boolean}
  */
  containsPoint(shapePos, shapeRot, point) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(point, RawVector);
    const ret = wasm.rawshape_containsPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} point
  * @param {boolean} solid
  * @returns {RawPointProjection}
  */
  projectPoint(shapePos, shapeRot, point, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(point, RawVector);
    const ret = wasm.rawshape_projectPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr, solid);
    return RawPointProjection.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @returns {boolean}
  */
  intersectsRay(shapePos, shapeRot, rayOrig, rayDir, maxToi) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawshape_intersectsRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {number}
  */
  castRay(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawshape_castRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {RawRayIntersection | undefined}
  */
  castRayAndGetNormal(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawshape_castRayAndGetNormal(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
    return ret === 0 ? void 0 : RawRayIntersection.__wrap(ret);
  }
};
var RawShapeColliderTOI = class _RawShapeColliderTOI {
  static __wrap(ptr) {
    const obj = Object.create(_RawShapeColliderTOI.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshapecollidertoi_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawcharactercollision_handle(this.ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  witness1() {
    const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  witness2() {
    const ret = wasm.rawshapecollidertoi_witness2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = wasm.rawcharactercollision_worldNormal1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = wasm.rawshapecollidertoi_normal2(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawShapeContact = class _RawShapeContact {
  static __wrap(ptr) {
    const obj = Object.create(_RawShapeContact.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshapecontact_free(ptr);
  }
  /**
  * @returns {number}
  */
  distance() {
    const ret = wasm.rawshapecontact_distance(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  point1() {
    const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  point2() {
    const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = wasm.rawshapecollidertoi_witness2(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = wasm.rawcharactercollision_worldNormal1(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawShapeTOI = class _RawShapeTOI {
  static __wrap(ptr) {
    const obj = Object.create(_RawShapeTOI.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshapetoi_free(ptr);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  witness1() {
    const ret = wasm.rawshapetoi_witness1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  witness2() {
    const ret = wasm.rawcontactforceevent_total_force(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = wasm.rawshapetoi_normal1(this.ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = wasm.rawshapetoi_normal2(this.ptr);
    return RawVector.__wrap(ret);
  }
};
var RawVector = class _RawVector {
  static __wrap(ptr) {
    const obj = Object.create(_RawVector.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawvector_free(ptr);
  }
  /**
  * Creates a new vector filled with zeros.
  * @returns {RawVector}
  */
  static zero() {
    const ret = wasm.rawvector_zero();
    return _RawVector.__wrap(ret);
  }
  /**
  * Creates a new 3D vector from its two components.
  *
  * # Parameters
  * - `x`: the `x` component of this 3D vector.
  * - `y`: the `y` component of this 3D vector.
  * - `z`: the `z` component of this 3D vector.
  * @param {number} x
  * @param {number} y
  * @param {number} z
  */
  constructor(x, y, z) {
    const ret = wasm.rawvector_new(x, y, z);
    return _RawVector.__wrap(ret);
  }
  /**
  * The `x` component of this vector.
  * @returns {number}
  */
  get x() {
    const ret = wasm.rawintegrationparameters_dt(this.ptr);
    return ret;
  }
  /**
  * Sets the `x` component of this vector.
  * @param {number} x
  */
  set x(x) {
    wasm.rawintegrationparameters_set_dt(this.ptr, x);
  }
  /**
  * The `y` component of this vector.
  * @returns {number}
  */
  get y() {
    const ret = wasm.rawrotation_y(this.ptr);
    return ret;
  }
  /**
  * Sets the `y` component of this vector.
  * @param {number} y
  */
  set y(y) {
    wasm.rawvector_set_y(this.ptr, y);
  }
  /**
  * The `z` component of this vector.
  * @returns {number}
  */
  get z() {
    const ret = wasm.rawcharactercollision_toi(this.ptr);
    return ret;
  }
  /**
  * Sets the `z` component of this vector.
  * @param {number} z
  */
  set z(z) {
    wasm.rawintegrationparameters_set_erp(this.ptr, z);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{x, y, z}`.
  *
  * This will effectively return a copy of `this`. This method exist for completeness with the
  * other swizzling functions.
  * @returns {RawVector}
  */
  xyz() {
    const ret = wasm.rawvector_xyz(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{y, x, z}`.
  * @returns {RawVector}
  */
  yxz() {
    const ret = wasm.rawvector_yxz(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{z, x, y}`.
  * @returns {RawVector}
  */
  zxy() {
    const ret = wasm.rawvector_zxy(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{x, z, y}`.
  * @returns {RawVector}
  */
  xzy() {
    const ret = wasm.rawvector_xzy(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{y, z, x}`.
  * @returns {RawVector}
  */
  yzx() {
    const ret = wasm.rawvector_yzx(this.ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 3D vector from this vector with its components rearranged as `{z, y, x}`.
  * @returns {RawVector}
  */
  zyx() {
    const ret = wasm.rawvector_zyx(this.ptr);
    return _RawVector.__wrap(ret);
  }
};

// node_modules/@dimforge/rapier3d/math.js
var Vector3 = class {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
};
var VectorOps = class _VectorOps {
  static new(x, y, z) {
    return new Vector3(x, y, z);
  }
  static intoRaw(v) {
    return new RawVector(v.x, v.y, v.z);
  }
  static zeros() {
    return _VectorOps.new(0, 0, 0);
  }
  // FIXME: type ram: RawVector?
  static fromRaw(raw) {
    if (!raw)
      return null;
    let res = _VectorOps.new(raw.x, raw.y, raw.z);
    raw.free();
    return res;
  }
  static copy(out, input) {
    out.x = input.x;
    out.y = input.y;
    out.z = input.z;
  }
};
var Quaternion = class {
  constructor(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
};
var RotationOps = class {
  static identity() {
    return new Quaternion(0, 0, 0, 1);
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    let res = new Quaternion(raw.x, raw.y, raw.z, raw.w);
    raw.free();
    return res;
  }
  static intoRaw(rot) {
    return new RawRotation(rot.x, rot.y, rot.z, rot.w);
  }
  static copy(out, input) {
    out.x = input.x;
    out.y = input.y;
    out.z = input.z;
    out.w = input.w;
  }
};
var SdpMatrix3 = class {
  constructor(elements) {
    this.elements = elements;
  }
  /**
   * Matrix element at row 1, column 1.
   */
  get m11() {
    return this.elements[0];
  }
  /**
   * Matrix element at row 1, column 2.
   */
  get m12() {
    return this.elements[1];
  }
  /**
   * Matrix element at row 2, column 1.
   */
  get m21() {
    return this.m12;
  }
  /**
   * Matrix element at row 1, column 3.
   */
  get m13() {
    return this.elements[2];
  }
  /**
   * Matrix element at row 3, column 1.
   */
  get m31() {
    return this.m13;
  }
  /**
   * Matrix element at row 2, column 2.
   */
  get m22() {
    return this.elements[3];
  }
  /**
   * Matrix element at row 2, column 3.
   */
  get m23() {
    return this.elements[4];
  }
  /**
   * Matrix element at row 3, column 2.
   */
  get m32() {
    return this.m23;
  }
  /**
   * Matrix element at row 3, column 3.
   */
  get m33() {
    return this.elements[5];
  }
};
var SdpMatrix3Ops = class {
  static fromRaw(raw) {
    const sdpMatrix3 = new SdpMatrix3(raw.elements());
    raw.free();
    return sdpMatrix3;
  }
};

// node_modules/@dimforge/rapier3d/dynamics/rigid_body.js
var RigidBodyType;
(function(RigidBodyType2) {
  RigidBodyType2[RigidBodyType2["Dynamic"] = 0] = "Dynamic";
  RigidBodyType2[RigidBodyType2["Fixed"] = 1] = "Fixed";
  RigidBodyType2[RigidBodyType2["KinematicPositionBased"] = 2] = "KinematicPositionBased";
  RigidBodyType2[RigidBodyType2["KinematicVelocityBased"] = 3] = "KinematicVelocityBased";
})(RigidBodyType || (RigidBodyType = {}));
var RigidBody = class {
  constructor(rawSet, colliderSet, handle) {
    this.rawSet = rawSet;
    this.colliderSet = colliderSet;
    this.handle = handle;
  }
  /** @internal */
  finalizeDeserialization(colliderSet) {
    this.colliderSet = colliderSet;
  }
  /**
   * Checks if this rigid-body is still valid (i.e. that it has
   * not been deleted from the rigid-body set yet.
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to translate.
   *
   * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  lockTranslations(locked, wakeUp) {
    return this.rawSet.rbLockTranslations(this.handle, locked, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate.
   *
   * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  lockRotations(locked, wakeUp) {
    return this.rawSet.rbLockRotations(this.handle, locked, wakeUp);
  }
  // #if DIM3
  /**
   * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  setEnabledTranslations(enableX, enableY, enableZ, wakeUp) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, enableX, enableY, enableZ, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   * @deprecated use `this.setEnabledTranslations` with the same arguments instead.
   */
  restrictTranslations(enableX, enableY, enableZ, wakeUp) {
    this.setEnabledTranslations(enableX, enableY, enableZ, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  setEnabledRotations(enableX, enableY, enableZ, wakeUp) {
    return this.rawSet.rbSetEnabledRotations(this.handle, enableX, enableY, enableZ, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
   * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   * @deprecated use `this.setEnabledRotations` with the same arguments instead.
   */
  restrictRotations(enableX, enableY, enableZ, wakeUp) {
    this.setEnabledRotations(enableX, enableY, enableZ, wakeUp);
  }
  // #endif
  /**
   * The dominance group, in [-127, +127] this rigid-body is part of.
   */
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  /**
   * Sets the dominance group of this rigid-body.
   *
   * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
   */
  setDominanceGroup(group) {
    this.rawSet.rbSetDominanceGroup(this.handle, group);
  }
  /**
   * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
   *
   * @param enabled - If `true`, CCD will be enabled for this rigid-body.
   */
  enableCcd(enabled) {
    this.rawSet.rbEnableCcd(this.handle, enabled);
  }
  /**
   * The world-space translation of this rigid-body.
   */
  translation() {
    let res = this.rawSet.rbTranslation(this.handle);
    return VectorOps.fromRaw(res);
  }
  /**
   * The world-space orientation of this rigid-body.
   */
  rotation() {
    let res = this.rawSet.rbRotation(this.handle);
    return RotationOps.fromRaw(res);
  }
  /**
   * The world-space next translation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  nextTranslation() {
    let res = this.rawSet.rbNextTranslation(this.handle);
    return VectorOps.fromRaw(res);
  }
  /**
   * The world-space next orientation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  nextRotation() {
    let res = this.rawSet.rbNextRotation(this.handle);
    return RotationOps.fromRaw(res);
  }
  /**
   * Sets the translation of this rigid-body.
   *
   * @param tra - The world-space position of the rigid-body.
   * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
   *                 wasn't moving before modifying its position.
   */
  setTranslation(tra, wakeUp) {
    this.rawSet.rbSetTranslation(this.handle, tra.x, tra.y, tra.z, wakeUp);
  }
  /**
   * Sets the linear velocity fo this rigid-body.
   *
   * @param vel - The linear velocity to set.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setLinvel(vel, wakeUp) {
    let rawVel = VectorOps.intoRaw(vel);
    this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp);
    rawVel.free();
  }
  /**
   * The scale factor applied to the gravity affecting
   * this rigid-body.
   */
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  /**
   * Sets the scale factor applied to the gravity affecting
   * this rigid-body.
   *
   * @param factor - The scale factor to set. A value of 0.0 means
   *   that this rigid-body will on longer be affected by gravity.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setGravityScale(factor, wakeUp) {
    this.rawSet.rbSetGravityScale(this.handle, factor, wakeUp);
  }
  // #if DIM3
  /**
   * Sets the rotation quaternion of this rigid-body.
   *
   * This does nothing if a zero quaternion is provided.
   *
   * @param rotation - The rotation to set.
   * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  setRotation(rot, wakeUp) {
    this.rawSet.rbSetRotation(this.handle, rot.x, rot.y, rot.z, rot.w, wakeUp);
  }
  /**
   * Sets the angular velocity fo this rigid-body.
   *
   * @param vel - The angular velocity to set.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setAngvel(vel, wakeUp) {
    let rawVel = VectorOps.intoRaw(vel);
    this.rawSet.rbSetAngvel(this.handle, rawVel, wakeUp);
    rawVel.free();
  }
  // #endif
  /**
   * If this rigid body is kinematic, sets its future translation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * @param t - The kinematic translation to set.
   */
  setNextKinematicTranslation(t) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
  }
  // #if DIM3
  /**
   * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setRotation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * @param rot - The kinematic rotation to set.
   */
  setNextKinematicRotation(rot) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, rot.x, rot.y, rot.z, rot.w);
  }
  // #endif
  /**
   * The linear velocity of this rigid-body.
   */
  linvel() {
    return VectorOps.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  // #if DIM3
  /**
   * The angular velocity of this rigid-body.
   */
  angvel() {
    return VectorOps.fromRaw(this.rawSet.rbAngvel(this.handle));
  }
  // #endif
  /**
   * The mass of this rigid-body.
   */
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  /**
   * The inverse mass taking into account translation locking.
   */
  effectiveInvMass() {
    return VectorOps.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
  }
  /**
   * The inverse of the mass of a rigid-body.
   *
   * If this is zero, the rigid-body is assumed to have infinite mass.
   */
  invMass() {
    return this.rawSet.rbInvMass(this.handle);
  }
  /**
   * The center of mass of a rigid-body expressed in its local-space.
   */
  localCom() {
    return VectorOps.fromRaw(this.rawSet.rbLocalCom(this.handle));
  }
  /**
   * The world-space center of mass of the rigid-body.
   */
  worldCom() {
    return VectorOps.fromRaw(this.rawSet.rbWorldCom(this.handle));
  }
  // #if DIM3
  /**
   * The inverse of the principal angular inertia of the rigid-body.
   *
   * Components set to zero are assumed to be infinite along the corresponding principal axis.
   */
  invPrincipalInertiaSqrt() {
    return VectorOps.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The angular inertia along the principal inertia axes of the rigid-body.
   */
  principalInertia() {
    return VectorOps.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The principal vectors of the local angular inertia tensor of the rigid-body.
   */
  principalInertiaLocalFrame() {
    return RotationOps.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
   * taking into account rotation locking.
   */
  effectiveWorldInvInertiaSqrt() {
    return SdpMatrix3Ops.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The effective world-space angular inertia (that takes the potential rotation locking into account) of
   * this rigid-body.
   */
  effectiveAngularInertia() {
    return SdpMatrix3Ops.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
  }
  // #endif
  /**
   * Put this rigid body to sleep.
   *
   * A sleeping body no longer moves and is no longer simulated by the physics engine unless
   * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
   * external forces like contacts.
   */
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  /**
   * Wakes this rigid-body up.
   *
   * A dynamic rigid-body that does not move during several consecutive frames will
   * be put to sleep by the physics engine, i.e., it will stop being simulated in order
   * to avoid useless computations.
   * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
   * the position of a dynamic body so that it is properly simulated afterwards.
   */
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  /**
   * Is CCD enabled for this rigid-body?
   */
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  /**
   * The number of colliders attached to this rigid-body.
   */
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  /**
   * Retrieves the `i-th` collider attached to this rigid-body.
   *
   * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
   *         This index is **not** the same as the unique identifier of the collider.
   */
  collider(i) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, i));
  }
  /**
   * Sets whether this rigid-body is enabled or not.
   *
   * @param enabled - Set to `false` to disable this rigid-body and all its attached colliders.
   */
  setEnabled(enabled) {
    this.rawSet.rbSetEnabled(this.handle, enabled);
  }
  /**
   * Is this rigid-body enabled?
   */
  isEnabled() {
    return this.rawSet.rbIsEnabled(this.handle);
  }
  /**
   * The status of this rigid-body: static, dynamic, or kinematic.
   */
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  /**
   * Set a new status for this rigid-body: static, dynamic, or kinematic.
   */
  setBodyType(type, wakeUp) {
    return this.rawSet.rbSetBodyType(this.handle, type, wakeUp);
  }
  /**
   * Is this rigid-body sleeping?
   */
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  /**
   * Is the velocity of this rigid-body not zero?
   */
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  /**
   * Is this rigid-body static?
   */
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  /**
   * Is this rigid-body kinematic?
   */
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  /**
   * Is this rigid-body dynamic?
   */
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  /**
   * The linear damping coefficient of this rigid-body.
   */
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  /**
   * The angular damping coefficient of this rigid-body.
   */
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  /**
   * Sets the linear damping factor applied to this rigid-body.
   *
   * @param factor - The damping factor to set.
   */
  setLinearDamping(factor) {
    this.rawSet.rbSetLinearDamping(this.handle, factor);
  }
  /**
   * Recompute the mass-properties of this rigid-bodies based on its currently attached colliders.
   */
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  /**
   * Sets the rigid-body's additional mass.
   *
   * The total angular inertia of the rigid-body will be scaled automatically based on this additional mass. If this
   * scaling effect isn’t desired, use Self::additional_mass_properties instead of this method.
   *
   * This is only the "additional" mass because the total mass of the rigid-body is equal to the sum of this
   * additional mass and the mass computed from the colliders (with non-zero densities) attached to this rigid-body.
   *
   * That total mass (which includes the attached colliders’ contributions) will be updated at the name physics step,
   * or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
   *
   * This will override any previous additional mass-properties set by `this.setAdditionalMass`,
   * `this.setAdditionalMassProperties`, `RigidBodyDesc::setAdditionalMass`, or
   * `RigidBodyDesc.setAdditionalMassfProperties` for this rigid-body.
   *
   * @param mass - The additional mass to set.
   * @param wakeUp - If `true` then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
   */
  setAdditionalMass(mass, wakeUp) {
    this.rawSet.rbSetAdditionalMass(this.handle, mass, wakeUp);
  }
  // #if DIM3
  /**
   * Sets the rigid-body's additional mass-properties.
   *
   * This is only the "additional" mass-properties because the total mass-properties of the rigid-body is equal to the
   * sum of this additional mass-properties and the mass computed from the colliders (with non-zero densities) attached
   * to this rigid-body.
   *
   * That total mass-properties (which include the attached colliders’ contributions) will be updated at the name
   * physics step, or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
   *
   * This will override any previous mass-properties set by `this.setAdditionalMass`,
   * `this.setAdditionalMassProperties`, `RigidBodyDesc.setAdditionalMass`, or `RigidBodyDesc.setAdditionalMassProperties`
   * for this rigid-body.
   *
   * If `wake_up` is true then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
   */
  setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame, wakeUp) {
    let rawCom = VectorOps.intoRaw(centerOfMass);
    let rawPrincipalInertia = VectorOps.intoRaw(principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(angularInertiaLocalFrame);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, mass, rawCom, rawPrincipalInertia, rawInertiaFrame, wakeUp);
    rawCom.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
  }
  // #endif
  /**
   * Sets the linear damping factor applied to this rigid-body.
   *
   * @param factor - The damping factor to set.
   */
  setAngularDamping(factor) {
    this.rawSet.rbSetAngularDamping(this.handle, factor);
  }
  /**
   * Resets to zero the user forces (but not torques) applied to this rigid-body.
   *
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  resetForces(wakeUp) {
    this.rawSet.rbResetForces(this.handle, wakeUp);
  }
  /**
   * Resets to zero the user torques applied to this rigid-body.
   *
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  resetTorques(wakeUp) {
    this.rawSet.rbResetTorques(this.handle, wakeUp);
  }
  /**
   * Adds a force at the center-of-mass of this rigid-body.
   *
   * @param force - the world-space force to add to the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addForce(force, wakeUp) {
    const rawForce = VectorOps.intoRaw(force);
    this.rawSet.rbAddForce(this.handle, rawForce, wakeUp);
    rawForce.free();
  }
  /**
   * Applies an impulse at the center-of-mass of this rigid-body.
   *
   * @param impulse - the world-space impulse to apply on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyImpulse(impulse, wakeUp) {
    const rawImpulse = VectorOps.intoRaw(impulse);
    this.rawSet.rbApplyImpulse(this.handle, rawImpulse, wakeUp);
    rawImpulse.free();
  }
  // #if DIM3
  /**
   * Adds a torque at the center-of-mass of this rigid-body.
   *
   * @param torque - the world-space torque to add to the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addTorque(torque, wakeUp) {
    const rawTorque = VectorOps.intoRaw(torque);
    this.rawSet.rbAddTorque(this.handle, rawTorque, wakeUp);
    rawTorque.free();
  }
  // #endif
  // #if DIM3
  /**
   * Applies an impulsive torque at the center-of-mass of this rigid-body.
   *
   * @param torqueImpulse - the world-space torque impulse to apply on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyTorqueImpulse(torqueImpulse, wakeUp) {
    const rawTorqueImpulse = VectorOps.intoRaw(torqueImpulse);
    this.rawSet.rbApplyTorqueImpulse(this.handle, rawTorqueImpulse, wakeUp);
    rawTorqueImpulse.free();
  }
  // #endif
  /**
   * Adds a force at the given world-space point of this rigid-body.
   *
   * @param force - the world-space force to add to the rigid-body.
   * @param point - the world-space point where the impulse is to be applied on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addForceAtPoint(force, point, wakeUp) {
    const rawForce = VectorOps.intoRaw(force);
    const rawPoint = VectorOps.intoRaw(point);
    this.rawSet.rbAddForceAtPoint(this.handle, rawForce, rawPoint, wakeUp);
    rawForce.free();
    rawPoint.free();
  }
  /**
   * Applies an impulse at the given world-space point of this rigid-body.
   *
   * @param impulse - the world-space impulse to apply on the rigid-body.
   * @param point - the world-space point where the impulse is to be applied on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyImpulseAtPoint(impulse, point, wakeUp) {
    const rawImpulse = VectorOps.intoRaw(impulse);
    const rawPoint = VectorOps.intoRaw(point);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, rawImpulse, rawPoint, wakeUp);
    rawImpulse.free();
    rawPoint.free();
  }
};
var RigidBodyDesc = class _RigidBodyDesc {
  constructor(status) {
    this.enabled = true;
    this.status = status;
    this.translation = VectorOps.zeros();
    this.rotation = RotationOps.identity();
    this.gravityScale = 1;
    this.linvel = VectorOps.zeros();
    this.mass = 0;
    this.massOnly = false;
    this.centerOfMass = VectorOps.zeros();
    this.translationsEnabledX = true;
    this.translationsEnabledY = true;
    this.angvel = VectorOps.zeros();
    this.principalAngularInertia = VectorOps.zeros();
    this.angularInertiaLocalFrame = RotationOps.identity();
    this.translationsEnabledZ = true;
    this.rotationsEnabledX = true;
    this.rotationsEnabledY = true;
    this.rotationsEnabledZ = true;
    this.linearDamping = 0;
    this.angularDamping = 0;
    this.canSleep = true;
    this.sleeping = false;
    this.ccdEnabled = false;
    this.dominanceGroup = 0;
  }
  /**
   * A rigid-body descriptor used to build a dynamic rigid-body.
   */
  static dynamic() {
    return new _RigidBodyDesc(RigidBodyType.Dynamic);
  }
  /**
   * A rigid-body descriptor used to build a position-based kinematic rigid-body.
   */
  static kinematicPositionBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicPositionBased);
  }
  /**
   * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
   */
  static kinematicVelocityBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
  }
  /**
   * A rigid-body descriptor used to build a fixed rigid-body.
   */
  static fixed() {
    return new _RigidBodyDesc(RigidBodyType.Fixed);
  }
  /**
   * A rigid-body descriptor used to build a dynamic rigid-body.
   *
   * @deprecated The method has been renamed to `.dynamic()`.
   */
  static newDynamic() {
    return new _RigidBodyDesc(RigidBodyType.Dynamic);
  }
  /**
   * A rigid-body descriptor used to build a position-based kinematic rigid-body.
   *
   * @deprecated The method has been renamed to `.kinematicPositionBased()`.
   */
  static newKinematicPositionBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicPositionBased);
  }
  /**
   * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
   *
   * @deprecated The method has been renamed to `.kinematicVelocityBased()`.
   */
  static newKinematicVelocityBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
  }
  /**
   * A rigid-body descriptor used to build a fixed rigid-body.
   *
   * @deprecated The method has been renamed to `.fixed()`.
   */
  static newStatic() {
    return new _RigidBodyDesc(RigidBodyType.Fixed);
  }
  setDominanceGroup(group) {
    this.dominanceGroup = group;
    return this;
  }
  /**
   * Sets whether the created rigid-body will be enabled or disabled.
   * @param enabled − If set to `false` the rigid-body will be disabled at creation.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }
  // #if DIM3
  /**
   * Sets the initial translation of the rigid-body to create.
   *
   * @param tra - The translation to set.
   */
  setTranslation(x, y, z) {
    if (typeof x != "number" || typeof y != "number" || typeof z != "number")
      throw TypeError("The translation components must be numbers.");
    this.translation = { x, y, z };
    return this;
  }
  // #endif
  /**
   * Sets the initial rotation of the rigid-body to create.
   *
   * @param rot - The rotation to set.
   */
  setRotation(rot) {
    RotationOps.copy(this.rotation, rot);
    return this;
  }
  /**
   * Sets the scale factor applied to the gravity affecting
   * the rigid-body being built.
   *
   * @param scale - The scale factor. Set this to `0.0` if the rigid-body
   *   needs to ignore gravity.
   */
  setGravityScale(scale) {
    this.gravityScale = scale;
    return this;
  }
  /**
   * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
   *
   * @param mass − The initial mass of the rigid-body to create.
   */
  setAdditionalMass(mass) {
    this.mass = mass;
    this.massOnly = true;
    return this;
  }
  // #if DIM3
  /**
   * Sets the initial linear velocity of the rigid-body to create.
   *
   * @param x - The linear velocity to set along the `x` axis.
   * @param y - The linear velocity to set along the `y` axis.
   * @param z - The linear velocity to set along the `z` axis.
   */
  setLinvel(x, y, z) {
    if (typeof x != "number" || typeof y != "number" || typeof z != "number")
      throw TypeError("The linvel components must be numbers.");
    this.linvel = { x, y, z };
    return this;
  }
  /**
   * Sets the initial angular velocity of the rigid-body to create.
   *
   * @param vel - The angular velocity to set.
   */
  setAngvel(vel) {
    VectorOps.copy(this.angvel, vel);
    return this;
  }
  /**
   * Sets the mass properties of the rigid-body being built.
   *
   * Note that the final mass properties of the rigid-bodies depends
   * on the initial mass-properties of the rigid-body (set by this method)
   * to which is added the contributions of all the colliders with non-zero density
   * attached to this rigid-body.
   *
   * Therefore, if you want your provided mass properties to be the final
   * mass properties of your rigid-body, don't attach colliders to it, or
   * only attach colliders with densities equal to zero.
   *
   * @param mass − The initial mass of the rigid-body to create.
   * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
   * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
   *                                  These are the eigenvalues of the angular inertia matrix.
   * @param angularInertiaLocalFrame − The initial local angular inertia frame of the rigid-body to create.
   *                                   These are the eigenvectors of the angular inertia matrix.
   */
  setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
    this.mass = mass;
    VectorOps.copy(this.centerOfMass, centerOfMass);
    VectorOps.copy(this.principalAngularInertia, principalAngularInertia);
    RotationOps.copy(this.angularInertiaLocalFrame, angularInertiaLocalFrame);
    this.massOnly = false;
    return this;
  }
  /**
   * Allow translation of this rigid-body only along specific axes.
   * @param translationsEnabledX - Are translations along the X axis enabled?
   * @param translationsEnabledY - Are translations along the y axis enabled?
   * @param translationsEnabledZ - Are translations along the Z axis enabled?
   */
  enabledTranslations(translationsEnabledX, translationsEnabledY, translationsEnabledZ) {
    this.translationsEnabledX = translationsEnabledX;
    this.translationsEnabledY = translationsEnabledY;
    this.translationsEnabledZ = translationsEnabledZ;
    return this;
  }
  /**
   * Allow translation of this rigid-body only along specific axes.
   * @param translationsEnabledX - Are translations along the X axis enabled?
   * @param translationsEnabledY - Are translations along the y axis enabled?
   * @param translationsEnabledZ - Are translations along the Z axis enabled?
   * @deprecated use `this.enabledTranslations` with the same arguments instead.
   */
  restrictTranslations(translationsEnabledX, translationsEnabledY, translationsEnabledZ) {
    return this.enabledTranslations(translationsEnabledX, translationsEnabledY, translationsEnabledZ);
  }
  /**
   * Locks all translations that would have resulted from forces on
   * the created rigid-body.
   */
  lockTranslations() {
    return this.enabledTranslations(false, false, false);
  }
  /**
   * Allow rotation of this rigid-body only along specific axes.
   * @param rotationsEnabledX - Are rotations along the X axis enabled?
   * @param rotationsEnabledY - Are rotations along the y axis enabled?
   * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
   */
  enabledRotations(rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ) {
    this.rotationsEnabledX = rotationsEnabledX;
    this.rotationsEnabledY = rotationsEnabledY;
    this.rotationsEnabledZ = rotationsEnabledZ;
    return this;
  }
  /**
   * Allow rotation of this rigid-body only along specific axes.
   * @param rotationsEnabledX - Are rotations along the X axis enabled?
   * @param rotationsEnabledY - Are rotations along the y axis enabled?
   * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
   * @deprecated use `this.enabledRotations` with the same arguments instead.
   */
  restrictRotations(rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ) {
    return this.enabledRotations(rotationsEnabledX, rotationsEnabledY, rotationsEnabledZ);
  }
  /**
   * Locks all rotations that would have resulted from forces on
   * the created rigid-body.
   */
  lockRotations() {
    return this.restrictRotations(false, false, false);
  }
  // #endif
  /**
   * Sets the linear damping of the rigid-body to create.
   *
   * This will progressively slowdown the translational movement of the rigid-body.
   *
   * @param damping - The angular damping coefficient. Should be >= 0. The higher this
   *                  value is, the stronger the translational slowdown will be.
   */
  setLinearDamping(damping) {
    this.linearDamping = damping;
    return this;
  }
  /**
   * Sets the angular damping of the rigid-body to create.
   *
   * This will progressively slowdown the rotational movement of the rigid-body.
   *
   * @param damping - The angular damping coefficient. Should be >= 0. The higher this
   *                  value is, the stronger the rotational slowdown will be.
   */
  setAngularDamping(damping) {
    this.angularDamping = damping;
    return this;
  }
  /**
   * Sets whether or not the rigid-body to create can sleep.
   *
   * @param can - true if the rigid-body can sleep, false if it can't.
   */
  setCanSleep(can) {
    this.canSleep = can;
    return this;
  }
  /**
   * Sets whether or not the rigid-body is to be created asleep.
   *
   * @param can - true if the rigid-body should be in sleep, default false.
   */
  setSleeping(sleeping) {
    this.sleeping = sleeping;
    return this;
  }
  /**
   * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
   *
   * @param enabled - true if the rigid-body has CCD enabled.
   */
  setCcdEnabled(enabled) {
    this.ccdEnabled = enabled;
    return this;
  }
  /**
   * Sets the user-defined object of this rigid-body.
   *
   * @param userData - The user-defined object to set.
   */
  setUserData(data) {
    this.userData = data;
    return this;
  }
};

// node_modules/@dimforge/rapier3d/coarena.js
var Coarena = class {
  constructor() {
    this.fconv = new Float64Array(1);
    this.uconv = new Uint32Array(this.fconv.buffer);
    this.data = new Array();
    this.size = 0;
  }
  set(handle, data) {
    let i = this.index(handle);
    while (this.data.length <= i) {
      this.data.push(null);
    }
    if (this.data[i] == null)
      this.size += 1;
    this.data[i] = data;
  }
  len() {
    return this.size;
  }
  delete(handle) {
    let i = this.index(handle);
    if (i < this.data.length) {
      if (this.data[i] != null)
        this.size -= 1;
      this.data[i] = null;
    }
  }
  clear() {
    this.data = new Array();
  }
  get(handle) {
    let i = this.index(handle);
    if (i < this.data.length) {
      return this.data[i];
    } else {
      return null;
    }
  }
  forEach(f) {
    for (const elt of this.data) {
      if (elt != null)
        f(elt);
    }
  }
  getAll() {
    return this.data.filter((elt) => elt != null);
  }
  index(handle) {
    this.fconv[0] = handle;
    return this.uconv[0];
  }
};

// node_modules/@dimforge/rapier3d/dynamics/rigid_body_set.js
var RigidBodySet = class {
  constructor(raw) {
    this.raw = raw || new RawRigidBodySet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachRigidBodyHandle((handle) => {
        this.map.set(handle, new RigidBody(raw, null, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this rigid-body set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /**
   * Internal method, do not call this explicitly.
   */
  finalizeDeserialization(colliderSet) {
    this.map.forEach((rb) => rb.finalizeDeserialization(colliderSet));
  }
  /**
   * Creates a new rigid-body and return its integer handle.
   *
   * @param desc - The description of the rigid-body to create.
   */
  createRigidBody(colliderSet, desc) {
    let rawTra = VectorOps.intoRaw(desc.translation);
    let rawRot = RotationOps.intoRaw(desc.rotation);
    let rawLv = VectorOps.intoRaw(desc.linvel);
    let rawCom = VectorOps.intoRaw(desc.centerOfMass);
    let rawAv = VectorOps.intoRaw(desc.angvel);
    let rawPrincipalInertia = VectorOps.intoRaw(desc.principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(desc.angularInertiaLocalFrame);
    let handle = this.raw.createRigidBody(
      desc.enabled,
      rawTra,
      rawRot,
      desc.gravityScale,
      desc.mass,
      desc.massOnly,
      rawCom,
      rawLv,
      // #if DIM3
      rawAv,
      rawPrincipalInertia,
      rawInertiaFrame,
      desc.translationsEnabledX,
      desc.translationsEnabledY,
      desc.translationsEnabledZ,
      desc.rotationsEnabledX,
      desc.rotationsEnabledY,
      desc.rotationsEnabledZ,
      // #endif
      desc.linearDamping,
      desc.angularDamping,
      desc.status,
      desc.canSleep,
      desc.sleeping,
      desc.ccdEnabled,
      desc.dominanceGroup
    );
    rawTra.free();
    rawRot.free();
    rawLv.free();
    rawCom.free();
    rawAv.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
    const body = new RigidBody(this.raw, colliderSet, handle);
    body.userData = desc.userData;
    this.map.set(handle, body);
    return body;
  }
  /**
   * Removes a rigid-body from this set.
   *
   * This will also remove all the colliders and joints attached to the rigid-body.
   *
   * @param handle - The integer handle of the rigid-body to remove.
   * @param colliders - The set of colliders that may contain colliders attached to the removed rigid-body.
   * @param impulseJoints - The set of impulse joints that may contain joints attached to the removed rigid-body.
   * @param multibodyJoints - The set of multibody joints that may contain joints attached to the removed rigid-body.
   */
  remove(handle, islands, colliders, impulseJoints, multibodyJoints) {
    for (let i = 0; i < this.raw.rbNumColliders(handle); i += 1) {
      colliders.unmap(this.raw.rbCollider(handle, i));
    }
    impulseJoints.forEachJointHandleAttachedToRigidBody(handle, (handle2) => impulseJoints.unmap(handle2));
    multibodyJoints.forEachJointHandleAttachedToRigidBody(handle, (handle2) => multibodyJoints.unmap(handle2));
    this.raw.remove(handle, islands.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
    this.map.delete(handle);
  }
  /**
   * The number of rigid-bodies on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a rigid-body with the given handle?
   *
   * @param handle - The rigid-body handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the rigid-body with the given handle.
   *
   * @param handle - The handle of the rigid-body to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each rigid-body contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Applies the given closure to each active rigid-bodies contained by this set.
   *
   * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
   *
   * @param f - The closure to apply.
   */
  forEachActiveRigidBody(islands, f) {
    islands.forEachActiveRigidBodyHandle((handle) => {
      f(this.get(handle));
    });
  }
  /**
   * Gets all rigid-bodies in the list.
   *
   * @returns rigid-bodies list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/@dimforge/rapier3d/dynamics/integration_parameters.js
var IntegrationParameters = class {
  constructor(raw) {
    this.raw = raw || new RawIntegrationParameters();
  }
  /**
   * Free the WASM memory used by these integration parameters.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * The timestep length (default: `1.0 / 60.0`)
   */
  get dt() {
    return this.raw.dt;
  }
  /**
   * The Error Reduction Parameter in `[0, 1]` is the proportion of
   * the positional error to be corrected at each time step (default: `0.2`).
   */
  get erp() {
    return this.raw.erp;
  }
  /**
   * Amount of penetration the engine wont attempt to correct (default: `0.001m`).
   */
  get allowedLinearError() {
    return this.raw.allowedLinearError;
  }
  /**
   * The maximal distance separating two objects that will generate predictive contacts (default: `0.002`).
   */
  get predictionDistance() {
    return this.raw.predictionDistance;
  }
  /**
   * Maximum number of iterations performed by the velocity constraints solver (default: `4`).
   */
  get maxVelocityIterations() {
    return this.raw.maxVelocityIterations;
  }
  /**
   * Maximum number of friction iterations performed by the position-based constraints solver (default: `1`).
   */
  get maxVelocityFrictionIterations() {
    return this.raw.maxVelocityFrictionIterations;
  }
  /**
   * Maximum number of stabilization iterations performed by the position-based constraints solver (default: `1`).
   */
  get maxStabilizationIterations() {
    return this.raw.maxStabilizationIterations;
  }
  /**
   * Minimum number of dynamic bodies in each active island (default: `128`).
   */
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  /**
   * Maximum number of substeps performed by the  solver (default: `1`).
   */
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(value) {
    this.raw.dt = value;
  }
  set erp(value) {
    this.raw.erp = value;
  }
  set allowedLinearError(value) {
    this.raw.allowedLinearError = value;
  }
  set predictionDistance(value) {
    this.raw.predictionDistance = value;
  }
  set maxVelocityIterations(value) {
    this.raw.maxVelocityIterations = value;
  }
  set maxVelocityFrictionIterations(value) {
    this.raw.maxVelocityFrictionIterations = value;
  }
  set maxStabilizationIterations(value) {
    this.raw.maxStabilizationIterations = value;
  }
  set minIslandSize(value) {
    this.raw.minIslandSize = value;
  }
  set maxCcdSubsteps(value) {
    this.raw.maxCcdSubsteps = value;
  }
};

// node_modules/@dimforge/rapier3d/dynamics/impulse_joint.js
var JointType;
(function(JointType2) {
  JointType2[JointType2["Revolute"] = 0] = "Revolute";
  JointType2[JointType2["Fixed"] = 1] = "Fixed";
  JointType2[JointType2["Prismatic"] = 2] = "Prismatic";
  JointType2[JointType2["Spherical"] = 3] = "Spherical";
})(JointType || (JointType = {}));
var MotorModel;
(function(MotorModel2) {
  MotorModel2[MotorModel2["AccelerationBased"] = 0] = "AccelerationBased";
  MotorModel2[MotorModel2["ForceBased"] = 1] = "ForceBased";
})(MotorModel || (MotorModel = {}));
var ImpulseJoint = class _ImpulseJoint {
  constructor(rawSet, bodySet, handle) {
    this.rawSet = rawSet;
    this.bodySet = bodySet;
    this.handle = handle;
  }
  static newTyped(rawSet, bodySet, handle) {
    switch (rawSet.jointType(handle)) {
      case JointType.Revolute:
        return new RevoluteImpulseJoint(rawSet, bodySet, handle);
      case JointType.Prismatic:
        return new PrismaticImpulseJoint(rawSet, bodySet, handle);
      case JointType.Fixed:
        return new FixedImpulseJoint(rawSet, bodySet, handle);
      case JointType.Spherical:
        return new SphericalImpulseJoint(rawSet, bodySet, handle);
      default:
        return new _ImpulseJoint(rawSet, bodySet, handle);
    }
  }
  /** @internal */
  finalizeDeserialization(bodySet) {
    this.bodySet = bodySet;
  }
  /**
   * Checks if this joint is still valid (i.e. that it has
   * not been deleted from the joint set yet).
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  /**
   * The first rigid-body this joint it attached to.
   */
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  /**
   * The second rigid-body this joint is attached to.
   */
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  /**
   * The type of this joint given as a string.
   */
  type() {
    return this.rawSet.jointType(this.handle);
  }
  // #if DIM3
  /**
   * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
   */
  frameX1() {
    return RotationOps.fromRaw(this.rawSet.jointFrameX1(this.handle));
  }
  // #endif
  // #if DIM3
  /**
   * The rotation matrix that aligns this joint's second local axis to the `x` axis.
   */
  frameX2() {
    return RotationOps.fromRaw(this.rawSet.jointFrameX2(this.handle));
  }
  // #endif
  /**
   * The position of the first anchor of this joint.
   *
   * The first anchor gives the position of the application point on the
   * local frame of the first rigid-body it is attached to.
   */
  anchor1() {
    return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  /**
   * The position of the second anchor of this joint.
   *
   * The second anchor gives the position of the application point on the
   * local frame of the second rigid-body it is attached to.
   */
  anchor2() {
    return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  /**
   * Sets the position of the first anchor of this joint.
   *
   * The first anchor gives the position of the application point on the
   * local frame of the first rigid-body it is attached to.
   */
  setAnchor1(newPos) {
    const rawPoint = VectorOps.intoRaw(newPos);
    this.rawSet.jointSetAnchor1(this.handle, rawPoint);
    rawPoint.free();
  }
  /**
   * Sets the position of the second anchor of this joint.
   *
   * The second anchor gives the position of the application point on the
   * local frame of the second rigid-body it is attached to.
   */
  setAnchor2(newPos) {
    const rawPoint = VectorOps.intoRaw(newPos);
    this.rawSet.jointSetAnchor2(this.handle, rawPoint);
    rawPoint.free();
  }
  /**
   * Controls whether contacts are computed between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  setContactsEnabled(enabled) {
    this.rawSet.jointSetContactsEnabled(this.handle, enabled);
  }
  /**
   * Indicates if contacts are enabled between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var UnitImpulseJoint = class extends ImpulseJoint {
  /**
   * Are the limits enabled for this joint?
   */
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  /**
   * The min limit of this joint.
   */
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  /**
   * The max limit of this joint.
   */
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  /**
   * Sets the limits of this joint.
   *
   * @param min - The minimum bound of this joint’s free coordinate.
   * @param max - The maximum bound of this joint’s free coordinate.
   */
  setLimits(min, max) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), min, max);
  }
  configureMotorModel(model) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), model);
  }
  configureMotorVelocity(targetVel, factor) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), targetVel, factor);
  }
  configureMotorPosition(targetPos, stiffness, damping) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), targetPos, stiffness, damping);
  }
  configureMotor(targetPos, targetVel, stiffness, damping) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), targetPos, targetVel, stiffness, damping);
  }
};
var FixedImpulseJoint = class extends ImpulseJoint {
};
var PrismaticImpulseJoint = class extends UnitImpulseJoint {
  rawAxis() {
    return RawJointAxis.X;
  }
};
var RevoluteImpulseJoint = class extends UnitImpulseJoint {
  rawAxis() {
    return RawJointAxis.AngX;
  }
};
var SphericalImpulseJoint = class extends ImpulseJoint {
};
var JointData = class _JointData {
  constructor() {
  }
  /**
   * Creates a new joint descriptor that builds a Fixed joint.
   *
   * A fixed joint removes all the degrees of freedom between the affected bodies, ensuring their
   * anchor and local frames coincide in world-space.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param frame1 - The reference orientation of the joint wrt. the first rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param frame2 - The reference orientation of the joint wrt. the second rigid-body.
   */
  static fixed(anchor1, frame1, anchor2, frame2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.frame1 = frame1;
    res.frame2 = frame2;
    res.jointType = JointType.Fixed;
    return res;
  }
  // #if DIM3
  /**
   * Create a new joint descriptor that builds spherical joints.
   *
   * A spherical joint allows three relative rotational degrees of freedom
   * by preventing any relative translation between the anchors of the
   * two attached rigid-bodies.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   */
  static spherical(anchor1, anchor2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.jointType = JointType.Spherical;
    return res;
  }
  /**
   * Creates a new joint descriptor that builds a Prismatic joint.
   *
   * A prismatic joint removes all the degrees of freedom between the
   * affected bodies, except for the translation along one axis.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
   */
  static prismatic(anchor1, anchor2, axis) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.axis = axis;
    res.jointType = JointType.Prismatic;
    return res;
  }
  /**
   * Create a new joint descriptor that builds Revolute joints.
   *
   * A revolute joint removes all degrees of freedom between the affected
   * bodies except for the rotation along one axis.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
   */
  static revolute(anchor1, anchor2, axis) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.axis = axis;
    res.jointType = JointType.Revolute;
    return res;
  }
  // #endif
  intoRaw() {
    let rawA1 = VectorOps.intoRaw(this.anchor1);
    let rawA2 = VectorOps.intoRaw(this.anchor2);
    let rawAx;
    let result;
    let limitsEnabled = false;
    let limitsMin = 0;
    let limitsMax = 0;
    switch (this.jointType) {
      case JointType.Fixed:
        let rawFra1 = RotationOps.intoRaw(this.frame1);
        let rawFra2 = RotationOps.intoRaw(this.frame2);
        result = RawGenericJoint.fixed(rawA1, rawFra1, rawA2, rawFra2);
        rawFra1.free();
        rawFra2.free();
        break;
      case JointType.Prismatic:
        rawAx = VectorOps.intoRaw(this.axis);
        if (!!this.limitsEnabled) {
          limitsEnabled = true;
          limitsMin = this.limits[0];
          limitsMax = this.limits[1];
        }
        result = RawGenericJoint.prismatic(rawA1, rawA2, rawAx, limitsEnabled, limitsMin, limitsMax);
        rawAx.free();
        break;
      case JointType.Spherical:
        result = RawGenericJoint.spherical(rawA1, rawA2);
        break;
      case JointType.Revolute:
        rawAx = VectorOps.intoRaw(this.axis);
        result = RawGenericJoint.revolute(rawA1, rawA2, rawAx);
        rawAx.free();
        break;
    }
    rawA1.free();
    rawA2.free();
    return result;
  }
};

// node_modules/@dimforge/rapier3d/dynamics/impulse_joint_set.js
var ImpulseJointSet = class {
  constructor(raw) {
    this.raw = raw || new RawImpulseJointSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachJointHandle((handle) => {
        this.map.set(handle, ImpulseJoint.newTyped(raw, null, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this joint set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    this.map.forEach((joint) => joint.finalizeDeserialization(bodies));
  }
  /**
   * Creates a new joint and return its integer handle.
   *
   * @param bodies - The set of rigid-bodies containing the bodies the joint is attached to.
   * @param desc - The joint's parameters.
   * @param parent1 - The handle of the first rigid-body this joint is attached to.
   * @param parent2 - The handle of the second rigid-body this joint is attached to.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createJoint(bodies, desc, parent1, parent2, wakeUp) {
    const rawParams = desc.intoRaw();
    const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
    rawParams.free();
    let joint = ImpulseJoint.newTyped(this.raw, bodies, handle);
    this.map.set(handle, joint);
    return joint;
  }
  /**
   * Remove a joint from this set.
   *
   * @param handle - The integer handle of the joint.
   * @param wakeUp - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
   */
  remove(handle, wakeUp) {
    this.raw.remove(handle, wakeUp);
    this.unmap(handle);
  }
  /**
   * Calls the given closure with the integer handle of each impulse joint attached to this rigid-body.
   *
   * @param f - The closure called with the integer handle of each impulse joint attached to the rigid-body.
   */
  forEachJointHandleAttachedToRigidBody(handle, f) {
    this.raw.forEachJointAttachedToRigidBody(handle, f);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * The number of joints on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a joint with the given handle?
   *
   * @param handle - The joint handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the joint with the given handle.
   *
   * Returns `null` if no joint with the specified handle exists.
   *
   * @param handle - The integer handle of the joint to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each joint contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Gets all joints in the list.
   *
   * @returns joint list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/@dimforge/rapier3d/dynamics/multibody_joint.js
var MultibodyJoint = class _MultibodyJoint {
  constructor(rawSet, handle) {
    this.rawSet = rawSet;
    this.handle = handle;
  }
  static newTyped(rawSet, handle) {
    switch (rawSet.jointType(handle)) {
      case JointType.Revolute:
        return new RevoluteMultibodyJoint(rawSet, handle);
      case JointType.Prismatic:
        return new PrismaticMultibodyJoint(rawSet, handle);
      case JointType.Fixed:
        return new FixedMultibodyJoint(rawSet, handle);
      case JointType.Spherical:
        return new SphericalMultibodyJoint(rawSet, handle);
      default:
        return new _MultibodyJoint(rawSet, handle);
    }
  }
  /**
   * Checks if this joint is still valid (i.e. that it has
   * not been deleted from the joint set yet).
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  // /**
  //  * The unique integer identifier of the first rigid-body this joint it attached to.
  //  */
  // public bodyHandle1(): RigidBodyHandle {
  //     return this.rawSet.jointBodyHandle1(this.handle);
  // }
  //
  // /**
  //  * The unique integer identifier of the second rigid-body this joint is attached to.
  //  */
  // public bodyHandle2(): RigidBodyHandle {
  //     return this.rawSet.jointBodyHandle2(this.handle);
  // }
  //
  // /**
  //  * The type of this joint given as a string.
  //  */
  // public type(): JointType {
  //     return this.rawSet.jointType(this.handle);
  // }
  //
  // // #if DIM3
  // /**
  //  * The rotation quaternion that aligns this joint's first local axis to the `x` axis.
  //  */
  // public frameX1(): Rotation {
  //     return RotationOps.fromRaw(this.rawSet.jointFrameX1(this.handle));
  // }
  //
  // // #endif
  //
  // // #if DIM3
  // /**
  //  * The rotation matrix that aligns this joint's second local axis to the `x` axis.
  //  */
  // public frameX2(): Rotation {
  //     return RotationOps.fromRaw(this.rawSet.jointFrameX2(this.handle));
  // }
  //
  // // #endif
  //
  // /**
  //  * The position of the first anchor of this joint.
  //  *
  //  * The first anchor gives the position of the points application point on the
  //  * local frame of the first rigid-body it is attached to.
  //  */
  // public anchor1(): Vector {
  //     return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
  // }
  //
  // /**
  //  * The position of the second anchor of this joint.
  //  *
  //  * The second anchor gives the position of the points application point on the
  //  * local frame of the second rigid-body it is attached to.
  //  */
  // public anchor2(): Vector {
  //     return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
  // }
  /**
   * Controls whether contacts are computed between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  setContactsEnabled(enabled) {
    this.rawSet.jointSetContactsEnabled(this.handle, enabled);
  }
  /**
   * Indicates if contacts are enabled between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var UnitMultibodyJoint = class extends MultibodyJoint {
};
var FixedMultibodyJoint = class extends MultibodyJoint {
};
var PrismaticMultibodyJoint = class extends UnitMultibodyJoint {
  rawAxis() {
    return RawJointAxis.X;
  }
};
var RevoluteMultibodyJoint = class extends UnitMultibodyJoint {
  rawAxis() {
    return RawJointAxis.AngX;
  }
};
var SphericalMultibodyJoint = class extends MultibodyJoint {
};

// node_modules/@dimforge/rapier3d/dynamics/multibody_joint_set.js
var MultibodyJointSet = class {
  constructor(raw) {
    this.raw = raw || new RawMultibodyJointSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachJointHandle((handle) => {
        this.map.set(handle, MultibodyJoint.newTyped(this.raw, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this joint set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /**
   * Creates a new joint and return its integer handle.
   *
   * @param desc - The joint's parameters.
   * @param parent1 - The handle of the first rigid-body this joint is attached to.
   * @param parent2 - The handle of the second rigid-body this joint is attached to.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createJoint(desc, parent1, parent2, wakeUp) {
    const rawParams = desc.intoRaw();
    const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
    rawParams.free();
    let joint = MultibodyJoint.newTyped(this.raw, handle);
    this.map.set(handle, joint);
    return joint;
  }
  /**
   * Remove a joint from this set.
   *
   * @param handle - The integer handle of the joint.
   * @param wake_up - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
   */
  remove(handle, wake_up) {
    this.raw.remove(handle, wake_up);
    this.map.delete(handle);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * The number of joints on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a joint with the given handle?
   *
   * @param handle - The joint handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the joint with the given handle.
   *
   * Returns `null` if no joint with the specified handle exists.
   *
   * @param handle - The integer handle of the joint to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each joint contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Calls the given closure with the integer handle of each multibody joint attached to this rigid-body.
   *
   * @param f - The closure called with the integer handle of each multibody joint attached to the rigid-body.
   */
  forEachJointHandleAttachedToRigidBody(handle, f) {
    this.raw.forEachJointAttachedToRigidBody(handle, f);
  }
  /**
   * Gets all joints in the list.
   *
   * @returns joint list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/@dimforge/rapier3d/dynamics/coefficient_combine_rule.js
var CoefficientCombineRule;
(function(CoefficientCombineRule2) {
  CoefficientCombineRule2[CoefficientCombineRule2["Average"] = 0] = "Average";
  CoefficientCombineRule2[CoefficientCombineRule2["Min"] = 1] = "Min";
  CoefficientCombineRule2[CoefficientCombineRule2["Multiply"] = 2] = "Multiply";
  CoefficientCombineRule2[CoefficientCombineRule2["Max"] = 3] = "Max";
})(CoefficientCombineRule || (CoefficientCombineRule = {}));

// node_modules/@dimforge/rapier3d/dynamics/ccd_solver.js
var CCDSolver = class {
  constructor(raw) {
    this.raw = raw || new RawCCDSolver();
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
};

// node_modules/@dimforge/rapier3d/dynamics/island_manager.js
var IslandManager = class {
  constructor(raw) {
    this.raw = raw || new RawIslandManager();
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Applies the given closure to the handle of each active rigid-bodies contained by this set.
   *
   * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
   *
   * @param f - The closure to apply.
   */
  forEachActiveRigidBodyHandle(f) {
    this.raw.forEachActiveRigidBodyHandle(f);
  }
};

// node_modules/@dimforge/rapier3d/geometry/broad_phase.js
var BroadPhase = class {
  constructor(raw) {
    this.raw = raw || new RawBroadPhase();
  }
  /**
   * Release the WASM memory occupied by this broad-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
};

// node_modules/@dimforge/rapier3d/geometry/narrow_phase.js
var NarrowPhase = class {
  constructor(raw) {
    this.raw = raw || new RawNarrowPhase();
    this.tempManifold = new TempContactManifold(null);
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Enumerates all the colliders potentially in contact with the given collider.
   *
   * @param collider1 - The second collider involved in the contact.
   * @param f - Closure that will be called on each collider that is in contact with `collider1`.
   */
  contactsWith(collider1, f) {
    this.raw.contacts_with(collider1, f);
  }
  /**
   * Enumerates all the colliders intersecting the given colliders, assuming one of them
   * is a sensor.
   */
  intersectionsWith(collider1, f) {
    this.raw.intersections_with(collider1, f);
  }
  /**
   * Iterates through all the contact manifolds between the given pair of colliders.
   *
   * @param collider1 - The first collider involved in the contact.
   * @param collider2 - The second collider involved in the contact.
   * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
   *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
   *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
   */
  contactPair(collider1, collider2, f) {
    const rawPair = this.raw.contact_pair(collider1, collider2);
    if (!!rawPair) {
      const flipped = rawPair.collider1() != collider1;
      let i;
      for (i = 0; i < rawPair.numContactManifolds(); ++i) {
        this.tempManifold.raw = rawPair.contactManifold(i);
        if (!!this.tempManifold.raw) {
          f(this.tempManifold, flipped);
        }
        this.tempManifold.free();
      }
      rawPair.free();
    }
  }
  /**
   * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
   * @param collider1 − The first collider involved in the intersection.
   * @param collider2 − The second collider involved in the intersection.
   */
  intersectionPair(collider1, collider2) {
    return this.raw.intersection_pair(collider1, collider2);
  }
};
var TempContactManifold = class {
  constructor(raw) {
    this.raw = raw;
  }
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  normal() {
    return VectorOps.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return VectorOps.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return VectorOps.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(i) {
    return VectorOps.fromRaw(this.raw.contact_local_p1(i));
  }
  localContactPoint2(i) {
    return VectorOps.fromRaw(this.raw.contact_local_p2(i));
  }
  contactDist(i) {
    return this.raw.contact_dist(i);
  }
  contactFid1(i) {
    return this.raw.contact_fid1(i);
  }
  contactFid2(i) {
    return this.raw.contact_fid2(i);
  }
  contactImpulse(i) {
    return this.raw.contact_impulse(i);
  }
  // #if DIM3
  contactTangentImpulseX(i) {
    return this.raw.contact_tangent_impulse_x(i);
  }
  contactTangentImpulseY(i) {
    return this.raw.contact_tangent_impulse_y(i);
  }
  // #endif
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(i) {
    return VectorOps.fromRaw(this.raw.solver_contact_point(i));
  }
  solverContactDist(i) {
    return this.raw.solver_contact_dist(i);
  }
  solverContactFriction(i) {
    return this.raw.solver_contact_friction(i);
  }
  solverContactRestitution(i) {
    return this.raw.solver_contact_restitution(i);
  }
  solverContactTangentVelocity(i) {
    return VectorOps.fromRaw(this.raw.solver_contact_tangent_velocity(i));
  }
};

// node_modules/@dimforge/rapier3d/geometry/contact.js
var ShapeContact = class _ShapeContact {
  constructor(dist, point1, point2, normal1, normal2) {
    this.distance = dist;
    this.point1 = point1;
    this.point2 = point2;
    this.normal1 = normal1;
    this.normal2 = normal2;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _ShapeContact(raw.distance(), VectorOps.fromRaw(raw.point1()), VectorOps.fromRaw(raw.point2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};

// node_modules/@dimforge/rapier3d/geometry/feature.js
var FeatureType;
(function(FeatureType2) {
  FeatureType2[FeatureType2["Vertex"] = 0] = "Vertex";
  FeatureType2[FeatureType2["Edge"] = 1] = "Edge";
  FeatureType2[FeatureType2["Face"] = 2] = "Face";
  FeatureType2[FeatureType2["Unknown"] = 3] = "Unknown";
})(FeatureType || (FeatureType = {}));

// node_modules/@dimforge/rapier3d/geometry/point.js
var PointProjection = class _PointProjection {
  constructor(point, isInside) {
    this.point = point;
    this.isInside = isInside;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _PointProjection(VectorOps.fromRaw(raw.point()), raw.isInside());
    raw.free();
    return result;
  }
};
var PointColliderProjection = class _PointColliderProjection {
  constructor(collider, point, isInside, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.collider = collider;
    this.point = point;
    this.isInside = isInside;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _PointColliderProjection(colliderSet.get(raw.colliderHandle()), VectorOps.fromRaw(raw.point()), raw.isInside(), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};

// node_modules/@dimforge/rapier3d/geometry/ray.js
var Ray = class {
  /**
   * Builds a ray from its origin and direction.
   *
   * @param origin - The ray's starting point.
   * @param dir - The ray's direction of propagation.
   */
  constructor(origin, dir) {
    this.origin = origin;
    this.dir = dir;
  }
  pointAt(t) {
    return {
      x: this.origin.x + this.dir.x * t,
      y: this.origin.y + this.dir.y * t,
      // #if DIM3
      z: this.origin.z + this.dir.z * t
      // #endif
    };
  }
};
var RayIntersection = class _RayIntersection {
  constructor(toi, normal, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.toi = toi;
    this.normal = normal;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _RayIntersection(raw.toi(), VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};
var RayColliderIntersection = class _RayColliderIntersection {
  constructor(collider, toi, normal, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.collider = collider;
    this.toi = toi;
    this.normal = normal;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _RayColliderIntersection(colliderSet.get(raw.colliderHandle()), raw.toi(), VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};
var RayColliderToi = class _RayColliderToi {
  constructor(collider, toi) {
    this.collider = collider;
    this.toi = toi;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _RayColliderToi(colliderSet.get(raw.colliderHandle()), raw.toi());
    raw.free();
    return result;
  }
};

// node_modules/@dimforge/rapier3d/geometry/toi.js
var ShapeTOI = class _ShapeTOI {
  constructor(toi, witness1, witness2, normal1, normal2) {
    this.toi = toi;
    this.witness1 = witness1;
    this.witness2 = witness2;
    this.normal1 = normal1;
    this.normal2 = normal2;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _ShapeTOI(raw.toi(), VectorOps.fromRaw(raw.witness1()), VectorOps.fromRaw(raw.witness2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};
var ShapeColliderTOI = class _ShapeColliderTOI extends ShapeTOI {
  constructor(collider, toi, witness1, witness2, normal1, normal2) {
    super(toi, witness1, witness2, normal1, normal2);
    this.collider = collider;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _ShapeColliderTOI(colliderSet.get(raw.colliderHandle()), raw.toi(), VectorOps.fromRaw(raw.witness1()), VectorOps.fromRaw(raw.witness2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};

// node_modules/@dimforge/rapier3d/geometry/shape.js
var Shape = class {
  /**
   * instant mode without cache
   */
  static fromRaw(rawSet, handle) {
    const rawType = rawSet.coShapeType(handle);
    let extents;
    let borderRadius;
    let vs;
    let indices;
    let halfHeight;
    let radius;
    let normal;
    switch (rawType) {
      case ShapeType.Ball:
        return new Ball(rawSet.coRadius(handle));
      case ShapeType.Cuboid:
        extents = rawSet.coHalfExtents(handle);
        return new Cuboid(extents.x, extents.y, extents.z);
      case ShapeType.RoundCuboid:
        extents = rawSet.coHalfExtents(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCuboid(extents.x, extents.y, extents.z, borderRadius);
      case ShapeType.Capsule:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Capsule(halfHeight, radius);
      case ShapeType.Segment:
        vs = rawSet.coVertices(handle);
        return new Segment(VectorOps.new(vs[0], vs[1], vs[2]), VectorOps.new(vs[3], vs[4], vs[5]));
      case ShapeType.Polyline:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new Polyline(vs, indices);
      case ShapeType.Triangle:
        vs = rawSet.coVertices(handle);
        return new Triangle(VectorOps.new(vs[0], vs[1], vs[2]), VectorOps.new(vs[3], vs[4], vs[5]), VectorOps.new(vs[6], vs[7], vs[8]));
      case ShapeType.RoundTriangle:
        vs = rawSet.coVertices(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundTriangle(VectorOps.new(vs[0], vs[1], vs[2]), VectorOps.new(vs[3], vs[4], vs[5]), VectorOps.new(vs[6], vs[7], vs[8]), borderRadius);
      case ShapeType.HalfSpace:
        normal = VectorOps.fromRaw(rawSet.coHalfspaceNormal(handle));
        return new HalfSpace(normal);
      case ShapeType.TriMesh:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new TriMesh(vs, indices);
      case ShapeType.HeightField:
        const scale = rawSet.coHeightfieldScale(handle);
        const heights = rawSet.coHeightfieldHeights(handle);
        const nrows = rawSet.coHeightfieldNRows(handle);
        const ncols = rawSet.coHeightfieldNCols(handle);
        return new Heightfield(nrows, ncols, heights, scale);
      case ShapeType.ConvexPolyhedron:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new ConvexPolyhedron(vs, indices);
      case ShapeType.RoundConvexPolyhedron:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundConvexPolyhedron(vs, indices, borderRadius);
      case ShapeType.Cylinder:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Cylinder(halfHeight, radius);
      case ShapeType.RoundCylinder:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCylinder(halfHeight, radius, borderRadius);
      case ShapeType.Cone:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Cone(halfHeight, radius);
      case ShapeType.RoundCone:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCone(halfHeight, radius, borderRadius);
      default:
        throw new Error("unknown shape type: " + rawType);
    }
  }
  /**
   * Computes the time of impact between two moving shapes.
   * @param shapePos1 - The initial position of this sahpe.
   * @param shapeRot1 - The rotation of this shape.
   * @param shapeVel1 - The velocity of this shape.
   * @param shape2 - The second moving shape.
   * @param shapePos2 - The initial position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @param shapeVel2 - The velocity of the second shape.
   * @param maxToi - The maximum time when the impact can happen.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @returns If the two moving shapes collider at some point along their trajectories, this returns the
   *  time at which the two shape collider as well as the contact information during the impact. Returns
   *  `null`if the two shapes never collide along their paths.
   */
  castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi, stopAtPenetration) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawVel1 = VectorOps.intoRaw(shapeVel1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawVel2 = VectorOps.intoRaw(shapeVel2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = ShapeTOI.fromRaw(null, rawShape1.castShape(rawPos1, rawRot1, rawVel1, rawShape2, rawPos2, rawRot2, rawVel2, maxToi, stopAtPenetration));
    rawPos1.free();
    rawRot1.free();
    rawVel1.free();
    rawPos2.free();
    rawRot2.free();
    rawVel2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  /**
   * Tests if this shape intersects another shape.
   *
   * @param shapePos1 - The position of this shape.
   * @param shapeRot1 - The rotation of this shape.
   * @param shape2  - The second shape to test.
   * @param shapePos2 - The position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @returns `true` if the two shapes intersect, `false` if they don’t.
   */
  intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = rawShape1.intersectsShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2);
    rawPos1.free();
    rawRot1.free();
    rawPos2.free();
    rawRot2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between two shapes.
   *
   * @param shapePos1 - The initial position of this sahpe.
   * @param shapeRot1 - The rotation of this shape.
   * @param shape2 - The second shape.
   * @param shapePos2 - The initial position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = ShapeContact.fromRaw(rawShape1.contactShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2, prediction));
    rawPos1.free();
    rawRot1.free();
    rawPos2.free();
    rawRot2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  containsPoint(shapePos, shapeRot, point) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawPoint = VectorOps.intoRaw(point);
    let rawShape = this.intoRaw();
    let result = rawShape.containsPoint(rawPos, rawRot, rawPoint);
    rawPos.free();
    rawRot.free();
    rawPoint.free();
    rawShape.free();
    return result;
  }
  projectPoint(shapePos, shapeRot, point, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawPoint = VectorOps.intoRaw(point);
    let rawShape = this.intoRaw();
    let result = PointProjection.fromRaw(rawShape.projectPoint(rawPos, rawRot, rawPoint, solid));
    rawPos.free();
    rawRot.free();
    rawPoint.free();
    rawShape.free();
    return result;
  }
  intersectsRay(ray, shapePos, shapeRot, maxToi) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = rawShape.intersectsRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi);
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
  castRay(ray, shapePos, shapeRot, maxToi, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = rawShape.castRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid);
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
  castRayAndGetNormal(ray, shapePos, shapeRot, maxToi, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = RayIntersection.fromRaw(rawShape.castRayAndGetNormal(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid));
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
};
var ShapeType;
(function(ShapeType2) {
  ShapeType2[ShapeType2["Ball"] = 0] = "Ball";
  ShapeType2[ShapeType2["Cuboid"] = 1] = "Cuboid";
  ShapeType2[ShapeType2["Capsule"] = 2] = "Capsule";
  ShapeType2[ShapeType2["Segment"] = 3] = "Segment";
  ShapeType2[ShapeType2["Polyline"] = 4] = "Polyline";
  ShapeType2[ShapeType2["Triangle"] = 5] = "Triangle";
  ShapeType2[ShapeType2["TriMesh"] = 6] = "TriMesh";
  ShapeType2[ShapeType2["HeightField"] = 7] = "HeightField";
  ShapeType2[ShapeType2["ConvexPolyhedron"] = 9] = "ConvexPolyhedron";
  ShapeType2[ShapeType2["Cylinder"] = 10] = "Cylinder";
  ShapeType2[ShapeType2["Cone"] = 11] = "Cone";
  ShapeType2[ShapeType2["RoundCuboid"] = 12] = "RoundCuboid";
  ShapeType2[ShapeType2["RoundTriangle"] = 13] = "RoundTriangle";
  ShapeType2[ShapeType2["RoundCylinder"] = 14] = "RoundCylinder";
  ShapeType2[ShapeType2["RoundCone"] = 15] = "RoundCone";
  ShapeType2[ShapeType2["RoundConvexPolyhedron"] = 16] = "RoundConvexPolyhedron";
  ShapeType2[ShapeType2["HalfSpace"] = 17] = "HalfSpace";
})(ShapeType || (ShapeType = {}));
var Ball = class extends Shape {
  /**
   * Creates a new ball with the given radius.
   * @param radius - The balls radius.
   */
  constructor(radius) {
    super();
    this.type = ShapeType.Ball;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.ball(this.radius);
  }
};
var HalfSpace = class extends Shape {
  /**
   * Creates a new halfspace delimited by an infinite plane.
   *
   * @param normal - The outward normal of the plane.
   */
  constructor(normal) {
    super();
    this.type = ShapeType.HalfSpace;
    this.normal = normal;
  }
  intoRaw() {
    let n = VectorOps.intoRaw(this.normal);
    let result = RawShape.halfspace(n);
    n.free();
    return result;
  }
};
var Cuboid = class extends Shape {
  // #if DIM3
  /**
   * Creates a new 3D cuboid.
   * @param hx - The half width of the cuboid.
   * @param hy - The half height of the cuboid.
   * @param hz - The half depth of the cuboid.
   */
  constructor(hx, hy, hz) {
    super();
    this.type = ShapeType.Cuboid;
    this.halfExtents = VectorOps.new(hx, hy, hz);
  }
  // #endif
  intoRaw() {
    return RawShape.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
  }
};
var RoundCuboid = class extends Shape {
  // #if DIM3
  /**
   * Creates a new 3D cuboid.
   * @param hx - The half width of the cuboid.
   * @param hy - The half height of the cuboid.
   * @param hz - The half depth of the cuboid.
   * @param borderRadius - The radius of the borders of this cuboid. This will
   *   effectively increase the half-extents of the cuboid by this radius.
   */
  constructor(hx, hy, hz, borderRadius) {
    super();
    this.type = ShapeType.RoundCuboid;
    this.halfExtents = VectorOps.new(hx, hy, hz);
    this.borderRadius = borderRadius;
  }
  // #endif
  intoRaw() {
    return RawShape.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
  }
};
var Capsule = class extends Shape {
  /**
   * Creates a new capsule with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Capsule;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.capsule(this.halfHeight, this.radius);
  }
};
var Segment = class extends Shape {
  /**
   * Creates a new segment shape.
   * @param a - The first point of the segment.
   * @param b - The second point of the segment.
   */
  constructor(a, b) {
    super();
    this.type = ShapeType.Segment;
    this.a = a;
    this.b = b;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let result = RawShape.segment(ra, rb);
    ra.free();
    rb.free();
    return result;
  }
};
var Triangle = class extends Shape {
  /**
   * Creates a new triangle shape.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   */
  constructor(a, b, c) {
    super();
    this.type = ShapeType.Triangle;
    this.a = a;
    this.b = b;
    this.c = c;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let rc = VectorOps.intoRaw(this.c);
    let result = RawShape.triangle(ra, rb, rc);
    ra.free();
    rb.free();
    rc.free();
    return result;
  }
};
var RoundTriangle = class extends Shape {
  /**
   * Creates a new triangle shape with round corners.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   * @param borderRadius - The radius of the borders of this triangle. In 3D,
   *   this is also equal to half the thickness of the triangle.
   */
  constructor(a, b, c, borderRadius) {
    super();
    this.type = ShapeType.RoundTriangle;
    this.a = a;
    this.b = b;
    this.c = c;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let rc = VectorOps.intoRaw(this.c);
    let result = RawShape.roundTriangle(ra, rb, rc, this.borderRadius);
    ra.free();
    rb.free();
    rc.free();
    return result;
  }
};
var Polyline = class extends Shape {
  /**
   * Creates a new polyline shape.
   *
   * @param vertices - The coordinates of the polyline's vertices.
   * @param indices - The indices of the polyline's segments. If this is `null` or not provided, then
   *    the vertices are assumed to form a line strip.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.Polyline;
    this.vertices = vertices;
    this.indices = indices !== null && indices !== void 0 ? indices : new Uint32Array(0);
  }
  intoRaw() {
    return RawShape.polyline(this.vertices, this.indices);
  }
};
var TriMesh = class extends Shape {
  /**
   * Creates a new triangle mesh shape.
   *
   * @param vertices - The coordinates of the triangle mesh's vertices.
   * @param indices - The indices of the triangle mesh's triangles.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.TriMesh;
    this.vertices = vertices;
    this.indices = indices;
  }
  intoRaw() {
    return RawShape.trimesh(this.vertices, this.indices);
  }
};
var ConvexPolyhedron = class extends Shape {
  /**
   * Creates a new convex polygon shape.
   *
   * @param vertices - The coordinates of the convex polygon's vertices.
   * @param indices - The index buffer of this convex mesh. If this is `null`
   *   or `undefined`, the convex-hull of the input vertices will be computed
   *   automatically. Otherwise, it will be assumed that the mesh you provide
   *   is already convex.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.ConvexPolyhedron;
    this.vertices = vertices;
    this.indices = indices;
  }
  intoRaw() {
    if (!!this.indices) {
      return RawShape.convexMesh(this.vertices, this.indices);
    } else {
      return RawShape.convexHull(this.vertices);
    }
  }
};
var RoundConvexPolyhedron = class extends Shape {
  /**
   * Creates a new convex polygon shape.
   *
   * @param vertices - The coordinates of the convex polygon's vertices.
   * @param indices - The index buffer of this convex mesh. If this is `null`
   *   or `undefined`, the convex-hull of the input vertices will be computed
   *   automatically. Otherwise, it will be assumed that the mesh you provide
   *   is already convex.
   * @param borderRadius - The radius of the borders of this convex polyhedron.
   */
  constructor(vertices, indices, borderRadius) {
    super();
    this.type = ShapeType.RoundConvexPolyhedron;
    this.vertices = vertices;
    this.indices = indices;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    if (!!this.indices) {
      return RawShape.roundConvexMesh(this.vertices, this.indices, this.borderRadius);
    } else {
      return RawShape.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
};
var Heightfield = class extends Shape {
  /**
   * Creates a new heightfield shape.
   *
   * @param nrows − The number of rows in the heights matrix.
   * @param ncols - The number of columns in the heights matrix.
   * @param heights - The heights of the heightfield along its local `y` axis,
   *                  provided as a matrix stored in column-major order.
   * @param scale - The dimensions of the heightfield's local `x,z` plane.
   */
  constructor(nrows, ncols, heights, scale) {
    super();
    this.type = ShapeType.HeightField;
    this.nrows = nrows;
    this.ncols = ncols;
    this.heights = heights;
    this.scale = scale;
  }
  intoRaw() {
    let rawScale = VectorOps.intoRaw(this.scale);
    let rawShape = RawShape.heightfield(this.nrows, this.ncols, this.heights, rawScale);
    rawScale.free();
    return rawShape;
  }
};
var Cylinder = class extends Shape {
  /**
   * Creates a new cylinder with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Cylinder;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.cylinder(this.halfHeight, this.radius);
  }
};
var RoundCylinder = class extends Shape {
  /**
   * Creates a new cylinder with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   * @param borderRadius - The radius of the borders of this cylinder.
   */
  constructor(halfHeight, radius, borderRadius) {
    super();
    this.type = ShapeType.RoundCylinder;
    this.borderRadius = borderRadius;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
  }
};
var Cone = class extends Shape {
  /**
   * Creates a new cone with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Cone;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.cone(this.halfHeight, this.radius);
  }
};
var RoundCone = class extends Shape {
  /**
   * Creates a new cone with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   * @param borderRadius - The radius of the borders of this cone.
   */
  constructor(halfHeight, radius, borderRadius) {
    super();
    this.type = ShapeType.RoundCone;
    this.halfHeight = halfHeight;
    this.radius = radius;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    return RawShape.roundCone(this.halfHeight, this.radius, this.borderRadius);
  }
};

// node_modules/@dimforge/rapier3d/geometry/collider.js
var ActiveCollisionTypes;
(function(ActiveCollisionTypes2) {
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_DYNAMIC"] = 1] = "DYNAMIC_DYNAMIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_KINEMATIC"] = 12] = "DYNAMIC_KINEMATIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_FIXED"] = 2] = "DYNAMIC_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["KINEMATIC_KINEMATIC"] = 52224] = "KINEMATIC_KINEMATIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["KINEMATIC_FIXED"] = 8704] = "KINEMATIC_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["FIXED_FIXED"] = 32] = "FIXED_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DEFAULT"] = 15] = "DEFAULT";
  ActiveCollisionTypes2[ActiveCollisionTypes2["ALL"] = 60943] = "ALL";
})(ActiveCollisionTypes || (ActiveCollisionTypes = {}));
var Collider = class {
  constructor(colliderSet, handle, parent, shape) {
    this.colliderSet = colliderSet;
    this.handle = handle;
    this._parent = parent;
    this._shape = shape;
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    if (this.handle != null) {
      this._parent = bodies.get(this.colliderSet.raw.coParent(this.handle));
    }
  }
  ensureShapeIsCached() {
    if (!this._shape)
      this._shape = Shape.fromRaw(this.colliderSet.raw, this.handle);
  }
  /**
   * The shape of this collider.
   */
  get shape() {
    this.ensureShapeIsCached();
    return this._shape;
  }
  /**
   * Checks if this collider is still valid (i.e. that it has
   * not been deleted from the collider set yet).
   */
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  /**
   * The world-space translation of this rigid-body.
   */
  translation() {
    return VectorOps.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  /**
   * The world-space orientation of this rigid-body.
   */
  rotation() {
    return RotationOps.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  /**
   * Is this collider a sensor?
   */
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  /**
   * Sets whether or not this collider is a sensor.
   * @param isSensor - If `true`, the collider will be a sensor.
   */
  setSensor(isSensor) {
    this.colliderSet.raw.coSetSensor(this.handle, isSensor);
  }
  /**
   * Sets the new shape of the collider.
   * @param shape - The collider’s new shape.
   */
  setShape(shape) {
    let rawShape = shape.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, rawShape);
    rawShape.free();
    this._shape = shape;
  }
  /**
   * Sets whether this collider is enabled or not.
   *
   * @param enabled - Set to `false` to disable this collider (its parent rigid-body won’t be disabled automatically by this).
   */
  setEnabled(enabled) {
    this.colliderSet.raw.coSetEnabled(this.handle, enabled);
  }
  /**
   * Is this collider enabled?
   */
  isEnabled() {
    return this.colliderSet.raw.coIsEnabled(this.handle);
  }
  /**
   * Sets the restitution coefficient of the collider to be created.
   *
   * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
   *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
   *                   constraints solver).
   */
  setRestitution(restitution) {
    this.colliderSet.raw.coSetRestitution(this.handle, restitution);
  }
  /**
   * Sets the friction coefficient of the collider to be created.
   *
   * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
   *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
   *                   being built.
   */
  setFriction(friction) {
    this.colliderSet.raw.coSetFriction(this.handle, friction);
  }
  /**
   * Gets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   */
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  /**
   * Sets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setFrictionCombineRule(rule) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, rule);
  }
  /**
   * Gets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   */
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  /**
   * Sets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setRestitutionCombineRule(rule) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, rule);
  }
  /**
   * Sets the collision groups used by this collider.
   *
   * Two colliders will interact iff. their collision groups are compatible.
   * See the documentation of `InteractionGroups` for details on teh used bit pattern.
   *
   * @param groups - The collision groups used for the collider being built.
   */
  setCollisionGroups(groups) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, groups);
  }
  /**
   * Sets the solver groups used by this collider.
   *
   * Forces between two colliders in contact will be computed iff their solver
   * groups are compatible.
   * See the documentation of `InteractionGroups` for details on the used bit pattern.
   *
   * @param groups - The solver groups used for the collider being built.
   */
  setSolverGroups(groups) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, groups);
  }
  /**
   * Get the physics hooks active for this collider.
   */
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  /**
   * Set the physics hooks active for this collider.
   *
   * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
   *
   * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveHooks(activeHooks) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, activeHooks);
  }
  /**
   * The events active for this collider.
   */
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  /**
   * Set the events active for this collider.
   *
   * Use this to enable contact and/or intersection event reporting for this collider.
   *
   * @param activeEvents - The events active for contact/intersection pairs involving this collider.
   */
  setActiveEvents(activeEvents) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, activeEvents);
  }
  /**
   * Gets the collision types active for this collider.
   */
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  /**
   * Sets the total force magnitude beyond which a contact force event can be emitted.
   *
   * @param threshold - The new force threshold.
   */
  setContactForceEventThreshold(threshold) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, threshold);
  }
  /**
   * The total force magnitude beyond which a contact force event can be emitted.
   */
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  /**
   * Set the collision types active for this collider.
   *
   * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveCollisionTypes(activeCollisionTypes) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, activeCollisionTypes);
  }
  /**
   * Sets the uniform density of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   *
   * The mass and angular inertia of this collider will be computed automatically based on its
   * shape.
   */
  setDensity(density) {
    this.colliderSet.raw.coSetDensity(this.handle, density);
  }
  /**
   * Sets the mass of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   *
   * The angular inertia of this collider will be computed automatically based on its shape
   * and this mass value.
   */
  setMass(mass) {
    this.colliderSet.raw.coSetMass(this.handle, mass);
  }
  // #if DIM3
  /**
   * Sets the mass of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   */
  setMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
    let rawCom = VectorOps.intoRaw(centerOfMass);
    let rawPrincipalInertia = VectorOps.intoRaw(principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(angularInertiaLocalFrame);
    this.colliderSet.raw.coSetMassProperties(this.handle, mass, rawCom, rawPrincipalInertia, rawInertiaFrame);
    rawCom.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
  }
  // #endif
  /**
   * Sets the translation of this collider.
   *
   * @param tra - The world-space position of the collider.
   */
  setTranslation(tra) {
    this.colliderSet.raw.coSetTranslation(this.handle, tra.x, tra.y, tra.z);
  }
  /**
   * Sets the translation of this collider relative to its parent rigid-body.
   *
   * Does nothing if this collider isn't attached to a rigid-body.
   *
   * @param tra - The new translation of the collider relative to its parent.
   */
  setTranslationWrtParent(tra) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, tra.x, tra.y, tra.z);
  }
  // #if DIM3
  /**
   * Sets the rotation quaternion of this collider.
   *
   * This does nothing if a zero quaternion is provided.
   *
   * @param rotation - The rotation to set.
   */
  setRotation(rot) {
    this.colliderSet.raw.coSetRotation(this.handle, rot.x, rot.y, rot.z, rot.w);
  }
  /**
   * Sets the rotation quaternion of this collider relative to its parent rigid-body.
   *
   * This does nothing if a zero quaternion is provided or if this collider isn't
   * attached to a rigid-body.
   *
   * @param rotation - The rotation to set.
   */
  setRotationWrtParent(rot) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, rot.x, rot.y, rot.z, rot.w);
  }
  // #endif
  /**
   * The type of the shape of this collider.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  /**
   * The half-extents of this collider if it is a cuboid shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  halfExtents() {
    return VectorOps.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  /**
   * Sets the half-extents of this collider if it is a cuboid shape.
   *
   * @param newHalfExtents - desired half extents.
   */
  setHalfExtents(newHalfExtents) {
    const rawPoint = VectorOps.intoRaw(newHalfExtents);
    this.colliderSet.raw.coSetHalfExtents(this.handle, rawPoint);
  }
  /**
   * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  /**
   * Sets the radius of this collider if it is a ball, cylinder, capsule, or cone shape.
   *
   * @param newRadius - desired radius.
   */
  setRadius(newRadius) {
    this.colliderSet.raw.coSetRadius(this.handle, newRadius);
  }
  /**
   * The radius of the round edges of this collider if it is a round cylinder.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  /**
   * Sets the radius of the round edges of this collider if it has round edges.
   *
   * @param newBorderRadius - desired round edge radius.
   */
  setRoundRadius(newBorderRadius) {
    this.colliderSet.raw.coSetRoundRadius(this.handle, newBorderRadius);
  }
  /**
   * The half height of this collider if it is a cylinder, capsule, or cone shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  /**
   * Sets the half height of this collider if it is a cylinder, capsule, or cone shape.
   *
   * @param newHalfheight - desired half height.
   */
  setHalfHeight(newHalfheight) {
    this.colliderSet.raw.coSetHalfHeight(this.handle, newHalfheight);
  }
  /**
   * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
   * this returns the vertex buffer of said shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  /**
   * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
   * this returns the index buffer of said shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the heights buffer of
   * the heightfield.
   * In 3D, the returned height matrix is provided in column-major order.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the scale
   * applied to it.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldScale() {
    let scale = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return VectorOps.fromRaw(scale);
  }
  // #if DIM3
  /**
   * If this collider has a heightfield shape, this returns the number of
   * rows of its height matrix.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldNRows() {
    return this.colliderSet.raw.coHeightfieldNRows(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the number of
   * columns of its height matrix.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldNCols() {
    return this.colliderSet.raw.coHeightfieldNCols(this.handle);
  }
  // #endif
  /**
   * The rigid-body this collider is attached to.
   */
  parent() {
    return this._parent;
  }
  /**
   * The friction coefficient of this collider.
   */
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  /**
   * The restitution coefficient of this collider.
   */
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  /**
   * The density of this collider.
   */
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  /**
   * The mass of this collider.
   */
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  /**
   * The volume of this collider.
   */
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  /**
   * The collision groups of this collider.
   */
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  /**
   * The solver groups of this collider.
   */
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  /**
   * Tests if this collider contains a point.
   *
   * @param point - The point to test.
   */
  containsPoint(point) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = this.colliderSet.raw.coContainsPoint(this.handle, rawPoint);
    rawPoint.free();
    return result;
  }
  /**
   * Find the projection of a point on this collider.
   *
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   */
  projectPoint(point, solid) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointProjection.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, rawPoint, solid));
    rawPoint.free();
    return result;
  }
  /**
   * Tests if this collider intersects the given ray.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   */
  intersectsRay(ray, maxToi) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = this.colliderSet.raw.coIntersectsRay(this.handle, rawOrig, rawDir, maxToi);
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /*
   * Computes the smallest time between this and the given shape under translational movement are separated by a distance smaller or equal to distance.
   *
   * @param collider1Vel - The constant velocity of the current shape to cast (i.e. the cast direction).
   * @param shape2 - The shape to cast against.
   * @param shape2Pos - The position of the second shape.
   * @param shape2Rot - The rotation of the second shape.
   * @param shape2Vel - The constant velocity of the second shape.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `collider1Vel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   */
  castShape(collider1Vel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi, stopAtPenetration) {
    let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
    let rawShape2Pos = VectorOps.intoRaw(shape2Pos);
    let rawShape2Rot = RotationOps.intoRaw(shape2Rot);
    let rawShape2Vel = VectorOps.intoRaw(shape2Vel);
    let rawShape2 = shape2.intoRaw();
    let result = ShapeTOI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, rawCollider1Vel, rawShape2, rawShape2Pos, rawShape2Rot, rawShape2Vel, maxToi, stopAtPenetration));
    rawCollider1Vel.free();
    rawShape2Pos.free();
    rawShape2Rot.free();
    rawShape2Vel.free();
    rawShape2.free();
    return result;
  }
  /*
   * Computes the smallest time between this and the given collider under translational movement are separated by a distance smaller or equal to distance.
   *
   * @param collider1Vel - The constant velocity of the current collider to cast (i.e. the cast direction).
   * @param collider2 - The collider to cast against.
   * @param collider2Vel - The constant velocity of the second collider.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   */
  castCollider(collider1Vel, collider2, collider2Vel, maxToi, stopAtPenetration) {
    let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
    let rawCollider2Vel = VectorOps.intoRaw(collider2Vel);
    let result = ShapeColliderTOI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, rawCollider1Vel, collider2.handle, rawCollider2Vel, maxToi, stopAtPenetration));
    rawCollider1Vel.free();
    rawCollider2Vel.free();
    return result;
  }
  intersectsShape(shape2, shapePos2, shapeRot2) {
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape2 = shape2.intoRaw();
    let result = this.colliderSet.raw.coIntersectsShape(this.handle, rawShape2, rawPos2, rawRot2);
    rawPos2.free();
    rawRot2.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between the shape owned by this collider and the given shape.
   *
   * @param shape2 - The second shape.
   * @param shape2Pos - The initial position of the second shape.
   * @param shape2Rot - The rotation of the second shape.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactShape(shape2, shape2Pos, shape2Rot, prediction) {
    let rawPos2 = VectorOps.intoRaw(shape2Pos);
    let rawRot2 = RotationOps.intoRaw(shape2Rot);
    let rawShape2 = shape2.intoRaw();
    let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactShape(this.handle, rawShape2, rawPos2, rawRot2, prediction));
    rawPos2.free();
    rawRot2.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between the collider and the given collider.
   *
   * @param collider2 - The second collider.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactCollider(collider2, prediction) {
    let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, collider2.handle, prediction));
    return result;
  }
  /*
   * Find the closest intersection between a ray and this collider.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @returns The time-of-impact between this collider and the ray, or `-1` if there is no intersection.
   */
  castRay(ray, maxToi, solid) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = this.colliderSet.raw.coCastRay(this.handle, rawOrig, rawDir, maxToi, solid);
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Find the closest intersection between a ray and this collider.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   */
  castRayAndGetNormal(ray, maxToi, solid) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayIntersection.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, rawOrig, rawDir, maxToi, solid));
    rawOrig.free();
    rawDir.free();
    return result;
  }
};
var MassPropsMode;
(function(MassPropsMode2) {
  MassPropsMode2[MassPropsMode2["Density"] = 0] = "Density";
  MassPropsMode2[MassPropsMode2["Mass"] = 1] = "Mass";
  MassPropsMode2[MassPropsMode2["MassProps"] = 2] = "MassProps";
})(MassPropsMode || (MassPropsMode = {}));
var ColliderDesc = class _ColliderDesc {
  /**
   * Initializes a collider descriptor from the collision shape.
   *
   * @param shape - The shape of the collider being built.
   */
  constructor(shape) {
    this.enabled = true;
    this.shape = shape;
    this.massPropsMode = MassPropsMode.Density;
    this.density = 1;
    this.friction = 0.5;
    this.restitution = 0;
    this.rotation = RotationOps.identity();
    this.translation = VectorOps.zeros();
    this.isSensor = false;
    this.collisionGroups = 4294967295;
    this.solverGroups = 4294967295;
    this.frictionCombineRule = CoefficientCombineRule.Average;
    this.restitutionCombineRule = CoefficientCombineRule.Average;
    this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT;
    this.activeEvents = 0;
    this.activeHooks = 0;
    this.mass = 0;
    this.centerOfMass = VectorOps.zeros();
    this.contactForceEventThreshold = 0;
    this.principalAngularInertia = VectorOps.zeros();
    this.angularInertiaLocalFrame = RotationOps.identity();
  }
  /**
   * Create a new collider descriptor with a ball shape.
   *
   * @param radius - The radius of the ball.
   */
  static ball(radius) {
    const shape = new Ball(radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a capsule shape.
   *
   * @param halfHeight - The half-height of the capsule, along the `y` axis.
   * @param radius - The radius of the capsule basis.
   */
  static capsule(halfHeight, radius) {
    const shape = new Capsule(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new segment shape.
   *
   * @param a - The first point of the segment.
   * @param b - The second point of the segment.
   */
  static segment(a, b) {
    const shape = new Segment(a, b);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new triangle shape.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   */
  static triangle(a, b, c) {
    const shape = new Triangle(a, b, c);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new triangle shape with round corners.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   * @param borderRadius - The radius of the borders of this triangle. In 3D,
   *   this is also equal to half the thickness of the triangle.
   */
  static roundTriangle(a, b, c, borderRadius) {
    const shape = new RoundTriangle(a, b, c, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a polyline shape.
   *
   * @param vertices - The coordinates of the polyline's vertices.
   * @param indices - The indices of the polyline's segments. If this is `undefined` or `null`,
   *    the vertices are assumed to describe a line strip.
   */
  static polyline(vertices, indices) {
    const shape = new Polyline(vertices, indices);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a triangle mesh shape.
   *
   * @param vertices - The coordinates of the triangle mesh's vertices.
   * @param indices - The indices of the triangle mesh's triangles.
   */
  static trimesh(vertices, indices) {
    const shape = new TriMesh(vertices, indices);
    return new _ColliderDesc(shape);
  }
  // #if DIM3
  /**
   * Creates a new collider descriptor with a cuboid shape.
   *
   * @param hx - The half-width of the rectangle along its local `x` axis.
   * @param hy - The half-width of the rectangle along its local `y` axis.
   * @param hz - The half-width of the rectangle along its local `z` axis.
   */
  static cuboid(hx, hy, hz) {
    const shape = new Cuboid(hx, hy, hz);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a rectangular shape with round borders.
   *
   * @param hx - The half-width of the rectangle along its local `x` axis.
   * @param hy - The half-width of the rectangle along its local `y` axis.
   * @param hz - The half-width of the rectangle along its local `z` axis.
   * @param borderRadius - The radius of the cuboid's borders.
   */
  static roundCuboid(hx, hy, hz, borderRadius) {
    const shape = new RoundCuboid(hx, hy, hz, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a heightfield shape.
   *
   * @param nrows − The number of rows in the heights matrix.
   * @param ncols - The number of columns in the heights matrix.
   * @param heights - The heights of the heightfield along its local `y` axis,
   *                  provided as a matrix stored in column-major order.
   * @param scale - The scale factor applied to the heightfield.
   */
  static heightfield(nrows, ncols, heights, scale) {
    const shape = new Heightfield(nrows, ncols, heights, scale);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cylinder shape.
   *
   * @param halfHeight - The half-height of the cylinder, along the `y` axis.
   * @param radius - The radius of the cylinder basis.
   */
  static cylinder(halfHeight, radius) {
    const shape = new Cylinder(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cylinder shape with rounded corners.
   *
   * @param halfHeight - The half-height of the cylinder, along the `y` axis.
   * @param radius - The radius of the cylinder basis.
   * @param borderRadius - The radius of the cylinder's rounded edges and vertices.
   */
  static roundCylinder(halfHeight, radius, borderRadius) {
    const shape = new RoundCylinder(halfHeight, radius, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cone shape.
   *
   * @param halfHeight - The half-height of the cone, along the `y` axis.
   * @param radius - The radius of the cone basis.
   */
  static cone(halfHeight, radius) {
    const shape = new Cone(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a cone shape with rounded corners.
   *
   * @param halfHeight - The half-height of the cone, along the `y` axis.
   * @param radius - The radius of the cone basis.
   * @param borderRadius - The radius of the cone's rounded edges and vertices.
   */
  static roundCone(halfHeight, radius, borderRadius) {
    const shape = new RoundCone(halfHeight, radius, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Computes the convex-hull of the given points and use the resulting
   * convex polyhedron as the shape for this new collider descriptor.
   *
   * @param points - The point that will be used to compute the convex-hull.
   */
  static convexHull(points) {
    const shape = new ConvexPolyhedron(points, null);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor that uses the given set of points assumed
   * to form a convex polyline (no convex-hull computation will be done).
   *
   * @param vertices - The vertices of the convex polyline.
   */
  static convexMesh(vertices, indices) {
    const shape = new ConvexPolyhedron(vertices, indices);
    return new _ColliderDesc(shape);
  }
  /**
   * Computes the convex-hull of the given points and use the resulting
   * convex polyhedron as the shape for this new collider descriptor. A
   * border is added to that convex polyhedron to give it round corners.
   *
   * @param points - The point that will be used to compute the convex-hull.
   * @param borderRadius - The radius of the round border added to the convex polyhedron.
   */
  static roundConvexHull(points, borderRadius) {
    const shape = new RoundConvexPolyhedron(points, null, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor that uses the given set of points assumed
   * to form a round convex polyline (no convex-hull computation will be done).
   *
   * @param vertices - The vertices of the convex polyline.
   * @param borderRadius - The radius of the round border added to the convex polyline.
   */
  static roundConvexMesh(vertices, indices, borderRadius) {
    const shape = new RoundConvexPolyhedron(vertices, indices, borderRadius);
    return new _ColliderDesc(shape);
  }
  // #endif
  // #if DIM3
  /**
   * Sets the position of the collider to be created relative to the rigid-body it is attached to.
   */
  setTranslation(x, y, z) {
    if (typeof x != "number" || typeof y != "number" || typeof z != "number")
      throw TypeError("The translation components must be numbers.");
    this.translation = { x, y, z };
    return this;
  }
  // #endif
  /**
   * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
   *
   * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
   */
  setRotation(rot) {
    RotationOps.copy(this.rotation, rot);
    return this;
  }
  /**
   * Sets whether or not the collider being created is a sensor.
   *
   * A sensor collider does not take part of the physics simulation, but generates
   * proximity events.
   *
   * @param sensor - Set to `true` of the collider built is to be a sensor.
   */
  setSensor(sensor) {
    this.isSensor = sensor;
    return this;
  }
  /**
   * Sets whether the created collider will be enabled or disabled.
   * @param enabled − If set to `false` the collider will be disabled at creation.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }
  /**
   * Sets the density of the collider being built.
   *
   * The mass and angular inertia tensor will be computed automatically based on this density and the collider’s shape.
   *
   * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
   *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
   */
  setDensity(density) {
    this.massPropsMode = MassPropsMode.Density;
    this.density = density;
    return this;
  }
  /**
   * Sets the mass of the collider being built.
   *
   * The angular inertia tensor will be computed automatically based on this mass and the collider’s shape.
   *
   * @param mass - The mass to set, must be greater or equal to 0.
   */
  setMass(mass) {
    this.massPropsMode = MassPropsMode.Mass;
    this.mass = mass;
    return this;
  }
  // #if DIM3
  /**
   * Sets the mass properties of the collider being built.
   *
   * This replaces the mass-properties automatically computed from the collider's density and shape.
   * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
   *
   * @param mass − The mass of the collider to create.
   * @param centerOfMass − The center-of-mass of the collider to create.
   * @param principalAngularInertia − The initial principal angular inertia of the collider to create.
   *                                  These are the eigenvalues of the angular inertia matrix.
   * @param angularInertiaLocalFrame − The initial local angular inertia frame of the collider to create.
   *                                   These are the eigenvectors of the angular inertia matrix.
   */
  setMassProperties(mass, centerOfMass, principalAngularInertia, angularInertiaLocalFrame) {
    this.massPropsMode = MassPropsMode.MassProps;
    this.mass = mass;
    VectorOps.copy(this.centerOfMass, centerOfMass);
    VectorOps.copy(this.principalAngularInertia, principalAngularInertia);
    RotationOps.copy(this.angularInertiaLocalFrame, angularInertiaLocalFrame);
    return this;
  }
  // #endif
  /**
   * Sets the restitution coefficient of the collider to be created.
   *
   * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
   *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
   *                   constraints solver).
   */
  setRestitution(restitution) {
    this.restitution = restitution;
    return this;
  }
  /**
   * Sets the friction coefficient of the collider to be created.
   *
   * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
   *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
   *                   being built.
   */
  setFriction(friction) {
    this.friction = friction;
    return this;
  }
  /**
   * Sets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setFrictionCombineRule(rule) {
    this.frictionCombineRule = rule;
    return this;
  }
  /**
   * Sets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setRestitutionCombineRule(rule) {
    this.restitutionCombineRule = rule;
    return this;
  }
  /**
   * Sets the collision groups used by this collider.
   *
   * Two colliders will interact iff. their collision groups are compatible.
   * See the documentation of `InteractionGroups` for details on teh used bit pattern.
   *
   * @param groups - The collision groups used for the collider being built.
   */
  setCollisionGroups(groups) {
    this.collisionGroups = groups;
    return this;
  }
  /**
   * Sets the solver groups used by this collider.
   *
   * Forces between two colliders in contact will be computed iff their solver
   * groups are compatible.
   * See the documentation of `InteractionGroups` for details on the used bit pattern.
   *
   * @param groups - The solver groups used for the collider being built.
   */
  setSolverGroups(groups) {
    this.solverGroups = groups;
    return this;
  }
  /**
   * Set the physics hooks active for this collider.
   *
   * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
   *
   * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveHooks(activeHooks) {
    this.activeHooks = activeHooks;
    return this;
  }
  /**
   * Set the events active for this collider.
   *
   * Use this to enable contact and/or intersection event reporting for this collider.
   *
   * @param activeEvents - The events active for contact/intersection pairs involving this collider.
   */
  setActiveEvents(activeEvents) {
    this.activeEvents = activeEvents;
    return this;
  }
  /**
   * Set the collision types active for this collider.
   *
   * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveCollisionTypes(activeCollisionTypes) {
    this.activeCollisionTypes = activeCollisionTypes;
    return this;
  }
  /**
   * Sets the total force magnitude beyond which a contact force event can be emitted.
   *
   * @param threshold - The force threshold to set.
   */
  setContactForceEventThreshold(threshold) {
    this.contactForceEventThreshold = threshold;
    return this;
  }
};

// node_modules/@dimforge/rapier3d/geometry/collider_set.js
var ColliderSet = class {
  constructor(raw) {
    this.raw = raw || new RawColliderSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachColliderHandle((handle) => {
        this.map.set(handle, new Collider(this, handle, null));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this collider set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /** @internal */
  castClosure(f) {
    return (handle) => {
      if (!!f) {
        return f(this.get(handle));
      } else {
        return void 0;
      }
    };
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    this.map.forEach((collider) => collider.finalizeDeserialization(bodies));
  }
  /**
   * Creates a new collider and return its integer handle.
   *
   * @param bodies - The set of bodies where the collider's parent can be found.
   * @param desc - The collider's description.
   * @param parentHandle - The integer handle of the rigid-body this collider is attached to.
   */
  createCollider(bodies, desc, parentHandle) {
    let hasParent = parentHandle != void 0 && parentHandle != null;
    if (hasParent && isNaN(parentHandle))
      throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let rawShape = desc.shape.intoRaw();
    let rawTra = VectorOps.intoRaw(desc.translation);
    let rawRot = RotationOps.intoRaw(desc.rotation);
    let rawCom = VectorOps.intoRaw(desc.centerOfMass);
    let rawPrincipalInertia = VectorOps.intoRaw(desc.principalAngularInertia);
    let rawInertiaFrame = RotationOps.intoRaw(desc.angularInertiaLocalFrame);
    let handle = this.raw.createCollider(
      desc.enabled,
      rawShape,
      rawTra,
      rawRot,
      desc.massPropsMode,
      desc.mass,
      rawCom,
      // #if DIM3
      rawPrincipalInertia,
      rawInertiaFrame,
      // #endif
      desc.density,
      desc.friction,
      desc.restitution,
      desc.frictionCombineRule,
      desc.restitutionCombineRule,
      desc.isSensor,
      desc.collisionGroups,
      desc.solverGroups,
      desc.activeCollisionTypes,
      desc.activeHooks,
      desc.activeEvents,
      desc.contactForceEventThreshold,
      hasParent,
      hasParent ? parentHandle : 0,
      bodies.raw
    );
    rawShape.free();
    rawTra.free();
    rawRot.free();
    rawCom.free();
    rawPrincipalInertia.free();
    rawInertiaFrame.free();
    let parent = hasParent ? bodies.get(parentHandle) : null;
    let collider = new Collider(this, handle, parent, desc.shape);
    this.map.set(handle, collider);
    return collider;
  }
  /**
   * Remove a collider from this set.
   *
   * @param handle - The integer handle of the collider to remove.
   * @param bodies - The set of rigid-body containing the rigid-body the collider is attached to.
   * @param wakeUp - If `true`, the rigid-body the removed collider is attached to will be woken-up automatically.
   */
  remove(handle, islands, bodies, wakeUp) {
    this.raw.remove(handle, islands.raw, bodies.raw, wakeUp);
    this.unmap(handle);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * Gets the rigid-body with the given handle.
   *
   * @param handle - The handle of the rigid-body to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * The number of colliders on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a collider with the given handle?
   *
   * @param handle - The collider handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Applies the given closure to each collider contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Gets all colliders in the list.
   *
   * @returns collider list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// node_modules/@dimforge/rapier3d/pipeline/physics_pipeline.js
var PhysicsPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawPhysicsPipeline();
  }
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints, ccdSolver, eventQueue, hooks) {
    let rawG = VectorOps.intoRaw(gravity);
    if (!!eventQueue) {
      this.raw.stepWithEvents(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw, eventQueue.raw, hooks, !!hooks ? hooks.filterContactPair : null, !!hooks ? hooks.filterIntersectionPair : null);
    } else {
      this.raw.step(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw);
    }
    rawG.free();
  }
};

// node_modules/@dimforge/rapier3d/pipeline/query_pipeline.js
var QueryFilterFlags;
(function(QueryFilterFlags2) {
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_FIXED"] = 1] = "EXCLUDE_FIXED";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_KINEMATIC"] = 2] = "EXCLUDE_KINEMATIC";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_DYNAMIC"] = 4] = "EXCLUDE_DYNAMIC";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_SENSORS"] = 8] = "EXCLUDE_SENSORS";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_SOLIDS"] = 16] = "EXCLUDE_SOLIDS";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_DYNAMIC"] = 3] = "ONLY_DYNAMIC";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_KINEMATIC"] = 5] = "ONLY_KINEMATIC";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_FIXED"] = 6] = "ONLY_FIXED";
})(QueryFilterFlags || (QueryFilterFlags = {}));
var QueryPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawQueryPipeline();
  }
  /**
   * Release the WASM memory occupied by this query pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Updates the acceleration structure of the query pipeline.
   * @param bodies - The set of rigid-bodies taking part in this pipeline.
   * @param colliders - The set of colliders taking part in this pipeline.
   */
  update(bodies, colliders) {
    this.raw.update(bodies.raw, colliders.raw);
  }
  /**
   * Find the closest intersection between a ray and a set of collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param filter - The callback to filter out which collider will be hit.
   */
  castRay(bodies, colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayColliderToi.fromRaw(colliders, this.raw.castRay(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Find the closest intersection between a ray and a set of collider.
   *
   * This also computes the normal at the hit point.
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   */
  castRayAndGetNormal(bodies, colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayColliderIntersection.fromRaw(colliders, this.raw.castRayAndGetNormal(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Cast a ray and collects all the intersections between a ray and the scene.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
   *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
   */
  intersectionsWithRay(bodies, colliders, ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let rawCallback = (rawInter) => {
      return callback(RayColliderIntersection.fromRaw(colliders, rawInter));
    };
    this.raw.intersectionsWithRay(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, rawCallback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawOrig.free();
    rawDir.free();
  }
  /**
   * Gets the handle of up to one collider intersecting the given shape.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The position of the shape used for the intersection test.
   * @param shapeRot - The orientation of the shape used for the intersection test.
   * @param shape - The shape used for the intersection test.
   * @param groups - The bit groups and filter associated to the ray, in order to only
   *   hit the colliders with collision groups compatible with the ray's group.
   */
  intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawShape = shape.intoRaw();
    let result = this.raw.intersectionWithShape(bodies.raw, colliders.raw, rawPos, rawRot, rawShape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPos.free();
    rawRot.free();
    rawShape.free();
    return result;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPoint(bodies, colliders, point, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointColliderProjection.fromRaw(colliders, this.raw.projectPoint(bodies.raw, colliders.raw, rawPoint, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPoint.free();
    return result;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point to project.
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPointAndGetFeature(bodies, colliders, point, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointColliderProjection.fromRaw(colliders, this.raw.projectPointAndGetFeature(bodies.raw, colliders.raw, rawPoint, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPoint.free();
    return result;
  }
  /**
   * Find all the colliders containing the given point.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point used for the containment test.
   * @param groups - The bit groups and filter associated to the point to test, in order to only
   *   test on colliders with collision groups compatible with the ray's group.
   * @param callback - A function called with the handles of each collider with a shape
   *   containing the `point`.
   */
  intersectionsWithPoint(bodies, colliders, point, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    this.raw.intersectionsWithPoint(bodies.raw, colliders.raw, rawPoint, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPoint.free();
  }
  /**
   * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
   * This is similar to ray-casting except that we are casting a whole shape instead of
   * just a point (the ray origin).
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The initial position of the shape to cast.
   * @param shapeRot - The initial rotation of the shape to cast.
   * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
   * @param shape - The shape to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @param groups - The bit groups and filter associated to the shape to cast, in order to only
   *   test on colliders with collision groups compatible with this group.
   */
  castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawVel = VectorOps.intoRaw(shapeVel);
    let rawShape = shape.intoRaw();
    let result = ShapeColliderTOI.fromRaw(colliders, this.raw.castShape(bodies.raw, colliders.raw, rawPos, rawRot, rawVel, rawShape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPos.free();
    rawRot.free();
    rawVel.free();
    rawShape.free();
    return result;
  }
  /**
   * Retrieve all the colliders intersecting the given shape.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The position of the shape to test.
   * @param shapeRot - The orientation of the shape to test.
   * @param shape - The shape to test.
   * @param groups - The bit groups and filter associated to the shape to test, in order to only
   *   test on colliders with collision groups compatible with this group.
   * @param callback - A function called with the handles of each collider intersecting the `shape`.
   */
  intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawShape = shape.intoRaw();
    this.raw.intersectionsWithShape(bodies.raw, colliders.raw, rawPos, rawRot, rawShape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPos.free();
    rawRot.free();
    rawShape.free();
  }
  /**
   * Finds the handles of all the colliders with an AABB intersecting the given AABB.
   *
   * @param aabbCenter - The center of the AABB to test.
   * @param aabbHalfExtents - The half-extents of the AABB to test.
   * @param callback - The callback that will be called with the handles of all the colliders
   *                   currently intersecting the given AABB.
   */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    let rawCenter = VectorOps.intoRaw(aabbCenter);
    let rawHalfExtents = VectorOps.intoRaw(aabbHalfExtents);
    this.raw.collidersWithAabbIntersectingAabb(rawCenter, rawHalfExtents, callback);
    rawCenter.free();
    rawHalfExtents.free();
  }
};

// node_modules/@dimforge/rapier3d/pipeline/serialization_pipeline.js
var SerializationPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawSerializationPipeline();
  }
  /**
   * Release the WASM memory occupied by this serialization pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Serialize a complete physics state into a single byte array.
   * @param gravity - The current gravity affecting the simulation.
   * @param integrationParameters - The integration parameters of the simulation.
   * @param broadPhase - The broad-phase of the simulation.
   * @param narrowPhase - The narrow-phase of the simulation.
   * @param bodies - The rigid-bodies taking part into the simulation.
   * @param colliders - The colliders taking part into the simulation.
   * @param impulseJoints - The impulse joints taking part into the simulation.
   * @param multibodyJoints - The multibody joints taking part into the simulation.
   */
  serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints) {
    let rawGra = VectorOps.intoRaw(gravity);
    const res = this.raw.serializeAll(rawGra, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
    rawGra.free();
    return res;
  }
  /**
   * Deserialize the complete physics state from a single byte array.
   *
   * @param data - The byte array to deserialize.
   */
  deserializeAll(data) {
    return World.fromRaw(this.raw.deserializeAll(data));
  }
};

// node_modules/@dimforge/rapier3d/pipeline/debug_render_pipeline.js
var DebugRenderBuffers = class {
  constructor(vertices, colors) {
    this.vertices = vertices;
    this.colors = colors;
  }
};
var DebugRenderPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawDebugRenderPipeline();
  }
  /**
   * Release the WASM memory occupied by this serialization pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    this.vertices = void 0;
    this.colors = void 0;
  }
  render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
    this.raw.render(bodies.raw, colliders.raw, impulse_joints.raw, multibody_joints.raw, narrow_phase.raw);
    this.vertices = this.raw.vertices();
    this.colors = this.raw.colors();
  }
};

// node_modules/@dimforge/rapier3d/control/character_controller.js
var CharacterCollision = class {
};
var KinematicCharacterController = class {
  constructor(offset, params, bodies, colliders, queries) {
    this.params = params;
    this.bodies = bodies;
    this.colliders = colliders;
    this.queries = queries;
    this.raw = new RawKinematicCharacterController(offset);
    this.rawCharacterCollision = new RawCharacterCollision();
    this._applyImpulsesToDynamicBodies = false;
    this._characterMass = null;
  }
  /** @internal */
  free() {
    if (!!this.raw) {
      this.raw.free();
      this.rawCharacterCollision.free();
    }
    this.raw = void 0;
    this.rawCharacterCollision = void 0;
  }
  /**
   * The direction that goes "up". Used to determine where the floor is, and the floor’s angle.
   */
  up() {
    return this.raw.up();
  }
  /**
   * Sets the direction that goes "up". Used to determine where the floor is, and the floor’s angle.
   */
  setUp(vector) {
    let rawVect = VectorOps.intoRaw(vector);
    return this.raw.setUp(rawVect);
    rawVect.free();
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(enabled) {
    this._applyImpulsesToDynamicBodies = enabled;
  }
  /**
   * Returns the custom value of the character mass, if it was set by `this.setCharacterMass`.
   */
  characterMass() {
    return this._characterMass;
  }
  /**
   * Set the mass of the character to be used for impulse resolution if `self.applyImpulsesToDynamicBodies`
   * is set to `true`.
   *
   * If no character mass is set explicitly (or if it is set to `null`) it is automatically assumed to be equal
   * to the mass of the rigid-body the character collider is attached to; or equal to 0 if the character collider
   * isn’t attached to any rigid-body.
   *
   * @param mass - The mass to set.
   */
  setCharacterMass(mass) {
    this._characterMass = mass;
  }
  /**
   * A small gap to preserve between the character and its surroundings.
   *
   * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
   * (must not be zero) to improve numerical stability of the character controller.
   */
  offset() {
    return this.raw.offset();
  }
  /**
   * Sets a small gap to preserve between the character and its surroundings.
   *
   * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
   * (must not be zero) to improve numerical stability of the character controller.
   */
  setOffset(value) {
    this.raw.setOffset(value);
  }
  /**
   * Is sliding against obstacles enabled?
   */
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  /**
   * Enable or disable sliding against obstacles.
   */
  setSlideEnabled(enabled) {
    this.raw.setSlideEnabled(enabled);
  }
  /**
   * The maximum step height a character can automatically step over.
   */
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  /**
   * The minimum width of free space that must be available after stepping on a stair.
   */
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  /**
   * Can the character automatically step over dynamic bodies too?
   */
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  /**
   * Is automatically stepping over small objects enabled?
   */
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  /**
   * Enabled automatically stepping over small objects.
   *
   * @param maxHeight - The maximum step height a character can automatically step over.
   * @param minWidth - The minimum width of free space that must be available after stepping on a stair.
   * @param includeDynamicBodies - Can the character automatically step over dynamic bodies too?
   */
  enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
    this.raw.enableAutostep(maxHeight, minWidth, includeDynamicBodies);
  }
  /**
   * Disable automatically stepping over small objects.
   */
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  /**
   * The maximum angle (radians) between the floor’s normal and the `up` vector that the
   * character is able to climb.
   */
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  /**
   * Sets the maximum angle (radians) between the floor’s normal and the `up` vector that the
   * character is able to climb.
   */
  setMaxSlopeClimbAngle(angle) {
    this.raw.setMaxSlopeClimbAngle(angle);
  }
  /**
   * The minimum angle (radians) between the floor’s normal and the `up` vector before the
   * character starts to slide down automatically.
   */
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  /**
   * Sets the minimum angle (radians) between the floor’s normal and the `up` vector before the
   * character starts to slide down automatically.
   */
  setMinSlopeSlideAngle(angle) {
    this.raw.setMinSlopeSlideAngle(angle);
  }
  /**
   * If snap-to-ground is enabled, should the character be automatically snapped to the ground if
   * the distance between the ground and its feet are smaller than the specified threshold?
   */
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  /**
   * Enables automatically snapping the character to the ground if the distance between
   * the ground and its feet are smaller than the specified threshold.
   */
  enableSnapToGround(distance) {
    this.raw.enableSnapToGround(distance);
  }
  /**
   * Disables automatically snapping the character to the ground.
   */
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  /**
   * Is automatically snapping the character to the ground enabled?
   */
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  /**
   * Computes the movement the given collider is able to execute after hitting and sliding on obstacles.
   *
   * @param collider - The collider to move.
   * @param desiredTranslation - The desired collider movement.
   * @param filterFlags - Flags for excluding whole subsets of colliders from the obstacles taken into account.
   * @param filterGroups - Groups for excluding colliders with incompatible collision groups from the obstacles
   *                       taken into account.
   * @param filterPredicate - Any collider for which this closure returns `false` will be excluded from the
   *                          obstacles taken into account.
   */
  computeColliderMovement(collider, desiredTranslation, filterFlags, filterGroups, filterPredicate) {
    let rawTranslation = VectorOps.intoRaw(desiredTranslation);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, collider.handle, rawTranslation, this._applyImpulsesToDynamicBodies, this._characterMass, filterFlags, filterGroups, this.colliders.castClosure(filterPredicate));
    rawTranslation.free();
  }
  /**
   * The movement computed by the last call to `this.computeColliderMovement`.
   */
  computedMovement() {
    return VectorOps.fromRaw(this.raw.computedMovement());
  }
  /**
   * The result of ground detection computed by the last call to `this.computeColliderMovement`.
   */
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  /**
   * The number of collisions against obstacles detected along the path of the last call
   * to `this.computeColliderMovement`.
   */
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  /**
   * Returns the collision against one of the obstacles detected along the path of the last
   * call to `this.computeColliderMovement`.
   *
   * @param i - The i-th collision will be returned.
   * @param out - If this argument is set, it will be filled with the collision information.
   */
  computedCollision(i, out) {
    if (!this.raw.computedCollision(i, this.rawCharacterCollision)) {
      return null;
    } else {
      let c = this.rawCharacterCollision;
      out = out !== null && out !== void 0 ? out : new CharacterCollision();
      out.translationApplied = VectorOps.fromRaw(c.translationApplied());
      out.translationRemaining = VectorOps.fromRaw(c.translationRemaining());
      out.toi = c.toi();
      out.witness1 = VectorOps.fromRaw(c.worldWitness1());
      out.witness2 = VectorOps.fromRaw(c.worldWitness2());
      out.normal1 = VectorOps.fromRaw(c.worldNormal1());
      out.normal2 = VectorOps.fromRaw(c.worldNormal2());
      out.collider = this.colliders.get(c.handle());
      return out;
    }
  }
};

// node_modules/@dimforge/rapier3d/pipeline/world.js
var World = class _World {
  constructor(gravity, rawIntegrationParameters, rawIslands, rawBroadPhase, rawNarrowPhase, rawBodies, rawColliders, rawImpulseJoints, rawMultibodyJoints, rawCCDSolver, rawQueryPipeline, rawPhysicsPipeline, rawSerializationPipeline, rawDebugRenderPipeline) {
    this.gravity = gravity;
    this.integrationParameters = new IntegrationParameters(rawIntegrationParameters);
    this.islands = new IslandManager(rawIslands);
    this.broadPhase = new BroadPhase(rawBroadPhase);
    this.narrowPhase = new NarrowPhase(rawNarrowPhase);
    this.bodies = new RigidBodySet(rawBodies);
    this.colliders = new ColliderSet(rawColliders);
    this.impulseJoints = new ImpulseJointSet(rawImpulseJoints);
    this.multibodyJoints = new MultibodyJointSet(rawMultibodyJoints);
    this.ccdSolver = new CCDSolver(rawCCDSolver);
    this.queryPipeline = new QueryPipeline(rawQueryPipeline);
    this.physicsPipeline = new PhysicsPipeline(rawPhysicsPipeline);
    this.serializationPipeline = new SerializationPipeline(rawSerializationPipeline);
    this.debugRenderPipeline = new DebugRenderPipeline(rawDebugRenderPipeline);
    this.characterControllers = /* @__PURE__ */ new Set();
    this.impulseJoints.finalizeDeserialization(this.bodies);
    this.bodies.finalizeDeserialization(this.colliders);
    this.colliders.finalizeDeserialization(this.bodies);
  }
  /**
   * Release the WASM memory occupied by this physics world.
   *
   * All the fields of this physics world will be freed as well,
   * so there is no need to call their `.free()` methods individually.
   */
  free() {
    this.integrationParameters.free();
    this.islands.free();
    this.broadPhase.free();
    this.narrowPhase.free();
    this.bodies.free();
    this.colliders.free();
    this.impulseJoints.free();
    this.multibodyJoints.free();
    this.ccdSolver.free();
    this.queryPipeline.free();
    this.physicsPipeline.free();
    this.serializationPipeline.free();
    this.debugRenderPipeline.free();
    this.characterControllers.forEach((controller) => controller.free());
    this.integrationParameters = void 0;
    this.islands = void 0;
    this.broadPhase = void 0;
    this.narrowPhase = void 0;
    this.bodies = void 0;
    this.colliders = void 0;
    this.ccdSolver = void 0;
    this.impulseJoints = void 0;
    this.multibodyJoints = void 0;
    this.queryPipeline = void 0;
    this.physicsPipeline = void 0;
    this.serializationPipeline = void 0;
    this.debugRenderPipeline = void 0;
    this.characterControllers = void 0;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    return new _World(VectorOps.fromRaw(raw.takeGravity()), raw.takeIntegrationParameters(), raw.takeIslandManager(), raw.takeBroadPhase(), raw.takeNarrowPhase(), raw.takeBodies(), raw.takeColliders(), raw.takeImpulseJoints(), raw.takeMultibodyJoints());
  }
  /**
   * Takes a snapshot of this world.
   *
   * Use `World.restoreSnapshot` to create a new physics world with a state identical to
   * the state when `.takeSnapshot()` is called.
   */
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  /**
   * Creates a new physics world from a snapshot.
   *
   * This new physics world will be an identical copy of the snapshoted physics world.
   */
  static restoreSnapshot(data) {
    let deser = new SerializationPipeline();
    return deser.deserializeAll(data);
  }
  /**
   * Computes all the lines (and their colors) needed to render the scene.
   */
  debugRender() {
    this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase);
    return new DebugRenderBuffers(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  /**
   * Advance the simulation by one time step.
   *
   * All events generated by the physics engine are ignored.
   *
   * @param EventQueue - (optional) structure responsible for collecting
   *   events generated by the physics engine.
   */
  step(eventQueue, hooks) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, eventQueue, hooks);
    this.queryPipeline.update(this.bodies, this.colliders);
  }
  /**
   * Update colliders positions after rigid-bodies moved.
   *
   * When a rigid-body moves, the positions of the colliders attached to it need to be updated. This update is
   * generally automatically done at the beginning and the end of each simulation step with World.step.
   * If the positions need to be updated without running a simulation step this method can be called manually.
   */
  propagateModifiedBodyPositionsToColliders() {
    this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
  }
  /**
   * Ensure subsequent scene queries take into account the collider positions set before this method is called.
   *
   * This does not step the physics simulation forward.
   */
  updateSceneQueries() {
    this.propagateModifiedBodyPositionsToColliders();
    this.queryPipeline.update(this.bodies, this.colliders);
  }
  /**
   * The current simulation timestep.
   */
  get timestep() {
    return this.integrationParameters.dt;
  }
  /**
   * Sets the new simulation timestep.
   *
   * The simulation timestep governs by how much the physics state of the world will
   * be integrated. A simulation timestep should:
   * - be as small as possible. Typical values evolve around 0.016 (assuming the chosen unit is milliseconds,
   * corresponds to the time between two frames of a game running at 60FPS).
   * - not vary too much during the course of the simulation. A timestep with large variations may
   * cause instabilities in the simulation.
   *
   * @param dt - The timestep length, in seconds.
   */
  set timestep(dt) {
    this.integrationParameters.dt = dt;
  }
  /**
   * The maximum velocity iterations the velocity-based force constraint solver can make.
   */
  get maxVelocityIterations() {
    return this.integrationParameters.maxVelocityIterations;
  }
  /**
   * Sets the maximum number of velocity iterations (default: 4).
   *
   * The greater this value is, the most rigid and realistic the physics simulation will be.
   * However a greater number of iterations is more computationally intensive.
   *
   * @param niter - The new maximum number of velocity iterations.
   */
  set maxVelocityIterations(niter) {
    this.integrationParameters.maxVelocityIterations = niter;
  }
  /**
   * The maximum velocity iterations the velocity-based friction constraint solver can make.
   */
  get maxVelocityFrictionIterations() {
    return this.integrationParameters.maxVelocityFrictionIterations;
  }
  /**
   * Sets the maximum number of velocity iterations for friction (default: 8).
   *
   * The greater this value is, the most realistic friction will be.
   * However a greater number of iterations is more computationally intensive.
   *
   * @param niter - The new maximum number of velocity iterations.
   */
  set maxVelocityFrictionIterations(niter) {
    this.integrationParameters.maxVelocityFrictionIterations = niter;
  }
  /**
   * The maximum velocity iterations the velocity-based constraint solver can make to attempt to remove
   * the energy introduced by constraint stabilization.
   */
  get maxStabilizationIterations() {
    return this.integrationParameters.maxStabilizationIterations;
  }
  /**
   * Sets the maximum number of velocity iterations for stabilization (default: 1).
   *
   * @param niter - The new maximum number of velocity iterations.
   */
  set maxStabilizationIterations(niter) {
    this.integrationParameters.maxStabilizationIterations = niter;
  }
  /**
   * Creates a new rigid-body from the given rigd-body descriptior.
   *
   * @param body - The description of the rigid-body to create.
   */
  createRigidBody(body) {
    return this.bodies.createRigidBody(this.colliders, body);
  }
  /**
   * Creates a new character controller.
   *
   * @param offset - The artificial gap added between the character’s chape and its environment.
   */
  createCharacterController(offset) {
    let controller = new KinematicCharacterController(offset, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    this.characterControllers.add(controller);
    return controller;
  }
  /**
   * Removes a character controller from this world.
   *
   * @param controller - The character controller to remove.
   */
  removeCharacterController(controller) {
    this.characterControllers.delete(controller);
    controller.free();
  }
  /**
   * Creates a new collider.
   *
   * @param desc - The description of the collider.
   * @param parent - The rigid-body this collider is attached to.
   */
  createCollider(desc, parent) {
    let parentHandle = parent ? parent.handle : void 0;
    return this.colliders.createCollider(this.bodies, desc, parentHandle);
  }
  /**
   * Creates a new impulse joint from the given joint descriptor.
   *
   * @param params - The description of the joint to create.
   * @param parent1 - The first rigid-body attached to this joint.
   * @param parent2 - The second rigid-body attached to this joint.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createImpulseJoint(params, parent1, parent2, wakeUp) {
    return this.impulseJoints.createJoint(this.bodies, params, parent1.handle, parent2.handle, wakeUp);
  }
  /**
   * Creates a new multibody joint from the given joint descriptor.
   *
   * @param params - The description of the joint to create.
   * @param parent1 - The first rigid-body attached to this joint.
   * @param parent2 - The second rigid-body attached to this joint.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createMultibodyJoint(params, parent1, parent2, wakeUp) {
    return this.multibodyJoints.createJoint(params, parent1.handle, parent2.handle, wakeUp);
  }
  /**
   * Retrieves a rigid-body from its handle.
   *
   * @param handle - The integer handle of the rigid-body to retrieve.
   */
  getRigidBody(handle) {
    return this.bodies.get(handle);
  }
  /**
   * Retrieves a collider from its handle.
   *
   * @param handle - The integer handle of the collider to retrieve.
   */
  getCollider(handle) {
    return this.colliders.get(handle);
  }
  /**
   * Retrieves an impulse joint from its handle.
   *
   * @param handle - The integer handle of the impulse joint to retrieve.
   */
  getImpulseJoint(handle) {
    return this.impulseJoints.get(handle);
  }
  /**
   * Retrieves an multibody joint from its handle.
   *
   * @param handle - The integer handle of the multibody joint to retrieve.
   */
  getMultibodyJoint(handle) {
    return this.multibodyJoints.get(handle);
  }
  /**
   * Removes the given rigid-body from this physics world.
   *
   * This will remove this rigid-body as well as all its attached colliders and joints.
   * Every other bodies touching or attached by joints to this rigid-body will be woken-up.
   *
   * @param body - The rigid-body to remove.
   */
  removeRigidBody(body) {
    if (this.bodies) {
      this.bodies.remove(body.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
  }
  /**
   * Removes the given collider from this physics world.
   *
   * @param collider - The collider to remove.
   * @param wakeUp - If set to `true`, the rigid-body this collider is attached to will be awaken.
   */
  removeCollider(collider, wakeUp) {
    if (this.colliders) {
      this.colliders.remove(collider.handle, this.islands, this.bodies, wakeUp);
    }
  }
  /**
   * Removes the given impulse joint from this physics world.
   *
   * @param joint - The impulse joint to remove.
   * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
   */
  removeImpulseJoint(joint, wakeUp) {
    if (this.impulseJoints) {
      this.impulseJoints.remove(joint.handle, wakeUp);
    }
  }
  /**
   * Removes the given multibody joint from this physics world.
   *
   * @param joint - The multibody joint to remove.
   * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
   */
  removeMultibodyJoint(joint, wakeUp) {
    if (this.impulseJoints) {
      this.multibodyJoints.remove(joint.handle, wakeUp);
    }
  }
  /**
   * Applies the given closure to each collider managed by this physics world.
   *
   * @param f(collider) - The function to apply to each collider managed by this physics world. Called as `f(collider)`.
   */
  forEachCollider(f) {
    this.colliders.forEach(f);
  }
  /**
   * Applies the given closure to each rigid-body managed by this physics world.
   *
   * @param f(body) - The function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.
   */
  forEachRigidBody(f) {
    this.bodies.forEach(f);
  }
  /**
   * Applies the given closure to each active rigid-body managed by this physics world.
   *
   * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
   * the physics engine in order to save computational power. A sleeping rigid-body never moves
   * unless it is moved manually by the user.
   *
   * @param f - The function to apply to each active rigid-body managed by this physics world. Called as `f(collider)`.
   */
  forEachActiveRigidBody(f) {
    this.bodies.forEachActiveRigidBody(this.islands, f);
  }
  /**
   * Find the closest intersection between a ray and the physics world.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param filter - The callback to filter out which collider will be hit.
   */
  castRay(ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find the closest intersection between a ray and the physics world.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   */
  castRayAndGetNormal(ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Cast a ray and collects all the intersections between a ray and the scene.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
   *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
   */
  intersectionsWithRay(ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Gets the handle of up to one collider intersecting the given shape.
   *
   * @param shapePos - The position of the shape used for the intersection test.
   * @param shapeRot - The orientation of the shape used for the intersection test.
   * @param shape - The shape used for the intersection test.
   * @param groups - The bit groups and filter associated to the ray, in order to only
   *   hit the colliders with collision groups compatible with the ray's group.
   */
  intersectionWithShape(shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let handle = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
    return handle != null ? this.colliders.get(handle) : null;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPoint(point, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, point, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param point - The point to project.
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPointAndGetFeature(point, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, point, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find all the colliders containing the given point.
   *
   * @param point - The point used for the containment test.
   * @param groups - The bit groups and filter associated to the point to test, in order to only
   *   test on colliders with collision groups compatible with the ray's group.
   * @param callback - A function called with the handles of each collider with a shape
   *   containing the `point`.
   */
  intersectionsWithPoint(point, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, point, this.colliders.castClosure(callback), filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
   * This is similar to ray-casting except that we are casting a whole shape instead of
   * just a point (the ray origin).
   *
   * @param shapePos - The initial position of the shape to cast.
   * @param shapeRot - The initial rotation of the shape to cast.
   * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
   * @param shape - The shape to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @param groups - The bit groups and filter associated to the shape to cast, in order to only
   *   test on colliders with collision groups compatible with this group.
   */
  castShape(shapePos, shapeRot, shapeVel, shape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Retrieve all the colliders intersecting the given shape.
   *
   * @param shapePos - The position of the shape to test.
   * @param shapeRot - The orientation of the shape to test.
   * @param shape - The shape to test.
   * @param groups - The bit groups and filter associated to the shape to test, in order to only
   *   test on colliders with collision groups compatible with this group.
   * @param callback - A function called with the handles of each collider intersecting the `shape`.
   */
  intersectionsWithShape(shapePos, shapeRot, shape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, shapePos, shapeRot, shape, this.colliders.castClosure(callback), filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Finds the handles of all the colliders with an AABB intersecting the given AABB.
   *
   * @param aabbCenter - The center of the AABB to test.
   * @param aabbHalfExtents - The half-extents of the AABB to test.
   * @param callback - The callback that will be called with the handles of all the colliders
   *                   currently intersecting the given AABB.
   */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, this.colliders.castClosure(callback));
  }
  /**
   * Enumerates all the colliders potentially in contact with the given collider.
   *
   * @param collider1 - The second collider involved in the contact.
   * @param f - Closure that will be called on each collider that is in contact with `collider1`.
   */
  contactsWith(collider1, f) {
    this.narrowPhase.contactsWith(collider1.handle, this.colliders.castClosure(f));
  }
  /**
   * Enumerates all the colliders intersecting the given colliders, assuming one of them
   * is a sensor.
   */
  intersectionsWith(collider1, f) {
    this.narrowPhase.intersectionsWith(collider1.handle, this.colliders.castClosure(f));
  }
  /**
   * Iterates through all the contact manifolds between the given pair of colliders.
   *
   * @param collider1 - The first collider involved in the contact.
   * @param collider2 - The second collider involved in the contact.
   * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
   *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
   *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
   */
  contactPair(collider1, collider2, f) {
    this.narrowPhase.contactPair(collider1.handle, collider2.handle, f);
  }
  /**
   * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
   * @param collider1 − The first collider involved in the intersection.
   * @param collider2 − The second collider involved in the intersection.
   */
  intersectionPair(collider1, collider2) {
    return this.narrowPhase.intersectionPair(collider1.handle, collider2.handle);
  }
};

// node_modules/@dimforge/rapier3d/pipeline/event_queue.js
var ActiveEvents;
(function(ActiveEvents2) {
  ActiveEvents2[ActiveEvents2["COLLISION_EVENTS"] = 1] = "COLLISION_EVENTS";
  ActiveEvents2[ActiveEvents2["CONTACT_FORCE_EVENTS"] = 2] = "CONTACT_FORCE_EVENTS";
})(ActiveEvents || (ActiveEvents = {}));
var TempContactForceEvent = class {
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * The first collider involved in the contact.
   */
  collider1() {
    return this.raw.collider1();
  }
  /**
   * The second collider involved in the contact.
   */
  collider2() {
    return this.raw.collider2();
  }
  /**
   * The sum of all the forces between the two colliders.
   */
  totalForce() {
    return VectorOps.fromRaw(this.raw.total_force());
  }
  /**
   * The sum of the magnitudes of each force between the two colliders.
   *
   * Note that this is **not** the same as the magnitude of `self.total_force`.
   * Here we are summing the magnitude of all the forces, instead of taking
   * the magnitude of their sum.
   */
  totalForceMagnitude() {
    return this.raw.total_force_magnitude();
  }
  /**
   * The world-space (unit) direction of the force with strongest magnitude.
   */
  maxForceDirection() {
    return VectorOps.fromRaw(this.raw.max_force_direction());
  }
  /**
   * The magnitude of the largest force at a contact point of this contact pair.
   */
  maxForceMagnitude() {
    return this.raw.max_force_magnitude();
  }
};
var EventQueue = class {
  /**
   * Creates a new event collector.
   *
   * @param autoDrain -setting this to `true` is strongly recommended. If true, the collector will
   * be automatically drained before each `world.step(collector)`. If false, the collector will
   * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
   * RAM if no drain is performed.
   */
  constructor(autoDrain, raw) {
    this.raw = raw || new RawEventQueue(autoDrain);
  }
  /**
   * Release the WASM memory occupied by this event-queue.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Applies the given javascript closure on each collision event of this collector, then clear
   * the internal collision event buffer.
   *
   * @param f - JavaScript closure applied to each collision event. The
   * closure must take three arguments: two integers representing the handles of the colliders
   * involved in the collision, and a boolean indicating if the collision started (true) or stopped
   * (false).
   */
  drainCollisionEvents(f) {
    this.raw.drainCollisionEvents(f);
  }
  /**
   * Applies the given javascript closure on each contact force event of this collector, then clear
   * the internal collision event buffer.
   *
   * @param f - JavaScript closure applied to each collision event. The
   *            closure must take one `TempContactForceEvent` argument.
   */
  drainContactForceEvents(f) {
    let event = new TempContactForceEvent();
    this.raw.drainContactForceEvents((raw) => {
      event.raw = raw;
      f(event);
      event.free();
    });
  }
  /**
   * Removes all events contained by this collector
   */
  clear() {
    this.raw.clear();
  }
};

// node_modules/@dimforge/rapier3d/pipeline/physics_hooks.js
var ActiveHooks;
(function(ActiveHooks2) {
  ActiveHooks2[ActiveHooks2["FILTER_CONTACT_PAIRS"] = 1] = "FILTER_CONTACT_PAIRS";
  ActiveHooks2[ActiveHooks2["FILTER_INTERSECTION_PAIRS"] = 2] = "FILTER_INTERSECTION_PAIRS";
})(ActiveHooks || (ActiveHooks = {}));
var SolverFlags;
(function(SolverFlags2) {
  SolverFlags2[SolverFlags2["EMPTY"] = 0] = "EMPTY";
  SolverFlags2[SolverFlags2["COMPUTE_IMPULSE"] = 1] = "COMPUTE_IMPULSE";
})(SolverFlags || (SolverFlags = {}));

// node_modules/@dimforge/rapier3d/exports.js
function version3() {
  return version2();
}

// node_modules/@dimforge/rapier3d/rapier.js
var rapier_default = exports_exports;
export {
  ActiveCollisionTypes,
  ActiveEvents,
  ActiveHooks,
  Ball,
  BroadPhase,
  CCDSolver,
  Capsule,
  CharacterCollision,
  CoefficientCombineRule,
  Collider,
  ColliderDesc,
  ColliderSet,
  Cone,
  ConvexPolyhedron,
  Cuboid,
  Cylinder,
  DebugRenderBuffers,
  DebugRenderPipeline,
  EventQueue,
  FeatureType,
  FixedImpulseJoint,
  FixedMultibodyJoint,
  HalfSpace,
  Heightfield,
  ImpulseJoint,
  ImpulseJointSet,
  IntegrationParameters,
  IslandManager,
  JointData,
  JointType,
  KinematicCharacterController,
  MassPropsMode,
  MotorModel,
  MultibodyJoint,
  MultibodyJointSet,
  NarrowPhase,
  PhysicsPipeline,
  PointColliderProjection,
  PointProjection,
  Polyline,
  PrismaticImpulseJoint,
  PrismaticMultibodyJoint,
  Quaternion,
  QueryFilterFlags,
  QueryPipeline,
  Ray,
  RayColliderIntersection,
  RayColliderToi,
  RayIntersection,
  RevoluteImpulseJoint,
  RevoluteMultibodyJoint,
  RigidBody,
  RigidBodyDesc,
  RigidBodySet,
  RigidBodyType,
  RotationOps,
  RoundCone,
  RoundConvexPolyhedron,
  RoundCuboid,
  RoundCylinder,
  RoundTriangle,
  SdpMatrix3,
  SdpMatrix3Ops,
  Segment,
  SerializationPipeline,
  Shape,
  ShapeColliderTOI,
  ShapeContact,
  ShapeTOI,
  ShapeType,
  SolverFlags,
  SphericalImpulseJoint,
  SphericalMultibodyJoint,
  TempContactForceEvent,
  TempContactManifold,
  TriMesh,
  Triangle,
  UnitImpulseJoint,
  UnitMultibodyJoint,
  Vector3,
  VectorOps,
  World,
  rapier_default as default,
  version3 as version
};
//# sourceMappingURL=@dimforge_rapier3d.js.map
