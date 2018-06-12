#! /usr/bin/env node
import commandLineArgs from 'command-line-args';
import swig from 'swig';
import path from 'path';
import TemplateFactory from './TemplateFactory';
import config from './config/config';
import cliOptions from './config/cli-options'
import swigFilters from './config/swig-filters';
const cli = commandLineArgs(cliOptions);

swigFilters(swig);
const options = cli.parse().options;

/* ===============
 Ask for help
 =============== */
if( options.help ) {
  console.log(cli.getUsage(cli));
}

let configData = config.getConfigFile();
configData.structure.container = options.container ? "container" : configData.structure.container;
config.updateConfigFile(configData);


TemplateFactory.createTemplateFor(options);