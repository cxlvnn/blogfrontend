<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["change"]);

function pageFromUrl(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url, window.location.origin);
    return parseInt(parsed.searchParams.get("page"), 10) || null;
  } catch {
    const match = url.match(/[?&]page=(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }
}

function labelFor(link) {
  if (!link?.label) return "";
  // Laravel sends HTML entities for arrows - normalize them
  return link.label
    .replace(/&laquo;/g, "\u2039")
    .replace(/&raquo;/g, "\u203A")
    .replace(/Previous/g, "")
    .replace(/Next/g, "")
    .trim();
}

function onClick(link) {
  const page = pageFromUrl(link.url);
  if (page) emit("change", page);
}

function disabledClass(link) {
  if (link.url === null) return "paginator-btn disabled";
  if (link.active) return "paginator-btn active";
  return "paginator-btn";
}
</script>

<template>
  <nav class="paginator" aria-label="Pagination">
    <button
      v-for="(link, index) in links"
      :key="index"
      :class="disabledClass(link)"
      :disabled="link.url === null || link.active"
      type="button"
      @click.prevent="onClick(link)"
      v-html="labelFor(link)"
    />
  </nav>
</template>

<style scoped>
.paginator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  user-select: none;
}

.paginator-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  color: #a3a3a3;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

.paginator-btn:not(:disabled):hover {
  color: #e5e5e5;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.paginator-btn.active {
  background-color: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
  cursor: default;
}

.paginator-btn.disabled {
  color: #525252;
  background-color: transparent;
  border-color: transparent;
  cursor: default;
}
</style>
