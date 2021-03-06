'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
<<<<<<< HEAD
<<<<<<< HEAD
// https://github.com/facebook/create-react-app/issues/637
=======
// https://github.com/facebookincubator/create-react-app/issues/637
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
// https://github.com/facebook/create-react-app/issues/637
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
<<<<<<< HEAD
=======
function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
<<<<<<< HEAD
=======
// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f



module.exports.moduleFileExtensions = moduleFileExtensions;
<<<<<<< HEAD
=======
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
