import { expect } from "chai";
import sinon from "sinon";
import {
  setConfig,
  setLoadingConfig,
  setVueVersion,
} from "../../src/hooks/useGlobalConfig";
import globalConfig, {
  VueVersionEnum,
  normalLoadingConfig,
  vueConfig,
} from "../../src/constants/globalConfig";

describe("Global Config Hooks", () => {
  let defaultGlobalConfig;
  let defaultNormalLoadingConfig;
  let defaultVueConfig;

  beforeEach(() => {
    // Clone the original configs to restore after each test
    defaultGlobalConfig = { ...globalConfig };
    defaultNormalLoadingConfig = { ...normalLoadingConfig };
    defaultVueConfig = { ...vueConfig };
  });

  afterEach(() => {
    // Restore the original configs
    Object.assign(globalConfig, defaultGlobalConfig);
    Object.assign(normalLoadingConfig, defaultNormalLoadingConfig);
    Object.assign(vueConfig, defaultVueConfig);
  });

  describe("setConfig", () => {
    it("should merge provided config with globalConfig", () => {
      const newConfig = { barColor: "dark" };
      setConfig(newConfig);
      expect(globalConfig.barColor).to.equal("dark");
    });
  });

  describe("setLoadingConfig", () => {
    it("should merge provided config with normalLoadingConfig", () => {
      const newLoadingConfig = { loadingColor: "blue" };
      setLoadingConfig(newLoadingConfig);
      expect(normalLoadingConfig.loadingColor).to.equal("blue");
    });
  });

  describe("setVueVersion", () => {
    it("should set the Vue version and context in vueConfig", () => {
      const newVersion = "2.x";
      vueConfig.version;
      const newContext = { version: "context" };
      setVueVersion(VueVersionEnum.VUE_2, newContext);
      expect(vueConfig.version).to.equal(newVersion);
      expect(vueConfig.context).to.deep.equal(newContext);
    });
  });

  // Add more tests as needed for edge cases and error handling
});
