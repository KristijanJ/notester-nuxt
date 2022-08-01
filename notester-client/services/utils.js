export const getNoteFilters = () => {
    return [
        {
            id: 'all',
            title: 'All notes',
            iconComponent: 'clipboard-svg'
        },
        {
            id: 'starred',
            title: 'Starred',
            iconComponent: 'star-svg'
        },
        {
            id: 'deleted',
            title: 'Deleted',
            iconComponent: 'trash-svg'
        }
    ]
}