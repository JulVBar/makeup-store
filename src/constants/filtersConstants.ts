export const SORT_PARAMS: Record<string, string>[] = [
    {
        name: 'Default sorting',
        sort: '',
        order: 'asc'
    },
    {
        name: 'Sort by popularity',
        sort: 'rating',
        order: 'desc'
    },
    {
        name: 'Sort by price: low to high',
        sort: 'price',
        order: 'asc'
    },
    {
        name: 'Sort by price: high to low',
        sort: 'price',
        order: 'desc'
    }
]