<script context="module">
    // Preload has a redirect function that we can use to protect private routes
    // Also preload has access to session object
    export function preload() {
        const userLoggedIn = false // Todo: add data from session or cookies.
        if(!userLoggedIn) return this.redirect(302, 'login');
    }
</script>