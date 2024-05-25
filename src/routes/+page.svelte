<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { form, errors, constraints, message, enhance } = superForm(
        data.form,
    );
</script>

{#if $message}<h3>{$message}</h3>{/if}

<h1>Form Testing</h1>

<div class="form-wrapper">
    <form method="POST" use:enhance>
        <div class="form-group">
            <label for="name">name</label>
            <input
                type="text"
                name="name"
                aria-invalid={$errors.name ? "true" : undefined}
                bind:value={$form.name}
                {...$constraints.name}
            />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input
                type="email"
                name="email"
                aria-invalid={$errors.email ? "true" : undefined}
                bind:value={$form.email}
                {...$constraints.email}
            />
        </div>
        {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
        <div><button>Submit</button></div>
    </form>
</div>

<style>
    .form-wrapper {
        display: flex;
        justify-content: center;
    }
    button {
        background-color: #008001;
        border-radius: 5px;
        border: none;
        padding: 10px;
    }
    button:hover {
        background-color: #aad922;
    }
</style>
