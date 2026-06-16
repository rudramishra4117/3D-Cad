export type LoggerLevel = "debug" | "info" | "warn" | "error";
export declare class Logger {
    static level: LoggerLevel;
    static debug(message?: any, ...optionalParams: any[]): void;
    static info(message?: any, ...optionalParams: any[]): void;
    static warn(message?: any, ...optionalParams: any[]): void;
    static error(message?: any, ...optionalParams: any[]): void;
}
