<!-- src/views/ItemAddUpdate.vue -->
<script>
import {$http} from '../utils/http'


export default {
  data() {
    return {
      name: '',
      description: '',
      image: ''
    }
  },
  methods: {
    // send a POST request to the backend
    addItem() {
      $http.post('/items', {
        name: this.name,
        description: this.description,
        image: this.image
      }).then(response => {
        // Redirect to list of items page
        this.$router.push('/items')
      })
      console.log('frontend data', this.name, this.description, this.image);
    }
  }
}

</script>

<template>
  <div>
    <h1>Modify Item</h1>
    <div class="h-30">&nbsp;</div>
    <!-- Name -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs"
             v-model="name"/>
      <label class="label">
      </label>
    </div>
    <!-- Description -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <input type="text" name="description" placeholder="Description" class="input input-bordered w-full max-w-xs"
             v-model="description"/>
      <label class="label">
      </label>
    </div>
    <!-- Image -->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Image</span>
      </label>
      <input type="text" name="image" placeholder="Image url" class="input input-bordered w-full max-w-xs"
             v-model="image"/>
      <label class="label">
      </label>
    </div>
    <div class="h-30">&nbsp;</div>
    <button class="btn btn-primary" @click="addItem">Add Item</button>
  </div>

</template>


