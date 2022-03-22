

export function isPositiveInteger(string_) {
    const n = Math.floor(Number(string_));
    return n !== Number.POSITIVE_INFINITY && String(n) === string_ && n > 0;
}


export class ServiceError extends Error {
    constructor({statusCode, message}) {
        super(message);
        this.name = 'ServiceError';
        this.statusCode = statusCode;
    }
}
