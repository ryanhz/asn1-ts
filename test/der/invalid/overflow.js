describe('Distinguished Encoding Rules', () => {
    it('throws when decoding an excessively large INTEGER', () => {
        const el = new DERElement();
        el.value = new Uint8Array([ 0xFF, 0xFF, 0xFF, 0xFF, 0xF3 ]);
        expect(() => el.integer).toThrow();
    });

    it('throws when decoding an OBJECT IDENTIFIER that contains an excessively large number', () => {
        const el = new DERElement();
        el.value = new Uint8Array([ 0x43, 0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF ]);
        expect(() => el.objectIdentifier).toThrow();
    });

    it('throws when decoding an excessively large ENUMERATED', () => {
        const el = new DERElement();
        el.value = new Uint8Array([ 0xFF, 0xFF, 0xFF, 0xFF, 0xF3 ]);
        expect(() => el.enumerated).toThrow();
    });

    it('throws when decoding a RELATIVE OID that contains an excessively large number', () => {
        const el = new DERElement();
        el.value = new Uint8Array([ 0x8F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF ]);
        expect(() => el.relativeObjectIdentifier).toThrow();
    });
});