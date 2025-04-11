<script>
  import { Sidebar, SidebarItem, SidebarBrand } from "flowbite-svelte";
  import { Link, navigate } from "svelte-routing";

  // Define main navigation items
  const mainNavItems = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/onboard", label: "Onboard", icon: "onboard" },
    { href: "/client-list", label: "Client list", icon: "list" },
    { href: "/beta-ai", label: "Beta AI (WIP)", icon: "ai" },
  ];

  // Define bottom navigation items
  const bottomNavItems = [
    { href: "/settings", label: "Settings", icon: "settings" },
    { href: "/integrations", label: "Integrations", icon: "integrations" },
    { href: "/help", label: "Help", icon: "help" },
  ];

  function handleNavigation(path) {
    console.log("Navigating to:", path);
    navigate(path);
  }
</script>

<div class="w-64 h-screen bg-white border-r border-gray-200 flex flex-col relative">
  <div class="flex items-center p-4 border-b border-gray-200">
    <div class="flex items-center">
      <div class="w-8 h-8 bg-orange-500 rounded mr-2"></div>
      <span class="text-xl font-semibold">Filepiller</span>
    </div>

    <button class="ml-auto" aria-label="Toggle sidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  <nav class="mt-4 flex-grow">
    <ul>
      {#each mainNavItems as item}
        <li>
          <Link
            to={item.href}
            class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
          >
            <div class="w-6 h-6 mr-3">
              {#if item.icon === "home"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              {:else if item.icon === "onboard"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              {:else if item.icon === "list"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              {:else if item.icon === "ai"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              {/if}
            </div>
            <span>{item.label}</span>
          </Link>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="absolute bottom-0 left-0 w-full">
    <nav class="border-t border-gray-200 py-2">
      <ul>
        {#each bottomNavItems as item}
          <li>
            <Link
              to={item.href}
              class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <div class="w-6 h-6 mr-3">
                {#if item.icon === "settings"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                {:else if item.icon === "integrations"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                {:else if item.icon === "help"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                {/if}
              </div>
              <span>{item.label}</span>
            </Link>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>