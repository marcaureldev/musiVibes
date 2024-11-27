<!-- <template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img :src="music.image" :alt="music.title" class="w-full h-48 object-cover" />
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ music.title }}</h3>
            <p class="text-gray-600">{{ music.artist }}</p>
            <div class="mt-4 flex justify-between">
                <button @click="listen"
                    class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Écouter
                </button>
                <button @click="download"
                    class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Télécharger
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    music: {
        type: Object,
        required: true
    }
});

const listen = () => {
    // Implémenter la logique pour écouter la musique
    console.log('Écouter', props.music.title);
};

const download = () => {
    // Implémenter la logique pour télécharger la musique
    console.log('Télécharger', props.music.title);
};
</script> -->

<template>
    <div
        class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
        <div class="relative">
            <img :src="music.image" :alt="music.title" class="w-full h-64 object-cover" />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ music.title }}</h3>
            <p class="text-yellow-400 mb-4">{{ music.artist }}</p>
            <div class="flex justify-between">
                <button @click="listen"
                    class="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-full hover:from-yellow-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-purple-700 transition duration-300">
                    Écouter
                </button>
                <button @click="download"
                    class="bg-white bg-opacity-20 text-white px-6 py-2 rounded-full hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 transition duration-300">
                    Télécharger
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    music: {
        type: Object,
        required: true
    }
});

const listen = () => {
    // Implémenter la logique pour écouter la musique
    console.log('Écouter', props.music.title);
};

const download = () => {
    // Implémenter la logique pour télécharger la musique
    console.log('Télécharger', props.music.title);
};
</script>