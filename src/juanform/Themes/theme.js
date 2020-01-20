const createTheme = (themeDef) => {
    return {
        get: () => themeDef,
        override: (overrides) => createTheme(overrides(themeDef))
    }
}

export default createTheme