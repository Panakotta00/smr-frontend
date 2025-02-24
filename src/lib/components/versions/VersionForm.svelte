<script lang="ts">
  import { createForm } from 'felte';
  import { validator } from '@felte/validator-zod';
  import { svelteReporter, ValidationMessage } from '@felte/reporter-svelte';
  import type { VersionData, VersionMetadata } from '$lib/models/versions';
  import { constructVersionSchema } from '$lib/models/versions';
  import { trimNonSchema } from '$lib/utils/forms';
  import { markdown } from '$lib/utils/markdown';
  import { writable } from 'svelte/store';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';
  import { VersionStabilities } from '$lib/generated';
  import Select, { Option } from '@smui/select';
  import { prettyBytes } from '$lib/utils/formatting';

  export let modReference: string;
  export let onSubmit: (data: VersionData) => Promise<void>;
  export let initialValues: Omit<VersionData, 'file'> = {
    changelog: '',
    stability: VersionStabilities.Alpha
  };
  export let submitText = 'Create';

  export let editing = false;

  const modMeta = writable<VersionMetadata>();

  let disabled = false;

  const versionSchema = constructVersionSchema(modReference, modMeta);
  const { form, data } = createForm<VersionData>({
    initialValues: initialValues as VersionData,
    extend: [validator, svelteReporter],
    validateSchema: versionSchema,
    onSubmit: (data: VersionData) => {
      disabled = true;
      onSubmit(trimNonSchema(data, versionSchema)).then(() => (disabled = false));
    }
  });

  $: preview = ($data.changelog as string) || '';
</script>

<form use:form>
  <div class="grid grid-flow-row gap-6">
    <div class="grid grid-flow-row gap-2">
      <Select bind:value={$data.stability} label="Stability">
        <Option value="alpha">Alpha</Option>
        <Option value="beta">Beta</Option>
        <Option value="release">Release</Option>
      </Select>
      <ValidationMessage for="stability" let:messages={message}>
        <span class="validation-message">{message || ''}</span>
      </ValidationMessage>
    </div>

    {#if !editing}
      <div class="grid grid-flow-row gap-2">
        <label for="file">File:</label>
        <input id="file" class="base-input" name="file" type="file" accept=".zip,.smod" placeholder="File" />
        <ValidationMessage for="file" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>

      {#if $data.file}
        <div>
          <span><strong>File Type:</strong> {$data.file.type || 'Unknown'}</span><br />
          <span><strong>File Size:</strong> {prettyBytes($data.file.size)}</span>
        </div>
      {/if}

      {#if $modMeta}
        <div>
          <p class="mb-4">
            <span><strong>Version:</strong> {$modMeta.uplugin.Version}<br /></span>

            {#if $modMeta.uplugin.SemVersion !== undefined}
              <span><strong>SemVersion:</strong> {$modMeta.uplugin.SemVersion}<br /></span>
            {:else}
              <span class="text-yellow-600">
                Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to {$modMeta
                  .uplugin.Version}.0.0
              </span>
            {/if}
          </p>

          {#if $modMeta.uplugin.Plugins !== undefined}
            <p>
              <strong>Dependencies:</strong><br />
              {#each $modMeta.uplugin.Plugins as dependency}
                <strong>{dependency.Name}: </strong>
                {#if dependency.SemVersion}
                  <span>{dependency.SemVersion}</span>
                {:else}
                  <span>*</span>
                {/if}
                <br />
              {/each}
            </p>
          {/if}

          {#if $modMeta.objects && $modMeta.objects.length > 0}
            <p>
              <strong>Objects:</strong><br />
              {#each $modMeta.objects as object}
                <span>{object}</span>
                <br />
              {/each}
            </p>
          {:else}
            <p>
              <span class="text-yellow-600">
                Mod contains no objects (.dll, .pak)! Are you sure you want to continue?
              </span>
            </p>
          {/if}
        </div>
      {/if}
    {/if}

    <div class="grid gap-6 split">
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <Textfield
          textarea
          class="vertical-textarea"
          bind:value={$data.changelog}
          label="Changelog"
          required
          input$rows={10}
        />
        <ValidationMessage for="changelog" let:messages={message}>
          <span class="validation-message">{message || ''}</span>
        </ValidationMessage>
      </div>
      <div class="grid grid-flow-row gap-2 auto-rows-max">
        <span>Preview:</span>
        {#await markdown(preview) then previewRendered}
          <div class="markdown-content right">{@html previewRendered}</div>
        {/await}
      </div>
    </div>

    <div>
      <Button variant="outlined" type="submit" {disabled}>{submitText}</Button>
    </div>
  </div>
</form>

<style lang="postcss">
  .split {
    grid-template-columns: 50% 50%;

    & .right {
      max-height: 75vh;
      overflow: auto;
    }
  }
</style>
