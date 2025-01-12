import { encodeBase32, encodeBase64 } from '../utils/bufferToString';

describe('bufferToString', () => {
    describe('encodeBase32', () => {
        it('should encode buffer to base32 string', () => {
            const buffer = Buffer.from('hello');
            const encoded = encodeBase32(buffer);
            expect(encoded).toBe('NBSWY3DP');
        });

        it('should encode empty buffer to empty string', () => {
            const buffer = Buffer.from('');
            const encoded = encodeBase32(buffer);
            expect(encoded).toBe('');
        });

        it('should encode buffer with special characters to base32 string', () => {
            const buffer = Buffer.from('!@#$%^&*()');
            const encoded = encodeBase32(buffer);
            expect(encoded).toBe('EFACGJBFLYTCUKBJ');
        });
    });

    describe('encodeBase64', () => {
        it('should encode buffer to base64 string', () => {
            const buffer = Buffer.from('hello');
            const encoded = encodeBase64(buffer);
            expect(encoded).toBe('aGVsbG8');
        });

        it('should encode empty buffer to empty string', () => {
            const buffer = Buffer.from('');
            const encoded = encodeBase64(buffer);
            expect(encoded).toBe('');
        });

        it('should encode buffer with special characters to base64 string', () => {
            const buffer = Buffer.from('!@#$%^&*()');
            const encoded = encodeBase64(buffer);
            expect(encoded).toBe('IUAjJCVeJiooKQ');
        });
    });
});