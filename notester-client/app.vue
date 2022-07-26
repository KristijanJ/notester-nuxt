<template>
    <NuxtLayout name="default">
        <NuxtPage v-if="!loading" />
    </NuxtLayout>
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from './store/main';
import { setSelectedNoteAndCategoryFromRoute } from './services/utils';

export default {
    data () {
        return {
            loading: true
        }
    },
    computed: {
        ...mapStores(useMainStore)
    },
    async created () {
        try {
            const { data } = await useFetch('http://localhost:3031/api/v1/note-categories-with-notes');

            this.mainStore.$patch({
                categories: data
            });
            
            setSelectedNoteAndCategoryFromRoute(this.$route.params.categoryId, this.$route.params.id);

            this.loading = false;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* font-family: 'Roboto Condensed', sans-serif; */
  /* font-family: 'Source Sans Pro', sans-serif; */
  /* font-family: 'Oswald', sans-serif; */
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}

ul {
  list-style: none;
}

.app {
  display: flex;
  height: 100vh;
}

.menu-container, .note-container, .note-list-container {
  /* padding-top: 2rem;
  padding-bottom: 2rem; */
  overflow-y: auto;
}

.menu-container {
  background: #021e22;
  flex: 1;
  color: #949d9f;
  position: relative;
}

.note-list-container {
  background: #eee;
  flex: 2;
}

.note-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.note-list a {
  text-decoration: none;
}

.chosen-category {
  display: flex;
  flex-direction: column;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  margin: 0 2px 8px 2px;
  box-shadow: 0px 0px 3px #cbd9dc;
  min-height: 60px;
}

.chosen-category p {
  font-weight: 300;
}

.chosen-category .note-list-add-new-note {
    font-size: 12px;
    font-weight: 300;
    cursor: pointer;
}

.note-card {
  background: #fff;
  /* display: inline-block; */
  margin: 3px 4px;
  padding: 8px 8px 11px 8px;
  border-radius: 3px;
  box-shadow: 3px 3px 3px #cbd9dc;
  color: #222c2e;
  border-left: 3px solid #fff;
  cursor: pointer;
}

.note-card .note-card-title {
  display: flex;
  align-items: center;
}

.note-card .note-card-title h3 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
  font-weight: 400;
  font-size: 14px;
}

.note-card .note-card-title svg {
  width: 18px;
  height: 18px;
}

.note-card p {
  width: 100%;
  font-weight: 200;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 1.4;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
}

.note-list .active, .note-card:hover {
  background: #fafeff;
  border-left: 3px solid #086776;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.note-container {
  flex: 6;
}

.note-filters-list {
  margin-top: 30px;
  margin-bottom: 30px;
}

.note-filters-list ul li {
  padding: 8px;
  margin: 2px 10px 2px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 3px solid #021e22;
  cursor: pointer;
  font-size: 14px;
  color: #949d9f;
}

.note-filters-list ul li a {
  color: #949d9f;
}

.note-filters-list ul li:hover {
  border-left: 3px solid #d8e5e7;
  color: #d8e5e7;
}

.note-filters-list ul li:hover a {
  color: #d8e5e7;
}

.note-filters-list ul li.active {
  border-left: 3px solid #d8e5e7;
  color: #d8e5e7;
}

.note-filters-list ul li.active .note-filter-text {
  font-weight: 300;
}

.note-filter-icon {
  width: 16px;
  height: 16px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.note-filter-icon * {
  fill: #ffffff
}

.note-filter-text {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
}

.note-tags-list {
  margin-bottom: 3rem;
}

.note-tags-list .tags {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: #d8e5e7;
}

.note-tags-list ul li {
  padding: 1px 5px 1px 20px;
  margin: 2px 5px 2px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.note-tags-list ul li.active .note-tag-text,
.note-tags-list ul li:hover .note-tag-text {
  color: #d8e5e7;
  font-weight: 300;
}

.note-tag-icon {
  width: 8px;
  height: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.note-tag-text {
  font-weight: 200;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #949d9f;
  text-decoration: none;
}

.note-tag-text-options {
  display: none;
  font-size: 12px;
}

.note-tags-list ul li:hover .note-tag-text-options {
  display: inline;
}

.note-tag-icon .green {
  width: 100%;
  height: 100%;
  background: green;
  border-radius: 50%;
}

.note-tag-icon .red {
  width: 100%;
  height: 100%;
  background: red;
  border-radius: 50%;
}

.note-tag-icon .blue {
  width: 100%;
  height: 100%;
  background: blue;
  border-radius: 50%;
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 1rem 10px;
  font-size: 12px;
  background: #021e22;
  bottom: 0;
  color: #d8e5e7;
}

.user p {
  padding-left: 10px;
}

.search-container {
  width: 100%;
}

.search-inner-container {
  display: flex;
  background: #fff;
  margin: 16px 8px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}

.search-container input {
  width: 120%;
  padding: 0.5rem;
  outline: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  position: relative;
  color: #021e22;
  background: #fff;

}

.search-container .search-icon {
  font-size: 14px;
  background: #fff;
  border: none;
  position: relative;
  right: 8px;
}

.note-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.note-details {
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.note-container .note-controls-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
}

.note-container .note-controls-icons i {
  padding: 0 8px;
  cursor: pointer;
  font-size: 14px;
}

.note-container .note-category {
  padding: 8px 16px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.note-container .note-content {
  padding: 8px 16px;
}

.note-container > .empty-note {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.ql-toolbar.ql-snow {
  border: none;
  border-bottom: 1px solid #ccc;
}

.ql-container.ql-snow {
  border: none;
}

.note-title {
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  border: none;
  outline: none;
}
</style>