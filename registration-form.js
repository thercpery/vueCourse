const RegistrationForm = {
    props: [],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input label="First Name" name="first-name" required type="text"></text-input>
            <text-input label="Last Name" name="last-name" required type="text"></text-input>
            <text-input label="Email" name="email" required type="email"></text-input>
            <text-input label="Password" name="password" required type="password"></text-input>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    components: {
        'text-input': TextInput,
    },
    mounted() {
        (function () {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                  }
          
                  form.classList.add('was-validated')
                }, false)
              })
        })()
    }
};

