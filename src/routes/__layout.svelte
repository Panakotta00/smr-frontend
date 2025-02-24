<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import './_global.postcss';
  import { base } from '$app/paths';
  import { initializeGraphQLClient } from '$lib/core';
  import type { Client } from '@urql/svelte';
  import { gqlClient } from '$lib/stores/global';
  import { browser } from '$app/env';

  let gTag = undefined;
  if (browser) {
    gTag = import.meta.env.VITE_GOOGLE_SITE_TAG as string;
    window['gTag'] = gTag;
  }

  let client: Client;

  export const load: Load = async ({ fetch }) => {
    client = initializeGraphQLClient(fetch);
    gqlClient.set(client);
    return {};
  };
</script>

<script lang="ts">
  import LoginDialog from '$lib/components/auth/LoginDialog.svelte';
  import { setClient } from '@urql/svelte';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import { AppContent, Scrim } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  import IconButton from '@smui/icon-button';
  import Button, { Label, Icon } from '@smui/button';
  import { user, userToken } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import { loginDialogOpen, onMobile } from '$lib/stores/global';
  import Menu, { MenuComponentDev } from '@smui/menu';
  import { onMount } from 'svelte';
  import { customProtocolCheck, hasLauncher, pingLauncher } from '$lib/stores/launcher';
  import Sidebar from '$lib/components/general/Sidebar.svelte';

  let root: HTMLElement;
  onMount(async () => {
    if (browser) {
      root = document.body;

      await import('cookieconsent/src/cookieconsent');

      if ('cookieconsent' in window) {
        window['cookieconsent'].initialise({
          palette: {
            popup: {
              background: '#000'
            },
            button: {
              background: '#f1d600'
            }
          },
          theme: 'edgeless',
          position: 'bottom-right'
        });
      }

      customProtocolCheck.set(await import('$lib/thirdparty/custom_protocol'));

      if (localStorage.getItem('hasLauncher') && localStorage.getItem('hasLauncher').toLocaleLowerCase() === 'true') {
        hasLauncher.set(true);
      }

      hasLauncher.subscribe((value) => {
        if (value === true || value === false) {
          localStorage.setItem('hasLauncher', value.toString().toLocaleLowerCase());
        }
      });
    }
  });

  let accessibility = false;
  $: root && (accessibility ? root.classList.add('accessibility') : root.classList.remove('accessibility'));

  setClient(client);

  $: isAdmin = !$user ? false : $user.roles.approveMods || $user.roles.approveVersions || $user.roles.editSMLVersions;

  let open = false;
  let drawerVariant: 'modal' | undefined = 'modal';
  let hideTopElements = true;
  if (browser) {
    onMobile.subscribe((mobile) => {
      drawerVariant = mobile ? 'modal' : undefined;
      hideTopElements = mobile;
    });
  }

  let menu: MenuComponentDev;
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="{base}/assets/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/assets/apple-touch-icon.png?v=69P26YMB35" />
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/assets/favicon-32x32.png?v=69P26YMB35" />
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/assets/favicon-16x16.png?v=69P26YMB35" />
  <link rel="manifest" href="{base}/manifest.json?v=69P26YMB35" />
  <link rel="mask-icon" href="{base}/assets/safari-pinned-tab.svg?v=69P26YMB35" color="#da8517" />
  <link rel="shortcut icon" href="{base}/assets/favicon.ico?v=69P26YMB35" />
  <meta name="msapplication-TileColor" content="#da8517" />
  <meta name="msapplication-config" content="{base}/static/assets/browserconfig.xml?v=69P26YMB35" />
  <meta name="theme-color" content="#ff6f00" />

  <link rel="preload" href="{base}/assets/fonts/flow-rounded.woff" as="font" type="font/woff" />

  {#if gTag}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={gTag}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', window['gTag']);
    </script>
  {/if}
</svelte:head>

<div class="app-container">
  <TopAppBar variant="static">
    <Row>
      <Section>
        {#if drawerVariant === 'modal'}
          <IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
        {/if}
        <Title>FICSIT Augmentation Database</Title>
      </Section>
      {#if !hideTopElements}
        <Section align="end" toolbar>
          {#if $hasLauncher}
            <Button color="secondary" variant="outlined" class="mr-3" on:click={pingLauncher}>
              <Label>Launcher Detected</Label>
              <Icon class="material-icons">file_download</Icon>
            </Button>
          {:else}
            <Button
              color="secondary"
              variant="outlined"
              class="mr-3"
              target="_blank"
              rel="noopener"
              href="https://smm.ficsit.app"
            >
              <Label>Mod Manager</Label>
              <Icon class="material-icons">file_download</Icon>
            </Button>
          {/if}

          {#if $user === null}
            <Button color="secondary" variant="outlined" on:click={() => loginDialogOpen.set(true)}>
              <Label>Sign In</Label>
              <Icon class="material-icons">login</Icon>
            </Button>
          {:else}
            {#if isAdmin}
              <Button color="secondary" variant="outlined" class="mr-3" on:click={() => goto(base + '/admin')}>
                <Label>Admin</Label>
                <Icon class="material-icons">admin_panel_settings</Icon>
              </Button>
            {/if}

            <div>
              <Button
                variant="outlined"
                color="secondary"
                on:click={() => menu.setOpen(true)}
                class="grid grid-flow-col"
              >
                <div class="mr-3">{$user.username}</div>
                <div class="rounded-full bg-cover w-7 h-7" style={`background-image: url("${$user.avatar}")`} />
              </Button>

              <Menu bind:this={menu}>
                <List>
                  <Item on:SMUI:action={() => goto(base + '/user/' + $user.id)}>
                    <Text>Profile</Text>
                  </Item>
                  <Item on:SMUI:action={() => goto(base + '/settings')}>
                    <Text>Settings</Text>
                  </Item>
                  <Item on:SMUI:action={() => userToken.set(null)}>
                    <Text>Logout</Text>
                  </Item>
                </List>
              </Menu>
            </div>
          {/if}
        </Section>
      {/if}
    </Row>
  </TopAppBar>

  <div class="drawer-container">
    <Sidebar bind:open bind:accessibility bind:drawerVariant bind:hideTopElements />

    {#if drawerVariant === 'modal'}
      <Scrim fixed={false} />
    {/if}

    <AppContent class="app-content w-full overflow-auto py-6 px-3">
      <main class="main-content min-h-full">
        <slot />
      </main>
    </AppContent>
  </div>
</div>

<LoginDialog />

<style lang="postcss">
  .app-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
  }

  .drawer-container {
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
