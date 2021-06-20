import Typography from "typography"
const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Varela Round', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'Arial', 'Verdana', 'sans-serif'],
})

export default typography
export const rhythm = typography.rhythm