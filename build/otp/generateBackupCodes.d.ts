interface GenerateBackupCodesProps {
    numberOfCodes: number;
    codeLength: number;
    encoding?: "hex" | "base32" | "base64";
}
export declare function generateBackupCodes({ numberOfCodes, codeLength, encoding, }: GenerateBackupCodesProps): string[];
export {};
//# sourceMappingURL=generateBackupCodes.d.ts.map