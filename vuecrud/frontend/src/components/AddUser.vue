<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nume">Nume</label>
        <input
          type="text"
          class="form-control"
          id="nume"
          required
          v-model="tutorial.nume"
          name="nume"
        />
      </div>
      <div class="form-group">
        <label for="prenume">Prenume</label>
        <input
          class="form-control"
          id="prenume"
          required
          v-model="tutorial.prenume"
          name="prenume"
        />

      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="tutorial.email"
          name="email"
        />
      </div>

       <div class="form-group">
        <label for="telefon">Telefon</label>
        <input
          class="form-control"
          id="telefon"
          required
          v-model="tutorial.telefon"
          name="telefon"
        />
      </div>

      <div class="form-group">
        <label for="datanastere">DataNastere</label>
        <input
          class="form-control"
          id="datanastere"
          required
          v-model="tutorial.datanastere"
          name="datanastere"
        />
      </div>


      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add user</button>
    </div>
  </div>
</template>
<script>
import UserService from "../services/UserService";
export default {
  name: "add-user",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };
      UserService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUser() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>