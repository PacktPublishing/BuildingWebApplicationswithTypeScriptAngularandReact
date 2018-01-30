interface QueryStringValues {
    [index: string]: string
}

export function qs(uri: string): QueryStringValues {
    const query = uri.split('?')[1];
    if (!query) return {};

    return query.split('&').reduce((keys: QueryStringValues, kvp: string) => {
        const key = kvp.split('=')[0];
        const value = kvp.split('=')[1];
        keys[key] = value;

        return keys;
    }, {})
}
