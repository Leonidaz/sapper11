<script>
    import ImageViewer from './ImageViewer.svelte';
    export let listing = {};
</script>

<style>
  .listing {
    width: calc(97% / 4);
    display: inline-block;
    vertical-align: top;
    margin-bottom: 1%;
  }
  .listing:nth-child(4n+2) {
    margin-left: 1%;
    margin-right: 1%;
  }
  .listing:nth-child(4n+3) {
    margin-right: 1%;
  }
  .listing .listing-header {
    padding-top: 75%;
    position: relative;
    border: 1px solid #d8d8d8;
    border-bottom: 0;
    background-color: whitesmoke;
  }
  .listing .listing-body {
    padding: 1rem;
    border: 1px solid #d8d8d8;
    border-top: 0;
    display: block;
  }
  .listing .listing-body a {
    text-decoration: none;
  }
  .listing .listing-body .listing-location h1, .listing .listing-body .listing-location h2 {
    text-transform: uppercase;
    margin: 0;
  }
  .listing .listing-body .listing-location h1 {
    font-size: 1rem;
    font-weight: 500;
    color: #404040;
    margin-bottom: 0.25rem;
  }
  .listing .listing-body .listing-location h2 {
    font-size: 0.9rem;
    font-weight: 300;
    color: #767676;
  }
  .listing .listing-body .listing-data {
    margin-top: 1rem;
  }
  .listing .listing-body .listing-data h1, .listing .listing-body .listing-data h2 {
    text-transform: uppercase;
    margin: 0;
  }
  .listing .listing-body .listing-data h1 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #404040;
    margin-bottom: 0.25rem;
  }
  .listing .listing-body .listing-data h2 {
    font-size: 0.8rem;
    font-weight: 300;
    color: #767676;
  }
</style>

<div class="listing">
    <div class="listing-header">
        <ImageViewer images={listing.images} />
    </div>
    <div class="listing-body">
        <a href={`/listing/${listing._id}`}>
            <div class="listing-location">
                <h1>{listing.address}</h1>
                <h2>{listing.area}, {listing.city}</h2>
            </div>
        </a>
        <div class="listing-data">
            <h1>{listing.price}</h1>
            <h2>{listing.details}</h2>
        </div>
    </div>
</div>