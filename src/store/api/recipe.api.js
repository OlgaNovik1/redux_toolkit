//  в больших приложениях выносим endpoints отдельно

import { type } from "@testing-library/user-event/dist/type";
import { api } from "./api"

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({
            query: recipe => ({
                body: recipe,
                url: '/',
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Recipe',
            }],
        }),
    }),
});

export const { useCreateRecipeMutation } = recipeApi;
