export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                background: {
                    primary: '#efef',
                }
            }
            : {
                // palette values for dark mode
                background: {
                    primary: '#333',
                }
            }),
    },
});
