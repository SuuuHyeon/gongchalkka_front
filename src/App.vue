<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div
    class="max-w-[600px] mx-auto min-h-screen bg-gray-50 relative shadow-lg flex flex-col">
    <header
      class="h-14 bg-white flex items-center px-4 border-b border-gray-200 shrink-0">
      <h1 class="text-xl font-bold text-primary">공찰까</h1>
    </header>

    <main class="flex-1 overflow-y-auto pb-16">
      <RouterView />
    </main>

    <nav
      class="absolute bottom-0 w-full h-14 bg-white border-t border-gray-200 flex justify-around items-center text-sm font-medium text-gray-500">
      <RouterLink
        to="/"
        class="flex flex-col items-center hover:text-primary active-link">
        <span class="text-xl">🏟️</span>
        <span class="text-[10px] mt-1">구장 찾기</span>
      </RouterLink>

      <RouterLink
        to="/matches"
        class="flex flex-col items-center hover:text-primary active-link">
        <span class="text-xl">⚽</span>
        <span class="text-[10px] mt-1">매치 참여</span>
      </RouterLink>

      <RouterLink
        to="/mypage"
        class="flex flex-col items-center hover:text-primary active-link">
        <span class="text-xl">👤</span>
        <span class="text-[10px] mt-1">마이페이지</span>
      </RouterLink>
    </nav>
  </div>
</template>
