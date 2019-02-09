<template>
    <div>
        <!-- Contenu d'un item movie --> 
        <p>{{movie.title}}</p>
        <p>{{movie.year}}</p>
        <p>{{movie.synopsys}}</p>
        <button v-on:click='btnClicked'>X</button>
        <button v-on:click='btnEdit'>Edit</button>
    </div>
</template>
<script>
export default {
    props: ['movie'],
    methods: {
        btnClicked() {
            this.$emit('btnclicked')
        },
        btnEdit() {
            this.$emit('btnedit')
        },
    }
    
}
</script>
