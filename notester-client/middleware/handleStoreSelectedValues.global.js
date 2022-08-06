import { setSelectedNoteAndCategoryFromRoute } from "../services/utils";

export default defineNuxtRouteMiddleware((to, from) => {
    setSelectedNoteAndCategoryFromRoute(to.params.categoryId, to.params.id);
})