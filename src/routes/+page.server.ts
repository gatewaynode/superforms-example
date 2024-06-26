import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
import { schema } from "$lib/forms/test-1.schema";

export const load = async () => {
    const form = await superValidate(zod(schema));
    return { form };
};

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(schema));
        console.log(form);

        if (!form.valid) {
            return fail(400, { form });
        }
        return message(form, "Form posted successfully!");
    }
};