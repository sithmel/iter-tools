module.exports = (impl, generatedFrom) =>
  `/**
 * @generated-from ./${generatedFrom}
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */
 
/* eslint-disable no-unused-vars,import/no-duplicates */

${impl}
`;
