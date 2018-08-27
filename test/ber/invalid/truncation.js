describe('Basic Encoding Rules', () => {
    it('throws when decoding an element with a truncated tag number', () => {
        const el = new BERElement();
        expect(() => el.fromBytes(new Uint8Array([ 31, 0x80, 0x06  ]))).toThrow();
    });

    it('throws when decoding a truncated OBJECT IDENTIFIER', () => {
        const el = new BERElement();
        el.value = new Uint8Array([ 0x42, 0x80 ]);
        expect(() => el.objectIdentifier).toThrow();
    });

    it('throws when decoding a truncated RELATIVE OID', () => {
        const el = new BERElement();
        el.value = new Uint8Array([ 0x80, 0x81 ]);
        expect(() => el.relativeObjectIdentifier).toThrow();
    });

    it('throws when decoding a truncated UniversalString', () => {
        const el = new BERElement();
        el.value = new Uint8Array([ 0x00, 0x00, 0x00 ]);
        expect(() => el.universalString).toThrow();
    });

    it('throws when decoding a truncated BMPString', () => {
        const el = new BERElement();
        el.value = new Uint8Array([ 0x00 ]);
        expect(() => el.bmpString).toThrow();
    });
});