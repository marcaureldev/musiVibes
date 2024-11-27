export const useSearch = () => {
    const searchQuery = ref('')
    const searchResults = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    watch(searchQuery, async (newQuery) => {
        if (newQuery) {
            isLoading.value = true
            error.value = null
            try {
                const { data } = await useFetch('/api/search', {
                    params: { q: newQuery }
                })
                searchResults.value = data.value?.data || []
            } catch (err) {
                console.error('Error during search:', err)
                error.value = 'Une erreur est survenue lors de la recherche'
            } finally {
                isLoading.value = false
            }
        } else {
            searchResults.value = []
        }
    })

    return {
        searchQuery,
        searchResults,
        isLoading,
        error
    }
}