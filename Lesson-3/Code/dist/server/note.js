"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var phaethon_1 = require("phaethon");
var mongodb_1 = require("mongodb");
var user_1 = require("./user");
var note_1 = require("../shared/note");
var database = require("./database");
function list(request, session) {
    return __awaiter(this, void 0, void 0, function () {
        var user, results, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.getUserOrError(session)];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, database.find(database.notes, { userId: user._id })];
                case 2:
                    results = _a.sent();
                    items = results.map(function (note) { return ({
                        id: note._id.toHexString(),
                        title: note_1.getTitle(note.content)
                    }); });
                    return [2 /*return*/, { items: items }];
            }
        });
    });
}
exports.list = list;
function find(request, session) {
    return __awaiter(this, void 0, void 0, function () {
        var user, id, notes, note;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.getUserOrError(session)];
                case 1:
                    user = _a.sent();
                    id = phaethon_1.validate.expect(request.query["id"], phaethon_1.validate.isString);
                    return [4 /*yield*/, database.find(database.notes, { _id: new mongodb_1.ObjectID(id), userId: user._id })];
                case 2:
                    notes = _a.sent();
                    if (notes.length === 0) {
                        throw new phaethon_1.ServerError(phaethon_1.StatusCode.ClientErrorNotFound);
                    }
                    note = notes[0];
                    return [2 /*return*/, {
                            id: note._id.toHexString(),
                            content: note.content
                        }];
            }
        });
    });
}
exports.find = find;
function insert(request, session) {
    return __awaiter(this, void 0, void 0, function () {
        var user, content, note;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.getUserOrError(session)];
                case 1:
                    user = _a.sent();
                    content = phaethon_1.validate.expect(request.query["content"], phaethon_1.validate.isString);
                    note = {
                        _id: undefined,
                        userId: user._id,
                        content: content
                    };
                    return [4 /*yield*/, database.insert(database.notes, note)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, {
                            id: note._id.toHexString(),
                            content: note.content
                        }];
            }
        });
    });
}
exports.insert = insert;
function update(request, session) {
    return __awaiter(this, void 0, void 0, function () {
        var user, id, content, note;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.getUserOrError(session)];
                case 1:
                    user = _a.sent();
                    id = phaethon_1.validate.expect(request.query["id"], phaethon_1.validate.isString);
                    content = phaethon_1.validate.expect(request.query["content"], phaethon_1.validate.isString);
                    note = {
                        _id: new mongodb_1.ObjectID(id),
                        userId: user._id,
                        content: content
                    };
                    return [4 /*yield*/, database.update(database.notes, { _id: new mongodb_1.ObjectID(id), userId: user._id }, note)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, {
                            id: note._id.toHexString(),
                            content: note.content
                        }];
            }
        });
    });
}
exports.update = update;
function remove(request, session) {
    return __awaiter(this, void 0, void 0, function () {
        var user, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.getUserOrError(session)];
                case 1:
                    user = _a.sent();
                    id = phaethon_1.validate.expect(request.query["id"], phaethon_1.validate.isString);
                    return [4 /*yield*/, database.remove(database.notes, { _id: new mongodb_1.ObjectID(id), userId: user._id })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, {}];
            }
        });
    });
}
exports.remove = remove;

//# sourceMappingURL=note.js.map
