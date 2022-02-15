<script>
export default {
  name: "Dropdown",
  props: ["options", "isLevel"],

};
</script>

<template>
  <div>
    <select class="select">
      <option v-for="option in options" :key="option.id" :value="option._id">
        {{ isLevel ? option.level : option.name }}
      </option>
    </select>
  </div>
</template>



<style scoped>
select {
  position: relative;
  border: 2px solid #333333;
  background-color: transparent;
  color: #333333;
  font-weight: 700;
}

.select {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 13px;
  padding-left: 10px;
  border-radius: 15px;
  height: 50px;
}
.select::placeholder {
  text-align: center;
}
</style>