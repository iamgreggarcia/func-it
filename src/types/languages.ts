// src/types/languages.ts

/**
 * Enum representing all the languages used in the application.
 * Each key in the enum is a language with its value being the same as the key.
 * The enum values can be used in the components and functions that require language types.
 * @enum {string}
 */
export enum Languages {
    Pascal = 'Pascal',
    JavaScript = 'JavaScript',
    TypeScript = 'TypeScript',
    Python = 'Python',
    TSX = 'TSX',
    JSX = 'JSX',
    Vue = 'Vue',
    Go = 'Go',
    C = 'C',
    CPP = 'C++',
    Java = 'Java',
    CSharp = 'C#',
    VisualBasicNET = 'Visual Basic .NET',
    SQL = 'SQL',
    PHP = 'PHP',
    Ruby = 'Ruby',
    Swift = 'Swift',
    SwiftUI = 'SwiftUI',
    Kotlin = 'Kotlin',
    R = 'R',
    ObjectiveC = 'Objective-C',
    Perl = 'Perl',
    SAS = 'SAS',
    Scala = 'Scala',
    Dart = 'Dart',
    Rust = 'Rust',
    Haskell = 'Haskell',
    Lua = 'Lua',
    Groovy = 'Groovy',
    Elixir = 'Elixir',
    Clojure = 'Clojure',
    Lisp = 'Lisp',
    Julia = 'Julia',
    Matlab = 'Matlab',
    Fortran = 'Fortran',
    COBOL = 'COBOL',
    Bash = 'Bash',
    Powershell = 'Powershell',
    Racket = 'Racket',
    CoffeeScript = 'CoffeeScript',
    OCaml = 'OCaml',
}

/**
 * Array of objects with 'value' and 'label' properties for each language.
 * This array is derived from the Languages enum and can be used in components that require an array of languages.
 * The 'value' and 'label' properties in each object are the same, taking values from the enum.
 * @constant
 * @type {Array<{ value: string; label: string }>}
 */
export const LANGUAGES = Object.values(Languages).map((language) => ({
    value: language,
    label: language,
}));
