<template>
    <div class="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white font-sans">
        <div class="stars absolute inset-0"></div>
        <div class="twinkling absolute inset-0"></div>
        <div class="clouds absolute inset-0"></div>

        <main class="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
            <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                MusiVibes
            </h1>

            <div class="w-full max-w-3xl relative">
                <HomePage />
                <Transition name="fade">
                    <SearchMusic v-if="isSearching" @close-search="isSearching = false" />
                </Transition>
            </div>

            <nav class="mt-12 flex space-x-6">
                <button class="nav-button flex items-center space-x-2" @click="isSearching = true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Rechercher</span>
                </button>
                <button class="nav-button flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12.5 15q1.05 0 1.775-.725T15 12.5V7h3V5h-4v5.5q-.325-.25-.7-.375T12.5 10q-1.05 0-1.775.725T10 12.5t.725 1.775T12.5 15M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z" />
                    </svg>
                    <span>Collection</span>
                </button>
                <button class="nav-button">Ambiances</button>
            </nav>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isSearching = ref(false);
</script>

<style scoped>
.stars,
.twinkling,
.clouds {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.stars {
    z-index: 0;
    background: #000 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png') repeat top center;
}

.twinkling {
    z-index: 1;
    background: transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') repeat top center;
    animation: move-twink-back 200s linear infinite;
}

.clouds {
    z-index: 2;
    background: transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds.png') repeat top center;
    animation: move-clouds-back 200s linear infinite;
}

@keyframes move-twink-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -10000px 5000px;
    }
}

@keyframes move-clouds-back {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 10000px 0;
    }
}

.nav-button {
    @apply px-6 py-3 bg-white bg-opacity-10 rounded-full text-lg font-semibold hover:bg-opacity-20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>