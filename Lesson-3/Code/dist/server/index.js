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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var phaethon_1 = require("phaethon");
var user_1 = require("./user");
var note = require("./note");
var server = new phaethon_1.Server();
var sessionStore = new phaethon_1.SessionStore("session-id", function () { return ({ userId: undefined }); }, 60 * 60 * 24, 1024);
server.listener = sessionStore.wrapListener(function (request, session) { return __awaiter(_this, void 0, void 0, function () {
    var response, serverResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, handleRequest(request, session.data)];
            case 1:
                response = _a.sent();
                if (response instanceof phaethon_1.ServerResponse) {
                    return [2 /*return*/, response];
                }
                else {
                    serverResponse = new phaethon_1.ServerResponse(JSON.stringify(response));
                    return [2 /*return*/, serverResponse];
                }
                return [2 /*return*/];
        }
    });
}); });
server.listenHttp(8800);
function handleRequest(request, session) {
    return __awaiter(this, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            path = request.path.toLowerCase();
            if (path === "/api/login")
                return [2 /*return*/, user_1.login(request, session)];
            if (path === "/api/logout")
                return [2 /*return*/, user_1.logout(request, session)];
            if (path === "/api/note/list")
                return [2 /*return*/, note.list(request, session)];
            if (path === "/api/note/insert")
                return [2 /*return*/, note.insert(request, session)];
            if (path === "/api/note/update")
                return [2 /*return*/, note.update(request, session)];
            if (path === "/api/note/remove")
                return [2 /*return*/, note.remove(request, session)];
            if (path === "/api/note/find")
                return [2 /*return*/, note.find(request, session)];
            throw new phaethon_1.ServerError(phaethon_1.StatusCode.ClientErrorNotFound);
        });
    });
}

//# sourceMappingURL=index.js.map
