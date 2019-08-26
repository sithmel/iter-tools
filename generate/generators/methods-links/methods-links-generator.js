const { dirname, basename, relative, join, normalize } = require('path');
const camelcase = require('camelcase');
const completeExtname = require('path-complete-extname');

const BaseGenerator = require('../base-generator');
const generatedFunctionFile = require('../_templates/generated-function-file');
const generationErrorFile = require('../_templates/generation-error-file');
const gitattributesFile = require('../_templates/gitattributes-file');

class MethodsLinksGenerator extends BaseGenerator {
  constructor(options) {
    super(options);

    this.glob = ['src/methods/*/[^$]*.(mjs|d.ts)'];
    this.ignored = [...this.ignored, '**/__*__/**'];
  }

  getDestPath(implPath) {
    const dir = dirname(implPath);
    const file = basename(implPath);

    return normalize(join(dir, '../..', file));
  }

  generatePath(implPath, destPath) {
    let content;
    let generatedFrom = relative(dirname(destPath), implPath);

    const extName = completeExtname(implPath);
    const moduleName = basename(implPath, extName);
    const methodName = camelcase(basename(implPath, extName));
    const methodDirName = basename(dirname(implPath));

    const impl = `import ${methodName} from './methods/${methodDirName}/${moduleName}';\n\nexport default ${methodName};`;

    try {
      content = generatedFunctionFile(impl, generatedFrom);
    } catch (e) {
      console.warn(`Failed generating ${implPath}`);
      content = generationErrorFile(e, generatedFrom);
    }

    return content;
  }

  afterPathsChanged() {
    this.generatedPaths.add('.gitattributes');

    this.writeMonolithic('.gitattributes', gitattributesFile(this.generatedPaths));
  }
}

module.exports = MethodsLinksGenerator;
