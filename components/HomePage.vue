<template>
    <div class="relative w-full h-80 music-orb-container">
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-[200px] h-[200px] cursor-pointer" @click="togglePlayPause">
                <div class="orb-core"></div>
                <div class="orb-aura" :class="{ 'pulsing': isPlaying }"></div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex justify-between items-end p-4">
            <div class="text-left">
                <h2 class="text-2xl font-bold">{{ currentTrack.title }}</h2>
                <p class="text-teal-200">{{ currentTrack.artist }}</p>
            </div>
            <div class="flex space-x-4">
                <button @click="previousTrack" class="control-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button @click="nextTrack" class="control-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isPlaying = ref(false);
const currentTrack = ref({
    title: "Cosmic Harmony",
    artist: "Stellar Sounds"
});

const togglePlayPause = () => {
    isPlaying.value = !isPlaying.value;
    // Logique de lecture/pause à implémenter
};

const previousTrack = () => {
    // Logique pour passer à la piste précédente
};

const nextTrack = () => {
    // Logique pour passer à la piste suivante
};
</script>

<style scoped>
.orb-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #4fd1c5 0%, #2c7a7b 100%);
    border-radius: 50%;
    box-shadow: 0 0 20px #4fd1c5;
}

.orb-aura {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(79, 209, 197, 0.2) 0%, rgba(44, 122, 123, 0) 70%);
    transition: all 0.3s ease;
}

.orb-aura.pulsing {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 0.7;
    }
}

.control-button {
    @apply p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50;
}

.music-orb-container {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>