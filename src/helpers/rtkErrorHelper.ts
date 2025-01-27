import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === "object" && error !== null && "status" in error;
}

export function errorWithMessage(error: unknown): error is {status: number, message: string} {
    return typeof error === "object" && error !== null && "message" in error && typeof (error as any).message === 'string'
};