<template>
    <div class="aMovie">
        <v-layout row wrap>
            <v-flex xs12>
                <p class="title">{{movie.title}}</p>   
            </v-flex>
            <v-flex xs12>
                <p>{{movie.year}}</p>
            </v-flex>
            <v-flex xs12>
                <p>{{movie.synopsys}}</p>
            </v-flex>
            <v-flex xs12>
                <v-btn color="red" v-on:click='btnClicked'>Supprimer</v-btn>
                <v-btn color="blue" v-on:click='btnEdit'>Modifier</v-btn>
                <v-btn color="green" v-on:click='btnEdit'>Afficher</v-btn>
            </v-flex>
        </v-layout>
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
