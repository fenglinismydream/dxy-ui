export function isDef (value) {
  return value !== undefined && value !== null
}

export function isObj (value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function')
}

export function range (num, min, max) {
  return Math.min(Math.max(num, min), max)
}