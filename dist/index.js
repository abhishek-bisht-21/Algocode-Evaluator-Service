"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const serverConfig_1 = __importDefault(require("./config/serverConfig"));
const runPythonDocker_1 = __importDefault(require("./containers/runPythonDocker"));
const routes_1 = __importDefault(require("./routes"));
const SampleWorker_1 = __importDefault(require("./workers/SampleWorker"));
const bullBoardConfig_1 = __importDefault(require("./config/bullBoardConfig"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.text());
app.use('/api', routes_1.default);
app.use('/ui', bullBoardConfig_1.default.getRouter());
app.listen(serverConfig_1.default.PORT, () => {
    console.log(`Server started at *:${serverConfig_1.default.PORT}`);
    console.log(`BullBoard dashboard running on: http://localhost:${serverConfig_1.default.PORT}/ui`);
    (0, SampleWorker_1.default)('SampleQueue');
    const code = `x = input()
y = input()
print("value of x is", x)
print("value of y is", y)
`;
    const inputCase = `100
200
`;
    (0, runPythonDocker_1.default)(code, inputCase);
});
