<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Login: Ed Machina</h1>
      <form @submit.prevent="login">
        <p-input-text
          class="login-input"
          type="text"
          placeholder="Usuario"
          v-model="usernameLogin"
        />
        <p-password
          class="login-input"
          type="password"
          placeholder="Contraseña"
          v-model="passwordLogin"
          :invalid="passwordLogin === null"
          toggleMask
          :feedback="false"
        />
        <p-button
          class="login-button"
          type="submit"
          label="Ingresar"
          icon="mdi mdi-login"
        />
      </form>
      <p-button
        class="register-button"
        label="Registrarse"
        icon="mdi mdi-account-plus-outline"
        @click="visible = true"
      />
      <p-dialog :visible.sync="visible" modal :closable="false">
        <h2 class="login-title">Registro</h2>
        <div class="flex items-center gap-4 mb-4">
          <p-input-text
            class="login-input"
            type="text"
            placeholder="Usuario"
            v-model="usernameRegister"
          />
        </div>
        <div class="flex items-center gap-4 mb-8">
          <p-password
            class="login-input"
            type="password"
            placeholder="Contraseña"
            v-model="passwordRegister"
            :invalid="passwordRegister === null"
            toggleMask
            :feedback="false"
          />
        </div>
        <div class="registerContainerButtons">
          <p-button
            type="button"
            label="Cancelar"
            severity="secondary"
            class="cancelarRegistro"
            @click="visible = false"
          ></p-button>
          <p-button
            type="button"
            label="Guardar"
            class="guardarRegistro"
            @click="register"
          ></p-button>
        </div>
      </p-dialog>
      <li>
        <a class="text-link" @click="showResetPasswordDialog = true">¿Olvidaste tu contraseña?</a>
      </li>
      <p-dialog :visible.sync="showResetPasswordDialog" modal :closable="false">
        <h2 class="login-title">Restablecer contraseña</h2>
        <div class="flex items-center gap-4 mb-4">
          <p-input-text
            class="login-input"
            type="text"
            placeholder="Usuario"
            v-model="resetUsername"
          />
        </div>
        <div class="flex items-center gap-4 mb-4">
          <p-input-text
            class="login-input"
            type="text"
            placeholder="Código de recuperación"
            v-model="recoveryCode"
          />
        </div>
        <div class="flex items-center gap-4 mb-8">
          <p-password
            class="login-input"
            type="password"
            placeholder="Nueva contraseña"
            v-model="newPassword"
            toggleMask
            :feedback="false"
          />
        </div>
        <div class="registerContainerButtons">
          <p-button
            type="button"
            label="Cancelar"
            severity="secondary"
            class="cancelarRegistro"
            @click="showResetPasswordDialog = false; clearVariables(); clearResetPasswordFields()"
          />
          <p-button
            type="button"
            label="Restablecer"
            class="guardarRegistro"
            @click="resetPassword"
          />
        </div>
      </p-dialog>
    </div>
  </div>
</template>

<script>
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  components: {
    'p-input-text': InputText,
    'p-password': Password,
    'p-button': Button,
    'p-dialog': Dialog
  },
  data () {
    return {
      usernameLogin: '',
      passwordLogin: '',
      usernameRegister: '',
      passwordRegister: '',
      visible: null,
      showResetPasswordDialog: false,
      resetUsername: '',
      recoveryCode: '',
      newPassword: ''
    }
  },
  created () {
    this.visible = false
  },
  methods: {
    ...mapActions(['registerUser', 'loginUser']),
    register () {
      const { usernameRegister, passwordRegister } = this
      this.$store.dispatch('registerUser', { username: usernameRegister, password: passwordRegister })
        .then((newUser) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            html: `
          <p>Usuario registrado correctamente.</p>
          <p><strong>Códigos de recuperación:</strong></p>
          <ul>
            ${newUser.recoveryCodes.map(code => `<li>${code}</li>`).join('')}
          </ul>
          <p><em>Guarda estos códigos en un lugar seguro.</em></p>
        `
          })
          this.visible = false
          this.clearVariables()
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.message
          })
        })
    },
    login () {
      const { usernameLogin, passwordLogin } = this
      this.loginUser({ username: usernameLogin, password: passwordLogin })
        .then(() => {
          this.clearVariables()
          Swal.fire({
            icon: 'success',
            title: 'Login exitoso',
            text: 'Usuario autenticado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.$router.push('/dashboard')
          }, 1300)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    clearVariables () {
      this.usernameLogin = ''
      this.passwordLogin = ''
      this.usernameRegister = ''
      this.passwordRegister = ''
    },
    resetPassword () {
      const { resetUsername, recoveryCode, newPassword } = this
      this.$store.dispatch('resetPassword', {
        username: resetUsername,
        recoveryCode,
        newPassword
      })
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Contraseña restablecida',
            text: 'Tu contraseña ha sido actualizada',
            showConfirmButton: false,
            timer: 1500
          })
          this.showResetPasswordDialog = false
          this.clearResetPasswordFields()
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.message
          })
        })
    },
    clearResetPasswordFields () {
      this.resetUsername = ''
      this.recoveryCode = ''
      this.newPassword = ''
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f9fc;
}

.login-card {
  width: 350px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.login-title {
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  color: #2e3e55;
}

.login-input {
  width: 100%;
  margin-bottom: 1rem;
}

.login-button {
  width: 50%;
  background-color: #007bff;
}

.register-button {
  width: 50%;
  display: flex;
  margin: auto;
  margin-top: 3px;
  background-color: #007bff;
}

.forgot-password-button {
  width: 50%;
  display: flex;
  margin: auto;
  margin-top: 3px;
  background-color: #007bff;
}

.text-link {
  color: #007bff;
  cursor: pointer;
  font-size: 0.9rem;
}
li {
  margin-top: 0.5rem;
  list-style-type: none;
}

.registerContainerButtons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.cancelarRegistro {
  background-color: #007bff;
}

.guardarRegistro {
  background-color: #007bff;
  margin-left: 1rem;
}
</style>
