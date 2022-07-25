export function getOrigin() {
    return typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : ''
}
