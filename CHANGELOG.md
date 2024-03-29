# Craft Plugin Vite Buildchain

## 1.1.0 - 2023.02.12
### Changed
* Updated the buildchain to use Vite `^4.0.0`
* Use dynamic docker container name & port for the `buildchain`
* Move the frontend `src/` dir from `../src/web/assets/src/` to the buildchain root, to avoid issues with various packages like eslint, stylelint, etc. from finding our source properly

## 1.0.12 - 2022.10.25
### Changed
* Fixed HMR in local dev with explicit alias that resolves to the actual directory
* Add `optimizeDeps` for non-ESM modules

## 1.0.11 - 2022.09.14
### Changed
* Use Vite `^3.1.0`
* Add comments to Makefile for Fig
* Remove `vite-plugin-manifest-sri` & `vite-plugin-eslint`

## 1.0.10 - 2022.05.02
### Changed
* Ignore `max-line-length` rule

### Fixed
* Fix eslint errors pinning `vite-plugin-eslint` to `1.3.0`

## 1.0.9 - 2022.02.13
### Added

* Add `.gitattributes` & `CODEOWNERS`
* Add linting to build
* Add compression of assets
* Add bundle visualizer

## 1.0.8 - 2021.12.21
### Changed
* Update to Tailwind CSS `^3.0.0`

## 1.0.7 - 2021.12.20
### Changed
* Switch to Node 16 via `16-alpine` Docker tag by default

### Fixed
* Use `${CURDIR}` instead of `pwd` to be cross-platform compatible with Windows WSL2

## 1.0.6 - 2021.12.06
### Changed
* Update to use Vite `^2.7.0-beta.10`

## 1.0.5 - 2021.10.20
### Changed
* Remove Static Asset Fixer plugin, use server.origin in Vite ^2.6.0

## 1.0.4 - 2021.08.24
### Fixed
* Updated to work with CommonJS imports via `input: ./`

## 1.0.3 - 2021.07.22
### Added
* Added the Static Asset Fixer plugin (https://github.com/vitejs/vite/issues/2394)

## 1.0.2 - 2021.05.14
### Changed
* Refactored to a more flexible directory structure

## 1.0.1 - 2021.05.11
### Changed
* Updated to Vite 2.3.0
* Removed the no longer needed `vite/dynamic-import-polyfill` from the Entries
* Set `server.host` to `0.0.0.0` so it works in Docker/VM environments

## 1.0.0 - 2021.05.09
### Added
* Initial release
