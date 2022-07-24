import { ReactElement } from "react"

export type ThemeType = {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    success: string,
    danger: string,
    warning: string,
    info: string,
    light: string,
    medium: string,
    heavy: string
}

export type ActivityType = {
    name: string,
    path: string,
    icon: ReactElement,
    element: ReactElement,
    isActive: boolean
}