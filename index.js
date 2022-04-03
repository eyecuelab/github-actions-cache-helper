const core = require("@actions/core");

core.exportVariable("ACTIONS_CACHE_URL", process.env.ACTIONS_CACHE_URL);
core.exportVariable("ACTIONS_RUNTIME_TOKEN", process.env.ACTIONS_RUNTIME_TOKEN);
core.setSecret(process.env.ACTIONS_RUNTIME_TOKEN);
