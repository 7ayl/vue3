<script setup>
import { defineModel } from 'vue'
const modelValue = defineModel()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input 
    type="text"
    :value="modelValue"
    @input="e => emit('update:modelValue', e.target.value)"
    >
  </div>
</template>
