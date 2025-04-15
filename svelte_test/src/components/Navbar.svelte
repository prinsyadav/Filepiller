<script>
  import { Input } from "flowbite-svelte";
</script>

<div
  class="bg-white border-b border-gray-200 p-3 flex items-center justify-end"
>
  <div class="flex items-center" data-protonpass-form="">
    <div class="relative w-64 mr-6">
      <div class="relative w-auto">
        <div
          class="flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 start-0 ps-2.5 pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute left-3 top-2.5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path></svg
          >
        </div>
        <input
          placeholder="Quick search for anything"
          class="block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 ps-10 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border border-blue-500 dark:border-gray-600 text-sm rounded-lg pl-10"
          type="text"
        />
      </div>
    </div>
    <div class="relative mr-4">
      <button
        class="p-2 rounded-full hover:bg-gray-100"
        aria-label="Notifications"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path></svg
        ></button
      >
    </div>
    <div class="flex items-center">
      <div
        class="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium mr-3"
      >
        U
      </div>
      <a href="/logout" class="text-blue-600 hover:underline">Logout</a>
    </div>
  </div>
</div>

<style>
  .bg-white {
    background-color: #ffffff;
  }
</style>
