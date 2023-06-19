export default {
    variants: [
        // hover:
        (matcher) => {
            if (!matcher.startsWith('hover:'))
                return matcher
            return {
                // slice `hover:` prefix and passed to the next variants and rules
                matcher: matcher.slice(6),
                selector: s => `${s}:hover`,
            }
        }
    ]
}