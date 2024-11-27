export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const apiUrl = 'https://api.deezer.com/search'

    try {
        const response = await $fetch(apiUrl, {
            params: {
                q: query.q
            }
        })
        return response
    } catch (error) {
        console.error('Error fetching from Deezer API:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Error fetching data from Deezer API'
        })
    }
})