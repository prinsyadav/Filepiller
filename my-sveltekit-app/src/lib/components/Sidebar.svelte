<script lang="ts">
	import { page } from '$app/stores';

	import homeIcon from '$lib/assets/home.svg';
	import onboardIcon from '$lib/assets/onboard.svg';
	import listIcon from '$lib/assets/list.svg';
	import aiIcon from '$lib/assets/ai.svg';
	import settingsIcon from '$lib/assets/settings.png';
	import integrationsIcon from '$lib/assets/integrations.svg';
	import helpIcon from '$lib/assets/help.svg';

	const iconMap = {
		home: homeIcon,
		onboard: onboardIcon,
		list: listIcon,
		ai: aiIcon,
		settings: settingsIcon,
		integrations: integrationsIcon,
		help: helpIcon
	};
	// Define main navigation items
	const mainNavItems = [
		{ href: '/', label: 'Home', icon: 'home', iconSrc: iconMap.home },
		{
			href: '/import-documents',
			label: 'Import Documents',
			icon: 'onboard',
			iconSrc: iconMap.onboard
		},
		{ href: '/client-list', label: 'Client list', icon: 'list', iconSrc: iconMap.list },
		{ href: '/beta-ai', label: 'Beta AI (WIP)', icon: 'ai', iconSrc: iconMap.ai }
	];

	// Define bottom navigation items
	const bottomNavItems = [
		{ href: '/settings', label: 'Settings', icon: 'settings', iconSrc: iconMap.settings },
		{
			href: '/integrations',
			label: 'Integrations',
			icon: 'integrations',
			iconSrc: iconMap.integrations
		},
		{ href: '/help', label: 'Help', icon: 'help', iconSrc: iconMap.help }
	];
</script>

<div class="relative flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
	<div class="flex items-center border-gray-200 p-4">
		<div class="flex items-center">
			<img
				src="/Filepillar_logo2 2.png"
				alt="Filepiller logo"
				class="mr-2 h-[25px] w-[25px] rounded-lg"
			/>
			<span
				class="font-poppins text-center text-[20px] font-medium leading-[120%] tracking-[1%] text-[#2E3542]"
				>Filepiller</span
			>
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

	<nav class="mt-4 flex-grow text-base font-medium leading-normal tracking-normal text-gray-900">
		<ul>
			{#each mainNavItems as item}
				<li>
					<a
						href={item.href}
						class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
						class:text-blue-600={$page.url.pathname.startsWith(item.href)}
						class:bg-gray-100={$page.url.pathname.startsWith(item.href)}
					>
						<div class="mr-3">
							<img
								src={item.iconSrc}
								alt={item.label}
								class="ml-[2px] mt-[2px] h-[20px] w-[20px] text-gray-500"
							/>
						</div>
						<span>{item.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="absolute bottom-0 left-0 w-full">
		<nav
			class="border-t border-gray-200 py-2 text-base font-medium leading-normal tracking-normal text-gray-900"
		>
			<ul>
				{#each bottomNavItems as item}
					<li>
						<a
							href={item.href}
							class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
							class:text-blue-600={$page.url.pathname === item.href}
							class:bg-gray-100={$page.url.pathname === item.href}
						>
							<div class="mr-3">
								<img
									src={item.iconSrc}
									alt={item.label}
									class="ml-[2px] mt-[2px] h-[20px] w-[20px] text-gray-500"
								/>
							</div>
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>
