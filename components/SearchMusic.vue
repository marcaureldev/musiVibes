<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4" @click="$emit('close-search')">
        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 w-full max-w-2xl relative z-10 search-modal"
            @click.stop>
            <div class="relative mb-6">
                <input v-model="searchQuery" type="text" placeholder="Retrouvez ici votre musique préférée"
                    class="w-full bg-white bg-opacity-20 rounded-full py-3 px-5 pr-12 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300" />
                <div v-if="isLoading" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-200">
                    <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </div>
            </div>

            <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>

            <div v-if="displayedResults.length > 0" class="mt-6">
                <h3 class="text-xl font-semibold mb-4">Résultats</h3>
                <div class="max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <ul class="grid gap-4">
                        <li v-for="result in displayedResults" :key="result.id"
                            class="bg-white bg-opacity-5 rounded-xl p-4 hover:bg-opacity-10 transition-all duration-300 group cursor-pointer">
                            <div class="flex items-center space-x-4">
                                <div class="relative">
                                    <img :src="result.album.cover_medium" :alt="result.title"
                                        class="w-16 h-16 rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" />
                                    <button @click="playPreview(result)"
                                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="flex-grow">
                                    <h4 class="font-semibold text-white truncate">{{ result.title }}</h4>
                                    <p class="text-sm text-teal-200">{{ result.artist.name }}</p>
                                    <p class="text-xs text-gray-400">{{ result.album.title }}</p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button @click="addToPlaylist(result)"
                                        class="p-2 rounded-full bg-white bg-opacity-0 hover:bg-opacity-10 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-200"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-if="hasMoreResults" class="mt-4 text-center">
                    <button @click="loadMore"
                        class="px-4 py-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-colors duration-300 text-sm">
                        Afficher plus de résultats
                    </button>
                </div>
            </div>

            <div v-else-if="searchQuery && !isLoading" class="mt-6 text-center text-gray-400">
                <p>Aucun résultat trouvé pour "{{ searchQuery }}"</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSearch } from '../composables/useSearch'

const RESULTS_PER_PAGE = 10
const currentPage = ref(1)
const { searchQuery, searchResults, isLoading, error } = useSearch()

const displayedResults = computed(() => {
    return searchResults.value?.slice(0, currentPage.value * RESULTS_PER_PAGE) || []
})

const hasMoreResults = computed(() => {
    return searchResults.value?.length > currentPage.value * RESULTS_PER_PAGE
})

const loadMore = () => {
    currentPage.value++
}

const playPreview = (track) => {
    // Implémenter la logique de lecture de l'aperçu
    console.log('Playing preview:', track.preview)
}

const addToPlaylist = (track) => {
    // Implémenter la logique d'ajout à la playlist
    console.log('Adding to playlist:', track.title)
}

defineEmits(['close-search'])
</script>

<style scoped>
.search-modal {
    animation: zoomIn 0.3s ease-out;
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}
</style>