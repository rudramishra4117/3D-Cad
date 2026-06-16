import { Result } from "../result";
export declare function readFilesAsync(accept: string, multiple: boolean): Promise<Result<FileList>>;
export interface FileData {
    fileName: string;
    data: string;
}
export declare function readFileAsync(
    accept: string,
    multiple: boolean,
    method?: "readAsText" | "readAsDataURL",
): Promise<Result<FileData[]>>;
