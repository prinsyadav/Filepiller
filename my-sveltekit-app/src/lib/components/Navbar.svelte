<script lang="ts">
	import notificationIcon from '$lib/assets/notification.svg';
	import searchIcon from '$lib/assets/searchIconBlue.svg';
</script>

<div class="flex items-center justify-end bg-white p-3">
	<div class="flex items-center">
		<div class="relative mr-6 w-64">
			<div class="relative w-auto">
				<div
					class="ps-2.25 pointer-events-none absolute inset-y-0 start-0 flex items-center text-gray-500 dark:text-gray-400"
				>
					<img
						src={searchIcon}
						alt="Search"
						class="h-[13.5px] w-[13.5px] text-blue-600"
						style="position: relative; top: 2.25px; left: 2.25px;"
						aria-hidden="true"
					/>
				</div>
				<input
					placeholder="Quick search for anything"
					class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-blue-500 bg-white p-2.5 pl-10 ps-10 text-sm text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
					type="text"
				/>
			</div>
		</div>
		<div class="relative mr-4">
			<button
				class="flex items-center rounded-full p-2 hover:bg-gray-100"
				aria-label="Notifications"
			>
				<img
					src={notificationIcon}
					alt="Notifications"
					class="h-[25px] w-[25px] rounded-md text-[#6B7280]"
					style="position: relative; top: 2px; left: 4px;"
					aria-hidden="true"
				/>
				<span class="ml-2">Notifications</span>
			</button>
		</div>
		<div class="flex items-center">
			<div
				class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 font-medium text-white"
			>
				P
			</div>
			<span class="mr-3 inline-block h-6 w-px bg-gray-300"></span>
			<a
				href="/logout"
				class="text-sm font-medium leading-[150%] tracking-[0%] text-[#1C64F2] hover:underline"
			>
				Logout
			</a>
		</div>
	</div>
</div>
