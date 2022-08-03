// NOTE: THIS WILL BE CHANGED IN THE NEXT REVISION.
// The current version is for reference only and should not be used in production.

import * as NOCOM_AType from "@nocom_bot/nocom-atype-support";
import "@nocom_bot/types_ts_plugin_a1";

// For DRM purposes. You can check if your plugin is genuine or not, then report back to the handler.
// The handler will immediately crash the plugin if it receives non-genuine state coming from the plugin.
//
// Note: If no verification status is sent in 30s, the handler will also crash the plugin for not responding.
NOCOM_AType.verifyPlugin(true);

// Declaring an example function (funcName = value_true) that will always return true.
await NOCOM_AType.registerFuncPlugin("value_true", () => true);

// Example of calling (core) APIs...
let registeredModules = await NOCOM_AType.callAPI("core", "get_registered_modules", null);
// and then logging it to the console? Note that calling console.log or process.stdout.write do nothing.
await NOCOM_AType.log.info(registeredModules);

// Defining a command called /example_shutdown that will close the plugin if called.
await NOCOM_AType.registerCommand("example_shutdown", (language: string) => {
  return {
    args: "",
    desc: ""
  };
}, async data => {
  NOCOM_AType.exit(0, "shutdown command called");
  return {
    content: "",
    attachments: []
  }
}, []);
