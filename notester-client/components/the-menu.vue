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
                <li>
                    <div class="note-filter-icon">
                        <clipboard-svg />
                    </div>
                    <div class="note-filter-text">All Notes</div>
                </li>
                <li class="active">
                    <div class="note-filter-icon">
                        <star-svg />
                    </div>
                    <div class="note-filter-text">Starred</div>
                </li>
                <li>
                    <div class="note-filter-icon">
                        <trash-svg />
                    </div>
                    <div class="note-filter-text">Deleted</div>
                </li>
            </ul>
        </nav>

        <nav class="note-tags-list">
            <div class="tags">
                <p>CATEGORIES</p>
                <i class="fas fa-angle-down"></i>
            </div>
            <ul>
                <li class="active">
                    <div class="note-tag-icon">
                        <div class="green"></div>
                    </div>
                    <div class="note-tag-text">
                        Inbox
                        <i
                            class="fas fa-ellipsis-h note-tag-text-options"
                        ></i>
                    </div>
                </li>
                <li>
                    <div class="note-tag-icon">
                        <div class="blue"></div>
                    </div>
                    <div class="note-tag-text">
                        Personal
                        <i
                            class="fas fa-ellipsis-h note-tag-text-options"
                        ></i>
                    </div>
                </li>
                <li>
                    <div class="note-tag-icon">
                        <div class="red"></div>
                    </div>
                    <div class="note-tag-text">
                        Work
                        <i
                            class="fas fa-ellipsis-h note-tag-text-options"
                        ></i>
                    </div>
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
import clipboardSvg from '../assets/svg-components/clipboardSvg.vue';
import starSvg from '../assets/svg-components/starSvg.vue';
import trashSvg from '../assets/svg-components/trashSvg.vue';

export default {
    name: 'TheMenu',
    components: {
        starSvg,
        clipboardSvg,
        trashSvg
    }
}
</script>
