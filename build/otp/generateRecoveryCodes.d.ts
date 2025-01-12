interface GenerateRecoveryCodesProps {
    numberOfCodes: number;
    codeLength: number;
    encoding?: "hex" | "base32" | "base64";
}
export declare function generateRecoveryCodes({ numberOfCodes, codeLength, encoding, }: GenerateRecoveryCodesProps): string[];
export {};
//# sourceMappingURL=generateRecoveryCodes.d.ts.map