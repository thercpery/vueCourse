const RegistrationForm = {
    data() {
        return {
            addressSameChecked: true,
        }
    },
    props: ["items"],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input label="First Name" name="first-name" required type="text"></text-input>
            <text-input label="Last Name" name="last-name" required type="text"></text-input>
            <text-input label="Email" name="email" required type="email"></text-input>
            <text-input label="Password" name="password" required type="password"></text-input>
            <select-input label="Favourite Colour" name="color" :items="items"></select-input>

            <text-input label="Address" name="address" required type="text"></text-input>
            <text-input label="City/Town" name="city" required type="text"></text-input>
            <text-input label="Province" name="province" required type="text"></text-input>
            <text-input label="Zip/Postal" name="zip" required type="text"></text-input>

            <check-input v-on:click="addressSame" label="Mailing Address Same" checked="true" v-model="addressSameChecked"></check-input>

            <div v-if="addressSameChecked === false">
                <div class="mt-3">
                    <text-input label="Mailing Address" name="address2" type="text"></text-input>
                    <text-input label="Mailing City/Town" name="city2" type="text"></text-input>
                    <text-input label="Mailing Province" name="province2" type="text"></text-input>
                    <text-input label="Mailing Zip/Postal" name="zip2" type="text"></text-input>
                </div>
            </div>

            <check-input label="I agree to Terms and Conditions" required="true"></check-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    methods: {
        addressSame() {
            console.log("Address same fired");
            if (this.addressSameChecked) {
                console.log("Was checked on click");
                this.addressSameChecked = false;
            } else {
                console.log("was not checked on click")
                this.addressSameChecked = true;
            }
        },
    },
    components: {
        'text-input': TextInput,
        'select-input': SelectInput,
        'check-input': CheckInput,
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

