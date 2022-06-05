const fs = require("fs")

/**
 * Load files from specified directory.
 * 
 * @function getFiles
 * @param {string} path - path to target directory.
 * @param {string} ending - return only files with type specified (ex. ".js" returns only js files).
 * @return {Object[]} - Object array containing the filtered files.
 */

const getFiles = (path, ending) => {
	return fs.readdirSync(path).filter(f => f.endsWith(ending))
}

module.exports = {
	getFiles
}