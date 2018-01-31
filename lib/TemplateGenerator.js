import path from 'path';
import swig from 'swig';
import fs from 'fs-extra';
import config from './config/config';

/**
 * TemplateGenerator
 */
class TemplateGenerator {

  /**
   * Todo: Inject swig, fs and config to mock them in the future tests
   * @param options
   */
  constructor( options ) {
    this.TEMPLATES_DIR = `${__dirname}/blueprints`;
    this._create(options);
  }

  /**
   *
   * @param options
   * @private
   */
  _create( options = {} ) {
    const {name, type, actions, container} = options;
    const filesType = config.getConfigFile().filesType;
    this._createDirectory(this._getDirPath(type), { name, actions, filesType, container }, filesType);
  }

  /**
   *
   * @param file
   * @param data
   * @returns {*}
   * @private
   */
  _compileTpl( file, { name, actions, filesType, container } ) {
    const compiled = swig.compileFile(file);
    return compiled({ name, actions, filesType, container });
  }

  /**
   *
   * @param name
   * @param fileType
   * @param type
   * @param tpl
   * @private
   */
  _createFile( name, type, fileType, tpl ) {
    fs.outputFile(this._createFilePath(name, type, fileType), tpl, function( err ) {
      if( err ) console.log(err);
    });
  }

  /**
   *
   * @param dirPath
   * @param fileType
   * @param data
   * @private
   */
  _createDirectory( dirPath, data, fileTypes, container ) {
    fs.readdir(dirPath, ( err, dir ) => {
      const name = data.name;
      const folder = path.join(process.cwd(), name);
      let filePath;

      // If container option is not provided we must not create the Container
      // component, thus we remove it from the blueprints array.
      if (!data.container) {
        dir = dir.filter(d => !d.includes("Container"));
      }

      dir.forEach(tempFile => {
        const compiled = this._compileTpl(`${dirPath}/${tempFile}`, data);

        let fileName = this._createFileName(tempFile, name, fileTypes);

        filePath = path.join(folder, fileName);

        fs.outputFile(filePath, compiled, function( err ) {
          if( err ) console.log(err);
        });
      });
    });
  }

  /**
   *
   * @param tempFile
   * @param name
   * @param fileTypes
   * @returns {*}
   * @private
   */
  _createFileName( tempFile, name, fileTypes ) {
    let newName = tempFile.replace(/temp/, name);

    if( newName.indexOf('tpl') > -1 ) {
      newName = newName.replace(/tpl/, 'component').replace(/extension/, fileTypes.html);
    }

    if( newName.indexOf('sty') > -1 ) {
      newName = newName.replace(/sty/, 'component').replace(/extension/, fileTypes.style);
    }

    return newName;
  }

  /**
   *
   * @param type
   * @returns {*}
   * @private
   */
  _getDirPath( type ) {
    return `${this.TEMPLATES_DIR}/${type}`;
  }

  /**
   *
   * @param name
   * @param type
   * @param fileType
   * @returns {*}
   * @private
   */
  _createFilePath( name, type, fileType ) {
    return path.join(process.cwd(), `${name}.${type}.${fileType}`);
  }
}

export default TemplateGenerator
