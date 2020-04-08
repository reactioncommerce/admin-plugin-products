/* eslint-disable react/no-multi-comp */
import React from "react";
import { Reaction, registerPlugin, App } from "@reactioncommerce/admin-core";
import config from "./config";
import Products from "../package/src"

// Register plugin
registerPlugin(Products);

// Configure and "start" the Reaction webapp
Reaction({
  AppComponent: App,
  title: "Reaction Products",
  config
});
