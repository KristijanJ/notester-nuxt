<template>
    <div class="menu-container">
        <form class="search-container">
            <div class="search-inner-container">
                <input
                    type="text"
                    name="search"
                    autocomplete="off"
                    placeholder="Search notes"
                />
                <i class="fas fa-search search-icon"></i>
            </div>
        </form>

        <nav class="note-filters-list">
            <ul>
                <li
                    v-for="noteFilter in noteFilters"
                    :key="noteFilter.id"
                    :class="{ 'active': mainStore.selectedNoteFilter.id === noteFilter.id }"
                    @click="handleNoteFilterClick(noteFilter)"
                >
                    <div class="note-filter-icon">
                        <component :is="noteFilter.iconComponent" />
                    </div>
                    <div class="note-filter-text">{{ noteFilter.title }}</div>
                </li>
            </ul>
        </nav>

        <nav class="note-tags-list">
            <div class="tags">
                <p>CATEGORIES</p>
                <i class="fas fa-angle-down"></i>
            </div>
            <ul>
                <li
                    v-for="category in mainStore.categories"
                    :key="category.id"
                    :class="getCategoryActiveClass(category)"
                >
                    <div class="note-tag-icon">
                        <div class="green"></div>
                    </div>
                    <NuxtLink :to="getCategoryRoute(category)" class="note-tag-text">
                        {{ category.title }}
                    </NuxtLink>
                </li>
                <li>
                    <div class="note-tag-text">+ Add new</div>
                </li>
            </ul>
        </nav>
        <div class="user">
            <i class="fas fa-user"></i>
            <p>Kristijan Jovanovski</p>
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '../store/main';
import { getNoteFilters } from '../services/utils'

import clipboardSvg from '../assets/svg-components/clipboardSvg.vue';
import starSvg from '../assets/svg-components/starSvg.vue';
import trashSvg from '../assets/svg-components/trashSvg.vue';

export default {
    name: 'TheMenu',
    components: {
        starSvg,
        clipboardSvg,
        trashSvg
    },
    computed: {
        ...mapStores(useMainStore),
        noteFilters () {
            return getNoteFilters();
        }
    },
    methods: {
        getCategoryActiveClass (category) {
            if (!this.mainStore.selectedCategory) {
                return '';
            }
            return this.mainStore.selectedCategory.id === category.id ? 'active' : '';
        },
        getCategoryRoute (category) {
            if (category.notes.length) {
                return `/category/${category.id}/note/${category.notes[0].id}`;
            }

            return `/category/${category.id}`;
        },
        handleNoteFilterClick (noteFilter) {
            this.mainStore.$patch({ selectedNoteFilter: noteFilter });
        }
    }
}
</script>
