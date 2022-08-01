import { defineStore } from 'pinia';
import { getCategories } from '../services/dummyData';

export const useMainStore = defineStore({
    id: 'main',
    state: () => {
        return {
            categories: getCategories(),
            notesList: [
                {
                    id: 0,
                    title: 'Study Javascript',
                    content: 'Assumenda commodi accusantium inventore nobis autem earum officiis quod corrupti, vel nisi?'
                },
                {
                    id: 1,
                    title: 'Work on the Notes project',
                    content: 'Odit rerum dolore illo doloribus placeat vitae culpa voluptatibus aspernatur ratione facilis ducimus repellendus obcaecati praesentium magni necessitatibus sunt, laborum id quisquam!'
                },
                {
                    id: 2,
                    title: 'Project list',
                    content: 'Nostrum omnis esse harum? Id vel asperiores voluptatibus vitae nostrum. Aut cum, magni aliquid rem molestiae voluptatibus doloremque commodi nihil minima eaque quis possimus ad quibusdam laborum mollitia dolorum sunt maxime. Sapiente qui accusantium doloremque aliquam tempora? Tempora suscipit possimus odio quam?'
                },
                {
                    id: 3,
                    title: 'Ideas for Christmas gifts',
                    content: 'Cum, accusantium minus neque, officia dolore veritatis aspernatur quaerat magni quis quae vitae ipsum officiis. Officiis laudantium itaque impedit, ipsa alias quo labore explicabo dolores provident laboriosam, reiciendis dolor quod aspernatur et autem temporibus. Eveniet ut unde explicabo, veniam neque nostrum minus.'
                }
            ],
            selectedCategory: null,
            selectedNote: null
        }
    }
})