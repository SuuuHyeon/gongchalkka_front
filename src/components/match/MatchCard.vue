<script setup>
defineProps({
  match: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center p-4 mb-3 bg-white border border-gray-100 rounded-xl shadow-sm">
    <div class="flex flex-col items-center mr-4 min-w-[50px]">
      <span class="text-lg font-extrabold text-gray-800">{{ match.time }}</span>
    </div>

    <div class="flex-1 overflow-hidden pr-2">
      <h3 class="font-semibold text-gray-800 text-sm mb-1 truncate">
        {{ match.title }}
      </h3>
      <p class="text-xs text-gray-500">
        {{ match.stadium }} · {{ match.level }}
      </p>
    </div>

    <div
      class="flex flex-col items-center justify-center px-3 py-1.5 rounded-full min-w-[60px]"
      :class="
        match.status === '마감임박'
          ? 'bg-red-500 text-white'
          : 'bg-primary text-white'
      ">
      <span class="text-[11px] font-bold">{{ match.status }}</span>
      <span class="text-[10px] mt-0.5">
        {{ match.current }}/{{ match.max }}
      </span>
    </div>
  </div>
</template>
