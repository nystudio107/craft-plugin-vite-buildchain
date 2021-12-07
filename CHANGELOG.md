# Craft Plugin Vite Buildchain

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
