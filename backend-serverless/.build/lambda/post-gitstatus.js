var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
var aws = require("aws-sdk");
var axios = require("axios");
var BaseURL = "https://api.github.com/repos";
var codepipeline = new aws.CodePipeline();
var Password = process.env.GH_ACCESS_TOKEN;
exports.handler = function (event) {
  return __awaiter(_this, void 0, void 0, function () {
    var region, pipelineName, executionId, state, result, payload;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          region = event.region;
          pipelineName = event.detail.pipeline;
          executionId = event.detail["execution-id"];
          state = transformState(event.detail.state);
          if (state === null) {
            return [2 /*return*/];
          }
          return [
            4 /*yield*/,
            this.getPipelineExecution(pipelineName, executionId),
          ];
        case 1:
          result = _a.sent();
          payload = createPayload(pipelineName, region, state);
          return [
            4 /*yield*/,
            this.postStatusToGitHub(
              result.owner,
              result.repository,
              result.sha,
              payload
            ),
          ];
        case 2:
          _a.sent();
          return [2 /*return*/, null];
      }
    });
  });
};
function transformState(state) {
  if (state === "STARTED") {
    return "pending";
  }
  if (state === "SUCCEEDED") {
    return "success";
  }
  if (state === "FAILED") {
    return "failure";
  }
  return null;
}
function createPayload(pipelineName, region, status) {
  var description;
  if (status === "pending") {
    description = "Build started";
  } else if (status === "success") {
    description = "Build succeeded";
  } else if (status === "failure") {
    description = "Build failed!";
  }
  return {
    state: status,
    target_url: buildCodePipelineUrl(pipelineName, region),
    description: description,
    context: "continuous-integration/codepipeline",
  };
}
function buildCodePipelineUrl(pipelineName, region) {
  return (
    "https://" +
    region +
    ".console.aws.amazon.com/codepipeline/home?region=" +
    region +
    "#/view/" +
    pipelineName
  );
}
exports.getPipelineExecution = function (pipelineName, executionId) {
  return __awaiter(_this, void 0, void 0, function () {
    var params, result, artifactRevision, revisionURL, sha, pattern, matches;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          params = {
            pipelineName: pipelineName,
            pipelineExecutionId: executionId,
          };
          return [
            4 /*yield*/,
            codepipeline.getPipelineExecution(params).promise(),
          ];
        case 1:
          result = _a.sent();
          artifactRevision = result.pipelineExecution.artifactRevisions[0];
          revisionURL = artifactRevision.revisionUrl;
          sha = artifactRevision.revisionId;
          pattern = /github.com\/(.+)\/(.+)\/commit\//;
          matches = pattern.exec(revisionURL);
          return [
            2 /*return*/,
            {
              owner: matches[1],
              repository: matches[2],
              sha: sha,
            },
          ];
      }
    });
  });
};
exports.postStatusToGitHub = function (owner, repository, sha, payload) {
  return __awaiter(_this, void 0, void 0, function () {
    var url, config;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          url = "/" + owner + "/" + repository + "/statuses/" + sha;
          config = {
            baseURL: BaseURL,
            headers: {
              "Content-Type": "application/json",
            },
            auth: {
              password: Password,
            },
          };
          return [4 /*yield*/, axios.post(url, payload, config)];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
};
//# sourceMappingURL=post-gitstatus.js.map
