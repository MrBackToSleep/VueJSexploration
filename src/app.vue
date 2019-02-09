

<template>
<div>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>{{message}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-icon>search</v-icon><input type="text" v-model="search" placeholder="Rechercher un film"/>
        </v-toolbar-items>
    </v-toolbar>
    <v-container grid-list-md text-xs-center>
    <p class="headline">Nombre de films enregistrés : {{movies.length}}</p>
    

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:delbtn="false" v-on:btnclicked="del(index)"  v-bind:key="movie.title" v-bind:movie="movie">

        </movie-item>
    </ul>
    <v-flex xs12>
    <h2 class="headline">Ajouter un nouveau film</h2>
        <div class="addMovie">
            Titre : <br/>
            <input type="text" v-model="movie_to_add.title" /><br />
            Année de sortie :<br/>
            <input type="text" v-model="movie_to_add.year" /><br />
            Synopsis :<br/>
            <textarea v-model="movie_to_add.synopsys"></textarea><br />
            <v-btn color="green" v-on:click="newmovie2">Ajouter</v-btn>
        </div>
    </v-flex>
    </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: "VueJs : TheMovieCollection",
            movie_to_add: {},
            movie_to_edit: null,
            search: "",
            movies : [
                {
                    title: "L'étrange noël de M. Jack",
                    img: "https://images-na.ssl-images-amazon.com/images/I/514fgC2zAXL._SX340_BO1,204,203,200_.jpg",
                    year: 1994,
                    synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
                },
                {
                    title: "Interstellar",
                    img: "http://fr.web.img6.acsta.net/r_1920_1080/pictures/14/09/24/12/08/158828.jpg",
                    year: 2014,
                    synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
                }
            ]
        }
    },

    methods: {
        newmovie1: function() {
            this.movies.push({title:"New movie"})
        },
        newmovie2: function() {
            this.movies.push(this.movie_to_add)
            this.movie_to_add = {}
        },

        edit: function(movie) {
            this.movie_to_edit = movie
        },
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        },
        del(m) {this.movies.splice(m,1)}
    },

    created: function() {
        console.log("Created")
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>

