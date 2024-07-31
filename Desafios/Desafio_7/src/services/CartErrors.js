export default class CartError extends Error {
    constructor({ name = "Error", cause, message, code = 1, details = {} }) {
        super(message);
        this.name = name;
        this.cause = cause;
        this.code = code;
        this.details = details;
    }

    static createError({ name = "Error", cause, message, code = 1, details = {} }) {
        throw new CartError({ name, cause, message, code, details });
    }
}
