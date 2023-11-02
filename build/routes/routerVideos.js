"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateVideoController_1 = require("../controllers/CreateVideoController");
var GetAllVideosController_1 = require("../controllers/GetAllVideosController");
var routerVideos = (0, express_1.Router)();
routerVideos.get('/videos', new GetAllVideosController_1.GetAllVideosController().GetAllVideo);
routerVideos.post('/videos', new CreateVideoController_1.CreateVideoController().createVideo);
exports.default = routerVideos;
