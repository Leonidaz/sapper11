<style>
    .spinner {
        border: 2px solid #d8d8d8;
        border-top: 2px solid #00d7a0;
        border-radius: 50%;
        animation: spin 1000ms linear infinite;
        width: 3rem;
        height: 3rem;
        display: block;
        margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

<div class="spinner"></div>