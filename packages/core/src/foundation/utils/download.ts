export function download(data: BlobPart[], name: string) {
    const blob = new Blob(data);
    const url = URL.createObjectURL(blob);
    try {
        const a = document.createElement("a");
        a.style.visibility = "hidden";
        a.href = url;
        a.download = name;
        a.click();
    } finally {
        URL.revokeObjectURL(url);
    }
}
