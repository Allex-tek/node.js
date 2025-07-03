// path: '/users/1',

export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const pathWithParam = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParam}`)

    return pathRegex
}