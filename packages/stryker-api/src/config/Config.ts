import { LogLevel, MutationScoreThresholds, MutatorDescriptor, StrykerOptions } from '../../core';

export default class Config implements StrykerOptions {

  [customConfig: string]: any;

  files: string[];
  mutate: string[];

  logLevel: LogLevel = LogLevel.Information;
  fileLogLevel: LogLevel = LogLevel.Off;
  timeoutMS = 5000;
  timeoutFactor = 1.5;
  plugins: string[] = ['stryker-*'];
  port = 9234;
  reporter = [];
  reporters: string[] = ['progress', 'clear-text'];
  coverageAnalysis: 'perTest' | 'all' | 'off' = 'perTest';
  testRunner: string = 'command';
  testFramework: string;
  mutator: string | MutatorDescriptor = 'es5';
  transpilers: string[] = [];
  maxConcurrentTestRunners: number = Infinity;
  symlinkNodeModules: boolean = true;
  thresholds: MutationScoreThresholds = {
    high: 80,
    low: 60,
    break: null
  };

  public set(newConfig: StrykerOptions) {
    if (newConfig) {
      Object.keys(newConfig).forEach((key) => {
        if (typeof newConfig[key] !== 'undefined') {
          this[key] = newConfig[key];
        }
      });
    }
  }
}